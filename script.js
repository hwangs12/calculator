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
import { useState, useEffect } from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

const buttons = [
{ name: "clear",
  symbol: "C" },
{ name: "square-root",
  symbol: String.fromCharCode(8730) },
{ name: "plus-minus",
  symbol: String.fromCharCode(177) },
{ name: "percent",
  symbol: String.fromCharCode(37) },
{ name: "seven",
  symbol: "7" },
{ name: "eight",
  symbol: "8" },
{ name: "nine",
  symbol: "9" },
{ name: "divide",
  symbol: String.fromCharCode(247) },
{ name: "four",
  symbol: "4" },
{ name: "five",
  symbol: "5" },
{ name: "six",
  symbol: "6" },
{ name: "multiply",
  symbol: String.fromCharCode(215) },
{ name: "one",
  symbol: "1" },
{ name: "two",
  symbol: "2" },
{ name: "three",
  symbol: "3" },
{ name: "subtract",
  symbol: String.fromCharCode(8722) },
{ name: "zero",
  symbol: "0" },
{ name: "decimal",
  symbol: "." },
{ name: "equals",
  symbol: String.fromCharCode(61) },
{ name: "add",
  symbol: String.fromCharCode(43) }];



const operations = ["÷", "×", "−", "+"];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];





const App = () => {
  const [text, setText] = useState('0');



  const showText = e => {
    setText(oldState => {
      let newState = oldState + e.target.textContent;
      if (newState.includes('..')) {
        var index = newState.indexOf('..');
        newState = newState.slice(0, index) + newState.slice(index + 1);
      }

      if (newState[0] === '0' && numbers.includes(newState[1])) {
        newState = newState.slice(1);
      }

      if (operations.includes(newState[newState.length - 3]) && newState[newState.length - 2] === '0' && numbers.includes(newState[newState.length - 1])) {
        newState = newState.slice(0, newState.length - 2) + newState.slice(newState.length - 1);
      }

      if (newState.indexOf('.') !== -1 && newState.indexOf('.') !== newState.length - 1 && newState[newState.length - 1] === ".") {
        newState = newState.slice(0);
      }

      console.log(newState.match(/[÷×+\−]|\d+(\.\d+)?/g));


      return newState;
    });
  };

  const compute = () => {
    let operationArray = text.match(/[÷×+\−]|\d+(\.\d+)?/g);
    console.log(operationArray);
    let targetOperatorIndex;
    while (operationArray.length > 1) {
      if (operationArray.indexOf("÷") !== -1) {
        targetOperatorIndex = operationArray.indexOf("÷");
        let computedValue = Number(operationArray[targetOperatorIndex - 1]) / Number(operationArray[targetOperatorIndex + 1]);
        operationArray.splice(targetOperatorIndex - 1, 3, computedValue);
      } else if (operationArray.indexOf("×") !== -1) {
        targetOperatorIndex = operationArray.indexOf("×");
        let computedValue = Number(operationArray[targetOperatorIndex - 1]) * Number(operationArray[targetOperatorIndex + 1]);
        operationArray.splice(targetOperatorIndex - 1, 3, computedValue);
      } else if (operationArray.indexOf("−") !== -1) {
        targetOperatorIndex = operationArray.indexOf("−");
        let computedValue = Number(operationArray[targetOperatorIndex - 1]) - Number(operationArray[targetOperatorIndex + 1]);
        operationArray.splice(targetOperatorIndex - 1, 3, computedValue);
      } else {
        targetOperatorIndex = operationArray.indexOf("+");
        let computedValue = Number(operationArray[targetOperatorIndex - 1]) + Number(operationArray[targetOperatorIndex + 1]);
        operationArray.splice(targetOperatorIndex - 1, 3, computedValue);
      }
    }

    setText(operationArray[0]);
  };

  const removeText = e => {
    setText('0');
  };

  return /*#__PURE__*/React.createElement("main", { className: "calculator" }, /*#__PURE__*/
  React.createElement(Screen, { text: text }), /*#__PURE__*/
  React.createElement(Buttons, { showText: showText, removeText: removeText, compute: compute }));

};

const Screen = ({ display, text }) => {
  return /*#__PURE__*/React.createElement("div", { className: "screen", id: "display" },
  text);

};

const Buttons = ({ showText, removeText, compute }) => {
  return /*#__PURE__*/React.createElement("div", { className: "buttons-container" },
  buttons.map((button, index) => {
    const { name, symbol } = button;
    if (name === 'clear') {
      return /*#__PURE__*/React.createElement("div", { key: index, className: "calc-btn", id: name, onClick: removeText }, /*#__PURE__*/React.createElement(React.Fragment, null, symbol));
    }

    if (name === 'equals') {
      return /*#__PURE__*/React.createElement("div", { key: index, className: "calc-btn", id: name, onClick: compute }, /*#__PURE__*/React.createElement(React.Fragment, null, symbol));
    }

    return /*#__PURE__*/React.createElement("div", { key: index, className: "calc-btn", id: name, onClick: showText }, /*#__PURE__*/React.createElement(React.Fragment, null, symbol));
  }));

};



ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));