// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments. 
import * as React from "https://cdn.skypack.dev/react@17.0.1";
import {useState, useEffect} from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

const buttons = [
  {name: "clear",
  symbol: "C", 
  type: "unary"},
  {name: "square-root",
  symbol: String.fromCharCode(8730), 
  type: "binary"},
  {name: "plus-minus",
  symbol: String.fromCharCode(177),
  type: "binary"},
  {name: "percent",
  symbol: String.fromCharCode(37), 
  type: "binary"},
  {name: "seven",
  symbol: "7", 
  type: "unary"},
  {name: "eight",
  symbol: "8",
  type: "unary"},
  {name: "nine",
  symbol: "9", 
  type: "unary"},
  {name: "divide",
  symbol: String.fromCharCode(247), 
  type: "ternary"},
  {name: "four",
  symbol: "4",
  type: "unary"},
  {name: "five",
  symbol: "5",
  type: "unary"},
  {name: "six",
  symbol: "6",
  type: "unary"},
  {name: "multiply",
  symbol: String.fromCharCode(215),
  type: "ternary"},
  {name: "one",
  symbol: "1",
  type: "unary"},
  {name: "two",
  symbol: "2", 
  type: "unary"},
  {name: "three",
  symbol: "3",
  type: "unary"},
  {name: "subtract",
  symbol: String.fromCharCode(8722),
  type: "ternary"},
  {name: "zero",
  symbol: "0", 
  type: "unary"},
  {name: "decimal",
  symbol: ".", 
  type: "decimal"},
  {name: "equals",
  symbol: String.fromCharCode(61), 
  type: "unary"},
  {name: "add",
  symbol: String.fromCharCode(43),
  type: "ternary"}
  
]

const operations = ["÷","×","−","+"]
const numbers = ['0','1','2','3','4','5','6','7','8','9']
      
function isNumber(n) { return !isNaN(parseFloat(n)) && !isNaN(n - 0) }
      
function cutStartWithZero(str) { return str.length < 1 ? '' : str.slice(1) }

const App = () => {
  const [text, setText] = useState({value1: '0', operation: '', value2: ''})

  
  
  const showText = (e) => {
    let dataType = e.target.getAttribute('data')
    let dataText = e.target.textContent
    console.log('is it entered before error occurs?: ', dataText)
    setText(oldState => {
      console.log(oldState)
      if (oldState.operation === '') {
        if (oldState.value1 === '0' && dataType !== 'decimal') {
          return {...oldState, value1: dataText}
        } else if (oldState.value1.includes('.') && dataType === 'decimal') {
          return {...oldState}
        } else {
          return {...oldState, value1: oldState.value1 + dataText}
        }
        return {...oldState}
      } else {
        if (oldState.value2 === '0' && dataType !== 'decimal') {
          return {...oldState, value2: dataText}
        } else if (oldState.value2.includes('.') && dataType === 'decimal') {
          return {...oldState}
        } else {
          return {...oldState, value2: oldState.value2 + dataText}
        }
        return {...oldState}
      }
    })
  }
  
  const addOperation = (e) => {
    let dataText = e.target.textContent
    setText(oldState => {
      if (oldState.operation !== '' && oldState.value2 !== '' && oldState.value1 !== '') {
        if (oldState.operation === '+') {
          return {...oldState, value1: Number(oldState.value1) + Number(oldState.value2), operation: dataText, value2: ''}
        } else if (oldState.operation === '−') {
          return {...oldState, value1: Number(oldState.value1) - Number(oldState.value2), operation: dataText, value2: ''}
        } else if (oldState.operation === '×') {
          return {...oldState, value1: Number(oldState.value1) * Number(oldState.value2), operation: dataText, value2: ''}
        } else if (oldState.operation === '÷') {
          return {...oldState, value1: Number(oldState.value1) / Number(oldState.value2), operation: dataText, value2: ''}
        }
      }
      
      return {...oldState, operation: dataText}
    })
  }
  
  const toggleNegative = (e) => {
    setText(oldState => {
      if (oldState.operation === '') {
        if (oldState.value1[0] === '-') {
          return {...oldState, value1: oldState.value1.slice(1)}
        } else {
          
      return {...oldState, value1: '-' + oldState.value1}
        }
      } else {
        if (oldState.value2[0] === '-') {
          return {...oldState, value2: oldState.value2.slice(1)}
        } else {
          
        return {...oldState, value2: '-' + oldState.value2}
        }
      }
    })
  }
  
  const compute = () => {
    setText(oldState => {
      console.log(oldState)
      if (oldState.operation !== '' && oldState.value2 !== '' && oldState.value1 !== '') {
        if (oldState.operation === '+') {
          return {...oldState, value1: Number(oldState.value1) + Number(oldState.value2), operation: '', value2: ''}
        } else if (oldState.operation === '−') {
          return {...oldState, value1: Number(oldState.value1) - Number(oldState.value2), operation: '', value2: ''}
        } else if (oldState.operation === '×') {
          return {...oldState, value1: Number(oldState.value1) * Number(oldState.value2), operation: '', value2: ''}
        } else if (oldState.operation === '÷') {
          return {...oldState, value1: Number(oldState.value1) / Number(oldState.value2), operation: '', value2: ''}
        }
      } else {
        
      return {...oldState}
      }
      
    })
  }
    
  const removeText = (e) => {
    setText({value1: '0', operation: '', value2: ''})
  }
  
  return <main className="calculator">
    <Screen text={text} />
    <Buttons showText={showText} removeText={removeText} compute={compute} addOperation={addOperation} toggleNegative={toggleNegative} />
  </main>
}

const Screen = ({text}) => {
  return <div className="screen" id="display">
    <span>{text.value1} {text.operation} {text.value2}</span>
  </div>
}

const Buttons = ({showText, removeText, addOperation, compute, toggleNegative}) => {
  return <div className="buttons-container">
    {buttons.map((button, index) => {
      const {name, symbol, type} = button
      if (name === 'clear') {
        return <div key={index} className="calc-btn" id={name} data={type} onClick={removeText}><>{symbol}</></div>
      }
      
      if (name === 'equals') {
        return <div key={index} className="calc-btn" id={name} data={type} onClick={compute}><>{symbol}</></div>
      }
      
      if (name === 'plus-minus') {
        return <div key={index} className="calc-btn" id={name} data={type} onClick={toggleNegative}><>{symbol}</></div>
      }
      
      if (type === 'ternary') {
        return <div key={index} className="calc-btn" id={name} data={type} onClick={(e) => addOperation(e)}><>{symbol}</></div>
      }
      
      
      return <div key={index} className="calc-btn" id={name} data={type} onClick={showText}><>{symbol}</></div>
    })}
  </div>
}


      
ReactDOM.render(<App />, document.getElementById('root'))
