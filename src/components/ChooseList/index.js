import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ChooseList = props => {
  return (
    <DivContainer>
      <Button onClick={props.funcOne}>{props.textOne}</Button>
      <Button onClick={props.funcTwo}>{props.textTwo}</Button>
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
`
const Button = styled.button`
  background-color: #f3d8c7;
  width: 40%;
  border: none;
  color: #39393a;
  &:hover {
    background-color: #39393a;
    color: #f3d8c7;
  }
  &:focus {
    outline: none;
  }
`
export default ChooseList
