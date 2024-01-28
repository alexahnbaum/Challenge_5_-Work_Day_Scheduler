// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var displayCurrentDayEl = $("#currentDay");
// var textInputHour9El = $("#hour-9");
var saveButtonEl = $(".btn");
var hourDivEl = $("#calendar_day");

// Displayed time
var timeDisplay =
  dayjs().format("dddd") +
  ", " +
  dayjs().format("MMMM DD") +
  ", " +
  dayjs().format("YYYY");

displayCurrentDayEl.text(timeDisplay);
// Variable for current time
var currentTime = dayjs().format("hA");
console.log(currentTime);
// var currentIndex = 0;

// Hours for the day
var hourOfDay = [
  "9AM",
  "10AM",
  "11AM",
  "12PM",
  "1PM",
  "2PM",
  "3PM",
  "4PM",
  "5PM",
];

// $(".hourDay").append(hourOfDay.currentIndex);

// Variable of one row
var rowsCreated =
  '<div class="row time-block">\
  <div class="col-2 col-md-1 hour text-center py-3 hourDay"></div>\
  <textarea class="col-8 col-md-10 description" rows="3"> </textarea>\
  <button class="btn saveBtn col-2 col-md-1" aria-label="save">\
  <i class="fas fa-save" aria-hidden="true"></i>\
  </button>\
</div>';

// Function to create all of the rows
function createRow() {
  console.log("creating rows");

  for (let i = 0; i < hourOfDay.length; i++) {
    $("#calendar_day").append(rowsCreated);
  }

  var divs = $(".time-block");
  var hourPosted = $(".hourDay");

  $.each(hourOfDay, function (index, value) {
    divs.eq(index).attr("id", value);
    hourPosted.eq(index).text(value);
  });

  // Using console.log to check if times show in each time-block div
  var blockDivs = $(".hourDay");
  for (var i = 0; i < blockDivs.length; i++) {
    console.log(blockDivs[i].innerText);
  }

  // Testing to see if can add present class to text area class - yes below
  // $("textarea").addClass("present");

  // Checking time to display past, present, or future
  if ("#id" == currentTime) {
    $("textarea").addClass("present");
  }
}

// Calling the createRow function
createRow();

// Save to local storage function
// function saveData() {
//   saveData.preventDefault();

//   // var typedEvent = $("textarea");
//   // console.log(typedEvent);
// }

// Save button click to save data to local storage
$(".btn").click(function (event) {
  event.preventDefault();
  console.log("saving data");
  var userInput = $("<textarea").value;
  localStorage.setItem("description", JSON.stringify(userInput));
});

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
