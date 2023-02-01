import p5, { Vector } from "p5";
import { Vectoral } from "../../../types/Vectoral";
import { Render } from "../../../utils/physics/render/abstract/Render";

export class Ground extends Render {
  constructor(p5: p5, platformSize: Vectoral, position: Vectoral) {
    super(p5, platformSize, position, "green");
  }
}
