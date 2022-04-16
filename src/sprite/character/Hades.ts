import { ImageCharacter } from "./ImageCharacter";
import { Character } from "./Character";
import { Environment } from "../../utils/Environment";
import { Skill } from "../abstract/Skill";
import { Vector } from "p5";

export class Hades extends Character implements Skill {
  eat(characterPos: Vector, objPos: Vector): boolean {
      throw new Error("Method not implemented.");
  }
  jump(): void {
    console.log("jump");
    this._jumpAcc = -10;
  }

  move(): void {
    this._pos.y += this._jumpAcc;
    this._jumpAcc += Environment.gravity;
    this._pos.y = this._p5.constrain(this._pos.y, 0, this._p5.height);
  }
}
