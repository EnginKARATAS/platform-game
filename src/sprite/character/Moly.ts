import p5, { Vector } from "p5";
import { ImageCharacter } from "./ImageCharacter";

export class Moly extends ImageCharacter {
  constructor(p5: p5, position: Vector, imagePath: string) {
    super(p5, position, imagePath);
  }

  jump(): void {
    this._pos.add(new Vector().add(0, -5));
  }

  move(): void {
    this._pos.add(this._speed);
  }
}
