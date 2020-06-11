var wakeUpTime = 7;
var noon = 13;
var lunchtime = 13;
var naptime = lunchtime + 2;
var evening = 18;
// Trying to get the clock to display
var showCurrentTime = function(){
    var clock = document.getElementById("clock");

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var min = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var early = "AM";

    // Set Hours
    if(hours >= noon){
        early = "PM";
    } 
    if(hours > noon){
        hours = hours - 12;
    } 
    if(min < 10 ){
        minutes = "0" + min;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    var clockTime = hours + ":" + min + ":" + seconds + " " + early + "!";
    clock.innerText = clockTime;
}

var updateClock = function(){
    var time = new Date().getHours();
    var messageText;
    var image ="./images/tobylunchtime.png"

    var timeEventJS = document.getElementById("timeEvent");
    var indexImage = document.getElementById("mainImages");

    if(time == wakeUpTime){
        image = "./images/workingtoby2.jpg";
        messageText = "Toby Is Coding The Next Facebook";
    } else if(time  == lunchtime){
        image ="./images/tobyeatinglunch.jpg";
        messageText = "Toby Is Eating Lunch";
    } else if(time  == naptime){
        image = "./images/tobysleeping.jpg";
        messageText = "Toby Is Asleep";
    } else if (time < noon){
        image = "./images/tobysleeping.jpg";
        messageText = "Good Morning: Toby Is Waking Up";
    } else if(time >= evening){
        image = "./images/tobyhiking.jpg";
        messageText = "Good Evening:Toby Is Hiking";
    } else {
        image = "./images/workingtoby2.jpg";
        messageText = "Good Afternoon:Toby Is Coding";
    }
    console.log(messageText); 
    timeEventJS.innerText = messageText;
    indexImage.src = image;
    showCurrentTime();
}
updateClock();
var oneSecond = 1000;
setInterval(updateClock, oneSecond);

// Activates Wake-Up Selector 
var wakeUpTimeSelector = document.getElementById("")