(() => {
	// put variables (connections to the web page / DOM) at the topLeft
	// const = constant -> something that will never change
	// let = variable that can be changed
	const puzzleSelectors = document.querySelectorAll("#buttonHolder img");
				dropZoneContainer = document.querySelector(".puzzle-board");

	//functions go in the middle
	function changeBGImage() {
		// get the custom data attribute from the clicked button
		let currentImage = this.dataset.imageref;

		// `` is not a quote. it's a JavaScript template string
		dropZoneContainer.style.backgroundImage = `url(images/backGround${currentImage}.jpg)`;

		// can also consolidate the 2 lines into 1 (let and dropZoneContainer)
		// dropZoneContainer.style.backgroundImage = `url(images/backGround${this.dataset.imageref}.jpg)`;
	}

	//event handling at the bottom
	puzzleSelectors.forEach(button => button.addEventListener("click", changeBGImage));


	// emulate a click on the first bottom button and run the bg image functions
	changeBGImage.call(puzzleSelectors[0]);
})();
