import React from 'react'

export const MovieScreen = () => {
  return (
    <div>
      <video controls width="800" height="500">
        <source
          src="https://www1872.o0-4.com/token=AuB8u3K5VnH2Rm8YyYz2cQ/1590071396/94.180.0.0/29/c/4e/4b9421e7a1f208e0d8b110e54bbab4ec-360p.mp4"
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
