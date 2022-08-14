import p5 from "p5";
import { Vector } from "p5";

export abstract class Character {
  _p5: p5;

  protected _jumpAcc: number;
  protected _movingRight: boolean;
  protected _movingLeft: boolean;

  protected _pos: Vector;
  protected _speed: Vector;
  protected _size: number;
  constructor(p5: p5, position: Vector) {
    this._p5 = p5;

    this._jumpAcc = -5;
    this._movingRight = false;
    this._movingLeft = false;

    this._pos = position;
    this._size = 20;
    this._speed = new Vector();
    this._speed.x = 0;
    this._speed.y = 0;
  }

  getPos(): Vector {
    return this._pos;
  }

  draw() {
    const p5 = this._p5; // just for convenience

    p5.push();

    // p5.translate(this._pos);
    p5.noStroke();
    p5.fill("black");
    // p5.ellipse(0, 0, this._size);
    p5.ellipse(this._pos.x, this._pos.y, this._size);

    p5.pop();
  }
}
