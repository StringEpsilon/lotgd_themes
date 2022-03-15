/*
This javascript file is directly derivative of files from, and/or was written as part of a fork of, 
The Legend of The Green Dragon version 0.9.7
And is therefore subject to the terms of the GPL 2.0.

License terms available here: https://www.gnu.org/licenses/old-licenses/gpl-2.0.html
*/

let touchStart = 0
const contentElement = document.querySelector(".content");
const threshold = 150;

function handleSwipe(left) {
	if (left) {
		document.querySelector(".stats").focus();
	} else {
		document.querySelector("nav").focus();
	}
}

contentElement.addEventListener('touchstart', event => {
	if (touchStart === 0){
		touchStart = event.changedTouches[0].screenX;
	}
});

contentElement.addEventListener("touchmove", event => {
	if (touchStart === 0){
		return;
	}
	if (Math.abs(touchStart - event.changedTouches[0].screenX) > threshold) {
		handleSwipe(touchStart > event.changedTouches[0].screenX);
		touchstart = 0;
	}
});

contentElement.addEventListener('touchend', () => {
	touchStart = 0;
});
