import { Character } from "../../../sprite/character/Character";
import { Platform } from "../../../sprite/platform/concrate/Platform";
import { Intersectable } from "../abstract/intersectable";
import { Renderable } from "../abstract/Renderable";

export class IntersectManager implements Intersectable {
  intersectTwo(obj1: Character, obj2: Renderable): boolean {
    //A, B, C, D is diagonal of the rect object
    let A = obj1.getPos().x > obj2.getPos().x;
    let B = obj1.getPos().x < obj2.getPos().x + obj2.getSize().x;
    let C = obj1.getPos().y > obj2.getPos().y;
    let D = obj1.getPos().y < obj2.getPos().y + obj2.getSize().y;

    if (A && B && C && D) {
      return true;
    } else {
      return false;
    }
  }
  intersectOneToMany(obj1: Character, obj2: Renderable[]): boolean {
    for (let i = 0; i < obj2.length; i++) {
      if (this.intersectTwo(obj1, obj2[i])) {
        obj1._jumpAcc = 0;
      }
    }
    return false;
  }
}
