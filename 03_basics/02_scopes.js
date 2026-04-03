function one() {
    const username = "Siddhant";

    function two() {
        const website = "youtube";
        // console.log(username);
    }

    // console.log(website);

    two();
}

one();

if (true) {
    const username = "hitesh";
    if (username === "hitesh") {
        const website = " youtube";
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// ++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++

console.log(addOne(5));  // here addOne is a direct function that is accessible by hoisting concept

function addOne(num) {
    return num + 1;
}

// console.log(addTwo(6));  cannot access here for addTwo

const addTwo = function (num) {
    return num + 2;
}
