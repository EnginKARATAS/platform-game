import { Intersectable } from "./intersectable";
export interface Creatable {
  createPlatformFrom(baseAnchor: Intersectable): void;
  createGroundFrom(baseAnchor: Intersectable): void;
}
