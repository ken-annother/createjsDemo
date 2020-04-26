const Node = require('../src/node');
import {Mocha} from 'mocha';

let expect = Mocha.expect;

describe('test node', function () {
    it("sizetest", function () {
        const node = new Node();
        console.log(node.getBounds);
    })
});