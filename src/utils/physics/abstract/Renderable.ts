import { Vectoral } from "../../../types/Vectoral";

export interface Renderable {
  getPos(): { x: number; y: number };
  getSize(): { x: number; y: number };
  setPos(pos: Vectoral): void;
  setSpeed(speed: number): void;
}
