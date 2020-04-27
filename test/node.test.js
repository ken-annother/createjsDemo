import { Node } from '../src/node'

describe('test node', function () {
    it("sizetest", function () {
        const node = new Node(598);
        console.log("node bounds : ", node.getBounds());
    })
});