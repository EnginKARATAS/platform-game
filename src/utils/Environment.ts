import p5, { Vector } from "p5";

export class Environment{ 
    _p5: p5;
    constructor(p5: p5){
        this._p5 = p5;
    }
    public static gravity: number = 0.5;
    public static graund: number = 500;
}