window.onload = function (){  // when the window loads
    var counter = document.getElementById("counter");
    var startButton = document.getElementById("start");
    var stopButton = document.getElementById("stop");
    var resetButton = document.getElementById("reset")
    var resultDisplay = document.getElementById("result")

    var timerInterval;
    var startTime;
    var elapsedTime = 0;
    var isRunning = false;

    // add event listener to the three button 
    startButton.addEventListener("click", startTimer);
    stopButton.addEventListener("click", stopTimer);
    resetButton.addEventListener("click", resetTimer);

    // start the counter when the start button is clicked
    function startTimer() {
        if (!isRunning) {
            isRunning = true;
            startTime = Date.now() - elapsedTime;
            timerInterval = setInterval(updateTimer, 10);
        }
    }

    // stop the counter when the stop button is clicked
    function stopTimer() {
        if (isRunning) {
            isRunning = false;
            clearInterval(timerInterval);
            displayResult(elapsedTime);
        }
    }

    //reset the counter when the reset button is clicked
    function resetTimer() {
        stopTimer();
        elapsedTime = 0;
        updateCounter(0);
        resultDisplay.style.display = "none";   //display non the <p> element(result)
    }

    // the function updates the timer so the counter displays the elapsed time which = (date.now - start time)
    function updateTimer() {
        elapsedTime = Date.now() - startTime;
        updateCounter(elapsedTime);
    }

    //the variables are diclared to represent the various figure displayed by the counter.
    // math.floor is called to calculate the various components of time
    function updateCounter(time) {
        var days = Math.floor(time / (1000 * 60 * 60 * 24));
        var hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60));
        var seconds = Math.floor((time % (1000 * 60 * 60 * 24)) / 1000);
        var milliseconds = time % 1000;

        //formats the counter display and replaces it with the output of the calculations
        var counterText =
          formatTime(days) +
          ":"+
          formatTime(hours) +
          ":" +
          formatTime(minutes) +
          ":" +
          formatSeconds(seconds) +
          ":" +
          formatMilliseconds(milliseconds);

        counter.textContent = counterText;
    }

    function displayResult(time) {
        var days = Math.floor(time / (1000 * 60 * 60 * 24));
        var hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60));
        var seconds = Math.floor((time % (1000 * 60 * 60 * 24)) / 1000);
        var milliseconds = time % 1000;

        var result =
          formatTime(days) +
          " Days : "+
          formatTime(hours) +
          " Hours : " +
          formatTime(minutes) +
          " Minutes : " +
          formatSeconds(seconds) +
          " Seconds : " +
          formatMilliseconds(milliseconds) +
          " Milliseconds "

        resultDisplay.textContent = result;
        resultDisplay.style.display = "block";
    }

    function formatTime(time) {
        return time < 10 ? "0" + time : time;
    }

    function formatSeconds(seconds) {
        if (seconds = 60) {
            return "00";
        } else return seconds
    }

    function formatMilliseconds(milliseconds) {
        if (milliseconds < 10) {
            return "00" + milliseconds;
        } else if (milliseconds < 100) {
            return "0" + milliseconds;
        } else{
            return milliseconds;
        }
    }
};


