"use strict";
var log_1 = require('./log');
var family = [{ name: "Peter", age: 40, relation: "Father" },
    { name: "Celine", age: 37, relation: "Mother" },
    { name: "Adrian", age: 15, relation: "Son" }];
log_1.con.log(family);
var str = "Hello World!";
log_1.con.log(str);
var num = 100;
log_1.con.log(num);
var arr = [1, 2, 3, 4, 5];
log_1.con.log(arr);
var strArr = ["Dave", "Fanny", "Jarvis", "Peter"];
log_1.con.log(strArr);
var person = { id: 1, name: "Fred Peterson" };
log_1.con.log(person);
log_1.con.log(1, 2, "Hello", "World", [1, 2, 3], [{ fruit: "Mango" }, { fruit: "Banana" }, { fruit: "Apple" }], { status: "Done" });
console.log(1, 2, "Hello", "World", [1, 2, 3], [{ fruit: "Mango" }, { fruit: "Banana" }, { fruit: "Apple" }], { status: "Done" });
//# sourceMappingURL=index.js.map