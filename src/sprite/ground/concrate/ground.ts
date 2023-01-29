import p5, { Vector } from "p5";
import { Vectoral } from "../../../types/Vectoral";
import { Touchable } from "../../../utils/physics/abstract/Touchable";
import { Skill } from "../../abstract/Skill";

export class Ground implements Touchable {
  _p5: p5;
  _size: Vector;
  _position: Vector;
  _color?: string;
  constructor(p5: p5, position: Vectoral, platformSize: Vectoral) {
    this._p5 = p5;
    this._size = new Vector().set(platformSize.x, platformSize.y);
    this._position = new Vector().set(position.x, position.y);
  }

  getPos(): Vector {
    return this._position;
  }

  getSize(): Vector {
    return this._size;
  }
  intersect(
    characterPos: Skill,
    objPos: p5.Vector,
    objSize: p5.Vector
  ): boolean {
    //A, B, C, D is diagonal of the rect object
    let A = characterPos.getPos().x > objPos.x;
    let B = characterPos.getPos().x < objPos.x + objSize.x;
    let C = characterPos.getPos().y > objPos.y;
    let D = characterPos.getPos().y < objPos.y + objSize.y;

    if (A && B && C && D) return true;
    else return false;
  }

  draw() {
    const p5 = this._p5; // just for convenience
    p5.fill("rgb(0, 255, 0)");
    p5.noStroke();
    p5.rect(this._position.x, this._position.y, this._size.x, this._size.y);
  }
}
