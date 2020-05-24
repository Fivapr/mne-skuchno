import styled from '@emotion/styled'

export const PlayerWrapper = styled.div`
cursor: pointer;
width: 800px;
height 500px;
position: relative;
`

export const Subtitles = styled.div`
position: absolute;
width: 100%;
height: 50px;
bottom: 50px;
display: flex;
justify-content: center;
align-items: center;
`

export const SubtitlesText = styled.div`
width: 90%; 

display: flex;
justify-content: center;
align-items: center;
padding: 8px;

background-color: rgba(0,0,0,0.5);
color: orange;
font-size: 20px;
`