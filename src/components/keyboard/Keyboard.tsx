import { KeyValue } from '../../lib/keyboard'
import { getStatuses } from '../../lib/statuses'
import { Key } from './Key'
import { useEffect } from 'react'
import { ORTHOGRAPHY } from '../../constants/orthography'
import { BackspaceIcon } from '@heroicons/react/outline'
import { CheckCircleIcon } from '@heroicons/react/outline'

type Props = {
  onChar: (value: string) => void
  onDelete: () => void
  onEnter: () => void
  guesses: string[][]
}

export const Keyboard = ({ onChar, onDelete, onEnter, guesses }: Props) => {
  const charStatuses = getStatuses(guesses)
  const onClick = (value: KeyValue) => {
    if (value === 'ENTER') {
      onEnter()
    } else if (value === 'DELETE') {
      onDelete()
    } else {
      onChar(value)
    }
  }

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
        onEnter()
      } else if (e.code === 'Backspace') {
        onDelete()
      }
      // Take away key event listener for now
      // else {
      //   const key = e.key.toUpperCase()
      //   if (key.length === 1 && key >= 'A' && key <= 'Z') {
      //     onChar(key)
      //   }
      // }
    }
    window.addEventListener('keyup', listener)
    return () => {
      window.removeEventListener('keyup', listener)
    }
  }, [onEnter, onDelete, onChar])

  return (
    <div style={{marginRight:"10px",marginLeft:"10px"}} dir="ltr">
      <div className="flex justify-center mb-1">
        {Object.keys(ORTHOGRAPHY[0]).map((char:string) => (
            <Key value={char} onClick={onClick} status={charStatuses[ORTHOGRAPHY[0][char]]} />
        ))}
      </div>
      <div className="flex justify-center mb-1">
        {Object.keys(ORTHOGRAPHY[1]).map((char:string) => (
            <Key value={char} onClick={onClick} status={charStatuses[ORTHOGRAPHY[1][char]]} />
        ))}
      </div>
      <div className="flex justify-center mb-1">
        {Object.keys(ORTHOGRAPHY[2]).map((char:string) => (
            <Key value={char} onClick={onClick} status={charStatuses[ORTHOGRAPHY[2][char]]} />
        ))}
      </div>
      <div className="flex justify-center">
        <Key width={60} value="ENTER" onClick={onClick}>
          <CheckCircleIcon className="h-6 w-6 cursor-pointer"/>
        </Key>
        {Object.keys(ORTHOGRAPHY[3]).map((char:string) => (
            <Key value={char} onClick={onClick} status={charStatuses[ORTHOGRAPHY[3][char]]} />
        ))}
        <Key width={60} value="DELETE" onClick={onClick}>
          <BackspaceIcon className="h-6 w-6 cursor-pointer"/>
        </Key>
      </div>
    </div>
  )
}
