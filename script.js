$(function () {
  // Wrap all code that interacts with the DOM in a call to jQuery to ensure that
  // the code isn't run until the browser has finished rendering all the elements
  // in the html.

  // Displayed time
  var timeDisplay = dayjs().format("dddd, MMMM DD, YYYY");
  $("#currentDay").append(timeDisplay);

  // Variable for current time
  var currentTime = dayjs();
  console.log(currentTime);
  console.log(currentTime.hour());

  // Need time of schedule created as constant variables
  var kStartingTime = 9;
  var kEndingTime = 17;

  // Create time-block rows - one element at a time

  // Create a forloop to use constant variable values of kStartingTime or kEndingTime in the hour id's
  for (let i = kStartingTime; i < kEndingTime; i++) {
    var timeTravel;
    var currentHour = currentTime.hour();
    if (i === currentHour) {
      timeTravel = "present";
    } else if (i < currentHour) {
      timeTravel = "past";
    } else {
      timeTravel = "future";
    }

    // Creates and appends hour Divs for content to go in later
    var hourDiv = $("<div>")
      .attr("id", "hour-" + i)
      .attr("class", "row time-block " + timeTravel);

    $("#calendar_day").append(hourDiv);

    // Displays time and AM/PM in next div class - also converts 12+ hours back into 1-12 hours
    var hourAMPM;
    if (i < 12) {
      hourAMPM = i + "AM";
    } else if (i === 12) {
      hourAMPM = i + "PM";
    } else {
      hourAMPM = i - 12 + "PM";
    }

    console.log(hourAMPM);

    // Creates and appends time display, text field, button, and button image
    var timeShown = $("<div>")
      .attr("class", "col-2 col-md-1 hour text-center py-3")
      .text(hourAMPM);
    var textInput = $("<textarea>")
      .attr("class", "col-8 col-md-10 description")
      .attr("rows", "3");
    var button = $("<button>")
      .attr("class", "btn saveBtn col-2 col-md-1")
      .attr("aria-label", "save");
    var buttonImage = $("<image>")
      .attr("class", "fas fa-save")
      .attr("aria-hidden", "true");

    $("#hour-" + i)
      .append(timeShown)
      .append(textInput)
      .append(button);
  }

  // Button image needs to be created outside of the forloop
  $("button").append(buttonImage);

  // Save button click to save data to local storage

  $("button").click(function () {
    console.log("saving data");
    var hourOfDay = $("button").parent(".btn");
    console.log(hourOfDay);
    // localStorage.setItem(hourOfDay, text placeholder);
  });

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
