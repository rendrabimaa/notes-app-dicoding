import React, { useState } from 'react'

const Input = ({label, type, placeholder, name, style, onInputChange}) => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = event => {
    const value = event.target.value
    setInputValue(value)
    onInputChange(value)
  }

  return (
    <div>
        {label && <label for={name}>{ label }</label>}
        <input name={name} type={type} placeholder={placeholder} className={style} value={inputValue} onChange={handleInputChange}/>
    </div>
    
  )
}

export default Input