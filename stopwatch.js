let stopwatchDisplay = document.getElementById('stopwatch');
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');
let lapButton = document.getElementById('lap');
// Globalization of variables
let timeInterval;
let seconds = 1;

// Start button which contains every other button event listener
startButton.addEventListener('click', () => {
    // Set function to update time every second
    timeInterval = setInterval(() => {
            stopwatchDisplay.innerText = seconds;
            seconds += 1;
    }, 1000);
    // Stop Button
    stopButton.addEventListener('click', () => {
        clearInterval(timeInterval);
    });
    // Lap Button, which appends a div to the body
    lapButton.addEventListener('click', () => {
        const lapLog = document.createElement('div');
        const lapLogContent = document.createTextNode(seconds + "\n");
        lapLog.style.background = "gray";
        lapLog.style.width = '200px';
        lapLog.style.height = "200px";
        lapLog.style.textAlign = 'center';
        lapLog.style.display = "inline-block";
        lapLog.style.margin = "20px";
        lapLog.style.borderRadius = "10%";
        lapLog.appendChild(lapLogContent);
        document.body.appendChild(lapLog);
    });
    // Reset Button
    resetButton.addEventListener('click', () => {
        seconds = 0;
        stopwatchDisplay.innerText = "0";
        clearInterval(timeInterval);
    });

});
