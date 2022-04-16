import p5, { Vector } from "p5";

export class Platform{
    _p5: p5;
    _width: number;
    _height: number;
    _position: Vector;
    _color?: string;
    constructor(p5: p5, width: number, height: number, position: Vector){
        this._p5 = p5;
        this._width = width;
        this._height = height;
        this._position = position;
    }

    draw(){
        const p5 = this._p5; // just for convenience

		p5.push();

		p5.translate(this._position);
		p5.noStroke();
		p5.fill("blue");
		p5.rect(75, 0, this._height, this._width);

		p5.pop();
    }
}