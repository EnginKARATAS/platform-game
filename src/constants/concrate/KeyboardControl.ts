import { Character } from "../../sprite/character/Character";

export class KeyboardControl {
  static control(p5, character: Character): void {
    p5.keyPressed = () => {
      if (p5.keyCode == p5.RIGHT_ARROW) {
        character._movingRight = true;
      }
      if (p5.keyCode == p5.LEFT_ARROW) {
        character._movingLeft = true;
      }
      if (p5.keyCode === p5.UP_ARROW) {
        character.jump();
      }
    };

    p5.keyReleased = () => {
      if (p5.keyCode == p5.RIGHT_ARROW) {
        character._movingRight = false;
      }
      if (p5.keyCode == p5.LEFT_ARROW) {
        character._movingLeft = false;
      }
    };
  }
}
