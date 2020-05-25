import React, { useState, useRef } from 'react'
import { Subtitles } from './components/Subtitles'
import { PlayerWrapper, PlayIcon, FullscreenIcon, Video } from './styles'
import playIcon from './playIcon.svg'
import fullscreenIcon from './fullscreenIcon.svg'

export const MovieScreen = () => {
  const ref = useRef<HTMLVideoElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [sub, setSub] = useState<string | undefined>()
  const [isTouched, setTouched] = useState(false)
  const [isHardPaused, setHardPaused] = useState(true)
  const [isFullscreen, setFullscreen] = useState(false)

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
          src="https://www1872.o0-4.com/token=vxNaogZ3cK2LpHhCx15Q5w/1590423743/94.180.0.0/29/c/4e/4b9421e7a1f208e0d8b110e54bbab4ec-360p.mp4"
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
    </PlayerWrapper>
  )
}
