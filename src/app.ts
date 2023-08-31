import 'express-async-errors'
import 'reflect-metadata'
import express from 'express'
import { userRoutes } from './routes/users.routes'
import { handleError } from './middlewares/handleErrors'
import { loginRoute } from './routes/login.routes'
import { categoriesRoutes } from './routes/categories.routes'
import { realEstatesRoutes } from './routes/realEstates.routes'

const app = express()
app.use(express.json())

app.use('/users', userRoutes)
app.use('/login', loginRoute)
app.use('/categories', categoriesRoutes)
app.use('/realEstate', realEstatesRoutes)

app.use(handleError)

export default app;
