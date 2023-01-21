import P5, { Vector } from "p5";
import "p5/lib/addons/p5.dom";
import "./styles.scss";
import { Moly } from "./sprite/character/Moly";
import { Path } from "./utils/Path";
import { Platform } from "./sprite/platform/concrate/Platform";
import { IntersectManager } from "./utils/physics/concrate/IntersectManager";
import { Ground } from "./sprite/ground/concrate/ground";
import { CreateObj } from "./utils/physics/concrate/CreateObj";
import DataStore from "./providers/DataStore";

const sketch = (p5: P5) => {
  let dataStore: DataStore;

  let createObj: CreateObj = new CreateObj(p5);
  let moly: Moly;
  let ground: Ground;
  let intersectManager: IntersectManager;
  p5.setup = () => {
    intersectManager = new IntersectManager();
    dataStore = DataStore.getInstance();
    dataStore.setArray("platforms", []);

    let canvasX: number = 500;
    let canvasY: number = 200;
    const canvas = p5.createCanvas(canvasX, canvasY);
    p5.background("white");

    const graundStartPos = p5.createVector(5, canvasY - 20);

    moly = new Moly(
      p5,
      p5.createVector(graundStartPos.x + 80, graundStartPos.y - 40),
      Path.molyImg
    );

    for (let i = 0; i < 3; i++) {
      const platformWidth = 40;
      const platformHeight = 10;

      const rectPos = p5.createVector(200 * i + 30, p5.height / 1.7);
      const platformSize = p5.createVector(platformWidth, platformHeight);

      dataStore.pushItem("platforms", new Platform(p5, platformSize, rectPos));
    }

    const rectPos = p5.createVector(0, p5.height - 10);
    const platformSize = p5.createVector(p5.width, 10);

    ground = new Ground(p5, platformSize, rectPos);

    intersectManager = new IntersectManager();
  };
  p5.draw = () => {
    p5.background(170);

    p5.scale(2);
    p5.translate(-moly.getPos().x * 0.95 + 100, -100);

    moly.draw();
    moly.move();
    ground.draw();
    // p5.rect(0, 0, 200, 140);
    intersectManager.intersectOneToManyObj(
      moly,
      dataStore.getArray("platforms")
    );

    createObj.createPlatform(moly);

    let platformsArr = dataStore.getArray("platforms");
    platformsArr.forEach((platform) => platform.draw());

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
