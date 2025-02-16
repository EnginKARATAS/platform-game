import { Renderable } from "./Renderable";
export interface Creatable {
  createPlatformFrom(baseAnchor: Renderable): void;
  createGroundFrom(baseAnchor: Renderable): void;
}
