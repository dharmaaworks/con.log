import {con} from './log';

let family = [{name: "Peter", age: 40, relation: "Father"}, 
              {name: "Celine", age: 37, relation: "Mother"}, 
              {name: "Adrian", age: 15, relation:"Son"}];

con.log(family);

let str: string = "Hello World!";
con.log(str) 

let num: number = 100;
con.log(num) 

let arr: number[] = [1, 2, 3, 4, 5];
con.log(arr) 

let strArr: string[] = ["Dave", "Fanny", "Jarvis", "Peter"];
con.log(strArr); 

let person = {id:1, name:"Fred Peterson"};
con.log(person);

con.log(1, 2, "Hello", "World", [1, 2, 3], [{fruit: "Mango"},  {fruit: "Banana"}, {fruit: "Apple"}], {status:"Done"});

console.log(1, 2, "Hello", "World", [1, 2, 3], [{fruit: "Mango"},  {fruit: "Banana"}, {fruit: "Apple"}], {status:"Done"});




