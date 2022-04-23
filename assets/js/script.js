
// function to get todays date
var currentDate = function() {
    var day = moment().format("MM-DD-YYYY");

    var dateEl = document.createElement("p");
    dateEl.textContent = ("Todays date is " + day);
    return dateEl;
      
}



var currentTime = +moment().format("HH");
// console.log(currentTime)

const p = document.querySelector("#currentDay");

p.appendChild(currentDate("home"));



// variables for grabbing elements
var btn9 = document.getElementById("9btn");
var txt9 = document.getElementById("9text");

var btn10 = document.getElementById("10btn");
var txt10 = document.getElementById("10text");

var btn11 = document.getElementById("11btn");
var txt11 = document.getElementById("11text");

var btn12 = document.getElementById("12btn");
var txt12 = document.getElementById("12text");

var btn1 = document.getElementById("1btn");
var txt1 = document.getElementById("1text");

var btn2 = document.getElementById("2btn");
var txt2 = document.getElementById("2text");

var btn3 = document.getElementById("3btn");
var txt3 = document.getElementById("3text");

var btn4 = document.getElementById("4btn");
var txt4 = document.getElementById("4text");

var btn5 = document.getElementById("5btn");
var txt5 = document.getElementById("5text");

var clearBtn = document.getElementById("clear")

// function for clearing local storage
clearBtn.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.clear();
    document.location.reload(true)
})

// functions for saving
btn9.addEventListener("click", function (event) {
    event.preventDefault();

    var userText = txt9.value;

    localStorage.setItem("User input 9AM" ,userText)
});

btn10.addEventListener("click", function (event) {
    event.preventDefault();

    var userText = txt10.value;

    localStorage.setItem("User input 10AM" ,userText)
});

btn11.addEventListener("click", function (event) {
    event.preventDefault();

    var userText = txt11.value;

    localStorage.setItem("User input 11AM" ,userText)
});

btn12.addEventListener("click", function (event) {
    event.preventDefault();

    var userText = txt12.value;

    localStorage.setItem("User input 12PM" ,userText)
});

btn1.addEventListener("click", function (event) {
    event.preventDefault();

    var userText = txt1.value;

    localStorage.setItem("User input 1PM" ,userText)
});

btn2.addEventListener("click", function (event) {
    event.preventDefault();

    var userText = txt2.value;

    localStorage.setItem("User input 2PM" ,userText)
});

btn3.addEventListener("click", function (event) {
    event.preventDefault();

    var userText = txt3.value;

    localStorage.setItem("User input 3PM" ,userText)
});

btn4.addEventListener("click", function (event) {
    event.preventDefault();

    var userText = txt4.value;

    localStorage.setItem("User input 4PM" ,userText)
});

btn5.addEventListener("click", function (event) {
    event.preventDefault();

    var userText = txt5.value;

    localStorage.setItem("User input 5PM" ,userText)
});

// funcion to load saved data
function loadTask9() {
    var userContent = localStorage.getItem("User input 9AM");
    txt9.textContent = userContent;
}

function loadTask10() {
    var userContent = localStorage.getItem("User input 10AM");
    txt10.textContent = userContent;
}

function loadTask11() {
    var userContent = localStorage.getItem("User input 11AM");
    txt11.textContent = userContent;
}

function loadTask12() {
    var userContent = localStorage.getItem("User input 12PM");
    txt12.textContent = userContent;
}

function loadTask1() {
    var userContent = localStorage.getItem("User input 1PM");
    txt1.textContent = userContent;
}

function loadTask2() {
    var userContent = localStorage.getItem("User input 2PM");
    txt2.textContent = userContent;
}

function loadTask3() {
    var userContent = localStorage.getItem("User input 3PM");
    txt3.textContent = userContent;
}

function loadTask4() {
    var userContent = localStorage.getItem("User input 4PM");
    txt4.textContent = userContent;
}

function loadTask5() {
    var userContent = localStorage.getItem("User input 5PM");
    txt5.textContent = userContent;
}

// functions to add color based on time


loadTask9()
loadTask10()
loadTask11()
loadTask12()
loadTask1()
loadTask2()
loadTask3()
loadTask4()
loadTask5()