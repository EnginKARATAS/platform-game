import p5 from "p5";
import { Character } from "../../sprite/character/Character";
import { EnvironmentConstants } from "./EnvironmentConstants";
import { GameManager } from "../../utils/physics/concrate/GameManager";

export class PlayerControl {
  static keyboardController(p5: p5, character: Character): void {
    p5.keyPressed = () => {
      if (EnvironmentConstants.MENU == 0 || EnvironmentConstants.MENU == 2) {
        EnvironmentConstants.MENU = 1;
      }

      const action = KEY_BINDINGS[p5.key.toUpperCase()];
      if (action) {
        GameManager.performAction(action, character);
      }
    };

    p5.keyReleased = () => {
      if (p5.keyCode == p5.RIGHT_ARROW || p5.key.toUpperCase() === 'D') {
        character._movingRight = false;
        character.setState('idle');
      }
      if (p5.keyCode == p5.LEFT_ARROW || p5.key.toUpperCase() === 'A') {
        character._movingLeft = false;
        character.setState('idle');
      }
    };
  }
}

// Add key mappings for W, A, S, D
const KEY_BINDINGS: { [key: string]: string } = {
    ArrowUp: 'moveUp',
    ArrowDown: 'moveDown',
    ArrowLeft: 'moveLeft',
    ArrowRight: 'moveRight',
    W: 'moveUp',
    A: 'moveLeft',
    S: 'moveDown',
    D: 'moveRight'
};

function handleKeyDown(event: KeyboardEvent, character: Character) {
    const action = KEY_BINDINGS[event.key as keyof typeof KEY_BINDINGS];
    if (action) {
        // Call the function associated with the action
        GameManager.performAction(action, character);
    }
}
