import cors from 'cors'
import express, { Application } from 'express'
import userRouter from './app/modules/users/user.route'
const app: Application = express()

// cors and parser
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// applications route
app.use('/api/v1/users/', userRouter)

app.get('/', async (req, res) => {
  res.send('Hello World!')
})

export default app
