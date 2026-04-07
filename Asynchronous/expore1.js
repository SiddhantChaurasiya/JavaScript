function sayHello(){
    console.log("hi there whats up");
}

setTimeout(() => {
   sayHello(); 
}, 4000);

console.log("hi");

for(let i=0;i<10;i++){
    console.log(i);
}