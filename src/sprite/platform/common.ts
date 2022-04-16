import p5, { Vector } from "p5";
import { Platform } from "./concrate/Platform";

export class Common extends Platform{
    constructor(p5: p5, width: number, height: number, position: Vector){
        super(p5, width, height, position);
    }
}