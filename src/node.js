import { Shape, Container, Text, Graphics } from '@createjs/easeljs';

class Node extends Container {
    static SHAPE_SIZE = 40;

    constructor(value, leftChild, rightChild) {
        super();
        this.value = value;
        this.leftChild = leftChild;
        this.rightChild = rightChild;
        this.initView();
    }

    initView() {
        // const shape = new Shape();
        // const circle = new Graphics.Circle(Node.SHAPE_SIZE, Node.SHAPE_SIZE, Node.SHAPE_SIZE);

        // shape.graphics.beginStroke('red');
        // shape.graphics.beginFill('yellow');
        // shape.graphics.append(circle);


        // this.addChild(shape);

        let valueLable = new Text(this.value, "100px Arial", "#FF7700");
        // valueLable.textAlign = "center";
        // valueLable.textBaseline = "hanging";

        const textWidth = valueLable.getMeasuredWidth();
        // const fontScale = (Math.SQRT2 * Node.SHAPE_SIZE * 100 / textWidth);
        // valueLable.font = parseInt(fontScale) + "px Arial";

        const textHeight = valueLable.getMeasuredLineHeight();

        // valueLable.x = 40;
        // valueLable.y = (Node.SHAPE_SIZE * 2 - textHeight) / 2;
        console.log(textWidth, textHeight);

        this.addChild(valueLable);
    }
}

export { Node };