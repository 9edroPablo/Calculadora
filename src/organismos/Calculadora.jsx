import React from 'react'
import Pantalla from "../atomos/pantalla"
import Teclado from '../moleculas/Teclado'
import { useState} from 'react'
function Calculadora() {
    const [state, setState] = useState({ input: "0" })
  return (
    <div>
        <Pantalla value={state.input}/>
        <Teclado setState= {setState} state={state}/>
    </div>
  )
}

export default Calculadora