import React, { useState } from 'react'
import { addSeconds, format } from 'date-fns'
import { ControlsWrapper, Time, Timeline, Volume } from './styles'

interface Props {
  setVolume: () => void
  elapsedTime?: number // seconds
  duration?: number // seconds
  isFullscreen: boolean
}

const formatdTime = (seconds: number = 0) => {
  const helperDate = addSeconds(new Date(0), seconds)
  return format(helperDate, 'mm:ss')
}

export const Controls = (props: Props) => {
  return (
    <ControlsWrapper isFullscreen={props.isFullscreen}>
      <Time isFullscreen={props.isFullscreen}>
        {formatdTime(props.elapsedTime)}
      </Time>
      <Timeline />
      <Time isFullscreen={props.isFullscreen}>
        {formatdTime(props.duration)}
      </Time>
      <Volume />
    </ControlsWrapper>
  )
}
