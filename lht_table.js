"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Review Assignment

   Author: Daniel Garcia
   Date:   2-3-20

	
*/

// standard stuff, just declaring the global variables and dates
var thisDay = new Date("8/30/2018");
var tableHTML = "<table id='eventTable'> <caption>Upcoming Events</caption> <tr><th>Date</th><th>Event</th><th>Price</th></tr>";

// adds days ahead to the current date
var endDate = new Date(thisDay.getTime() + 14 * 24 * 60 * 60 * 1000);

// the güd stuff, loop for the events
for(var i = 0; i < eventDates.length; i++){
   var eventDate = new Date(eventDates[i]);
   var eventDay = eventDate.toDateString();
   var eventTime = eventDate.toLocaleDateString();

   // changes the description and m o n e y
   if(thisDay <= eventDate && eventDate <= endDate){
      tableHTML += "<tr> <td>" + eventDay + "@" + eventTime + "</td> <td>" + eventDescriptions[i] + "</td> <td>" + eventPrices[i] + "</td> </tr>";
   }
}

// the finishing touches
tableHTML += "</table>";
document.getElementById("eventList").innerHTML = tableHTML;