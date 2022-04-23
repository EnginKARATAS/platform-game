import p5, { Vector } from "p5";
import { Skill } from "../../abstract/Skill";

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

    intersect(characterPos: Skill, objPos: p5.Vector, objSize: p5.Vector): boolean {
        //A, B, C, D is diagonal of the rect object
        let A = characterPos.getPos().x > objPos.x;
        let B = characterPos.getPos().x < objPos.x + objSize.x;
        let C = characterPos.getPos().y > objPos.y;
        let D = characterPos.getPos().y < objPos.y + objSize.y;
    
        if (A && B && C && D) return true;
        else return false;
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