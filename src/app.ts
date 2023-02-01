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
import { KeyboardControl } from "./constants/concrate/KeyboardControl";
import { Boarder } from "./sprite/boarder/Borader";

const sketch = (p5: P5) => {
  let dataStore: DataStore;

  let createObj: CreateObj = new CreateObj(p5);
  let boarder: Boarder;
  let moly: Moly;
  let ground: Ground;
  let intersectManager: IntersectManager;

  p5.setup = () => {
    p5.createCanvas(500, 250);
    p5.background("white");

    dataStore = DataStore.getInstance();

    dataStore.setArray("platforms", []);
    dataStore.setArray("grounds", []);

    moly = new Moly(p5, p5.createVector(25, 140), Path.molyImg);
    boarder = new Boarder(p5);

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
        new Ground(p5, { x: -50, y: 190 }, { x: 250, y: 10 })
      );
    }
    createObj = new CreateObj(p5);
    intersectManager = new IntersectManager();
  };

  p5.draw = () => {
    p5.background(170);

    p5.scale(2);
    p5.translate(-moly.getPos().x * 0.99 + 100, -moly.getPos().y * 0.99 + 50);

    moly.draw();
    moly.move();

    p5.fill("blue");
    p5.rect(500, 0, 20, 200);
    p5.fill(0, 20, 255);
    p5.rect(1000, 0, 20, 200);
    intersectManager.intersectOneToMany(moly, dataStore.getArray("platforms"));
    intersectManager.intersectOneToMany(moly, dataStore.getArray("grounds"));

    createObj.createPlatformFrom(moly);
    createObj.createGroundFrom(moly);

    dataStore.getArray("platforms").forEach((platform) => platform.draw());
    dataStore.getArray("grounds").forEach((ground) => ground.draw());

    boarder.showRelative(moly, [
      moly.getPos().x.toString(),
      moly.getPos().y.toString(),
    ]);

    KeyboardControl.control(p5, moly);
  };
}; // end of sketch
new P5(sketch);
