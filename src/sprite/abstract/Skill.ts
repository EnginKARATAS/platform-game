import { Vector } from "p5";

export interface Skill{
    jump(): void;
    move(): void;
    eat(characterPos: Vector, objPos: Vector, size: Vector): boolean;
}
