import React, { useState, useRef } from 'react'
import { PlayerWrapper, Subtitles, SubtitlesText } from './styles'

export const MovieScreen = () => {
  const ref = useRef<HTMLVideoElement>(null)
  const [sub, setSub] = useState<string | undefined>()
  const [isPaused, setPaused] = useState(ref.current?.paused)

  const handlePlay = async () => {
    await ref.current?.play()

    const handleCueChange = function (this: TextTrack): void {
      setSub(this?.activeCues?.[0]?.text)
    }

    const subtitles = ref.current?.textTracks[0]

    if (subtitles) {
      subtitles.mode = 'hidden'
      subtitles.oncuechange = handleCueChange
    }
  }

  const handlePause = () => {
    ref.current?.pause()
    setPaused(true)
  }

  const togglePlay = () => {
    ref.current?.paused ? handlePlay() : handlePause()
    setPaused(false)
  }

  return (
    <PlayerWrapper onClick={togglePlay}>
      <video width="800" height="500" ref={ref}>
        <source
          src="https://www177.o0-1.com/token=-uGmfECvjpTWyJlZOEGA2g/1590274442/94.180.0.0/29/c/4e/4b9421e7a1f208e0d8b110e54bbab4ec-360p.mp4"
          type="video/mp4"
        ></source>
        <track
          label="English"
          kind="subtitles"
          src="./adventureTime.vtt"
          srcLang="en"
        ></track>
      </video>
      {sub && (
        <Subtitles>
          <SubtitlesText>{sub}</SubtitlesText>
        </Subtitles>
      )}
    </PlayerWrapper>
  )
}
