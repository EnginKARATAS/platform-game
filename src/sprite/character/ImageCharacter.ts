import p5, { Image, Vector } from "p5";
import { Character } from "./Character";

export abstract class ImageCharacter extends Character {
  _image?: Image;
  imagePath: string;

  constructor(p5: p5, position: Vector, imagePath: string) {
    super(p5, position);
    this._p5 = p5;
    this.imagePath = imagePath;
  }
  public loadImage(): void {
    this._image = this._p5.loadImage(this.imagePath);
  }
}
