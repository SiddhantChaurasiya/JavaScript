function makeTea(typeofTea){
    return `Making ${typeofTea}`;
}

let teaOrder = makeTea("green tea");
// console.log(teaOrder);

function orderTea(teaType){
    function confirmOrder(){
        return `Order confirmed for ${teaType}`;
    }
    return confirmOrder();
}

// console.log(orderTea("chai"));

const calculatedTotal = (price, quantity) => price * quantity;


let totalCost = calculatedTotal(499, 100);
console.log(totalCost);