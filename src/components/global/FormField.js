import React from 'react';

const FormField = props => {
  return (
    <div className={props.className}>
      <div className='error'>{props.error}</div>
      <input
        type={props.type}
        name={props.name}
        onChange={(e) => props.onChange(e)}
        value={props.value}
        id={props.id}
        placeholder={props.placeholder}>
      </input>
    </div>
  )
}

export default FormField;
