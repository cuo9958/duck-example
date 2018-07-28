/**
 * 测试路由
 */
const Duck = require("node-duck");

const Controller = new Duck.Controller("/");

Controller.get("", function (ctx) {
    ctx.body = "hi,duck!";
})
Controller.get("test", function (ctx) {
    ctx.body = "hi,duck!";
})

module.exports = Controller;