import React from 'react'
import PropTypes from 'prop-types'

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

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  style: PropTypes.string,
  styleLabel: PropTypes.string,
  onValueChange: PropTypes.func,
  value: PropTypes.string,
  isContentOfNote: PropTypes.bool,
  cols: PropTypes.string,
  rows: PropTypes.string,
}

export default Input