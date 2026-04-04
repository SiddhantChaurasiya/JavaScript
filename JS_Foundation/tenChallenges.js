let teaFlavors = ["green tea", "black tea", "oolong tea"];
let firstTea = teaFlavors[0];
// console.log(firstTea);

let cities = ["London", "Tokyo", "Paris", "New York"];
let favouriteCity = cities[2];
// console.log(favouriteCity);

let teaTypes = ["herbal tea","white tea", "masala chai"];
teaTypes[1] = "jasmine tea";
// console.log(teaTypes);

let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
let lastOrder = teaOrders.pop();
// console.log(lastOrder);
// console.log(teaOrders);


let popularTeas = ["greenTea", "oolong Tea", "chai"];
let softCopyTeas = popularTeas;
popularTeas.pop();

// console.log(softCopyTeas);
// console.log(popularTeas);

let topCities = ["Berlin","Singapore", "New York"];
let hardCopyCities = [...topCities];

topCities.pop();
// console.log(topCities);
// console.log(hardCopyCities);

let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];

let worldCities = [...europeanCities, ...asianCities];
// console.log(worldCities);

let teaMenu = ["masala chai", "oolong tea", "green tea", "earl grey"];
let menuLength = teaMenu.length;
// console.log(menuLength);

let cityBucketList = ["kyoto", "London", "Cape Town", "Vancouver"];
let isLondonInList = cityBucketList.includes("London");
console.log(isLondonInList);