import React, { useState } from 'react'

interface Props {
  onButtonClick: (value: string) => void
}

export const SrcInput = (props: Props) => {
  const [src, setSrc] = useState('')

  const handleClick = () => {
    props.onButtonClick(src)
  }

  return (
    <>
      <input
        value={src}
        onChange={(e: any) => {
          setSrc(e.target.value)
        }}
      />
      <button onClick={handleClick}>set Src</button>
    </>
  )
}
