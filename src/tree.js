import { Container } from "@createjs/easeljs";
import { Node } from './node'

class Tree extends Container {
    constructor() {
        super();
        this.initTree();
        this.startHead = null;
    }

    initTree() {

    }

    addData(dataGen) {
        let count = 0;
        for (let v of dataGen()) {
            const node = new Node(v);
            this.addChild(node);
            count++;
        }

        this.updateView();
    }

    updateView() {
        console.log(this.children);
        if (this.children == null || this.children.length == 0) return;

        if (this.startHead == null) {
            this.startHead = this.children[0];
        }



        this.children.forEach((child, index) => {
            if (index == 0) return;
            let tempNode = this.startHead;
            let parnentNode;
            while (tempNode) {
                parnentNode = tempNode;
                if (child.value > tempNode.value) {
                    tempNode = tempNode.rightChild; 
                }else{
                    tempNode = tempNode.leftChild;
                }
            }

            console.log(parnentNode, child);
            if(parnentNode.value > child.value){
                parnentNode.leftChild = child;
            }else{
                parnentNode.rightChild = child;
            }
        });

        console.log("start HEAD:", this.startHead);
    }
}

export { Tree };