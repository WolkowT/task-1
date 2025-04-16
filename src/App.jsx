import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createElement, Fragment } from 'react';

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
	const [count, setCount] = useState(0)
	return createElement(
		Fragment,
		null,
		[
			createElement(
				'div',
				{key:"links"},
				createElement(
					'a',
					{href:"https://vite.dev", target:"_blank", key:"vite-link"},
					createElement(
						'img',
						{src:viteLogo, className:"logo", alt:"Vite logo"},
					)
				),
				createElement(
					'a',
					{href:"https://react.dev", target:"_blank", key:"react-link"},
					createElement(
						'img',
						{src:reactLogo, className:"logo react", alt:"React logo"},
					)
				)
			),
			createElement(
				'h1',
				{key:"title"},
				'Vite + React'
			),
			createElement(
				'div',
				{className:"card", key:"card"},
				createElement(
					'button',
					{onClick:() => setCount((count) => count + 1), key:"button"},
					`count is ${count}`
				),
				createElement(
					'p',
					{key:"href"},
					'Edit ',
					createElement(
						'code',
						null,
						'src/App.jsx'
					), ' and save to test HMR'
				)
			),
			createElement(
				'p',
				{className:"read-the-docs", key:"date-today"},
				`${new Date().getFullYear()}`
			)
		]
	)
}



