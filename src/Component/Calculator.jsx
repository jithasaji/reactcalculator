import React, { useState } from 'react'
import './Calculator.css';
import { evaluate } from 'mathjs';

function Calculator() {
  const [input, setInput] = useState("")

  const handleCalculation = (value) => {
    if (value === "=") {
      try {
        const result = evaluate(input)
        setInput(result)
      } catch (err) {
        setInput('Error!')
      }
    }
    else if (value === "DEL") {
      setInput(input.slice(0, -1))
    }
    else if (value === "AC") {
      setInput("")
    }
    else {
      setInput(input + value)
    }
  }

  return (
    <div className='container'>
      <div className='section'>
        <div className='text'>
          <input readOnly type="text" value={input} name="txt" placeholder="0" />
        </div>
        <div className='number'>
          <div>
            <div class="button-style grey-bg" onClick={() => handleCalculation('AC')} >AC</div>
          </div>
          <div>
            <div class="button-style grey-bg" onClick={() => handleCalculation('%')}>%</div>
          </div>
          <div>
            <div class="button-style grey-bg" onClick={() => handleCalculation('DEL')}>DEL</div>
          </div>
          <div>
            <div class="button-style grey-bg" onClick={() => handleCalculation('/')}>/</div>
          </div>
          <div>
            <div class="button-style light-grey-bg" onClick={() => handleCalculation('7')}>7</div>
          </div>
          <div>
            <div class="button-style light-grey-bg" onClick={() => handleCalculation('8')}>8</div>
          </div>
          <div>
            <div class="button-style light-grey-bg" onClick={() => handleCalculation('9')}>9</div>
          </div>
          <div>
            <div class="button-style grey-bg" onClick={() => handleCalculation('')}>*</div>
          </div>
          <div>
            <div class="button-style light-grey-bg" onClick={() => handleCalculation('4')}>4</div>
          </div>
          <div>
            <div class="button-style light-grey-bg" onClick={() => handleCalculation('5')}>5</div>
          </div>
          <div>
            <div class="button-style light-grey-bg" onClick={() => handleCalculation('6')}>6</div>
          </div>
          <div>
            <div class="button-style grey-bg" onClick={() => handleCalculation('-')}>-</div>
          </div>
          <div>
            <div class="button-style light-grey-bg" onClick={() => handleCalculation('1')}>1</div>
          </div>
          <div>
            <div class="button-style light-grey-bg" onClick={() => handleCalculation('2')}>2</div>
          </div>
          <div>
            <div class="button-style light-grey-bg" onClick={() => handleCalculation('3')}>3</div>
          </div>
          <div>
            <div class="button-style grey-bg" onClick={() => handleCalculation('+')}>+</div>
          </div>

        </div>


        <div className='bottom-section'>


          <div>
            <div class="button-style light-grey-bg" onClick={() => handleCalculation('.')}>.</div>
          </div>
          <div>
            <div class="button-style light-grey-bg" onClick={() => handleCalculation('0')}>0</div>
          </div>
          <div>
            <div class="button-style2 light-grey-bg" style={{fontSize:'35px'}} onClick={() => handleCalculation('=')}>=</div>
          </div>
        

        </div>
      </div>
    </div>

  )
}

export default Calculator
