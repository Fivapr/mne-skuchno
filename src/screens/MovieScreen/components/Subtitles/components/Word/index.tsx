import React from 'react'
import { StyledWord } from './styles'

interface Props {
  word: string
  context?: string
}

export const Word = (props: Props) => {
  // const notEnglishChars = /[^a-zA-Z0-9 !?'"-.]+/
  const lettersOnly = /[^a-zA-Z]+/

  return (
    <StyledWord
      onClick={() => {
        console.log({
          word: props.word.replace(lettersOnly, ''),
          context: props.context,
        })
      }}
    >
      {props.word}
    </StyledWord>
  )
}
