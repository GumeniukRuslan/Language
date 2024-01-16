import { StyledProgressBar } from "./ProgressBar"

const ProgressBar = ({percent}) => {
  
  return (
    <StyledProgressBar percent={percent}>
      <p>
        {`${percent}%`}
      </p>
    </StyledProgressBar>
  )
}

export default ProgressBar