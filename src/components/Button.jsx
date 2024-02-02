import React from 'react'

const Button = ({onClickHandler,value,title}) => {
  return (
   <button className='btns' value={value} onClick={onClickHandler}>{title}</button>
  )
}

export default Button
