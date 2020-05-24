import React from 'react'
import { SubtitlesWrapper, SubtitlesText } from './styles'

interface Props {
  sub?: string
}

export const Subtitles = (props: Props) => {
  if (!props.sub) {
    return null
  }

  return (
    <SubtitlesWrapper>
      <SubtitlesText>{props.sub}</SubtitlesText>
    </SubtitlesWrapper>
  )
}
