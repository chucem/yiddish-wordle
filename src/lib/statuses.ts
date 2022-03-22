import { solution } from './words'
import { ORTHOGRAPHY } from '../constants/orthography'
import { ORTHOGRAPHY_PATTERN } from './tokenizer'

export type CharStatus = 'absent' | 'present' | 'correct'

export type CharValue = string

let tr: { [key:string]: string } = {}
for (let i:number = 0; i < ORTHOGRAPHY.length; i++) {
  let KEYS: string[] = Object.keys(ORTHOGRAPHY[i])
  for(let j:number = 0; j < KEYS.length; j++) {
    tr[KEYS[j]] = ORTHOGRAPHY[i][KEYS[j]]
  }
}

export const getStatuses = (
  guesses: string[][]
): { [key: string]: CharStatus } => {
  const charObj: { [key: string]: CharStatus } = {}
  const solutionChars = solution.split(ORTHOGRAPHY_PATTERN).filter((i) => i).map((i) => tr[i])
  guesses.forEach((word) => {
    word = word.map((letter) => tr[letter])
    word.forEach((letter, i) => {
      if (!solutionChars.includes(letter)) {
        // make status absent
        return (charObj[letter] = 'absent')
      }

      if (letter === solutionChars[i]) {
        //make status correct
        return (charObj[letter] = 'correct')
      }

      if (charObj[letter] !== 'correct') {
        //make status present
        return (charObj[letter] = 'present')
      }
    })
  })

  return charObj
}

export const getGuessStatuses = (guess: string[]): CharStatus[] => {
  const splitSolution = solution.split(ORTHOGRAPHY_PATTERN).filter((i) => i).map((i) => tr[i])
  const splitGuess = guess.map((i) => tr[i])

  const solutionCharsTaken = splitSolution.map((_) => false)

  const statuses: CharStatus[] = Array.from(Array(guess.length))

  // handle all correct cases first
  splitGuess.forEach((letter, i) => {
    if (letter === splitSolution[i]) {
      statuses[i] = 'correct'
      solutionCharsTaken[i] = true
      return
    }
  })

  splitGuess.forEach((letter, i) => {
    if (statuses[i]) return

    if (!splitSolution.includes(letter)) {
      // handles the absent case
      statuses[i] = 'absent'
      return
    }

    // now we are left with "present"s
    const indexOfPresentChar = splitSolution.findIndex(
      (x, index) => x === tr[letter] && !solutionCharsTaken[index]
    )

    if (indexOfPresentChar > -1) {
      statuses[i] = 'present'
      solutionCharsTaken[indexOfPresentChar] = true
      return
    } else {
      statuses[i] = 'absent'
      return
    }
  })

  return statuses
}
