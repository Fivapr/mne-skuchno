import React, { useState } from 'react'
import { addSeconds, format } from 'date-fns'
import {
  ControlsWrapper,
  Time,
  Timeline,
  Volume,
  ElapsedTime,
  BufferedTime,
} from './styles'

interface Props {
  setVolume: () => void
  elapsedTime?: number // seconds
  duration?: number // seconds
  isFullscreen: boolean
  bufferedTime?: number // seconds
}

const formatTime = (seconds: number = 0) => {
  const helperDate = addSeconds(new Date(0), seconds)
  return format(helperDate, 'mm:ss')
}

export const Controls = (props: Props) => {
  const stopPropagation = (e: any) => {
    e.stopPropagation()
  }

  let elapsedPercent = 0
  let bufferedPercent = 0

  if (props.elapsedTime && props.duration && props.bufferedTime) {
    elapsedPercent = (props?.elapsedTime / props?.duration) * 100
    bufferedPercent =
      (props?.bufferedTime / props?.duration) * 100 - elapsedPercent
  }

  return (
    <ControlsWrapper
      onClick={stopPropagation}
      isFullscreen={props.isFullscreen}
    >
      <Time isFullscreen={props.isFullscreen}>
        {formatTime(props.elapsedTime)}
      </Time>
      <Timeline>
        <ElapsedTime percent={elapsedPercent} />
        <BufferedTime percent={bufferedPercent} />
      </Timeline>
      <Time isFullscreen={props.isFullscreen}>
        {formatTime(props.duration)}
      </Time>
      <Volume />
    </ControlsWrapper>
  )
}
