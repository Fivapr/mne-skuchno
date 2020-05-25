import React from 'react'
import { SubtitlesWrapper, SubtitlesText } from './styles'

interface Props {
  sub?: string
  play: () => void
  pause: () => void
}

export const Subtitles = (props: Props) => {
  if (!props.sub) {
    return null
  }

  return (
    <SubtitlesWrapper onMouseEnter={props.pause} onMouseLeave={props.play}>
      <SubtitlesText>{props.sub}</SubtitlesText>
    </SubtitlesWrapper>
  )
}
