import p5, { Vector } from "p5";
import { ImageCharacter } from "./ImageCharacter";
import { Environment } from "../../utils/Environment";
import { Skill } from "../abstract/Skill";
import { EnvironmentConstants } from "../../utils/physics/EnvironmentConstants";

export class Moly extends ImageCharacter implements Skill {
  constructor(p5: p5, position: Vector, imagePath: string) {
    super(p5, position, imagePath);
  }

  render(): void {
    this.draw();
    this.move();
  }

  jump(): void {
    this._jumpAcc = -this._jumpMagnitude;
  }
  move(): void {
    if (this._movingRight) {
      this._pos.add(this._speed, 0);
    } else if (this._movingLeft) {
      this._pos.add(-this._speed, 0);
    }
    this._pos.add(0, this._jumpAcc);
    this._jumpAcc += EnvironmentConstants.gravity;

    this._pos.y = this._p5.constrain(
      this._pos.y,
      0,
      this._p5.height - this._size / 2 - 9
    );
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
