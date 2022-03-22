import { ORTHOGRAPHY } from '../constants/orthography'

let chars: string[] = []
for (let i:number = 0; i < ORTHOGRAPHY.length; i++) {
  let KEYS: string[] = Object.keys(ORTHOGRAPHY[i])
  for(let j:number = 0; j < KEYS.length; j++) {
    chars.push(KEYS[j])
  }
}

export const ORTHOGRAPHY_PATTERN = new RegExp(
  '(' + chars.join('|') + ')',
  'g'
)
