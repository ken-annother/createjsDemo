import { Stage, Shape } from '@createjs/easeljs';
import './style.css';
import {Node} from './node'

console.log("this is test");

window.onload = function(window){
   let stageCanvas = document.getElementById("stageCanvas");
   stageCanvas.width = "600";
   stageCanvas.height = "600";


   let stage = new Stage(stageCanvas);

   let node = new Node(5);
   stage.addChild(node.view());
   stage.update();

}.bind(this);