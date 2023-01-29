import p5, { Vector } from "p5";
import { Skill } from "../../../../sprite/abstract/Skill";
import { Vectoral } from "../../../../types/Vectoral";

export abstract class Render {
  _size: Vector;
  _position: Vector;
  constructor(
    private p5: p5,
    platformSize: Vectoral,
    position: Vectoral,
    private color: string = "black"
  ) {
    this._size = new Vector().set(platformSize.x, platformSize.y);
    this._position = new Vector().set(position.x, position.y);
  }

  getPos(): Vector {
    return this._position;
  }

  getSize(): Vector {
    return this._size;
  }

  draw() {
    this.p5.noStroke();
    this.p5.fill(this.color);
    this.p5.rect(
      this._position.x,
      this._position.y,
      this._size.x,
      this._size.y
    );
  }
}
