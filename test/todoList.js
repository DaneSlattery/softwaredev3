"use strict";

const chai = require('chai').assert;
const script = require('../todoList');

describe("TodoList", function ()
{
    it("can Access Script", function ()
    {
        chai.equal(script.test(), true);
    });

    it("Add adds to list", function ()
    {
        let testLength = script.listLength() + 1;
        script.add("Hello");
        chai.equal(testLength, script.listLength());
    });

    it("get gets the right item", function () {
        script.add("item 1");
        chai.equal(script.get(script.listLength() - 1), "item 1");
    });

    it("edit edits the right value", function () {
        script.edit("edited",1);
        chai.equal(script.get(1), "edited");
    });

    it("delete deletes from the list", function () {
        let testLength = script.listLength() + 1;
        script.delete(1);
        chai.isBelow(script.listLength(), testLength);
    });
});
