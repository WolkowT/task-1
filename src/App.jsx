import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function AppP() {
  const [count, setCount] = useState(0)
  //Декларативный стиль
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
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
		{new Date().getFullYear()}
      </p>
    </>
  )
}

//Императивный стиль
export const App = () => {
	const root = document.querySelector('#root');
	const year = new Date().getFullYear();

	root.innerHTML = `<div id="root"><div><a href="https://vite.dev" target="_blank"><img class="logo" alt="Vite logo" src="public/vite.svg"></a><a href="https://react.dev" target="_blank"><img class="logo react" alt="React logo" src="/src/assets/react.svg"></a></div><h1>Vite + React</h1><div class="card"><button>count is 0</button><p>Edit <code>src/App.jsx</code> and save to test HMR</p></div><p class="read-the-docs">${year}</p></div>`

}

