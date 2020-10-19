import Express from 'express'
import 'express-async-errors'
import './database/connection'

import routes from './routes'
import path from 'path'
import errorHandler from './errors/handler'

import cors from 'cors'

const app = Express()

app.use(cors())

app.use(Express.json())

app.use(routes)

app.use('/uploads', Express.static(path.join(__dirname, '..', 'uploads')))

app.use(errorHandler)

app.listen(3333)