import p5, { Vector } from "p5";
import { Character } from "../../../sprite/character/Character";
import { Platform } from "../../../sprite/platform/concrate/Platform";
import { Creatable } from "../abstract/creatable";
import { Ground } from "../../../sprite/ground/concrate/ground";
import DataStore from "../../../providers/DataStore";
import { Renderable } from "../abstract/Renderable";
export class CreateObj implements Creatable {
  _p5: p5;
  dataStore: DataStore;
  characterPosBuf: number = 0;
  constructor(p5: p5, private renderDistance: number = 200) {
    this._p5 = p5;
    this.dataStore = DataStore.getInstance();
  }
  createPlatformFrom(baseAnchor: Renderable) {
    this.characterPosBuf = 0;
    if (this.characterPosBuf == 0) {
      this.characterPosBuf = baseAnchor.getPos().x;
    }
    this.characterPosBuf = baseAnchor.getPos().x;
    if (this.characterPosBuf % 60 > 50) {
    }
    if (this.characterPosBuf % 60 > 50) {
      this.characterPosBuf = 0;
      let randomNumber = 1.7;
      const rectPos = this._p5.createVector(
        baseAnchor.getPos().x + this.renderDistance,
        this._p5.height / randomNumber
      );

      this.dataStore.pushItem(
        "platforms",
        new Platform(
          this._p5,
          { x: Math.random() * 30, y: 10 },
          {
            x: baseAnchor.getPos().x + this.renderDistance,
            y: this._p5.height / randomNumber,
          }
        )
      );
    }
  }
  createGroundFrom(baseAnchor: Renderable) {
    let characterPosBuf: number = baseAnchor.getPos().x % 60;
    if (characterPosBuf > 50) {
      const rectPos = this._p5.createVector(
        baseAnchor.getPos().x + this.renderDistance,
        this._p5.height - 20
      );
      const groundSize = this._p5.createVector(Math.random() * 50, 20);
      this.dataStore.pushItem(
        "grounds",
        new Ground(this._p5, rectPos, groundSize)
      );
    }
  }
}
