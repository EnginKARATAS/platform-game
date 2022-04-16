import p5, { Vector } from "p5";
import { ImageCharacter } from "./ImageCharacter";
import { Environment } from "../../utils/Environment";
import { Skill } from "../abstract/Skill";

export class Moly extends ImageCharacter implements Skill {
  constructor(p5: p5, position: Vector, imagePath: string) {
    super(p5, position, imagePath);
  }

  public jump(): void {
    console.log("jump")
    this._jumpAcc = -10
  }

  move(): void {  
    this._pos.y += this._jumpAcc;
    this._jumpAcc += Environment.gravity;
    this._pos.y = this._p5.constrain(this._pos.y, 0, this._p5.height);
  }
}
