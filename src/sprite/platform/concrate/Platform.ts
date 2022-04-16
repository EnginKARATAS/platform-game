import { Vector } from "p5";

export class Platform{
    _width: number;
    _height: number;
    _position: Vector;
    _color?: string;
    constructor(width: number, height: number, position: Vector){
        this._width = width;
        this._height = height;
        this._position = position;
    }
}