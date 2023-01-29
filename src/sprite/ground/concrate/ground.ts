import p5, { Vector } from "p5";
import { Vectoral } from "../../../types/Vectoral";
import { Touchable } from "../../../utils/physics/abstract/Touchable";
import { Render } from "../../../utils/physics/render/abstract/Render";
import { Skill } from "../../abstract/Skill";

export class Ground extends Render implements Touchable {
  constructor(p5: p5, platformSize: Vectoral, position: Vectoral) {
    super(p5, platformSize, position, "green");
  }
}
