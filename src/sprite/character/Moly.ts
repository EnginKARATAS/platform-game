import p5 from "p5";
import { SpriteCharacter } from "./SpriteCharacter";
import { EnvironmentConstants } from "../../constants/concrate/EnvironmentConstants";
import { IntersectManager } from "../../utils/physics/concrate/IntersectManager";
import DataStore from "../../providers/DataStore";
import { Path } from "../../utils/Path";

export class Moly extends SpriteCharacter {
  constructor(
    p5: p5,
    position: p5.Vector,
    intersectManager: IntersectManager,
    dataStore: DataStore
  ) {
    super(p5, position, Path.hammermanImg, intersectManager, dataStore);
    this._size = 40;
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

    this.resetJumpIteratorCounter();
  }
  resetJumpIteratorCounter() {
    if (this._jumpAcc % 1000 == 0) {
      this._jumpAcc = 0;
    }
  }
}
