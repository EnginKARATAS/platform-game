import p5 from "p5";
import { Character } from "../../sprite/character/Character";
import { EnvironmentConstants } from "./EnvironmentConstants";

export class PlayerControl {
  static keyboardController(p5: p5, character: Character): void {
    p5.keyPressed = () => {
      if (EnvironmentConstants.MENU == 0 || EnvironmentConstants.MENU == 2) {
        EnvironmentConstants.MENU = 1;
      }

      //p5.key == "w" or p5.keyCode == 68 doesnt work
      if (p5.keyCode === p5.RIGHT_ARROW) {
        character._movingRight = true;
      } else if (p5.keyCode === p5.LEFT_ARROW) {
        character._movingLeft = true;
      } else if (p5.keyCode === p5.UP_ARROW) {
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
