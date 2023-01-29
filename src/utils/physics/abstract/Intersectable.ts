import { Character } from "../../../sprite/character/Character";
import { Platform } from "../../../sprite/platform/concrate/Platform";
import { Touchable } from "./Touchable";

export interface Intersectable {
  intersectTwoObj(obj1: Character, obj2: Touchable): boolean;
  intersectOneToManyObj(obj1: Character, obj2: Touchable[]): boolean;
}
