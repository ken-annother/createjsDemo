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
        const shape = new Shape();

        const circle = new Graphics.Circle(Node.SHAPE_SIZE, Node.SHAPE_SIZE, Node.SHAPE_SIZE);

        shape.graphics.beginFill('yellow');
        shape.graphics.append(circle);
        this.addChild(shape);

        let valueLable = new Text(this.value, "100px Arial", "#FF7700");
        valueLable.textAlign = "center";
        valueLable.textBaseline = "middle";
        const textWidth = valueLable.getMeasuredWidth();
        const textHeight = valueLable.getMeasuredLineHeight();
        const fontScaleH = (Math.SQRT2 * Node.SHAPE_SIZE * 100 / textWidth);
        const fontScaleV = (Math.SQRT2 * Node.SHAPE_SIZE * 100 / textHeight);
        valueLable.font = parseInt(Math.min(fontScaleH, fontScaleV)) + "px Arial";
        valueLable.x = Node.SHAPE_SIZE;
        valueLable.y = Node.SHAPE_SIZE;
        this.addChild(valueLable);
    }
}

export { Node };