// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  $('.saveBtn').on('click', function ()
  {// on the next line we use the class
    var calendarEvent = $(this).siblings('.description').val();
    var hour = $(this).parent().attr('id');
    console.log(hour);
    localStorage.setItem( hour, calendarEvent );
    console.log(JSON.stringify(calendarEvent));
  });
  // TODO: Add code to apply the past, present, or future class to each time
  var now = dayjs().format('HH'); // Perfect! (it's local military time)
  var slots = $('.time-block');
  //console.log(slots);
  //console.log(slots[0]);
  slots.each( function()
  {
    var timeBlock = parseInt( $(this).attr('id').split('-')[1]);
    console.log(timeBlock);
    if( timeBlock > now )
      $(this).addClass("future");
    if( timeBlock < now )
      $(this).addClass("past");
    if( timeBlock == now )
      $(this).addClass("present");

  });

  slots.each( function()
  {
    var activity = localStorage.getItem( $(this).attr('id') ) || "";
    console.log(activity)
    $(this).children("div").siblings("textarea").text( activity );
  });// while on the above line we use the element type (<textarea>)

  // TODO: Add code to display the current date in the header of the page.
  $('#currentDay').text( dayjs().format('MMMM D, YYYY h:mm A') );
});
