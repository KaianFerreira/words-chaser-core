import fs from 'fs'
import path from 'path'

export const retriveWords = () => {
  const assetsPath = path.resolve('src/assets')
  const filePath = path.join(assetsPath, 'words.txt')

  let words = fs.readFileSync(filePath, { encoding: 'utf8'})
  words = words.split('\n')

  return words
}

export const filterWords = (letters) => {
  const matchedWords = []
  const allWords = retriveWords()
  const onlyLetters = letters.map(letterObj => letterObj.letter)

  for (let i = 0; i < allWords.length; i++) {
    const currentWord = String(allWords[i]).toLowerCase()
    let letterMatchCount = 0

    currentWord.split('').forEach((letter, index, wordArray) => {
      if (onlyLetters.includes(letter)) {
        const currentLetter = letters.find(anagramLetter => anagramLetter.letter === letter)
        const qtdLetterOnWord = wordArray
          .filter(splittedWord => splittedWord === currentLetter.letter).length

        if (currentLetter.recurrence) {
          if (qtdLetterOnWord <= currentLetter.recurrence) letterMatchCount++
        } else letterMatchCount++
      }
    })

    if (letterMatchCount === currentWord.length) matchedWords.push(currentWord)
  }

  return matchedWords
}