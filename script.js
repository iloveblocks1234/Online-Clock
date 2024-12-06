let active = true;
let page = 1;
let op;
let counter1 = 0;
let counter2 = 0;
let counter3 = 0; 
let counter4 = 0;
let counter1p = 0;
let counter2p = 0;
let counter3p = 0; 
let counter4p = 0;
let counter = false;
function hide() {
   if (active) {
       active = false;
       document.getElementById("time").textContent = '';
       document.getElementById("date").textContent = '';
       document.getElementById("back").style.display = 'none';
       document.getElementById("next").style.display = 'none';
   } else {
       active = true;
       window.location.reload();
   };
   
}
function count() {
    if (counter) {
        if (counter1 > 59) {
            counter2+=1;
            counter1 = 0;
            if (counter2 > 59) {
                counter3+=1;
                counter2 = 0;
            };
        };
        counter1+=0.2383;
        counter1p = Math.round(counter1).toString().padStart(2, '0');
        counter2p = counter2.toString().padStart(2, '0');
        counter3p = counter3.toString().padStart(2, '0');
        counter4p = counter4.toString().padStart(2, '0');

        document.getElementById("stopwatchtime").textContent = counter4p + ':' + counter3p + ":" + counter2p + ":" + counter1p;
    };
    if (page != 2) {
        counter = false;
        counter1 = 0;
        counter2 = 0;
        counter3 = 0; 
        counter4 = 0;
        counter1p = 0;
        counter2p = 0;
        counter3p = 0; 
        counter4p = 0;
        document.getElementById("stopwatchtime").textContent = '00:00:00:00';
    };
    document.getElementById("pause").onclick = function() {
        counter = false;
    };
    document.getElementById("reset").onclick = function() {
        counter = false;
        counter1 = 0;
        counter2 = 0;
        counter3 = 0; 
        counter4 = 0;
        counter1p = 0;
        counter2p = 0;
        counter3p = 0; 
        counter4p = 0;
        document.getElementById("stopwatchtime").textContent = '00:00:00:00';
    }
}
function getTime() {
   if (active) {
       var time=new Date();
       var hour=String(time.getHours());
       var minute=String(time.getMinutes());
       var second=String(time.getSeconds());
       var day=String(time.getDay()+1);
       var month=String(time.getMonth()+1);
       var year=String(time.getFullYear());
       var millisecond=String(time.getMilliseconds());
       if (second.length==1) {second=String("0")+second};
       if (millisecond.length == 0) {millisecond=String("000")+millisecond;} else if (millisecond.length == 1) {millisecond=String("00")+millisecond;} else if (millisecond.length == 2) {millisecond=String("0")+millisecond;};
       if (hour.length==1) {hour=String("0")+hour;};
       if (minute.length==1) {minute=String("0")+minute;};
       if (hour>11) {var ampm = 'pm';if (hour>12) {hour-=12;};} else {var ampm='am';};
       if (day.length==1) {day=String("0")+day;};    
       if (month.length==1) {month=String("0")+month;};
       document.getElementById("time").textContent=hour+":"+minute+":"+second+":"+millisecond+" "+ampm;
       document.getElementById("date").textContent=month+"/"+day+"/"+year;
       document.getElementById("hide").innerHTML="Hide";
   } else {
       document.getElementById("hide").innerHTML="Show";
   };
}
function stopwatch(op) {
   if (op == 1) {
        counter = true;
   };
}
function setPage(digit) {
   if (digit == 1) {
       page++;
   } else if (digit == 0) {
       page--;
       
   };
   if (page == 1) {
       document.getElementById("name1").style.display = 'block';
       document.getElementById("back").style.display = 'inline';
       document.getElementById("time").style.display = 'block';
       document.getElementById("date").style.display = 'block';
       document.getElementById("next").style.display = 'inline';
       document.getElementById("name2").style.display = 'none';
       document.getElementById("hide").style.display = 'inline';
       document.getElementById("stopwatchtime").style.display = 'none';
       document.getElementById("begin").style.display = 'none';
       document.getElementById("pause").style.display = 'none';
       document.getElementById("reset").style.display = 'none';
   } else if (page == 2) {
       document.getElementById("name1").style.display = 'none';
       document.getElementById("back").style.display = 'inline';
       document.getElementById("time").style.display = 'none';
       document.getElementById("date").style.display = 'none';
       document.getElementById("next").style.display = 'none';
       document.getElementById("name2").style.display = 'block';
       document.getElementById("hide").style.display = 'none';
       document.getElementById("stopwatchtime").style.display = 'block'
       document.getElementById("begin").style.display = 'inline';
       document.getElementById("pause").style.display = 'inline';
       document.getElementById("reset").style.display = 'inline';
   } else if (page == 0) {
       document.getElementById("name1").style.display = 'none';
       document.getElementById("back").style.display = 'none';
       document.getElementById("time").style.display = 'none';
       document.getElementById("date").style.display = 'none';
       document.getElementById("next").style.display = 'inline';
       document.getElementById("name2").style.display = 'none';
       document.getElementById("hide").style.display = 'none';
       document.getElementById("stopwatchtime").style.display = 'none';
       document.getElementById("begin").style.display = 'none';
       document.getElementById("pause").style.display = 'none';
       document.getElementById("back").style.display = 'hide';
       document.getElementById("reset").style.display = 'none';
   };
}
document.getElementById("name1").style.display = 'block';
document.getElementById("time").style.display = 'block';
document.getElementById("date").style.display = 'block';
document.getElementById("next").style.display = 'inline';
document.getElementById("name2").style.display = 'none';
document.getElementById("hide").style.display = 'inline';
document.getElementById("stopwatchtime").style.display = 'none';
document.getElementById("begin").style.display = 'none';
document.getElementById("pause").style.display = 'none';
document.getElementById("reset").style.display = 'none';
setInterval(count, 1);
setInterval(getTime, 1);
