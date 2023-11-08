import React from 'react'

const Input = ({label, type, placeholder, name, style, styleLabel, onValueChange, value, isContentOfNote = false, cols='', rows=''}) => {
  return (
    <>
        {label && <label htmlFor={name} className={styleLabel}>{ label }</label>}
        {isContentOfNote ? 
        <textarea name={name} type={type} placeholder={placeholder} className={style} cols={cols} rows={rows} onChange={onValueChange} value={value}/> :
        <input name={name} type={type} placeholder={placeholder} className={style} onChange={onValueChange} value={value}/>
        }
    </>
    
  )
}

export default Input