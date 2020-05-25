import React, { useState, useRef } from 'react'
import { Subtitles } from './components/Subtitles'
import { PlayerWrapper, PlayIcon } from './styles'
import playIcon from './playIcon.svg'

export const MovieScreen = () => {
  const ref = useRef<HTMLVideoElement>(null)
  const [sub, setSub] = useState<string | undefined>()
  const [isTouched, setTouched] = useState(false)
  const [isPaused, setPaused] = useState(true)

  const play = async () => {
    await ref.current?.play()

    const handleCueChange = function (this: TextTrack): void {
      setSub(this?.activeCues?.[0]?.text)
    }

    const subtitles = ref.current?.textTracks[0]

    if (subtitles) {
      subtitles.mode = 'hidden'
      subtitles.oncuechange = handleCueChange
    }

    setTouched(true)
    setPaused(false)
  }

  const pause = () => {
    ref.current?.pause()
    setPaused(true)
  }

  const togglePlay = () => {
    ref.current?.paused ? play() : pause()
  }

  return (
    <PlayerWrapper onClick={togglePlay}>
      <video width="800" height="500" ref={ref}>
        <source
          src="https://www1872.o0-4.com/token=YSwOG4wQ_4S42Om4Y8LvWw/1590349435/94.180.0.0/29/c/4e/4b9421e7a1f208e0d8b110e54bbab4ec-360p.mp4"
          type="video/mp4"
        ></source>
        <track
          label="English"
          kind="subtitles"
          src="./adventureTime.vtt"
          srcLang="en"
        ></track>
      </video>
      <Subtitles sub={sub} pause={pause} play={play} />
      {!isTouched && (
        <PlayIcon src={playIcon} width="800" height="500" alt="Play" />
      )}
    </PlayerWrapper>
  )
}
