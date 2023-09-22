import express from 'express'
import Joi from 'Joi'

import { retriveWords, filterWords } from './model'
const router = express.Router()

router.get('/', (req, res) => {
  try {
    const allWords = retriveWords()
    res.send(allWords)
  } catch (error) {
    console.log(error)
    return res.status(400).send({ error: 'Internal error' })
  }
})

router.post('/filteredBy', (req, res) => {
  const schema = Joi.object({
    letters: Joi.array().items(Joi.object({
      letter: Joi.string().required(),
      recurrence: Joi.number().allow(null)
    })),
  })

  const { error, value } = schema.validate(req.body)
  if (error) console.error({ error })

  const result = filterWords(value.letters)
  return res.send(result)
})

export default router