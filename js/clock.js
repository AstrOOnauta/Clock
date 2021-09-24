
setInterval(clock, 1)   //Call the function clock() to update time in web page

//Function to work the digital clock
function clock(){
    var date = new Date()
    var hour = date.getHours()
    var minutes = date.getMinutes()
    var seconds = date.getSeconds()
    var utcOffset = Number((date.getTimezoneOffset())/60)   //convert timezone of minutes to hours

    //Mechanism to format the time in digital clock
    if(hour<10){
        hour = "0"+hour
    }
    if(minutes<10){
        minutes = "0"+minutes
    }
    if(seconds<10){
        seconds = "0"+seconds
    }

    //Switch the timezone's country
    switch(utcOffset){
        case 3:
            document.getElementById("utcOffset").textContent = "(UTC-03:00 - Brasil)";
            break;
        default:
            document.getElementById("utcOffset").textContent = "(Outro país)";
    }

    //Format the time in digital clock and apply this time in web page
    var clockTime = hour+":"+minutes+":"+seconds
    document.getElementById("clock").textContent = clockTime
}

//Variables for support the timer in web pages
var hourTimer = 0;
var minutesTimer = 0;
var secondsTimer = 0;
var time = 1000     //1000miliseconds = 1second
var aux

//Function to start the timer
function startTimer(){
    aux = setInterval(function(){timer()}, time)    //Call the mechanism to timer to work each 1second
    document.getElementById("startButton").disabled = true
}

//Function to stop the timer
function stopTimer(){
    clearInterval(aux)
    document.getElementById("startButton").disabled = false
}

//Function to restart the time in timer
function restartTimer(){
    clearInterval(aux)
    hourTimer = 0;
    minutesTimer = 0;
    secondsTimer = 0;
    document.getElementById("timer").innerHTML = "00:00:00"
    document.getElementById("startButton").disabled = false
}

//Function to the timer mechanism
function timer(){
    secondsTimer++  //Increment the seconds when timer is called each 1second

    //increment minutes and hours in timer display
    if(secondsTimer == 60){
        secondsTimer = 0
        minutesTimer++
        if(minutesTimer == 60){
            minutesTimer = 0
            hourTimer++
        }
    }

    //Mechanism to format the time in timer
    if(secondsTimer<10){
        secondsNewTimer = "0"+secondsTimer
    }else{
        secondsNewTimer = secondsTimer
    }
    if(minutesTimer<10){
        minutesNewTimer = "0"+minutesTimer
    }else{
        minutesNewTimer = minutesTimer
    }
    if(hourTimer < 10){
        hourNewTimer = "0"+hourTimer
    }else{
        hourNewTimer = hourTimer
    }

    //Format the time in timer and apply this time in web page
    var format = hourNewTimer+":"+minutesNewTimer+":"+secondsNewTimer
    document.getElementById("timer").innerHTML = format
}
