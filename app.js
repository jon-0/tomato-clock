// sync user preference of timer with displayed timer
var timer = $("#timer");
var timerHTML = $("#timer").html();
var startButton = $("#startButton");

//initialize display
timer.html(timerHTML);

// add functionality to plus and minus buttons
	$("#minusTimer").click(function(){
		// decrease timer variable
		timerHTML--;
		console.log(timerHTML);
		timer.html(timerHTML);
	});

	$("#plusTimer").click(function(){
	// increase timer variable
		timerHTML++;
		console.log(timerHTML);
		timer.html(timerHTML);
	});


// add timer/countdown function

function convert_time (){
	var minutes = parseInt(timerHTML);
	console.log(minutes);
	var seconds = minutes * 60;
	return seconds;
}

startButton.click(function(){
	console.log("start button was clicked.")

	var seconds_left = convert_time();

	var interval = setInterval(function() {
		var minute_display = Math.floor(seconds_left / 60);
		var seconds_display = Math.floor(seconds_left % 60);
		seconds_display = '0' + seconds_display.toString()
		seconds_display = seconds_display.slice(-2);
    	$('#timer').html(minute_display + ":" + seconds_display);
    	console.log('total seconds left: ' + seconds_left);
    	
    	if (seconds_left <= 0) {
        	$('#timer').html('Time for a break!');
        	clearInterval(interval);
    	} else {
    		--seconds_left;
    	}
	}, 1000)	

});



// notes
/* 

at the end of the timer, turn button into "reset" and when pressed it should reset the clock and allow
the user to change the timer setting again

disable timer length changing while clock is running


*/










