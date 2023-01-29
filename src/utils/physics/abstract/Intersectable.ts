import { Character } from "../../../sprite/character/Character";
import { Platform } from "../../../sprite/platform/concrate/Platform";
import { Touchable } from "./Touchable";

export interface Intersectable {
  intersectTwo(obj1: Character, obj2: Touchable): boolean;
  intersectOneToMany(obj1: Character, obj2: Touchable[]): boolean;
}
