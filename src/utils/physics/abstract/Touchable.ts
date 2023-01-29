import { Vectoral } from "../../../types/Vectoral";
export interface Touchable {
  getPos(): { x: number; y: number };
  getSize(): { x: number; y: number };
}
