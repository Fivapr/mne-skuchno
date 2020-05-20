import React from 'react'

export const MovieScreen = () => {
  return (
    <div>
      <video controls width="800" height="500">
        <source
          src="https://www586.o0-2.com/token=Nx_EH3_afWfpSjaleuWQFA/1590013165/94.180.0.0/29/c/4e/4b9421e7a1f208e0d8b110e54bbab4ec-360p.mp4"
          type="video/mp4"
        ></source>
        <track
          label="English"
          kind="subtitles"
          src="./adventureTime.vtt"
          srcLang="en"
        ></track>
      </video>
    </div>
  )
}
