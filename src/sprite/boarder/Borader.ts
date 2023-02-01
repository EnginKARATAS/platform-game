import p5 from "p5";
import { Character } from "../character/Character";

interface Rect {
  id: string;
  r: number;
}

export class Boarder {
  private xBoarderSize = 140;
  private rectCounter = 0;
  private rectY = 20;
  private rects: Rect[] = [];
  private boarderPos = { x: 0, y: 0 };

  constructor(private p5: p5) {}

  public assign(rects: Rect[]): void {
    this.rects = rects;
  }

  public showRelative(character: Character, txtArr: string[]): void {
    this.boarderPos = {
      x: character.getPos().x - 40,
      y: this.p5.height / 2 + 30,
    };
    this.showBoarderRelative(character);
    this.showRectsRelative(txtArr);
  }

  private showRectsRelative(stringArr: string[]): void {
    this.p5.textSize(4);
    this.p5.fill(128, 0, 128);
    for (let i = 0; i < stringArr.length; i++) {
      this.p5.text(
        stringArr[i],
        this.boarderPos.x,
        this.boarderPos.y + 5 + (this.rectY * i) / 4
      );
    }
  }

  private showBoarderRelative(character: Character): void {
    //p5 rect opacity
    this.p5.fill(0, 60, 0, 20);
    this.p5.rect(this.boarderPos.x, this.boarderPos.y, 40, 20);
    this.p5.fill(0, 0, 0, 100);
    this.p5.text("log screen", this.boarderPos.x, this.boarderPos.y);
  }
}
