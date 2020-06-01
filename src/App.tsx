import React, { useState } from 'react'
import { MovieScreen } from './screens/MovieScreen'

import { Global, css } from '@emotion/core'
import emotionNormalize from 'emotion-normalize'
import { SrcInput } from './components/SrcInput'

export const App = () => {
  const [src, setSrc] = useState('http://www.hamatata.com/page/data/shrek.webm')
  const [subSrc, setSubSrc] = useState('./adventureTime.vtt')

  return (
    <>
      <Global
        styles={css`
          ${emotionNormalize}
        `}
      />
      <MovieScreen src={src} subSrc={subSrc} />

      <SrcInput onButtonClick={setSrc} />
      <SrcInput onButtonClick={setSubSrc} />
    </>
  )
}
