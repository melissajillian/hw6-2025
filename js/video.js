// Page load
var video;
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video=document.querySelector("#player1")
	video.autoplay=false;
	video.loop=false;
});

// Play
document.querySelector("#play").addEventListener("click", function () {
    video.play(); // plays the video
    document.querySelector("#volume").innerText = video.volume * 100 + "%"; // ensures the volume is at 100% when it plays
});

// Pause
document.querySelector("#pause").addEventListener("click", function () {
    video.pause(); // pauses the video
});

// Slow down - got help from stack overflow
document.querySelector("#slower").addEventListener("click", function () {
    video.playbackRate *= 0.9;
    console.log("Speed is " + video.playbackRate);
});

// Speed up - got help from stack overflow
document.querySelector("#faster").addEventListener("click", function () {
    video.playbackRate /= 0.9;
    console.log("Speed is " + video.playbackRate);
});

// Skip ahead
document.querySelector("#skip").addEventListener("click", function () {
    if (video.currentTime + 10 < video.duration) { // if the currentTime + 10 secs is less than the total duration of the video,
        video.currentTime += 10; // add 10 seconnds to skip ahead
    } else { // else, don't
        video.currentTime = 0; // goes back to the begining
    }
    console.log("Current location: " + video.currentTime); // states the current time/location you are in the video
});

// Mute/unmute - got help from stack overflow
document.querySelector("#mute").addEventListener("click", function () {
    if (video.muted === false) { // if the video is not muted, mute it
        video.muted = true;
        this.innerText = "Unmute" // change text
    }
    else{ // else - if video is muted, unmute it
        video.muted = false;
        this.innerText = "Mute" // change text
    }
});

// Volume slider - got help from stack overflow
document.querySelector("#slider").addEventListener("input", function () {
    video.volume = this.value / 100; // sets video volume based on the slider value - converts it to decimal range
    document.querySelector("#volume").innerText = video.volume * 100 + "%"; // makes a percentage by multiplying it by 100 which is what is shown on the screen
});

// Styled
document.querySelector("#vintage").addEventListener("click", function () {
    video.classList.add("oldSchool"); // adds the oldschool filter/styling
});

// Original
document.querySelector("#orig").addEventListener("click", function () {
    video.classList.remove("oldSchool"); // removes the oldschool filter/styling - the original coloring
});