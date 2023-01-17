import p5, { Vector } from "p5";
import DataStore from "../../../providers/DataStore";
import { Character } from "../../../sprite/character/Character";
import { Platform } from "../../../sprite/platform/concrate/Platform";
import { Creatable } from "../abstract/creatable";
export class CreateObj implements Creatable {
  _p5: p5;
  dataStore: DataStore;
  constructor(p5: p5) {
    this._p5 = p5;
    this.dataStore = DataStore.getInstance();
  }
  createPlatform(baseAnchor: Character) {
    let platforms = this.dataStore.getArray("platforms");

    let characterPosBuf: Number = baseAnchor.getPos().x % 60;
    if (characterPosBuf > 50) {
      characterPosBuf = 0;
      const platformWidth = 40;
      const platformHeight = 10;

      const rectPos = this._p5.createVector(
        baseAnchor.getPos().x + 50,
        this._p5.height / 1.7
      );
      const platformSize = this._p5.createVector(platformWidth, platformHeight);

      platforms.push(new Platform(this._p5, platformSize, rectPos));
    }
  }
}
