// example 1

let hold = document.getElementById('changeTextButton').addEventListener('click', function (){
    let paragraph = document.getElementById('myParagraph');
    paragraph.textContent = "the paragraph is changed";
});

// example 2

document.getElementById('highlightFirstCity').addEventListener('click', function(){
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add('highlight');
})

// example 3

let chnageOrderBtn = document.getElementById('changeOrder');
chnageOrderBtn.addEventListener('click', function(){
    let hold = document.getElementById("coffeeType");
    hold.textContent = "Espresso";
})

// example 4

let addNewItemBtn = document.getElementById('addNewItem');

addNewItemBtn.addEventListener('click', function(){
    let newItem = document.createElement('li');
    newItem.textContent = "Eggs";
    document.getElementById('shoppingList').appendChild(newItem);
})

// example 5

let removeLastTaskBtn = document.getElementById('removeLastTask');

removeLastTaskBtn.addEventListener('click', function(){
    let taskList = document.getElementById('taskList');
    taskList.lastElementChild.remove();
})

// example 6

document.getElementById('clickMeButton').addEventListener('dblclick', function (){
    alert("siddhant clicked on me!")
})

// example 7

document.getElementById('teaList').addEventListener('click', function (event) {
    if(event.target && event.target.matches(".teaItem")){
        alert("You selected: " + event.target.textContent);
    }
});

// example 8

document.getElementById('feedbackForm').addEventListener('submit', function(event){
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback);
});

// example 9

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('domStatus').textContent = "DOM fully loaded"
})

// example 10

let toggleHighlightBtn = document.getElementById('toggleHighlight');
toggleHighlightBtn.addEventListener('click', function(){
    let descriptionText = document.getElementById("descriptionText");
    descriptionText.classList.add('highlight');
});