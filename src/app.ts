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
import { Environment } from "./utils/Environment";
import { IntersectManager } from "./utils/physics/concrate/IntersectManager";

const sketch = (p5: P5) => {
  let moly: Moly;
  let platforms: Platform[] = [];
  const myCircles: [] = [];
  let intersectManager: IntersectManager;
  p5.setup = () => {
    let canvasX: number = 500;
    let canvasY: number = 200;
    const canvas = p5.createCanvas(canvasX, canvasY);
    p5.background("white");

    const graundStartPos = p5.createVector(5, canvasY - 20);

    moly = new Moly(
      p5,
      p5.createVector(graundStartPos.x + 200, graundStartPos.y),
      Path.molyImg
    );

    for (let i = 0; i < 3; i++) {
      const platformWidth = 40;
      const platformHeight = 10;

      const rectPos = p5.createVector(200 * i, p5.height / 1.7);
      const platformSize = p5.createVector(platformWidth, platformHeight);

      platforms.push(new Platform(p5, platformSize, rectPos));
    }

    intersectManager = new IntersectManager();
  };
  // p5.keyPressed();
  p5.draw = () => {
    p5.background(255);
    moly.draw();
    moly.move();

    intersectManager.intersectOneToManyObj(moly, platforms);
  
    platforms.forEach((platform) => platform.draw());

    p5.keyPressed = () => {
      if (p5.keyCode == p5.RIGHT_ARROW) {
        moly._movingRight = true;
      }
      if (p5.keyCode == p5.LEFT_ARROW) {
        moly._movingLeft = true;
      }
      if (p5.keyCode === p5.UP_ARROW) {
        moly.jump();
      }
    };

    p5.keyReleased = () => {
      if (p5.keyCode == p5.RIGHT_ARROW) {
        moly._movingRight = false;
      }
      if (p5.keyCode == p5.LEFT_ARROW) {
        moly._movingLeft = false;
      }
    };
  };
}; // end of sketch
new P5(sketch);
