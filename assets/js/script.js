var tasks = {};
var currentDayEl = document.getElementById("currentDay");

var scheduleDay = function() {
   currentDayEl.textContent = moment();
};


// var loadTasks = function() {

// }

scheduleDay();