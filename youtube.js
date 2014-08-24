//Author: Abenezer Mamo || Company: ElitePowered, Inc. || License: The MIT License (MIT) Copyright © 2014 ElitePowerd, Inc.
console.log("Loading script...");
var page = require('webpage').create();
page.onConsoleMessage = function(msg) {
console.log(msg);
};


page.open("https://www.youtube.com/playlist?list=PLrEnWoR732-BHrPp_Pm8_VleD68f9s14-", function(status) {
      if ( status === "success" ) {
             page.evaluate(function() {
                   //Hide the menu
                   document.getElementById("appbar-guide-button").click();
             });
             //Screenshot of the status is generated.
             window.setTimeout(function () {
                   //Set file name to curret date
                   var currentDate = new Date();
                   var day = currentDate.getDate();
                   var month = currentDate.getMonth() + 1;
                   var year = currentDate.getFullYear();
                   var currentTime = new Date();
                   var hours = currentTime.getHours();
                   var minutes = currentTime.getMinutes();
                   if (minutes < 10){minutes = "0" + minutes};
                   var suffix = "AM";
                   if (hours >= 12) {
                        suffix = "PM";
                        hours = hours - 12;
                   }
                   if (hours == 0) {
                        hours = 12;
                   }
                   var file_name = (day + "-" + month + "-" + year +"#" + hours + "-" + minutes+ suffix +".png");
                   console.log(file_name);
                   setTimeout(10000);
                   //Sets the size of the screen which in turn will adjust the size of the screenshot produced.
                   page.viewportSize = {width: 1280, height: 1024};
                   page.render(file_name);
                   console.log("YouTube homepage archive created.");
                   console.log("Exiting script...");
                   phantom.exit();
             }, 10000);
      }
});
