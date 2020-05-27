import React, { useState } from 'react'
import { addSeconds, format } from 'date-fns'
import {
  ControlsWrapper,
  Time,
  Timeline,
  Volume,
  ElapsedTime,
  BufferedTime,
  VolumeIconWrapper,
  VolumeIcon,
  VolumeSliderWrapper,
  VolumeSlider,
} from './styles'

import volumeIcon from './volumeIcon.svg'

interface Props {
  setVolume: (volume: number) => void
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
  const [volume, setVolume] = useState()

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

  const handleVolumeChange = (e: any) => {
    console.log(e.target.value)
    setVolume(e.target.value)
    props.setVolume(e.target.value / 100)
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
      <Volume>
        <VolumeIconWrapper>
          <VolumeIcon src={volumeIcon} />
        </VolumeIconWrapper>

        <VolumeSliderWrapper>
          <VolumeSlider
            min="0"
            max="100"
            type="range"
            onChange={handleVolumeChange}
            value={volume}
          ></VolumeSlider>
        </VolumeSliderWrapper>
      </Volume>
    </ControlsWrapper>
  )
}
