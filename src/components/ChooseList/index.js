import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ChooseList = props => {
  const [isOneFocus, setIsOneFocus] = useState(true)

  return (
    <DivContainer>
      <Button
        onClick={() => {
          props.funcOne()
          setIsOneFocus(true)
        }}
        backgroundColor={isOneFocus ? '#f3d8c7' : 'transparent'}
      >
        {props.textOne}
      </Button>
      <Button
        onClick={() => {
          props.funcTwo()
          setIsOneFocus(false)
        }}
        backgroundColor={isOneFocus ? 'transparent' : '#f3d8c7'}
      >
        {props.textTwo}
      </Button>
    </DivContainer>
  )
}

ChooseList.propTypes = {
  funcOne: PropTypes.func,
  funcTwo: PropTypes.func,
  textOne: PropTypes.string,
  textTwo: PropTypes.string
}

const DivContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`
const Button = styled.button`
  background-color: ${props => props.backgroundColor};
  width: 30%;
  font-weight: bold;
  border-radius: 30px;
  border: none;
  padding: 5px 0;
  color: #39393a;
  &:focus {
    outline: none;
  }
`
export default ChooseList
