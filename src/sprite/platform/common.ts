import { Vector } from "p5";
import { Platform } from "./concrate/Platform";

export class Common extends Platform{
    constructor(width: number, height: number, position: Vector){
        super(width, height, position);
    }
}