import React from 'react'
import "../atomos/style/boton.css"


function Boton({clickHandle,accion,changeHandle}) {
  
  return (
  <div>
    <button className='boton'type="button" onClick={clickHandle} onChange={changeHandle}> {accion} </button>
  </div>
  )
}

export default Boton;