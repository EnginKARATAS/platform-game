import P5, { Vector } from "p5";
import "p5/lib/addons/p5.dom";
// import "p5/lib/addons/p5.sound";	// Include if needed
import "./styles.scss";

// DEMO: A sample class implementation
import MyCircle from "./MyCircle";
import { Moly } from "./sprite/character/Moly";
import { Character } from "./sprite/character/Character";
import { Path } from "./utils/Path";

const sketch = (p5: P5) => {
  let moly: Character;
  const myCircles: MyCircle[] = [];

  p5.setup = () => {
    let canvasX: number = 500;
    let canvasY: number = 200;
    const canvas = p5.createCanvas(canvasX, canvasY);
    const graundStartPos = p5.createVector(5, canvasY - 20);

    p5.background("white");

    moly = new Moly(
      p5,
      p5.createVector(graundStartPos.x, graundStartPos.y),
      Path.molyImg
    );

    for (let i = 1; i < 4; i++) {
      const p = p5.width / 4;
      const circlePos = p5.createVector(p * i, p5.height / 2);
      const size = i % 2 !== 0 ? 40 : 32;
      myCircles.push(new MyCircle(p5, circlePos, size));
    }
  };
  // p5.keyPressed();
  p5.draw = () => {
    p5.background(255);
    moly.draw();
    moly.move();

    myCircles.forEach((circle) => circle.draw());
  };

  p5.keyPressed = () => {
    if (p5.keyCode === p5.UP_ARROW) {
      moly.jump();
    } else if (p5.keyCode === p5.DOWN_ARROW) {
      console.log("down arrow");
    }
  };
};

new P5(sketch);
