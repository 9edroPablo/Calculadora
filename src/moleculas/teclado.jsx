import React from 'react'
import Boton from '../atomos/boton'
import "../moleculas/style/teclado.css"
import { evaluate } from 'mathjs'
function Teclado({ setState, state }) {

  const handleClickCero = () => {
    setState({
      input: state.input == '0' ? '0' : state.input + '0'
    })
    console.log(state.input)
  }
  const handleClickOne = () => {
    setState({
      input: state.input == '0' ? '1' : state.input + '1'
    })
    console.log(state.input)
  }
  const handleClickTwo = () => {
    setState({
      input: state.input == '0' ? '2' : state.input + '2'
    })
    console.log(state.input)
  }
  const handleClickThree = () => {
    setState({
      input: state.input == '0' ? '3' : state.input + '3'
    })
    console.log(state.input)
  }
  const handleClickFour = () => {
    setState({
      input: state.input == '0' ? '4' : state.input + '4'
    })
    console.log(state.input)
  }
  const handleClickFive = () => {
    setState({
      input: state.input == '0' ? '5' : state.input + '5'
    })
    console.log(state.input)
  }
  const handleClickSix = () => {
    setState({
      input: state.input == '0' ? '6' : state.input + '6'
    })
    console.log(state.input)
  }
  const handleClickSeven = () => {
    setState({
      input: state.input == '0' ? '7' : state.input + '7'
    })
    console.log(state.input)
  }
  const handleClickEight = () => {
    setState({
      input: state.input == '0' ? '8' : state.input + '8'
    })
    console.log(state.input)
  }
  const handleClickNine = () => {
    setState({
      input: state.input == '0' ? '9' : state.input + '9'
    })
    console.log(state.input)
  }
  const handleClickSum = () => {
    setState({
      input: state.input != '' && state.input[state.input.length - 1] != '-' && state.input[state.input.length - 1] != '*' && state.input[state.input.length - 1] != '/' && state.input[state.input.length - 1] != '+' ? state.input + '+' : state.input
    })
    console.log(state.input)
  }
  const handleClickSubtract = () => {
    setState({
      input: state.input != '' && state.input[state.input.length - 1] != '-' && state.input[state.input.length - 1] != '*' && state.input[state.input.length - 1] != '/' && state.input[state.input.length - 1] != '+' ? state.input + '-' : state.input
    })
    console.log(state.input)
  }
  const handleClickMultiply = () => {
    setState({
      input: state.input != '' && state.input[state.input.length - 1] != '-' && state.input[state.input.length - 1] != '*' && state.input[state.input.length - 1] != '/' && state.input[state.input.length - 1] != '+' ? state.input + '*' : state.input
    })
    console.log(state.input)
  }
  const handleClickDivide = () => {
    setState({
      input: state.input != '' && state.input[state.input.length - 1] != '-' && state.input[state.input.length - 1] != '*' && state.input[state.input.length - 1] != '/' && state.input[state.input.length - 1] != '+' ? state.input + '/' : state.input
    })
    console.log(state.input)
  }
  const handleClickEqual = () => {
    try {
      if (state.input.includes("sqrt")) {
        state.input += ")"
        setState({
          input: evaluate(state.input)
        })
      } else {
        setState({
          input: evaluate(state.input)
        })
      }
    } catch (e) {
      console.log(e)
    }
  }
  const handleClickClear = () => {
    setState({
      input: '0'
    })
    console.log(state.input)
  }
  const handleClickElevate = () => {
    setState({
      input: state.input != '' && state.input[state.input.length - 1] != '-' && state.input[state.input.length - 1] != '*' && state.input[state.input.length - 1] != '/' && state.input[state.input.length - 1] != '+' && state.input[state.input.length - 1] != "^" && state.input[state.input.length - 1] != "%" ? state.input + '^' : state.input
    })
  }
  const handleClickSqrt = () => {
    if (state.input[0] === "0") {
      setState({
        input: state.input != '' && state.input[state.input.length - 1] != '-' && state.input[state.input.length - 1] != '*' && state.input[state.input.length - 1] != '/' && state.input[state.input.length - 1] != '+' && state.input[state.input.length - 1] != "(" && state.input[state.input.length - 1] != "%" && state.input[state.input.length - 1] != "^" ? state.input = 'sqrt(' : state.input
      })
    } else {
      setState({
        input: state.input != '' && state.input[state.input.length - 1] != '-' && state.input[state.input.length - 1] != '*' && state.input[state.input.length - 1] != '/' && state.input[state.input.length - 1] != '+' && state.input[state.input.length - 1] != "(" && state.input[state.input.length - 1] != "%" && state.input[state.input.length - 1] != "^" ? state.input + 'sqrt(' : state.input
      })
    }
  }
  const handleClickPercentage = () => {
    setState({
      input: state.input != '' && state.input[state.input.length - 1] != '-' && state.input[state.input.length - 1] != '*' && state.input[state.input.length - 1] != '/' && state.input[state.input.length - 1] != '+' && state.input[state.input.length - 1] != "%" && state.input[state.input.length - 1] != "sqrt" && state.input[state.input.length - 1] != "^" ? state.input + '%' : state.input
    })
  }
  const handleClickDeleteOne = () => {
    setState({
      input: state.input.slice(0, -1)
    })
  }

  return (
    <div className='contenedor'>
      <div className='teclado'>
        <div className='alinear' >
          <div className='linea'>
            <Boton accion="^" clickHandle={handleClickElevate} />
            <Boton accion="%" clickHandle={handleClickPercentage} />
            <Boton accion="√" clickHandle={handleClickSqrt} />
          </div>
        </div>
        <div className='alinear' >
          <div className='linea'>
            <Boton accion="x" clickHandle={handleClickMultiply} />
            <Boton accion="÷" clickHandle={handleClickDivide} />
            <Boton accion="0" clickHandle={handleClickCero} />
          </div>

        </div>
        <div className='alinear' >
          <div className='linea'>
            <Boton accion="7" clickHandle={handleClickSeven} />
            <Boton accion="4" clickHandle={handleClickFour} />
            <Boton accion="1" clickHandle={handleClickOne} />
          </div>
        </div>

        <div className='alinear' >
          <div className='linea'>
            <Boton accion="8" clickHandle={handleClickEight} />
            <Boton accion="5" clickHandle={handleClickFive} />
            <Boton accion="2" clickHandle={handleClickTwo} />
          </div>

        </div>


        <div className='linea'>
          <Boton accion="AC" clickHandle={handleClickClear} />
          <Boton accion="9" clickHandle={handleClickNine} />
          <Boton accion="6" clickHandle={handleClickSix} />
          <Boton accion="3" clickHandle={handleClickThree} />
        </div>
        <div className='linea'>
          <Boton accion="C" clickHandle={handleClickDeleteOne}/>
          <Boton accion="+" clickHandle={handleClickSum} />
          <Boton accion="-" clickHandle={handleClickSubtract} />
          <Boton accion="=" clickHandle={handleClickEqual} />
        </div>
      </div>
    </div>
  )
}

export default Teclado