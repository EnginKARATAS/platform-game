import p5, { Vector } from "p5";
import { Skill } from "../../../../sprite/abstract/Skill";
import { Vectoral } from "../../../../types/Vectoral";
import { Renderable } from "../../abstract/Renderable";

export abstract class Render implements Renderable {
  protected _size: Vector;
  protected _position: Vector;
  constructor(
    private readonly p5: p5,
    platformSize: Vectoral,
    position: Vectoral,
    private color: string = "black"
  ) {
    this._size = new Vector().set(platformSize.x, platformSize.y);
    this._position = new Vector().set(position.x, position.y);
  }

  protected getP5(): p5 {
    return this.p5;
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

  setPos(pos: Vectoral): void {
    this._position.x = pos.x;
    this._position.y = pos.y;
  }

  setSpeed(speed: number): void {
    // Implement speed setting logic if needed
  }
}
