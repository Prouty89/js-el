const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


function runClock(){
    var date = new Date();
    console.log(date);
    let hr = date.getHours();
    let min = date.getMinutes();
    let hr = date.getSeconds();
    console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);

    let hrPosition = (hr*360/12)+(min*(360/60)/12);
    let minPosition = (min*360/60)+(sec*(360/60)/60);
    let secPosition = sec*360/60;

    HOURHAND.getElementsByClassName.transform = "rotate(" + hrPosition + "deg)"
    MINUTEHAND.getElementsByClassName.transform = "rotate(" + minPosition + "deg)"
    SECONDHAND.getElementsByClassName.transform = "rotate(" + secPosition + "deg)"
}

var interval = setInterval(runClock, 1000);

