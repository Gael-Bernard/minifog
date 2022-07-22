import * as PIXI from "pixi.js"
import { io, Socket } from "socket.io-client"
import { ClientToServerEvents, ServerToClientEvents } from '../shared/networkTypes'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="canvasarea">
    
  </div>
`;

const pixi = new PIXI.Application({width:256, height:256});

const canvasArea = document.getElementById("canvasarea");
if(canvasArea == null)
  throw "canvasarea div component missing from HTML";
canvasArea.appendChild(pixi.view);



const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io();
socket.on("connect", () => console.log("Connected to server !") );


export default pixi;