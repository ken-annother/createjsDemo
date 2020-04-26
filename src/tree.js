import { Container } from "@createjs/easeljs";
import { Node } from './node'

class Tree extends Container {
    static V_MARGIN = 100;
    static H_MARGIN = 100;

    constructor() {
        super();
        this.initTree();
        this.startHead = null;
    }

    initTree() {

    }

    addData(dataGen) {
        let count = 0;
        const fakeDatas = [63, 6, 56, 79, 98, 51, 65, 32, 84, 22];

        // for (let v of dataGen()) {
        for (let v of fakeDatas) {
            console.log(v);
            const node = new Node(v);
            this.addChild(node);
            count++;
        }

        this.updateView();
    }

    /**
     * 渲染视图
     */
    updateView() {
        // console.log(this.children);
        if (this.children == null || this.children.length == 0) return;
        this.resetOrder();
        this.createOrder();
    }

    resetOrder() {
        this.children.forEach((child, index) => {
            child.leftChild = null;
            child.rightChild = null;
        });
    }

    /**
     * 二叉树结构化
     */
    createOrder() {
        this.startHead = this.children[0];
        this.startHead.deepth = 0;
        let treeHeight = 0;

        this.children.forEach((child, index) => {
            if (index == 0) return;
            let tempNode = this.startHead;
            let parnentNode;

            let currentHeight = 0;
            while (tempNode) {
                parnentNode = tempNode;
                if (child.value > tempNode.value) {
                    tempNode = tempNode.rightChild;
                } else {
                    tempNode = tempNode.leftChild;
                }
                currentHeight++;
            }

            if (currentHeight > treeHeight) {
                treeHeight = currentHeight;
            }

            // console.log(parnentNode, child);
            if (parnentNode.value > child.value) {
                child.x = parnentNode.x - Tree.H_MARGIN;
                parnentNode.leftChild = child;
            } else {
                child.x = parnentNode.x + Tree.H_MARGIN;
                parnentNode.rightChild = child;
            }

            child.y = currentHeight * Tree.V_MARGIN;
        });

        console.log("====================");
        console.log("need tree width unit is:", Math.pow(2, treeHeight), treeHeight);


        console.log("start HEAD:", this.startHead);
    }
}

export { Tree };