import { Stage, Shape } from '@createjs/easeljs';
import './style.css';
import { Tree } from './tree';

console.log("this is test");

window.onload = function (window) {
   const stageCanvas = document.getElementById("stageCanvas");
   stageCanvas.width = "600";
   stageCanvas.height = "600";

   const stage = new Stage(stageCanvas);

   const tree = new Tree();

   function* dataGen() {
      for (let i = 0; i < 10; i++) {
         yield parseInt(Math.random() * 100);
      }
   }

   tree.addData(dataGen);

   stage.addChild(tree);
   stage.update();

   console.log(stage);

}.bind(this);