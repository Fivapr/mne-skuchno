import React, { useState, useRef } from 'react'
import { Subtitles } from './components/Subtitles'
import { PlayerWrapper, PlayIcon, FullscreenIcon, Video } from './styles'
import playIcon from './playIcon.svg'
import fullscreenIcon from './fullscreenIcon.svg'
import { Controls } from './components/Controls'

export const MovieScreen = () => {
  const ref = useRef<HTMLVideoElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [sub, setSub] = useState<string | undefined>()
  const [isTouched, setTouched] = useState(false)
  const [isHardPaused, setHardPaused] = useState(true)
  const [isFullscreen, setFullscreen] = useState(false)
  const [time, setTime] = useState<number | undefined>(0)
  const [duration, setDuration] = useState<number | undefined>(0)
  const [bufferedTime, setBufferedTime] = useState<number | undefined>(0)

  const showSubtitles = () => {
    const subtitles = ref.current?.textTracks[0]

    if (subtitles) {
      const handleCueChange = function (this: TextTrack): void {
        setSub(this?.activeCues?.[0]?.text)
      }

      subtitles.mode = 'hidden'
      subtitles.oncuechange = handleCueChange
    }
  }

  const play = async () => {
    await ref.current?.play()

    // const time = ref.current?.currentTime

    if (ref.current) {
      ref.current.ontimeupdate = function (this, e) {
        setTime(ref.current?.currentTime)
        setBufferedTime(ref.current?.buffered.end(0))
      }

      ref.current.onsuspend = function (this, e) {
        console.log(e)
      }

      const duration = ref.current?.duration
      setDuration(duration)
    }

    showSubtitles()
    setTouched(true)
    setHardPaused(false)
  }

  const pause = () => {
    ref.current?.pause()
    setHardPaused(true)
  }

  const subtitleEnterPause = () => {
    if (!isHardPaused) {
      ref.current?.pause()
    }
  }

  const subtitleLeavePlay = () => {
    if (!isHardPaused) {
      ref.current?.play()
    }
  }

  const togglePlay = () => {
    ref.current?.paused ? play() : pause()
  }

  const toggleFullscreen = (e: any) => {
    e.stopPropagation()

    if (isFullscreen) {
      document.exitFullscreen()
      setFullscreen(false)
    } else {
      wrapperRef.current?.requestFullscreen()
      setFullscreen(true)
    }
  }

  return (
    <PlayerWrapper
      isFullscreen={isFullscreen}
      onClick={togglePlay}
      ref={wrapperRef}
    >
      {!isTouched && <PlayIcon src={playIcon} alt="Play" />}
      {isTouched && (
        <FullscreenIcon
          src={fullscreenIcon}
          alt="Fullscreen"
          isFullscreen={isFullscreen}
          onClick={toggleFullscreen}
        />
      )}
      <Video isFullscreen={isFullscreen} ref={ref}>
        <source
          src="https://www1030.o0-3.com/token=XUZEggK32flLJKmxIR9kCA/1590519243/94.180.0.0/29/c/4e/4b9421e7a1f208e0d8b110e54bbab4ec-360p.mp4"
          type="video/mp4"
        ></source>
        <track
          label="English"
          kind="subtitles"
          src="./adventureTime.vtt"
          srcLang="en"
        ></track>
      </Video>
      <Subtitles
        isFullscreen={isFullscreen}
        sub={sub}
        pause={subtitleEnterPause}
        play={subtitleLeavePlay}
      />
      {isTouched && (
        <Controls
          elapsedTime={time}
          duration={duration}
          isFullscreen={isFullscreen}
          setVolume={() => {}}
          bufferedTime={bufferedTime}
        />
      )}
    </PlayerWrapper>
  )
}
