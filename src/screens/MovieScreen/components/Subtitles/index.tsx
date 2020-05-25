import React from 'react'
import { SubtitlesWrapper, SubtitlesText } from './styles'

interface Props {
  sub?: string
  play: () => void
  pause: () => void
  isFullscreen: boolean
}

export const Subtitles = (props: Props) => {
  const stopPropagation = (e: any) => {
    e.stopPropagation()
  }

  if (!props.sub) {
    return null
  }

  return (
    <SubtitlesWrapper
      isFullscreen={props.isFullscreen}
      onClick={stopPropagation}
      onMouseEnter={props.pause}
      onMouseLeave={props.play}
    >
      <SubtitlesText isFullscreen={props.isFullscreen}>
        {props.sub}
      </SubtitlesText>
    </SubtitlesWrapper>
  )
}
