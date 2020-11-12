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
        color={isOneFocus ? '#f3d8c7' : '#39393a'}
        backgroundColor={isOneFocus ? '#39393a' : '#f3d8c7'}
      >
        {props.textOne}
      </Button>
      <Button
        onClick={() => {
          props.funcTwo()
          setIsOneFocus(false)
        }}
        color={isOneFocus ? '#39393a' : '#f3d8c7'}
        backgroundColor={isOneFocus ? '#f3d8c7' : '#39393a'}
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
  width: 40%;
  border: none;
  color: ${props => props.color};
  &:focus {
    outline: none;
  }
`
export default ChooseList
