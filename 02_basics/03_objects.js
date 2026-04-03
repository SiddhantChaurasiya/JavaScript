// Singleton
// Object.create

// Object literals

const mySym = Symbol("key1");

const JsUser = {
    name: "Siddhant",
    "Full name": "Siddhant Chaurasiya",
    [mySym]: "mykey1",
    Email: "siddhantchaurasiya28@Gmail.com",
    age: 20,
    location: "jaipur",
    isLoggedIn: false,
    LastLogginDays: ["Monday", "Friday"]
}

// console.log(JsUser.Email);
// console.log(JsUser["Email"]);
// console.log(JsUser["Full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

JsUser.Email = "siddhant@gmail.com";
// Object.freeze(JsUser);
JsUser.Email = "siddhant@chatgpt.com";
// console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello JS User")
}

JsUser.greetingTwo = function () {
    console.log(`Hello JS user ${this.name}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());