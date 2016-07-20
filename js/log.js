"use strict";
var con;
(function (con) {
    con.log = function () {
        var obj = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            obj[_i - 0] = arguments[_i];
        }
        if (console === undefined) {
            return;
        }
        obj.map(function (elem) {
            switch (typeof elem) {
                case "number":
                    console.log(elem);
                    break;
                case "string":
                    console.log(elem);
                    break;
                default:
                    console['table'](elem) + console.log(JSON.stringify(elem));
                    break;
            }
        });
    };
})(con = exports.con || (exports.con = {}));
//# sourceMappingURL=log.js.map