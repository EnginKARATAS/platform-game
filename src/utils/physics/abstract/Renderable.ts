import { Vectoral } from "../../../types/Vectoral";
export interface Renderable {
  getPos(): { x: number; y: number };
  getSize(): { x: number; y: number };
}
