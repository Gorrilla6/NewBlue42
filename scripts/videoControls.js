window.onload = function() {
	//Video
	var video = document.getElementById("inkVideo");
	//Buttons
	var playButton = document.getElementById("play_pause");



	//Event listener for the play/pause button
	playButton.addEventListener("click", function() {
		if (video.paused == true) {
			//Play the video
			video.play();
			//Update the button text to 'Pause'
			play_pause.setAttribute('src', '../assets/imgs/pause.png');
		} else {
			//Pause the video
			video.pause();
			//Update the button text to 'play'
			play_pause.setAttribute('src', '../assets/imgs/play.png');
		}
	});

}
