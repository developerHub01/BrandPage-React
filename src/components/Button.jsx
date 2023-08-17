import React from 'react'
import './styles/ButtonStyles.css'
const Button = ({name, btnType}) => {
  return (
    <button className={btnType}>{name}</button>
  )
}

export default Button
