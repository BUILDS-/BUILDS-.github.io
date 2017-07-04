/**
 * Used to mute and unmute the music on the front page.
 */
var audio = document.getElementById('background_audio');
$(".bar").addClass("noAnim");
audio.muted = !audio.muted;
var clicked = false;

document.getElementById('mute').addEventListener('click', function (e) {
    e = e || window.event;
    audio.muted = !audio.muted;
    if (clicked) {
    	$(".bar").addClass("noAnim");
    	clicked = false;
  	} else {
    	$(".bar").removeClass("noAnim");
    	clicked = true;
  	}
    e.preventDefault();
}, false);
