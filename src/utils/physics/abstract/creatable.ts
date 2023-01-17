import { Vector } from "p5";
import { Intersectable } from "./intersectable";
export interface Creatable {
  createPlatform(baseAnchor: Intersectable): void;
}
