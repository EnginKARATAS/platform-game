import P5 from "p5";

export default class MyCircle {
	_p5: P5;
	_pos: P5.Vector;
	_size: number;

	constructor(p5: P5, atPosition: P5.Vector, size: number) {
		this._p5 = p5;
		this._pos = atPosition;
		this._size = size;
	}

	draw() {
		const p5 = this._p5; // just for convenience

		p5.push();

		p5.translate(this._pos);
		p5.noStroke();
		p5.fill("orange");
		p5.ellipse(0, 0, this._size);

		p5.pop();
	}
}
