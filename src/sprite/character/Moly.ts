import p5, { Vector } from "p5";
import { ImageCharacter } from "./ImageCharacter";

export class Moly extends ImageCharacter{
     
    constructor(p5:p5, position: Vector, imagePath: string) {
        super(p5, position, imagePath);
    }

    jump(): void {
        console.log("moly jumped")
    }

}