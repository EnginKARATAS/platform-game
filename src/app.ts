import P5 from "p5";
import { Vector } from "p5";
import { Moly } from "./sprite/character/Moly";
import { Path } from "./utils/Path";
import { Platform } from "./sprite/platform/concrate/Platform";
import { IntersectManager } from "./utils/physics/concrate/IntersectManager";
import { Ground } from "./sprite/ground/concrate/ground";
import { CreateObj } from "./utils/physics/concrate/ObjectRenderManager";
import DataStore from "./providers/DataStore";
import { Boarder } from "./sprite/boarder/Borader";
import { PlayerControl } from "./constants/concrate/PlayerControl";
import { EnvironmentConstants } from "./constants/concrate/EnvironmentConstants";
import { GameManager } from "./utils/physics/concrate/GameManager";

const sketch = (p5: P5) => {
  let sprite_sheet;
  let sprite_sheet_animation;
  let laptopObj;
  var sprite;

  let dataStore: DataStore;
  let createObj: CreateObj = new CreateObj(p5);
  let boarder: Boarder;
  let moly: Moly;
  let intersectManager: IntersectManager;
  p5.preload = () => {
    p5.loadImage(Path.hammermanImg);
  };

  p5.setup = () => {
    p5.createCanvas(800, 600);
    p5.background("white");

    intersectManager = new IntersectManager();
    dataStore = DataStore.getInstance();

    dataStore.setArray("platforms", []);
    dataStore.setArray("grounds", []);

    moly = new Moly(p5, p5.createVector(25, 140), intersectManager, dataStore);
    boarder = new Boarder(p5);

    const groundLayout = [
      { pos: { x: 0, y: 300 }, size: { x: 250, y: 40 } },
    ];

    groundLayout.forEach((ground) => {
      dataStore.pushItem("grounds", new Ground(p5, ground.pos, ground.size));
    });

    const platformLayout = [
      { pos: { x: 400, y: 100 }, size: { x: 60, y: 10 } },
      { pos: { x: 700, y: 80 }, size: { x: 40, y: 10 } },
      { pos: { x: 1000, y: 120 }, size: { x: 50, y: 10 } },
      { pos: { x: 1300, y: 90 }, size: { x: 45, y: 10 } },
    ];

    platformLayout.forEach((platform) => {
      dataStore.pushItem(
        "platforms",
        new Platform(p5, platform.size, platform.pos)
      );
    });

    p5.textFont("Georgia");
    createObj = new CreateObj(p5);
  };

  p5.draw = () => {
    if (EnvironmentConstants.MENU == 0) {
      var x = p5.mouseX;
      var y = p5.mouseY;
      p5.background(0);
      p5.fill(255);
      p5.text("Click to start", 75, 100);

      p5.textSize(32);
      p5.textSize(32);
      p5.text("⬇️", x, y + 50);
      p5.text("⬅️", x - 50, y);
      p5.textSize(12);
      p5.text("Play With", x - 5, y - 10);
      p5.textSize(32);
      p5.text("➡️", x + 50, y);
      p5.text("⬆️", x, y - 50);

      p5.textSize(32);
      p5.text("github.com/platform-game", 75, 200);
    } else if (EnvironmentConstants.MENU == 1) {
      p5.background(170);

      p5.scale(1);
      const screenCenterX = p5.width / 2;
      const screenCenterY = p5.height / 2;
      p5.translate(
        -moly.getPos().x + screenCenterX,
        -moly.getPos().y + screenCenterY
      );
      if (moly.getPos().y > 500) {
        GameManager.endTheGame(p5, moly);
      }
      moly.draw();
      moly.move();
      p5.fill("blue");
      p5.rect(500, 0, 20, 200);
      p5.fill(0, 20, 255);
      p5.rect(1000, 0, 20, 200);
      intersectManager.intersectOneToMany(
        moly,
        dataStore.getArray("platforms")
      );
      if (
        intersectManager.intersectOneToMany(moly, dataStore.getArray("grounds"))
      ) {
        moly.resetJumping();
      }

      createObj.createPlatformFrom(moly);
      createObj.createGroundFrom(moly);

      dataStore.getArray("platforms").forEach((platform) => platform.draw());
      dataStore.getArray("grounds").forEach((ground) => ground.draw());

      boarder.showRelative(moly, [
        moly.getPos().x.toString(),
        moly.getPos().y.toString(),
      ]);
    } else if (EnvironmentConstants.MENU == 2) {
      p5.background(0);
      p5.fill(255);
      p5.textSize(32);
      p5.text("You Failed", 75, 100);
      p5.text("Click to restart", 75, 150);
    }

    p5.mouseClicked = () => {
      if (EnvironmentConstants.MENU == 0 || EnvironmentConstants.MENU == 2) {
        EnvironmentConstants.MENU = 1;
      }
    };
    PlayerControl.keyboardController(p5, moly);
  };
};
new P5(sketch);
