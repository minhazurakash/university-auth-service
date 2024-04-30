import cors from 'cors'
import express, { Application } from 'express'
const app: Application = express()

// cors and parser
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

export default app
