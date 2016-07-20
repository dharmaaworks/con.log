(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
log_1.con.log([
    {
        "_id": "578ee712a6e31223be4bc7c7",
        "index": 0,
        "guid": "b1fe179b-ad14-4871-8865-3322988195e8",
        "isActive": true,
        "balance": "$1,295.89",
        "picture": "http://placehold.it/32x32",
        "age": 24,
        "eyeColor": "blue",
        "name": "Travis Schneider",
        "gender": "male",
        "company": "INTERLOO",
        "email": "travisschneider@interloo.com",
        "phone": "+1 (955) 557-2987",
        "address": "281 Hazel Court, Emison, Nebraska, 3969",
        "about": "Ipsum et mollit Lorem Lorem. Velit laborum laborum cupidatat Lorem irure irure elit pariatur enim ut eu. Excepteur ex deserunt consectetur proident mollit. Irure aliqua sit Lorem sint proident dolore ipsum aliquip nulla sunt cupidatat nulla excepteur labore. Labore tempor amet voluptate proident cupidatat ullamco tempor id incididunt. Occaecat id fugiat elit sit irure dolore esse elit et dolore nisi amet fugiat. Duis minim velit sit ut commodo pariatur magna ipsum cillum.\r\n",
        "registered": "2014-03-28T01:04:20 +07:00",
        "latitude": 71.329102,
        "longitude": 117.44518,
        "tags": [
            "consequat",
            "consequat",
            "excepteur",
            "aliquip",
            "cillum",
            "dolor",
            "dolore"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Carpenter English"
            },
            {
                "id": 1,
                "name": "Gallegos Weber"
            },
            {
                "id": 2,
                "name": "Christian Hernandez"
            }
        ],
        "greeting": "Hello, Travis Schneider! You have 7 unread messages.",
        "favoriteFruit": "apple"
    },
    {
        "_id": "578ee712e90f7f0ccf041e2f",
        "index": 1,
        "guid": "f3114241-1060-490c-a4e0-5397d1d4a24d",
        "isActive": false,
        "balance": "$1,480.89",
        "picture": "http://placehold.it/32x32",
        "age": 32,
        "eyeColor": "blue",
        "name": "Sharp Price",
        "gender": "male",
        "company": "INEAR",
        "email": "sharpprice@inear.com",
        "phone": "+1 (839) 532-2944",
        "address": "495 Lake Street, Westmoreland, Puerto Rico, 3160",
        "about": "Adipisicing quis exercitation tempor consequat anim. Cupidatat do proident ullamco aliqua nostrud qui duis non nulla proident cupidatat. Velit irure culpa pariatur nostrud et. Cupidatat ea anim cupidatat ad. Fugiat labore nostrud culpa dolore ullamco irure sint do cupidatat esse adipisicing in deserunt esse. Sunt dolor reprehenderit commodo incididunt in amet nulla laboris occaecat deserunt eu. Minim occaecat elit incididunt minim sunt.\r\n",
        "registered": "2014-12-15T10:56:32 +08:00",
        "latitude": 57.498824,
        "longitude": -90.025051,
        "tags": [
            "officia",
            "duis",
            "dolor",
            "dolore",
            "ea",
            "duis",
            "fugiat"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Sykes Nieves"
            },
            {
                "id": 1,
                "name": "Campos Potts"
            },
            {
                "id": 2,
                "name": "Tate Sloan"
            }
        ],
        "greeting": "Hello, Sharp Price! You have 4 unread messages.",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "578ee7128d553fc0e315af26",
        "index": 2,
        "guid": "0f44b226-5934-4ac2-bc93-40c35f628c0e",
        "isActive": false,
        "balance": "$3,771.75",
        "picture": "http://placehold.it/32x32",
        "age": 20,
        "eyeColor": "green",
        "name": "Blanca Sandoval",
        "gender": "female",
        "company": "XEREX",
        "email": "blancasandoval@xerex.com",
        "phone": "+1 (946) 403-2941",
        "address": "142 Wolf Place, Morriston, Kansas, 5153",
        "about": "Officia deserunt adipisicing proident velit. Nulla et laboris incididunt reprehenderit aliqua ex commodo excepteur ipsum Lorem. Laborum cillum magna Lorem nulla consequat est id minim.\r\n",
        "registered": "2016-03-09T09:21:34 +08:00",
        "latitude": -9.451543,
        "longitude": -120.559179,
        "tags": [
            "ex",
            "elit",
            "officia",
            "sit",
            "cillum",
            "nostrud",
            "ex"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Jordan Spencer"
            },
            {
                "id": 1,
                "name": "Chaney Dale"
            },
            {
                "id": 2,
                "name": "Mattie Britt"
            }
        ],
        "greeting": "Hello, Blanca Sandoval! You have 1 unread messages.",
        "favoriteFruit": "banana"
    },
    {
        "_id": "578ee7129352c293e91b8c27",
        "index": 3,
        "guid": "6c64cd88-50cf-4599-88eb-0bc080afe027",
        "isActive": false,
        "balance": "$3,270.76",
        "picture": "http://placehold.it/32x32",
        "age": 40,
        "eyeColor": "brown",
        "name": "Rosetta Ramsey",
        "gender": "female",
        "company": "APPLIDEC",
        "email": "rosettaramsey@applidec.com",
        "phone": "+1 (881) 459-2802",
        "address": "236 Exeter Street, Osmond, Louisiana, 4986",
        "about": "Lorem exercitation id exercitation laboris eu id mollit. Minim et non proident tempor cupidatat. Incididunt sit incididunt adipisicing magna tempor magna cupidatat pariatur sunt aliquip velit non ut.\r\n",
        "registered": "2014-02-23T11:26:14 +08:00",
        "latitude": -88.769534,
        "longitude": 110.087872,
        "tags": [
            "quis",
            "laboris",
            "culpa",
            "nulla",
            "non",
            "consectetur",
            "incididunt"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Flynn Kerr"
            },
            {
                "id": 1,
                "name": "Austin Russo"
            },
            {
                "id": 2,
                "name": "Theresa Russell"
            }
        ],
        "greeting": "Hello, Rosetta Ramsey! You have 6 unread messages.",
        "favoriteFruit": "apple"
    },
    {
        "_id": "578ee712b53c58977ac38e77",
        "index": 4,
        "guid": "b2e130f9-1d38-4d8d-a3b5-b8fa12db2112",
        "isActive": false,
        "balance": "$2,382.17",
        "picture": "http://placehold.it/32x32",
        "age": 40,
        "eyeColor": "green",
        "name": "Caitlin Vazquez",
        "gender": "female",
        "company": "PEARLESSA",
        "email": "caitlinvazquez@pearlessa.com",
        "phone": "+1 (878) 532-3906",
        "address": "708 Middagh Street, Blairstown, Florida, 526",
        "about": "Esse ullamco eu deserunt minim occaecat dolore deserunt. Anim cupidatat mollit reprehenderit quis mollit minim ad laboris nostrud tempor officia. Duis nisi dolor aute culpa aliquip aliquip ex consequat.\r\n",
        "registered": "2014-02-02T01:20:32 +08:00",
        "latitude": 50.686587,
        "longitude": 179.139988,
        "tags": [
            "dolor",
            "ullamco",
            "minim",
            "excepteur",
            "adipisicing",
            "commodo",
            "aliqua"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Corine Frederick"
            },
            {
                "id": 1,
                "name": "Agnes Mcclure"
            },
            {
                "id": 2,
                "name": "Jami Erickson"
            }
        ],
        "greeting": "Hello, Caitlin Vazquez! You have 2 unread messages.",
        "favoriteFruit": "banana"
    },
    {
        "_id": "578ee712ed8d4daf2ae7442c",
        "index": 5,
        "guid": "71a890e1-97f7-493e-b2a4-f79cc391b554",
        "isActive": true,
        "balance": "$1,795.19",
        "picture": "http://placehold.it/32x32",
        "age": 22,
        "eyeColor": "green",
        "name": "Lori Barrera",
        "gender": "female",
        "company": "SHOPABOUT",
        "email": "loribarrera@shopabout.com",
        "phone": "+1 (933) 411-3079",
        "address": "925 Coleman Street, Graball, Maryland, 5290",
        "about": "Eiusmod occaecat et Lorem dolor anim cupidatat aliquip ex ex reprehenderit. Ipsum excepteur dolor mollit consectetur elit enim laboris laboris. Amet labore fugiat voluptate ullamco et laboris occaecat Lorem ipsum. Deserunt occaecat est exercitation veniam enim ea magna laboris labore voluptate Lorem officia.\r\n",
        "registered": "2015-09-30T11:58:19 +07:00",
        "latitude": -12.092633,
        "longitude": 175.71691,
        "tags": [
            "non",
            "enim",
            "sint",
            "proident",
            "consectetur",
            "cupidatat",
            "sunt"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Mae Baird"
            },
            {
                "id": 1,
                "name": "Holden Rivas"
            },
            {
                "id": 2,
                "name": "Rosemarie Talley"
            }
        ],
        "greeting": "Hello, Lori Barrera! You have 9 unread messages.",
        "favoriteFruit": "apple"
    },
    {
        "_id": "578ee7125535bdfdb19a137d",
        "index": 6,
        "guid": "f67871fb-35bb-4447-941d-a8350dd90afa",
        "isActive": true,
        "balance": "$3,351.77",
        "picture": "http://placehold.it/32x32",
        "age": 35,
        "eyeColor": "green",
        "name": "Alisa Contreras",
        "gender": "female",
        "company": "VOIPA",
        "email": "alisacontreras@voipa.com",
        "phone": "+1 (874) 529-3249",
        "address": "634 Seba Avenue, Greenfields, Alaska, 8368",
        "about": "Aute anim fugiat nulla veniam velit qui labore eiusmod aliqua eu sint. Ullamco mollit quis do est minim incididunt qui in excepteur dolore irure. Commodo aute in adipisicing consequat ea Lorem est ad irure excepteur velit dolor ad aliqua.\r\n",
        "registered": "2014-03-09T07:28:48 +07:00",
        "latitude": 17.374525,
        "longitude": -73.227363,
        "tags": [
            "cupidatat",
            "ea",
            "fugiat",
            "proident",
            "anim",
            "voluptate",
            "mollit"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Sonya Estes"
            },
            {
                "id": 1,
                "name": "Martha Evans"
            },
            {
                "id": 2,
                "name": "Elvira White"
            }
        ],
        "greeting": "Hello, Alisa Contreras! You have 4 unread messages.",
        "favoriteFruit": "banana"
    }
]);

},{"./log":2}],2:[function(require,module,exports){
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

},{}]},{},[1]);
