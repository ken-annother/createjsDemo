import { Stage, Shape } from '@createjs/easeljs';
import './style.css';
import { Tree } from './tree';
import { Node } from './node'


function paintTree() {
   const stage = new Stage(stageCanvas);

   const tree = new Tree();

   function* dataGen() {
      for (let i = 0; i < 10; i++) {
         yield parseInt(Math.random() * 100);
      }
   }

   tree.addData(dataGen);
   tree.x = 450;
   tree.y = 10;
   stage.addChild(tree);
   stage.update();

   // console.log(stage);
}



function paintNode() {
   const stage = new Stage(stageCanvas);
   const no = new Node();
   stage.addChild(no);
   stage.update();
   // console.log(stage);
}

window.onload = function (window) {
   const stageCanvas = document.getElementById("stageCanvas");
   stageCanvas.style.width = "800px";
   stageCanvas.style.height = "600px";
   stageCanvas.width = "800";
   stageCanvas.height = "600";

   paintNode();

}.bind(this);