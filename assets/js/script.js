
// function to get todays date
var currentDate = function() {
    var day = moment().format("MM-DD-YYYY");

    var dateEl = document.createElement("p");
    dateEl.textContent = ("Todays date is " + day);
    return dateEl;
      
}

const p = document.querySelector("#currentDay");

p.appendChild(currentDate("home"));

// var hourInput