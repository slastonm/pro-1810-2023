import 'bootstrap/scss/bootstrap.scss'
import './style.css'
import './style/main.scss'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { showAlert } from './component/alert.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <div class="card">
      <button id="alert" type="button">
        Alert
      </button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    
  </div>
`

setupCounter(document.querySelector('#counter'))
showAlert(document.querySelector('#alert'));
