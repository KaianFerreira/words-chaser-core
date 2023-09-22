import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

// routes
import words from './routes/words/route'
import info from './routes/info/route'

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/ping', (req, res) => {
  return res.send('pong')
})

app.use('/words', words)
app.use('/info', info)

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`)
})