import React from 'react'
import './App.css';
import Calculator from './Component/Calculator';


function App() {
  return (
    <div>
      <Calculator />
    </div>
  )
}

export default App



// import React from 'react'
// import './CalculatorApp.css'

// function CalculatorApp() {
//   return (
//     <>
//       <div class="container">
//         <div class="calculator-section">
//           <div class="calculator-content">
//             <div class="calculator-content-padding">
//               <div class="top-section">
//                 <div class="top-time">9:41</div>
//                 <div class="top-notch"></div>

//                 <div></div>
//               </div>
//             </div>
//             <div class="calc-function">
//               <form action="" name="calc">
//                 <div class="answer-section">

//                   <input readonly id="answer" className="value calc-answer" type="text" name="txt" placeholder="0" />
//                 </div>
//                 <div class="number-section ">
                  /* <div>
                    <div class="button-style grey-bg" onClick="calc.txt.value=''">AC</div>
                  </div>
                  <div>
                    <div class="button-style grey-bg" onClick="calc.txt.value= calc.txt.value.substring(0, calc.txt.value.length-1)"><i class="fa-solid fa-delete-left" style={{ color: "#000000" }}></i></div>
                  </div>
                  <div>
                    <div class="button-style grey-bg" onClick="calc.txt.value+='%'">%</div>
                  </div>
                  <div>
                    <div class="button-style orange-bg">/</div>
                  </div>
                  <div>
                    <div class="button-style light-grey-bg" onClick="calc.txt.value+='7'">7</div>
                  </div>
                  <div>
                    <div class="button-style light-grey-bg" onClick="calc.txt.value+='8'">8</div>
                  </div>
                  <div>
                    <div class="button-style light-grey-bg" onClick="calc.txt.value+='9'">9</div>
                  </div>
                  <div>
                    <div class="button-style orange-bg" onClick="calc.txt.value+='*'">x</div>
                  </div>

                  <div>
                    <div class="button-style light-grey-bg" onClick="calc.txt.value+='4'">4</div>
                  </div>
                  <div>
                    <div class="button-style light-grey-bg" onClick="calc.txt.value+='5'">5</div>
                  </div>
                  <div>
                    <div class="button-style light-grey-bg" onClick="calc.txt.value+='6'">6</div>
                  </div>
                  <div>
                    <div class="button-style orange-bg" onClick="calc.txt.value+='-'">-</div>
                  </div>

                  <div>
                    <div class="button-style light-grey-bg" onClick="calc.txt.value+='1'">1</div>
                  </div>
                  <div>
                    <div class="button-style light-grey-bg" onClick="calc.txt.value+='2'">2</div>
                  </div>
                  <div>
                    <div class="button-style light-grey-bg" onClick="calc.txt.value+='3'">3</div>
                  </div>
                  <div>
                    <div class="button-style orange-bg" onClick="calc.txt.value+='+'"><i>+</i></div>
                  </div>
                </div>
 */

                /* <div class="number-section-bottom">

                  <div class="zero-style">
                    <div class="button-style2 light-grey-bg" onClick="calc.txt.value+='0'">0</div>
                  </div>
                  <div>
                    <div class="button-style light-grey-bg" onClick="calc.txt.value+='.'"><i>.</i></div>
                  </div>
                  <div>
                    <div class="button-style orange-bg"
                      onClick="calc.txt.value = eval(document.calc.txt.value)">
                      <i>=</i>
                    </div>
                  </div>



                </div>
              </form>

            </div>
            <div class="bottom-line-section">
              <div class="bottom-line"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CalculatorApp */
