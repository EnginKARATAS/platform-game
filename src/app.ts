import P5, { Vector } from "p5";
import "p5/lib/addons/p5.dom";
// import "p5/lib/addons/p5.sound";	// Include if needed
import "./styles.scss";

// DEMO: A sample class implementation
import MyCircle from "./MyCircle";
import { Moly } from "./sprite/character/Moly";
import { Character } from "./sprite/character/Character";
import { Path } from "./utils/Path";
import { Platform } from "./sprite/platform/concrate/Platform";

const sketch = (p5: P5) => {
  let moly: Moly;
  let platforms: Platform[] = [];
  const myCircles: MyCircle[] = [];

  p5.setup = () => {
    let canvasX: number = 500;
    let canvasY: number = 200;
    const canvas = p5.createCanvas(canvasX, canvasY);
    p5.background("white");

    const graundStartPos = p5.createVector(5, canvasY - 20);

    moly = new Moly(
      p5,
      p5.createVector(graundStartPos.x, graundStartPos.y),
      Path.molyImg
    );

	for (let i = 0; i < 3; i++) {
		const p = p5.width / 4;
		const rectPos = p5.createVector(p * i, p5.height / 1.7);
		const size = 40;
		platforms.push(new Platform(p5, 10, 40, rectPos));
	}
 
  };
  // p5.keyPressed();
  p5.draw = () => {
    p5.background(255);
    moly.draw();
    moly.move();

	platforms.forEach((platform) => platform.draw());

	for (let i = platforms.length - 1; i > 0; i--) {
		let isIntersect = moly.eat(moly._pos, platforms[i]._position);
		if (isIntersect) {
			console.log("intersect")
		}
  };

  p5.keyPressed = () => {
	if (p5.keyCode == p5.RIGHT_ARROW) {
		moly._movingRight = true;
		console.log("move right")
	}
	if (p5.keyCode == p5.LEFT_ARROW) {
		moly._movingLeft = true;
		console.log("move left")
	}
    if (p5.keyCode === p5.UP_ARROW) {
      moly.jump();
    } 
  };
	
  p5.keyReleased = () => {
	if (p5.keyCode == p5.RIGHT_ARROW) {
		moly._movingRight = false;
		console.log("stop right")
	}
	if (p5.keyCode == p5.LEFT_ARROW) {
		moly._movingLeft = false;
		console.log("stop left")
	}
  }}
};

new P5(sketch);
