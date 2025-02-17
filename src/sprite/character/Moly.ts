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
      this.velocity.y = -this._jumpMagnitude;
      this._jumpingCounter++;
      this.state = "jumping";
    }
  }

  move(): void {
    if (this._movingRight) {
      this.velocity.x = this._speed;
    } else if (this._movingLeft) {
      this.velocity.x = -this._speed;
    } else {
      this.velocity.x = 0;
    }

    this.velocity.y += EnvironmentConstants.gravity;

    const prevY = this._pos.y;

    this._pos.add(this.velocity);

    if (
      this.intersectManager.intersectOneToMany(
        this,
        this.dataStore.getArray("grounds")
      )
    ) {
      this._pos.y = prevY;
      this.velocity.y = 0;
      this._jumpingCounter = 0;

      if (this._movingRight || this._movingLeft) {
        this.state = "moving";
      } else {
        this.state = "idle";
      }
    }
  }

  resetJumping(): void {
    this._jumpingCounter = 0;
    if (!this._movingRight && !this._movingLeft) {
      this.state = "idle";
    } else {
      this.state = "moving";
    }
  }
}
