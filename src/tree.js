import { Container } from "@createjs/easeljs";
import { Node } from './node'

class Tree extends Container {
    constructor() {
        super();
        this.initTree();

    }

    initTree() {
        for (let i = 100; i < 108; i++) {
            const node = new Node(i);
            node.x = (i - 100) * 80;
            node.y = (i - 100) * 80;
            this.addChild(node);
        }
    }
}

export { Tree };