import {Request, Response} from "express"
import {SettingsService} from "../services/SettingsService"
import {getCustomRepository} from "typeorm";

class SettingsController {
    async create(request: Request, response: Response) {
        const {chat, username} = request.body

        const settingsService = new SettingsService();

        try {
            const settings = await settingsService.create({chat, username})
            return response.json(settings)
        } catch (err) {
            return response.status(400).json({
                message: err.message
            })
        }
    }

    async findByUsername(request: Request, response: Response){
        const {username} = request.params
        const { chat } = request.params

        const settingsService = new SettingsService()

        const setting = await settingsService.findByUsername(username)

        return response.json
    }

}

export {SettingsController}