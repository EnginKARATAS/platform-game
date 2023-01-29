import p5, { Vector } from "p5";
import { Character } from "../../../sprite/character/Character";
import { Platform } from "../../../sprite/platform/concrate/Platform";
import { Creatable } from "../abstract/Creatable";
import DataStore from "../../../providers/DataStore";
import { Ground } from "../../../sprite/ground/concrate/ground";
import { CalculationConstants } from "../constants/concrate/CalculationConstants";
export class CreateObj implements Creatable {
  _p5: p5;
  dataStore: DataStore;
  platformCreated = false;
  characterPosBuf: number = 0;
  constructor(p5: p5, private renderDistance: number = 200) {
    this._p5 = p5;
    this.dataStore = DataStore.getInstance();
  }
  createPlatformFrom(baseAnchor: Character) {
    this.characterPosBuf = 0;
    if (this.characterPosBuf == 0) {
      this.characterPosBuf = baseAnchor.getPos().x;
    }
    this.platformCreated = false;
    this.characterPosBuf = baseAnchor.getPos().x;
    if (this.characterPosBuf % 60 > 50) {
    }
    if (this.characterPosBuf % 60 > 50 && !this.platformCreated) {
      this.platformCreated = true;
      this.characterPosBuf = 0;
      const platformWidth = 40;
      const platformHeight = 10;
      let randomNumber = 1.7;
      // CalculationConstants.generateRandomNumber(10, 20) * 0.1;
      const rectPos = this._p5.createVector(
        baseAnchor.getPos().x + this.renderDistance,
        this._p5.height / randomNumber
      );
      const platformSize = this._p5.createVector(platformWidth, platformHeight);
      const groundSize = this._p5.createVector(Math.random() * 30, 10);

      this.dataStore.pushItem(
        "platforms",
        new Platform(this._p5, groundSize, rectPos, Date.now())
      );
    }
  }
  createGroundFrom(baseAnchor: Character) {
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
