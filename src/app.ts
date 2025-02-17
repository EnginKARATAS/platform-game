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
  let sprite_sheet; //variable to hold the image + info
  let sprite_sheet_animation; //variable to hold a stand-alone animation
  let laptopObj; //sprite object to attach the animation to
  var sprite;

  let dataStore: DataStore;
  let createObj: CreateObj = new CreateObj(p5);
  let boarder: Boarder;
  let moly: Moly;
  let intersectManager: IntersectManager;
  p5.preload = () => {
    // sprite_sheet = loadSpriteSheet("./sprite/assets/Run.png", 128, 128, 179);
  };

  p5.setup = () => {
    p5.createCanvas(800, 600);
    p5.background("white");

    intersectManager = new IntersectManager();

    dataStore = DataStore.getInstance();

    dataStore.setArray("platforms", []);
    dataStore.setArray("grounds", []);

    moly = new Moly(
      p5,
      p5.createVector(25, 140),
      Path.molyImg,
      intersectManager,
      dataStore
    );
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
    p5.textFont("Georgia");
    createObj = new CreateObj(p5);
  };

  p5.draw = () => {
    if (EnvironmentConstants.MENU == 0) {
      //menu
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
      //game
      p5.background(170);

      p5.scale(2);
      p5.translate(-moly.getPos().x * 0.99 + 100, -moly.getPos().y * 0.99 + 50);

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
        console.log("object");
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
      //failed screen
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
}; // end of sketch
new P5(sketch);
