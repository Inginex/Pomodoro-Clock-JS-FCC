  var audio = $("audio")[0]; 
  var mins = "25";
  var secs = "00";
  var minsBreak = "5";
  var setTime = setInterval(timeCount, 1000);
  var isTime = false;


document.getElementById("timer").onclick = function() {getTime()};

document.getElementById("reset").onclick = function(){resetTime()};

document.getElementById("less").onclick = function(){lessMins()};
document.getElementById("lessBreak").onclick = function(){lessBreak()};

document.getElementById("more").onclick = function(){addMins()};
document.getElementById("moreBreak").onclick = function(){addBreak()};

document.getElementById("addBreak").innerHTML = minsBreak;
document.getElementById("addTime").innerHTML = "25";
document.getElementById("time").innerHTML =  time = ''+ mins + ':' + secs + '';

function timeCount(){
 if (isTime == true){
  if (secs == "00"){
      secs = "60";
      mins -= 1;
    }
  
  i = 0;
    do {
      secs -= 01;
      i++;
    }
    while(i < secs.length);
  
  if (secs < "10"){
    secs = "0" + secs +"";
  }
  if (mins < 0){
    mins = 0;
  }
   if (mins == 0 && secs == 0){
     audio.play();
     breakTime();
   }
  
  time = ''+ mins + ':' + secs + '';
      $("#time").html(time);
 }
}
    
function getTime(){
  if (isTime == false){
    isTime = true;
  } else {
    isTime = false;
  }
}

function resetTime(){
  isTime = false;
  mins = "25";
  secs = "00";
  time = ''+ mins + ':' + secs + '';
  $("#time").html(time);
  $("#addTime").html(mins);
}

function addMins(){
  if (mins < 100 && isTime == false){
  mins = parseInt(mins) + 1; 
  time = ''+ mins + ':' + secs + '';
  $("#time").html(time);
  $("#addTime").html(mins);
  }
}
function lessMins(){
  if(mins > 1 && isTime == false){
  mins -= 1; 
  time = ''+ mins + ':' + secs + '';
  $("#time").html(time);
  $("#addTime").html(mins);
  }
}

function addBreak() {
  if (minsBreak < 100){
    minsBreak = parseInt(minsBreak) + 1;
    $("#addBreak").html(minsBreak);
  }
  
}
function lessBreak(){
  if (minsBreak > 1){
    minsBreak -= 1;
    $("#addBreak").html(minsBreak);
  }
  
}

function breakTime(){
  isTime = true;
  mins = minsBreak;
  secs = "00";
  time = ''+ mins + ':' + secs + '';
  $("#time").html(time);
}

window.alert("Instructions:   1) Click on the clock to Start/Pause the same.   2) The first button set the Break Length.    3) The second button reset the time.   4) The third button set the Time Lenght");