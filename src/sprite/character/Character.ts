import p5 from "p5";
import { Vector } from "p5";
import { Intersectable } from "../../utils/physics/abstract/intersectable";
import { Touchable } from "../../utils/physics/abstract/Touchable";
import { Platform } from "../platform/concrate/Platform";

export abstract class Character implements Intersectable {
  _p5: p5;

  public _jumpAcc: number;
  public _jumpMagnitude: number;
  public _movingRight: boolean;
  public _movingLeft: boolean;

  public _pos: Vector;
  public _speed: number;
  public _size: number;
  constructor(
    p5: p5,
    position: Vector,
    speed: number = 2,
    jumpMagnitude: number = 7
  ) {
    this._p5 = p5;
    this._jumpMagnitude = jumpMagnitude;
    this._jumpAcc = -5;
    this._movingRight = false;
    this._movingLeft = false;

    this._pos = position;
    this._size = 5;
    this._speed = speed;
  }
  intersectTwoObj(obj1: Character, obj2: Touchable): boolean {
    throw new Error("Method not implemented.");
  }
  intersectOneToManyObj(obj1: Character, obj2: Touchable[]): boolean {
    throw new Error("Method not implemented.");
  }

  getPos(): Vector {
    return this._pos;
  }

  draw() {
    const p5 = this._p5; // just for convenience
    // p5.translate(this._pos);
    p5.noStroke();
    p5.fill("black");
    // p5.ellipse(0, 0, this._size);
    p5.ellipse(this._pos.x, this._pos.y, this._size);
  }
}
