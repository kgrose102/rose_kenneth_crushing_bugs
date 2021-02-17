(() => {
	// put variables (connections to the web page / DOM) at the topLeft
	// const = constant -> something that will never change
	// let = variable that can be changed
	const puzzleSelectors = document.querySelectorAll("#buttonHolder img"),
				dropZoneContainer = document.querySelector(".puzzle-board"),
				dragZone = document.querySelector(".puzzle-pieces"),
				dragImages = document.querySelectorAll(".puzzle-image"),
				dropZones = document.querySelectorAll(".drop-zone");

	//functions go in the middle
	function dragStart(event) {
		console.log('stated dragging');
		event.dataTransfer.setData("savedID", this.id);
	}

	function draggedOver(event){
		event.preventDefault();
		console.log('dragged over me');
	}

	function dropped(event) {
		event.preventDefault();

		// check to see if there's an element here already (a dropped image)
		// if so, then kill this function
		if (this.childElementCount > 0) { return; } //like an exit keyword don't execute anything past return.

		console.log('dropped something on me');
		let targetID = event.dataTransfer.getData("savedID");
		console.log("I dragged this image,", targetID);
		event.target.appendChild(document.querySelector(`#${targetID}`));
	}

	// Changes the background image when bottom nav buttons are clicked
	// will also be used as a reset to send the thumbnails into the drag zone
	function changeBGImage() {
		// check all the dop zones, if a drop zone has an image move it backGround
		// apend it back into the drag zone.

		dropZones.forEach(zone =>{
			if (zone.childElementCount > 0){
				dragZone.appendChild(zone.firstElementChild);
			}
		});


		// get the custom data attribute from the clicked button
		let currentImage = this.dataset.imageref;

		// `` is not a quote. it's a JavaScript template string
		dropZoneContainer.style.backgroundImage = `url(images/backGround${currentImage}.jpg)`;

		// can consolidate the 2 lines into 1 (let and dropZoneContainer)
		// dropZoneContainer.style.backgroundImage = `url(images/backGround${this.dataset.imageref}.jpg)`;
	}

	//event handling at the bottom
	puzzleSelectors.forEach(button => button.addEventListener("click", changeBGImage));

	dragImages.forEach(piece => piece.addEventListener("dragstart", dragStart));

	dropZones.forEach(zone =>{
		zone.addEventListener("dragover", draggedOver);
		zone.addEventListener("drop", dropped);
	})


	// emulate a click on the first bottom button and run the bg image functions
	changeBGImage.call(puzzleSelectors[0]);
})();
