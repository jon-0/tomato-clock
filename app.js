// sync user preference of timer with displayed timer
var timer = $("#timer");
var timerLengthHTML = $("#timerLength").html();
var startButton = $("#startButton");

//initialize display
timer.html(timerLengthHTML);

// add functionality to plus and minus buttons
	$("#minusTimer").click(function(){
		// decrease timer variable
		timerLengthHTML--;
		console.log(timerLengthHTML);
		$("span#timerLength").html(timerLengthHTML);
		timer.html(timerLengthHTML);
	});

	$("#plusTimer").click(function(){
	// increase timer variable
		timerLengthHTML++;
		console.log(timerLengthHTML);
		$("span#timerLength").html(timerLengthHTML);
		timer.html(timerLengthHTML);
	});


// add timer/countdown function

var seconds_left = 10;	

startButton.click(function(){
	console.log("start button was clicked.")
	setInterval(function() {
    	$('#timer').html(--seconds_left);
    	console.log(seconds_left);
    	
    	if (seconds_left <= 0) {
        	$('#timer').html('Time for a break!');
        	clearInterval();
    	}
	}, 1000)	
});



// notes
/* 

at the end of the timer, turn button into "reset" and when pressed it should reset the clock and allow
the user to change the timer setting again

disable timer length changing while clock is running

finish math for timer function
	convert to minutes and seconds display



*/










