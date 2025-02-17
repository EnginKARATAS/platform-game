import p5, { Vector } from "p5";
import { Path } from "../../../utils/Path";
import { Vectoral } from "../../../types/Vectoral";
import { Render } from "../../../utils/physics/render/abstract/Render";

export class Ground extends Render {
  private texture: p5.Image | null = null;

  constructor(p5: p5, platformSize: Vectoral, position: Vectoral) {
    super(p5, position, platformSize, "green");
    // Load the grass texture
    this.loadTexture(p5);
  }

  private loadTexture(p5: p5) {
    p5.loadImage(Path.grassImg, (img) => {
      this.texture = img;
    });
  }

  override draw() {
    if (this.texture) {
      const p5 = this.getP5();
      p5.push();
      p5.imageMode(p5.CORNER);
      
      // Use the protected properties directly
      const repetitions = Math.ceil(this._size.x / 32);
      for (let i = 0; i < repetitions; i++) {
        p5.image(
          this.texture,
          this._position.x + (i * 32),
          this._position.y,
          32,
          this._size.y
        );
      }
      p5.pop();
    } else {
      // Call parent's draw method as fallback
      super.draw();
    }
  }

  // Override these methods to ensure they return proper Vector objects
  override getPos(): Vector {
    return this._position;
  }

  override getSize(): Vector {
    return this._size;
  }
}
