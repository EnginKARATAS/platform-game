import { Character } from "../../../sprite/character/Character";
import { Platform } from "../../../sprite/platform/concrate/Platform";

export interface Intersectable{
    intersectTwoObj(obj1: Character, obj2: Platform): boolean;
    intersectOneToManyObj(obj1: Character, obj2: Platform[]): boolean;

}