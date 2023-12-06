import React from 'react'
import '../atomos/style/pantalla.css'

function Pantalla({ value }) {
  return (
    <div className='contenedor'>
      <input className='pantalla' type='textfield' name='ans' value={value} autoCapitalize='off' readOnly></input>
    </div>
  )
}

export default Pantalla




