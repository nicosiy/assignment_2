function setup() {
	createCanvas(640, 480);
	noStroke();

}

function draw() {

	var summerWinter = random(1);

	// draw background and snowman
	if (summerWinter < 0.5) {
		// Summer season
		background(30, 144, 255);
		fill(50, 205, 50);
		ellipse(320, 540, 1150, 280);

		// draw sad snowman
		stroke(0);

		fill(255, 250, 250);
		ellipse(250, 400, 100, 100)
		ellipse(250, 330, 85, 85)
		ellipse(250, 270, 70, 70)
		fill(0);
		ellipse(235, 260, 8, 8);
		ellipse(265, 260, 8, 8);
		line(230, 280, 270, 280);
		line(230, 280, 230, 288);
		line(270, 280, 270, 288);
	} else {
		// Winter Season
		background(175, 238, 238);
		fill(224, 255, 255);
		ellipse(320, 540, 1150, 280);

		//draw happy snowman

		stroke(0);

		fill(255, 250, 250);
		ellipse(250, 400, 100, 100)
		ellipse(250, 330, 85, 85)
		ellipse(250, 270, 70, 70)
		fill(0);
		ellipse(235, 250, 8, 8);
		ellipse(265, 250, 8, 8);
		line(230, 280, 270, 280);
		line(230, 280, 230, 270);
		line(270, 280, 270, 270);
	}



	// Sun
	if (summerWinter < 0.5) {
		fill(255, 255, 0);
		ellipse(random(320, 640), random(0, 280), 100, 100);
	}

	// snow!!!!
	if (summerWinter > 0.5) {
		fill(250, 250, 250);
		stroke(0, 0, 128);
		var snowflakes;
		snowflakes = random(4, 8);
		ellipse(random(0, 640), random(0, 280), snowflakes, snowflakes);
		snowflakes = random(2, 5);
		ellipse(random(0, 640), random(0, 280), snowflakes, snowflakes);
		snowflakes = random(2, 5);
		ellipse(random(0, 640), random(0, 280), snowflakes, snowflakes);
		snowflakes = random(2, 5);
		ellipse(random(0, 640), random(0, 280), snowflakes, snowflakes);
		snowflakes = random(2, 5);
		ellipse(random(0, 640), random(0, 280), snowflakes, snowflakes);
		snowflakes = random(2, 5);
		ellipse(random(0, 640), random(0, 280), snowflakes, snowflakes);
		snowflakes = random(2, 5);
		ellipse(random(0, 640), random(0, 280), snowflakes, snowflakes);
		snowflakes = random(4, 8);
		ellipse(random(0, 640), random(0, 280), snowflakes, snowflakes);
		snowflakes = random(2, 5);
		ellipse(random(0, 640), random(0, 280), snowflakes, snowflakes);
		snowflakes = random(2, 5);
		ellipse(random(0, 640), random(0, 280), snowflakes, snowflakes);
		snowflakes = random(2, 5);
		ellipse(random(0, 640), random(0, 280), snowflakes, snowflakes);
		snowflakes = random(2, 5);
		ellipse(random(0, 640), random(0, 280), snowflakes, snowflakes);
		snowflakes = random(2, 5);
		ellipse(random(0, 640), random(0, 280), snowflakes, snowflakes);
		snowflakes = random(2, 5);
		ellipse(random(0, 640), random(0, 280), snowflakes, snowflakes);
		snowflakes = random(4, 8);
		ellipse(random(0, 640), random(0, 280), snowflakes, snowflakes);
		snowflakes = random(2, 5);
		ellipse(random(0, 640), random(0, 280), snowflakes, snowflakes);
		snowflakes = random(2, 5);
		ellipse(random(0, 640), random(0, 280), snowflakes, snowflakes);
		snowflakes = random(2, 5);
		ellipse(random(0, 640), random(0, 280), snowflakes, snowflakes);
		snowflakes = random(2, 5);
		ellipse(random(0, 640), random(0, 280), snowflakes, snowflakes);
		snowflakes = random(2, 5);
		ellipse(random(0, 640), random(0, 280), snowflakes, snowflakes);
		snowflakes = random(2, 5);
		ellipse(random(0, 640), random(0, 280), snowflakes, snowflakes);
		snowflakes = random(4, 8);
		ellipse(random(0, 640), random(0, 280), snowflakes, snowflakes);
		snowflakes = random(2, 5);
		ellipse(random(0, 640), random(0, 280), snowflakes, snowflakes);
		snowflakes = random(2, 5);
		ellipse(random(0, 640), random(0, 280), snowflakes, snowflakes);
		snowflakes = random(2, 5);
		ellipse(random(0, 640), random(0, 280), snowflakes, snowflakes);
		snowflakes = random(2, 5);
		ellipse(random(0, 640), random(0, 280), snowflakes, snowflakes);
		snowflakes = random(2, 5);
		ellipse(random(0, 640), random(0, 280), snowflakes, snowflakes);
		snowflakes = random(2, 5);
		ellipse(random(0, 640), random(0, 280), snowflakes, snowflakes);

	}

	noLoop();

}
