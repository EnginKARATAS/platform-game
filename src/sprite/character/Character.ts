import p5 from "p5";
import { Vector } from "p5";
import DataStore from "../../providers/DataStore";
import { Vectoral } from "../../types/Vectoral";
import { Intersectable } from "../../utils/physics/abstract/intersectable";
import { Renderable } from "../../utils/physics/abstract/Renderable";
import { IntersectManager } from "../../utils/physics/concrate/IntersectManager";
import { Skill } from "../abstract/Skill";

export abstract class Character implements Intersectable, Renderable, Skill {
  _p5: p5;
  public _color: number = 40;
  public _jumpAcc: number;
  public _jumpMagnitude: number;
  public _movingRight: boolean;
  public _movingLeft: boolean;
  public _jumpingCounter: number = 0;
  public _pos: Vector;
  public _speed: number;
  public _size: number;
  constructor(
    p5: p5,
    position: Vector,
    protected intersectManager: IntersectManager,
    protected dataStore: DataStore,
    speed: number = 2,
    jumpMagnitude: number = 7
  ) {
    this._p5 = p5;
    this._jumpMagnitude = jumpMagnitude;
    this._jumpAcc = -2;
    this._movingRight = false;
    this._movingLeft = false;

    this._pos = position;
    this._size = 5;
    this._speed = speed;
    this.intersectManager = intersectManager;
    this.dataStore = DataStore.getInstance();
  }
  resetJumping(): void {
    this._jumpingCounter = 0;
  }
  move(): void {
    throw new Error("Method not implemented.");
  }
  setSpeed(speed: number): void {
    this._jumpAcc = speed;
    this._speed = speed;
  }
  setPos(pos: Vectoral): void {
    this._pos.x = pos.x;
    this._pos.y = pos.y;
  }
  abstract jump(): void;
  getSize(): { x: number; y: number } {
    throw new Error("Method not implemented.");
  }
  intersectTwo(obj1: Character, obj2: Renderable): boolean {
    throw new Error("Method not implemented.");
  }
  intersectOneToMany(obj1: Character, obj2: Renderable[]): boolean {
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
