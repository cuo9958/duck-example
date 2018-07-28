/**
 * 默认的路由
 * @param {*} router 
 */
module.exports = function (router) {
    router.get("/", function (ctx) {
        ctx.body = "hi,duck.";
    });
    return router;
};