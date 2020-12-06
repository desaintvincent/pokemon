import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Loader = () => {
  return (
    <Container>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        version='1.0'
        width='2rem'
        height='2rem'
        viewBox='0 0 128 128'
      >
        <g>
          <path
            d='M64 9.75A54.25 54.25 0 0 0 9.75 64H0a64 64 0 0 1 128 0h-9.75A54.25 54.25 0 0 0 64 9.75z'
            fill='#03ccb9'
            fillOpacity='1'
          />
          <animateTransform
            attributeName='transform'
            type='rotate'
            from='0 64 64'
            to='360 64 64'
            dur='1000ms'
            repeatCount='indefinite'
          />
        </g>
      </svg>
    </Container>
  )
}

export default Loader
