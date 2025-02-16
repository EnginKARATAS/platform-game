import { Character } from "../../../sprite/character/Character";
import { Renderable } from "./Renderable";

export interface Intersectable {
  intersectTwo(obj1: Character, obj2: Renderable): boolean;
  intersectOneToMany(obj1: Character, obj2: Renderable[]): boolean;
}
