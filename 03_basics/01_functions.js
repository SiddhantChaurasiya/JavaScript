// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
    return number1 + number2;
}

let result = addTwoNumbers(3, 4);
// console.log("Result:", result);

function loginUserMessage(username = "sam") {
    return `${username} just logged in`;
}

// console.log(loginUserMessage());
// console.log(loginUserMessage("siddhant"));

function calculateCartPrice1(...num1) {
    return num1
}

function calculateCartPrice2(val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice1(200, 300, 500, 2000));
// console.log(calculateCartPrice2(200, 300, 500, 2000));

const user = {
    username: "Siddhant",
    price: 199
}

function handleObject(anyObject) {
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user);
handleObject({
    username: "sam",
    price: 399
})

// if in object price replace with prices then there is an error in output in place of price it will show undefined that is resolved by typechecking


const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]));