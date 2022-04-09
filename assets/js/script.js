var tasks = {};
var currentDayEl = document.getElementById("currentDay");
var currentTime = moment().format("HH:mm");


//set day as today and load any saved tasks
var scheduleDay = function() {
    console.log(currentTime);
   currentDayEl.textContent = moment();
   createSchedule();
   console.log("schedule created");
  // loadTasks();
};


//create an empty schedule
var createSchedule = function(){
    
    for( var i = 0; i < 10; i++) {
        console.log(tasks.length);
        var taskLi = $("<li>").addClass("row");
        if (i < 5){
        var taskHour = $("<span>")
            .addClass("hour col-1")
            .text(i + 8);
        } else {
            var taskHour = $("<span>")
            .addClass("hour col-1")
            .text(i - 4); 
        }
        var taskText = $("<p>")
            .addClass("description future col-10")
            .text(" ");
        var savebtn = $("<button>")
            .addClass("savebtn")
            .text("save");
        taskLi.append(taskHour, taskText, savebtn);
        $("#task-list").append(taskLi);
    }
    
};


//create the elements that make up a task item
// var createTask = function(taskText, taskTime) {
//     var taskLi = $("<li>").addClass("row");
//     var taskHour = $("<span>")
//         .addClass("hour")
//         .text(taskTime);
//     var taskInfo = $("<span>")
//         .addClass("description")
//         .text(taskText);

//     //append to parent li
//     taskLi.append(taskHour, taskInfo);

//     //check the current time
//     auditTask(taskLi);

//     //append to ul on the page
//     $("#task-list").append(taskLi);
// }

// var loadTasks = function() {
//     //load existing tasks from local storage
//     tasks = JSON.parse(localStorage.getItem("tasks"));
    
//     if (!tasks) {
//         tasks = {};
//     }

//     $.each(tasks, function(list, arr){
//         arr.forEach(function(task){
//             createTask(task.text, task.time);
//         });
//     });
// };

// //Save Tasks to local storage

// var saveTasks = function() {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
// };

// var auditTask = function(taskEl) {
//     //get time from task element
//     var time = $(taskEl)
//         .find("hour")
//         .text()
//         .trim();
//     //convert to moment object/time
//     var time = moment(time, "L").set("hour", time);

//     //remove any old classess from element
//     $(taskEl).removeClass("past present future");
//     if (moment().isAfter(time)) {
//         $(taskEl).addClass("past");
//     } else if (moment().isBefore(time)) {
//         $(taskEl).addClass("future");
//     } else 
//         $(taskEl).addClass("present");
// };

scheduleDay();
console.log("clickity-clack");

// task text was clicked
$("#task-list").on("click", "p", function() {
    // get current text of element
    var text = $(this)
        .text()
        .trim();

    // replace element with a new text area
    var textInput = $("<textarea>").addClass("form-control").val(text);
    $(this).replaceWith(textInput);

    //auto focus new element
    textInput.trigger("focus");
});

//editable field was un-focused
$("#task-list").on("blur", "textarea", function() {
    //get the current value of the text area
    var text = $(this).val();

    var index = $(this)
        .closest("#task-list")
        .index();

    // //update array
    // tasks[index].text = text;
    // saveTasks();

    //recreate p element
    var taskP = $("<p>")
        .addClass("description, col-10")
        .text(text);

    $(this).replaceWith(taskP);

});

// audit task due dates every 30 minutes
setInterval(function() {
    $(".container").each(function() {
      auditTask($(this));
    });
  }, 1800000);