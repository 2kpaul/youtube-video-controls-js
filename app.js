var player;
const currentTime = document.querySelector('#current-time');
const duration = document.querySelector('#duration');
let time_update_interval = 0;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('video', {
        width: 600,
        height: 400,
        videoId: 'NUYvbT6vTPs',
        playerVars: {
            color: 'white',
        },
        events: {
            onReady: initialize
        }
    });
}

function initialize() {

    // Update the controls on load
    updateTimerDisplay();

    // Clear any old interval.
    clearInterval(time_update_interval);

    // Start interval to update elapsed time display and
    // the elapsed part of the progress bar every second.
    time_update_interval = setInterval(function () {
        updateTimerDisplay();
        //updateProgressBar();
    }, 1000)

}

// This function is called by initialize()
function updateTimerDisplay() {
    // Update current time text display.
    currentTime.innerHTML = formatTime(player.getCurrentTime());
    duration.innerHTML = formatTime(player.getDuration());
}

function formatTime(time) {
    time = Math.round(time);

    var minutes = Math.floor(time / 60),
        seconds = time - minutes * 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    return minutes + ":" + seconds;
}