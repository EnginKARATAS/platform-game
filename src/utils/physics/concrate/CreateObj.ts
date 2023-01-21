import p5, { Vector } from "p5";
import { Character } from "../../../sprite/character/Character";
import { Platform } from "../../../sprite/platform/concrate/Platform";
import { Creatable } from "../abstract/creatable";
import DataStore from "../../../providers/DataStore";
import { Ground } from "../../../sprite/ground/concrate/ground";
export class CreateObj implements Creatable {
  _p5: p5;
  dataStore: DataStore;
  constructor(p5: p5, private renderDistance: number = 200) {
    this._p5 = p5;
    this.dataStore = DataStore.getInstance();
  }
  createPlatform(baseAnchor: Character) {
    let platforms = this.dataStore.getArray("platforms");

    let characterPosBuf: number = baseAnchor.getPos().x % 60;
    if (characterPosBuf > 50) {
      characterPosBuf = 0;
      const platformWidth = 40;
      const platformHeight = 10;

      const rectPos = this._p5.createVector(
        baseAnchor.getPos().x + this.renderDistance,
        this._p5.height / 1.7
      );
      const platformSize = this._p5.createVector(platformWidth, platformHeight);

      this.dataStore.pushItem(
        "platforms",
        new Platform(this._p5, platformSize, rectPos)
      );
    }
  }

  createGround(baseAnchor: Character) {
    let characterPosBuf: number = baseAnchor.getPos().x % 60;
    if (characterPosBuf > 50) {
      characterPosBuf = 0;
      const groundWidth = 20;
      const groundHeight = 10;

      const rectPos = this._p5.createVector(
        baseAnchor.getPos().x + this.renderDistance,
        this._p5.height - 10
      );
      const groundSize = this._p5.createVector(Math.random() * 30, 10);
      this.dataStore.pushItem(
        "grounds",
        new Ground(this._p5, groundSize, rectPos)
      );
    }
  }
}
