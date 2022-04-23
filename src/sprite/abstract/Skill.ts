import { Vector } from "p5";

export interface Skill{
    jump(): void;
    move(): void;
    getPos(): Vector;
 
}
