import p5, { Vector } from "p5";

export class Platform{
    _p5: p5;
    _size: Vector;
    _position: Vector;
    _color?: string;
    constructor(p5: p5, platformSize:Vector, position: Vector){
        this._p5 = p5;
        this._size = platformSize;
        this._position = position;
    }

    draw(){
        const p5 = this._p5; // just for convenience

		p5.push();

		p5.translate(this._position);
		p5.noStroke();
		p5.fill("blue");
		p5.rect(0, 0, this._size.x, this._size.y);

		p5.pop();
    }
}