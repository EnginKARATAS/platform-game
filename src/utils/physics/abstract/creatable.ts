import { Intersectable } from "./intersectable";
export interface Creatable {
  createPlatform(baseAnchor: Intersectable): void;
  createGround(baseAnchor: Intersectable): void;
}
