import styled from '@emotion/styled'

interface Fullscreen {
  isFullscreen: boolean
}

export const ControlsWrapper = styled.div<Fullscreen>`
position: absolute;
width: 100%;
height: 24px;
bottom: 0px;

display: flex;
justify-content: flex-start;
align-items: center;

cursor: auto;
background-color: rgba(0,0,0,0.75);
`

export const Time = styled.div<Fullscreen>`
width: 44px;
padding-left: 8px;
height: 100%;

display: flex;
justify-content: flex-start;
align-items: center;

color: #666666;
`

export const Timeline = styled.div`
flex: 1;
height: 100%;

display: flex;
justify-content: flex-start;
align-items: center;

background-color: #666666
`

interface TimelineProps {
  percent: number
}

export const ElapsedTime = styled.div<TimelineProps>`
height: 100%;
width: ${props => props.percent}%;

background-color: #87CEFA;
`

export const BufferedTime = styled.div<TimelineProps>`
height: 100%;
width: ${props => props.percent}%;

background-color: #FFFFFF;
`

export const Volume = styled.div`
width: 100px;
height: 100%;

position: relative;
padding-left: 24px;

display: flex;
justify-content: flex-start;
align-items: center;
`