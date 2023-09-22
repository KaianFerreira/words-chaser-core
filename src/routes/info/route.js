import express from 'express'
import packageJson from '../../../package.json'

const router = express.Router()

router.get('/', (req, res) => {
  try {
    const configs = {
      name: packageJson.name,
      version: packageJson.version,
      env: process.env.ENV
    }

    return res.send(configs)
  } catch (error) {
    console.log(error)
    return res.status(400).send({ error: 'Internal error' })
  }
})

export default router