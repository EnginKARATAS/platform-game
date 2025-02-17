import p5 from "p5";
import { EnvironmentConstants } from "../../../constants/concrate/EnvironmentConstants";
import { Character } from "../../../sprite/character/Character";

export class GameManager {
  private characters: Character[] = [];

  constructor() {}

  public static endTheGame(p5: p5, character: Character) {
    p5.background(0);
    p5.fill(255);
    p5.textSize(32);
    p5.text("You Failed", 75, 100);
    p5.text("Click to restart", 75, 150);

    if (character.getPos().y > 800) {
      EnvironmentConstants.MENU = 2;
      character.setPos({ x: 25, y: 40 });
      character.setSpeed(0);
      character.resetState();
    }
  }

 

  update() {
    this.characters.forEach(character => {
      character.move();
    });
  }
}
