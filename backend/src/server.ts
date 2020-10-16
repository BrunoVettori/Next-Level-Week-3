import Express from 'express'
import { getRepository } from 'typeorm'
import Orphanages from './models/Orphanage'

import './database/connection'
import Orphanage from './models/Orphanage'

const app = Express();

app.use(Express.json());

app.post('/orphanages', async (request, response) => {
    console.log('body',request.body);
    const {
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends
    } = request.body

    const orphanagesRepository = getRepository(Orphanages);

    const orphanage = orphanagesRepository.create({
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends
    })

    await orphanagesRepository.save(orphanage)

    return response.status(201).json(orphanage)
})

app.listen(3333)