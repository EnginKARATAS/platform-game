import p5 from "p5";
import { Vector } from "p5";

export class Character {
  _p5: p5;
  _pos: Vector;
  _speed: Vector;
  _size: number;
  constructor(p5: p5, position: Vector) {
    this._p5 = p5;
    this._pos = position;

    this._size = 100;
    this._speed = new Vector();
    this._speed.x = 0;
    this._speed.y = 0;
  }

  draw() {
    const p5 = this._p5; // just for convenience

    p5.push();

    // p5.translate(this._pos);
    p5.noStroke();
    p5.fill("orange");
    // p5.ellipse(0, 0, this._size);
    p5.ellipse(this._pos.x, this._pos.y, this._size);

    p5.pop();
  }

  jump() {
    this._speed.y += 10;
    setTimeout(() => {
      this._speed.y -= 10;
      console.log("character jumped");
    }, 1000);
  }
}
