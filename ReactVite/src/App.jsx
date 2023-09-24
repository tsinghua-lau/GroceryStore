import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from 'antd';
import './App.css'
// import Hello from './Hello.jsx'
import He from './AbbreviationHello.jsx'
import Parent from './Interchange/parent.jsx'
import FnComponent from './functionComponent/FnComponent.jsx'
import { Context } from './context/index.js';


// const p1 = {
//   name: '小明',
//   age: 18,
// }

function App() {
  const [count, setCount] = useState(2)
  const [data, setData] = useState('My Context Value');
  function setValue() { 
 
    setData('123')
  }
  return (
    <>
      <div>
        {/* <He name={"小明"} address="南京" /> */}

        <div>
          {/* <Parent></Parent> */}
          <Button type="primary" onClick={setValue}>改变value</Button>
          <hr />
          <br />
          <Context.Provider value={ data}>
          <FnComponent></FnComponent>

      </Context.Provider>
        </div>
        
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
