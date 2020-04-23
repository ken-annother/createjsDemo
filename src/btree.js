import { Stage, Shape } from '@createjs/easeljs';
import './style.css';

console.log("this is test");

window.onload = function(window){
   let stageCanvas = document.getElementById("stageCanvas");
   console.log("页面加载完成了", stageCanvas);
   let stage = new Stage("stageCanvas");
   let shape = new Shape();
   shape.graphics.beginFill('red').drawRect(0, 0, 120, 120);
   stage.addChild(shape);
   stage.update();

}.bind(this);

class person{
   age = "";
   name = "";
}