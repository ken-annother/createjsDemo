import { Shape, Container, Text, Graphics } from '@createjs/easeljs';

class Node {
    constructor(value, leftChild, rightChild) {
        this.value = value;
        this.leftChild = leftChild;
        this.rightChild = rightChild;
    }

    view() {
        let rootView = new Container();

        let shape = new Shape();
        shape.color = 'yellow';
        let circle = new Graphics.Circle(40, 40, 30);

        shape.graphics.append(circle);

        shape.graphics.append({exec:function(ctx, shape) {
            ctx.fillStyle = shape.color;
            ctx.fill();
        }});

        rootView.addChild(shape);

        let valueLable = new Text();
        valueLable.text = this.value;
        valueLable.font = "bold 36px Arial";
        valueLable.color = "#FF7700";
        valueLable.x = 80;
        valueLable.y = 100;
        rootView.addChild(valueLable);

        return rootView;
    }
}

export { Node };