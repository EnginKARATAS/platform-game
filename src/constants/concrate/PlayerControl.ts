import p5 from "p5";
import { Character } from "../../sprite/character/Character";
import { EnvironmentConstants } from "./EnvironmentConstants";
import { GameManager } from "../../utils/physics/concrate/GameManager";

const KEY_BINDINGS: { [key: string]: string } = {
  W: "moveUp",
  A: "moveLeft",
  D: "moveRight",
  S: "moveDown",
};

export class PlayerControl {
  static keyboardController(p5: p5, character: Character): void {
    p5.keyPressed = () => {
      if (EnvironmentConstants.MENU == 0 || EnvironmentConstants.MENU == 2) {
        EnvironmentConstants.MENU = 1;
        return;
      }

      const key = p5.key.toUpperCase();

      if (key === "W" || p5.keyCode === p5.UP_ARROW) {
        character.jump();
        return;
      }

      if (key === "D" || p5.keyCode === p5.RIGHT_ARROW) {
        character._movingRight = true;
        character._movingLeft = false;
        if (character._jumpingCounter === 0) {
          character.setState("moving");
        }
      }
      if (key === "A" || p5.keyCode === p5.LEFT_ARROW) {
        character._movingLeft = true;
        character._movingRight = false;
        if (character._jumpingCounter === 0) {
          character.setState("moving");
        }
      }
    };

    p5.keyReleased = () => {
      const key = p5.key.toUpperCase();

      if (key === "D" || p5.keyCode === p5.RIGHT_ARROW) {
        character._movingRight = false;
        if (!character._movingLeft && character._jumpingCounter === 0) {
          character.setState("idle");
        }
      }
      if (key === "A" || p5.keyCode === p5.LEFT_ARROW) {
        character._movingLeft = false;
        if (!character._movingRight && character._jumpingCounter === 0) {
          character.setState("idle");
        }
      }

      if (
        !character._movingRight &&
        !character._movingLeft &&
        character._jumpingCounter === 0
      ) {
        character.setState("idle");
      }
    };
  }
}
function handleKeyDown(event: KeyboardEvent, character: Character) {
  const action = KEY_BINDINGS[event.key as keyof typeof KEY_BINDINGS];
  if (action) {
    GameManager.performAction(action, character);
  }
}

