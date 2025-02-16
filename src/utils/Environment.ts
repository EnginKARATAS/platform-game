import p5, { Vector } from "p5";
import { Platform } from "../sprite/platform/concrate/Platform";

export class Environment {
  _p5: p5;
  platforms: Platform[];
  static readonly GRAVITY: number = 0.5;
  
  constructor(p5: p5) {
    this._p5 = p5;
    this.platforms = [];
  }
}
