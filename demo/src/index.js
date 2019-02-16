import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const myHTML = React.createElement("h1", { id: 'hello' }, "Hello React!")
const rootElement = document.getElementById('root')
ReactDOM.render(myHTML, rootElement)






// ReactDOM.render(<h1>Hello, React!</h1>, document.getElementById('root'));

// function App() {
//   return <h1>Hello</h1>
// }

// class App extends Component {
//   render() {
//     return (
//       <h1>Hello</h1>
//     )
//   }
// }
