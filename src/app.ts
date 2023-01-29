import P5, { Vector } from "p5";
import "p5/lib/addons/p5.dom";
import "./styles.scss";
import { Moly } from "./sprite/character/Moly";
import { Path } from "./utils/Path";
import { Platform } from "./sprite/platform/concrate/Platform";
import { IntersectManager } from "./utils/physics/concrate/IntersectManager";
import { Ground } from "./sprite/ground/concrate/Ground";
import { CreateObj } from "./utils/physics/concrate/ObjectRenderManager";
import DataStore from "./providers/DataStore";

const sketch = (p5: P5) => {
  let dataStore: DataStore;

  let createObj: CreateObj = new CreateObj(p5);
  let moly: Moly;
  let ground: Ground;
  let intersectManager: IntersectManager;

  p5.setup = () => {
    p5.createCanvas(500, 200);
    p5.background("white");

    dataStore = DataStore.getInstance();

    dataStore.setArray("platforms", []);
    dataStore.setArray("grounds", []);

    moly = new Moly(p5, p5.createVector(25, 140), Path.molyImg);

    //render initial platforms and ground objects
    for (let i = 0; i < 3; i++) {
      const platform = new Platform(
        p5,
        { x: 40, y: 10 },
        { x: 200 * i, y: 140 }
      );
      dataStore.pushItem("platforms", platform);
      dataStore.pushItem(
        "grounds",
        new Ground(p5, { x: 250, y: 10 }, { x: -50, y: 190 })
      );
    }
    createObj = new CreateObj(p5);
    intersectManager = new IntersectManager();
  };

  p5.draw = () => {
    p5.background(170);
    p5.scale(2);
    p5.translate(-moly.getPos().x * 0.95 + 100, -100);

    moly.draw();
    moly.move();
    intersectManager.intersectOneToMany(moly, dataStore.getArray("platforms"));
    intersectManager.intersectOneToMany(moly, dataStore.getArray("grounds"));

    createObj.createPlatformFrom(moly);
    createObj.createGroundFrom(moly);

    dataStore.getArray("platforms").forEach((platform) => platform.draw());
    dataStore.getArray("grounds").forEach((ground) => ground.draw());
  };

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
}; // end of sketch
new P5(sketch);
