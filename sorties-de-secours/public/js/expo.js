$(document).ready(function() {
	// set variables for svg elements
	var circle_size = 30;
	var random_range = 5;
	//var elements_pos = [];
	//var space_between_elements = 10;

	// tick make only 1/max_tick circle printable (and offers "scratch effet")
	//var tick = 0;
	//var max_tick = 5;

	// init dragging
	var isDragging = false;

	// working on both images (actually, every element clickable on screen)
	$('.expo-img')
		.mousedown(function(e) {
			// start dragging
		    isDragging = true;
		})
		.mousemove(function(e) {

			if(isDragging) {
				//tick++;

				let posX = $(this).position().left;
		        let posY = $(this).position().top;
		        let relative_posX = (e.pageX - posX);
		        let relative_posY = (e.pageY - posY);

				//if (tick >= max_tick) {

				// check if elements are colliding
				/*let displayable = true;
				for (let i=0 ; i<elements_pos.length ; i++) {
					let current_elements_posX = elements_pos[i][0];
					let current_elements_posY = elements_pos[i][1];
					console.log(current_elements_posX);
					console.log(current_elements_posY);
					if (relative_posX > current_elements_posX - space_between_elements
						&& relative_posX < current_elements_posX + space_between_elements
						&& relative_posY > current_elements_posY - space_between_elements
						&& relative_posY < current_elements_posY + space_between_elements) {
						console.log(false);
						displayable = false;
						break;
					}
				}*/

				//if (displayable) {
					// if last element print if max_tick away

			        // with circles
					/*var svg = document.getElementsByTagName('clipPath')[0]; //Get svg element
					var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'circle'); //Create a path in SVG's namespace
					newElement.setAttribute("cx", (e.pageX - posX)); // set x position (relative to slide)
					newElement.setAttribute("cy", (e.pageY - posY)); // set y position (relative to slide)
					newElement.setAttribute("r", circle_size); // set size of circles
					svg.appendChild(newElement);*/

					// old version with jquery (not working)
					// $('#expo-clip').append('<circle cx="' + (e.pageX - posX) + '" cy="' + (e.pageY - posY) + '" r="' + 25 + '" />');


					// with random ellipse
					// compute random noise for x and y from -random_range to +random_range
					let random_rx = Math.floor(Math.random() * (2*random_range + 1)) - random_range;
					let random_ry = Math.floor(Math.random() * (2*random_range + 1)) - random_range;

					var svg = document.getElementsByTagName('clipPath')[0]; //Get svg element
					var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'ellipse'); //Create a path in SVG's namespace
					newElement.setAttribute("cx", relative_posX); // set x position (relative to slide)
					newElement.setAttribute("cy", relative_posY); // set y position (relative to slide)
					newElement.setAttribute("rx", circle_size-random_rx); // set size of circles
					newElement.setAttribute("ry", circle_size+random_ry); // set size of circles
					svg.appendChild(newElement);

					//elements_pos.push([(e.pageX - posX), (e.pageY - posY)]);

					// reset tick once printed
					//tick = 0;
				//}
			}

		})
		.mouseup(function() {

		    //var wasDragging = isDragging;
		    isDragging = false;
		    /*if (!wasDragging) {
		    	// handle end of drag event, probably end sounds here
		    	console.log('was drag');
		    }*/
		});

});
