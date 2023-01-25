import React, { useState } from 'react'
import './calc.css';

function MathCalc(props) {
  let [input,setInput] = useState("");
  const [result,setResult] = useState(0);
  const readValue = (value) => {
    switch(value) {
        case "clear":
            setInput("");
            break;
        case "mClear":
            setInput("");
            setResult(0);
            break;
        case "%":
            let x = input/100;
            setInput(x);
            break;
        case "=":
              let res = eval(input);
              setResult(res);
              break;
        case "bSpace":
                setInput(input.slice(0,-1));
                break;   
        default:
                  input +=value;
                  setInput(input);
                  break;
    }
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12 text-center'>
          <h3 className='display-3 text-secondary'>Math Calculator</h3>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-4 offset-md-2'>
          <div className='card'>
            <div className='card-header p-4'>
              <h6 className='display-6'> {input} </h6>
              <h3 className='display-3 text-end'> {result} </h3>
            </div>
            <div className='card-body'>
              <div className='btn-group mt-2 mb-2'>
                <button onClick={() => readValue("clear")} className='btn btn-danger'>C</button>
                <button onClick={() => readValue("mClear")} className='btn btn-dark'>M</button>
                <button onClick={() => readValue("%")} className='btn btn-info'>%</button>
                <button onClick={() => readValue("/")} className='btn btn-warning'>/</button>
                <button onClick={() => readValue("bSpace")} className='btn btn-dark'>BS</button>
              </div>
              <div className='btn-group mt-2 mb-2'>
                <button onClick={() => readValue("7")} className='btn btn-secondary'>7</button>
                <button onClick={() => readValue("8")} className='btn btn-secondary'>8</button>
                <button onClick={() => readValue("9")} className='btn btn-secondary'>9</button>
                <button onClick={() => readValue("*")} className='btn btn-warning'>*</button>
              </div>
              <div className='btn-group mt-2 mb-2'>
                <button onClick={() => readValue("4")} className='btn btn-secondary'>4</button>
                <button onClick={() => readValue("5")} className='btn btn-secondary'>5</button>
                <button onClick={() => readValue("6")} className='btn btn-secondary'>6</button>
                <button onClick={() => readValue("-")} className='btn btn-warning'>-</button>
              </div>
              <div className='btn-group mt-2 mb-2'>
                <button onClick={() => readValue("1")} className='btn btn-secondary'>1</button>
                <button onClick={() => readValue("2")} className='btn btn-secondary'>2</button>
                <button onClick={() => readValue("3")} className='btn btn-secondary'>3</button>
                <button onClick={() => readValue("+")} className='btn btn-success'>+</button>
              </div>
              <div className='btn-group mt-2 mb-2'>
                <button onClick={() => readValue("0")} className='btn btn-secondary'>0</button>
                <button onClick={() => readValue("00")} className='btn btn-secondary'>00</button>
                <button onClick={() => readValue(".")} className='btn btn-dark'>.</button>
                <button onClick={() => readValue("=")} className='btn btn-success'>=</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MathCalc