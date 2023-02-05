import p5, { Vector } from "p5";
import { ImageCharacter } from "./ImageCharacter";
import { Environment } from "../../utils/Environment";
import { Skill } from "../abstract/Skill";
import { EnvironmentConstants } from "../../constants/concrate/EnvironmentConstants";
import { IntersectManager } from "../../utils/physics/concrate/IntersectManager";
import DataStore from "../../providers/DataStore";

export class Moly extends ImageCharacter {
  constructor(
    p5: p5,
    position: Vector,
    imagePath: string,
    intersectManager: IntersectManager,
    dataStore: DataStore
  ) {
    super(p5, position, imagePath, intersectManager, dataStore);
  }

  render(): void {
    this.draw();
    this.move();
  }
  jump(): void {
    if (this._jumpingCounter < 2) {
      if (
        this.intersectManager.intersectOneToMany(
          this,
          this.dataStore.getArray("grounds")
        )
      ) {
        this._jumpingCounter = 0;
      }
      this._jumpAcc = -this._jumpMagnitude;
      this._jumpingCounter++;
    }
  }

  move(): void {
    if (this._movingRight) {
      this._pos.add(this._speed, 0);
    } else if (this._movingLeft) {
      this._pos.add(-this._speed, 0);
    }
    this._pos.add(0, this._jumpAcc);
    this._jumpAcc += EnvironmentConstants.gravity;

    // this._pos.x = this._p5.constrain(this._pos.x, 0, this._p5.width);

    //provide memory leak
    this.resetJumpIteratorCounter();
  }
  resetJumpIteratorCounter() {
    if (this._jumpAcc % 1000 == 0) {
      this._jumpAcc = 0;
    }
  }
}
