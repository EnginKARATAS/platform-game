import p5, { Vector } from "p5";
import { ImageCharacter } from "./ImageCharacter";
import { Environment } from "../../utils/Environment";
import { Skill } from "../abstract/Skill";

export class Moly extends ImageCharacter implements Skill {
  constructor(p5: p5, position: Vector, imagePath: string) {
    super(p5, position, imagePath);
  }
  eat(characterPos: p5.Vector, objPos: p5.Vector): boolean {
    let distance = this._p5.dist(
      characterPos.x,
      characterPos.y,
      objPos.x,
      objPos.y
    );

    if (distance >= 0 && distance < 30) return true;
    else return false;
  }

  jump(): void {
    this._jumpAcc = -10;
  }
  move(): void {
    if (this._movingRight) {
      this._pos.x += 10;
    } else if (this._movingLeft) {
      this._pos.x -= 10;
    }
    this._pos.y += this._jumpAcc;
    this._jumpAcc += Environment.gravity;
    this._pos.y = this._p5.constrain(this._pos.y, 0, this._p5.height);
    this._pos.x = this._p5.constrain(this._pos.x, 0, this._p5.width);

    //provide memory leak
    this.resetJumpIteratorCounter();
  }
  resetJumpIteratorCounter() {
    if (this._jumpAcc % 10 == 0) {
      this._jumpAcc = 0;
    }
  }
}
