// let audio = new Audio('ram.mp3');
// audio.play();

let now = document.getElementById("now");
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let sec = document.getElementById("sec");
let setAlarm = document.getElementById("setA");

const nowTime = () => {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let sec = date.getSeconds();
    now.innerHTML = `
        ${(hour > 9) ? hour : '0' + hour}:${(minute > 9) ? minute : '0' + minute}:${(sec > 9) ? sec : '0' + sec}
        `
}
nowTime()
setInterval(nowTime, 1000)

setAlarm.addEventListener("click", () => {
    function play() {
        var audio = new Audio('playback.m4a');
        audio.play();
    }
    if (hour.value == "" || minute.value == "" || sec.value == "") {
        console.log("You Entered incorrect value")
        alert("Please enter hours, minutes and seconds in the input boxes")
    }
    else {
        if (hour.value >= 24 || hour.value < 0 || minute.value >= 60 || minute.value < 0 || sec.value >= 60 || sec.value < 0) {
            console.log("You Entered incorrect value")
            alert("You entered an incorrect time\nPlease enter correct time")
        }
        else {
            console.log("You Entered correct value")
            let setTime = ((hour.value * 60 * 60 * 1000) + (minute.value * 60 * 1000) + (sec.value * 1000));

            let date = new Date();
            let h = date.getHours();
            let m = date.getMinutes();
            let s = date.getSeconds();
            let ct = ((h * 60 * 60 * 1000) + (m * 60 * 1000) + (s * 1000));
            console.log(setTime, ct);

            setTimeout(() => {
                play()
            }, setTime - ct);
        }
    }
})