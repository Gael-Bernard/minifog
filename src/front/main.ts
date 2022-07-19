import './style.css'
import * as PIXI from "pixi.js"


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    
  </div>
`

const app = new PIXI.Application({width:256, height:256});
console.log(app)