import React from 'react'
import { MovieScreen } from './screens/MovieScreen'

import { Global, css } from '@emotion/core'
import emotionNormalize from 'emotion-normalize'

function App() {
  return (
    <>
      <Global
        styles={css`
          ${emotionNormalize}
        `}
      />
      <MovieScreen />
    </>
  )
}

export default App
