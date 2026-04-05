let teaTypes = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];
for(let i=0;i<teaTypes.length;i++){
    if(teaTypes[i] == "chai"){
        break;
    }
    selectedTeas.push(teaTypes[i]);
}

// console.log(selectedTeas);

let numbers = [1,2,3,4,5];
let smallNumbers = [];

for (const ele of numbers) {
    if(ele === 4){
        break;
    }
    smallNumbers.push(ele);
}

// console.log(smallNumbers);

let teas = ["chai", "green tea", "herbal tea", "black tea"];
let prefferedTeas = [];

for (const ele of teas) {
    if(ele === "herbal tea"){
        continue;
    }
    prefferedTeas.push(ele);
}

// console.log(prefferedTeas);

let cityPopulation = {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
};

let cityNewPopulations = {};

for(const key in cityPopulation){
    if(key === "Berlin"){
        break;
    }
    cityNewPopulations[key] = cityPopulation[key];
}

// console.log(cityNewPopulations);

let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
};

let largeCities = {};

for(const city in worldCities){
    if(worldCities[city] < 3000000){
        continue;
    }
    largeCities[city] = worldCities[city];
}

// console.log(largeCities);

let newTeas = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];

newTeas.forEach(element => {
    if(element === "chai"){
        return;
    }
    availableTeas.push(element);

});

// console.log(availableTeas);

let myWorldCities = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities = [];

myWorldCities.forEach(element => {
    if(element === "Sydney"){
        return;
    }
    traveledCities.push(element);
});

// console.log(traveledCities);

let arr = [2,5,7,9];
let doubledNumbers = [];


for(let i=0;i<arr.length;i++){
    if(arr[i] == 7){
        continue;
    }
    doubledNumbers.push(arr[i]*2);
}

// console.log(doubledNumbers);

let teasNew = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas = [];

for (const tea of teasNew) {
    if(tea.length > 10){
        break;
    }
    shortTeas.push(tea);
}

console.log(shortTeas);