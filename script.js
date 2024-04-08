let seconds = 0;
let prompt = document.getElementById('prompt');
let secondsContainer = document.getElementById('second');
let minutesContainer = document.getElementById('minute');
let hoursContainer = document.getElementById('hour');
let secondsInput = document.getElementById('secInput');
let minutesInput = document.getElementById('minInput');
let hoursInput = document.getElementById('hrInput');
let secValue;
let minValue;
let hrValue;
let interval = null;
let pauseTimer = true;

const play = () => {
	// Set hours, minutes and seconds value from the inputs if the interval timer has been reset
	if (interval === null) {
		secValue = Number(secondsInput.value);
		minValue = Number(minutesInput.value);
		hrValue = Number(hoursInput.value);
	}

	// If setinterval is running and the timer has not been paused do not run the setinterval function again
	if ((interval && !pauseTimer) || !pauseTimer) {
		return;
	}

	// If the hours, minutes and seconds values aren't set in the inputs throw an error message
	else if (secValue === 0 && minValue === 0 && hrValue === 0) {
		prompt.innerHTML =
			'<h2 style="color: red;">Please enter a time to countdown from</h2>';
	}

	// Run the countdown timer if there is an input to countdown from
	else {
		prompt.innerHTML = '';
		pauseTimer = false;

		// Set starting countdown values to the users inputs
		secondsContainer.innerText =
			secValue.toString().length === 1 ? `0${secValue}` : secValue;
		minutesContainer.innerText =
			minValue.toString().length === 1 ? `0${minValue}` : minValue;
		hoursContainer.innerText =
			hrValue.toString().length === 1 ? `0${hrValue}` : hrValue;

		// Run the countdown timer and pass the output (i.e id) if the setinterval to the interval variable
		interval = setInterval(() => {
			// If the user input is only seconds run only the seconds countdown
			if (hrValue === 0 && minValue === 0 && secValue !== 0) {
				// Reduce the seconds count by 1
				secValue -= 1;

				// If the seconds count is a single digit add a zero to the front of the number being displayed else display the whole number
				if (secValue.toString().length === 1) {
					secondsContainer.innerText = `0${secValue}`;
				} else {
					secondsContainer.innerText = secValue;
				}
			}

			// If the user input contains minutes run the minutes and seconds countdown
			else if (minValue !== 0) {
				// Check if the seconds count is zero if not run the second count reducer
				if (secValue === 0) {
					// Set the seconds count to 60
					secValue = 60;

					// Reduce the seconds count by 1
					secValue -= 1;

					// Reduce the minutes count by 1
					minValue -= 1;

					// If the seconds count is a single digit add a zero to the front of the number being displayed else display the whole number
					if (secValue.toString().length === 1) {
						secondsContainer.innerText = `0${secValue}`;
					} else {
						secondsContainer.innerText = secValue;
					}

					// If the minutes count is a single digit add a zero to the front of the number being displayed else display the whole number
					if (minValue.toString().length === 1) {
						minutesContainer.innerText = `0${minValue}`;
					} else {
						minutesContainer.innerText = minValue;
					}
				} else {
					// Reduce the seconds count by 1
					secValue -= 1;

					// If the seconds count is a single digit add a zero to the front of the number being displayed else display the whole number
					if (secValue.toString().length === 1) {
						secondsContainer.innerText = `0${secValue}`;
					} else {
						secondsContainer.innerText = secValue;
					}
				}
			}

			// If the user input contains hours run the hours, minutes and seconds countdown
			else if (hrValue !== 0) {
				// Check if the minutes and seconds count are both zero
				if (minValue === 0 && secValue === 0) {
					if (secValue === 0) {
						// Set the seconds count to 60
						secValue = 60;

						// Reduce the seconds count by 1
						secValue -= 1;

						// Reduce the minutes count by 1
						minValue -= 1;

						// If the seconds count is a single digit add a zero to the front of the number being displayed else display the whole number
						if (secValue.toString().length === 1) {
							secondsContainer.innerText = `0${secValue}`;
						} else {
							secondsContainer.innerText = secValue;
						}

						// If the minutes count is a single digit add a zero to the front of the number being displayed else display the whole number
						if (minValue.toString().length === 1) {
							minutesContainer.innerText = `0${minValue}`;
						} else {
							minutesContainer.innerText = minValue;
						}
					} else {
						// Reduce the seconds count by 1
						secValue -= 1;

						// If the seconds count is a single digit add a zero to the front of the number being displayed else display the whole number
						if (secValue.toString().length === 1) {
							secondsContainer.innerText = `0${secValue}`;
						} else {
							secondsContainer.innerText = secValue;
						}
					}

					// Reset the minutes count to 60
					minValue = 60;

					// Reduce the minute count by 1
					minValue -= 1;

					// Reduce the hour count by 1
					hrValue -= 1;

					// If the minutes count is a single digit add a zero to the front of the number being displayed else display the whole number
					if (minValue.toString().length === 1) {
						minutesContainer.innerText = `0${minValue}`;
					} else {
						minutesContainer.innerText = minValue;
					}

					// If the hours count is a single digit add a zero to the front of the number being displayed else display the whole number
					if (hrValue.toString().length === 1) {
						hoursContainer.innerText = `0${hrValue}`;
					} else {
						hoursContainer.innerText = hrValue;
					}
				}

				// Check if only the minute count is zero
				else if (minValue === 0) {
					if (secValue === 0) {
						// Set the seconds count to 60
						secValue = 60;

						// Reduce the seconds count by 1
						secValue -= 1;

						// Reduce the minutes count by 1
						minValue -= 1;

						// If the seconds count is a single digit add a zero to the front of the number being displayed else display the whole number
						if (secValue.toString().length === 1) {
							secondsContainer.innerText = `0${secValue}`;
						} else {
							secondsContainer.innerText = secValue;
						}

						// If the minutes count is a single digit add a zero to the front of the number being displayed else display the whole number
						if (minValue.toString().length === 1) {
							minutesContainer.innerText = `0${minValue}`;
						} else {
							minutesContainer.innerText = minValue;
						}
					} else {
						// Reduce the seconds count by 1
						secValue -= 1;

						// If the seconds count is a single digit add a zero to the front of the number being displayed else display the whole number
						if (secValue.toString().length === 1) {
							secondsContainer.innerText = `0${secValue}`;
						} else {
							secondsContainer.innerText = secValue;
						}
					}
				}
			}

			// If the timer reaches zero stop the countdown and show countdown completed message
			if (secValue === 0 && minValue === 0 && hrValue === 0) {
				prompt.innerHTML = '<h2 style="color: green;">Countdown complete</h2>';

				stop();
			}
		}, 1000);
	}
};

const pause = () => {
	if (interval) {
		clearInterval(interval);
	} else {
		return;
	}
	pauseTimer = true;
};

const stop = () => {
	if (interval) {
		clearInterval(interval);
		secValue = 0;
		minValue = 0;
		hrValue = 0;
		interval = null;

		secondsContainer.innerText = `0${secValue}`;
		minutesContainer.innerText = `0${minValue}`;
		hoursContainer.innerText = `0${hrValue}`;
		secondsInput.value = null;
		minutesInput.value = null;
		hoursInput.value = null;
	} else {
		return;
	}
	pauseTimer = true;
};
