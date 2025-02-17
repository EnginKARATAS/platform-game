import p5, { Image, Vector } from "p5";
import { Character } from "./Character";
import DataStore from "../../providers/DataStore";
import { IntersectManager } from "../../utils/physics/concrate/IntersectManager";

export abstract class SpriteCharacter extends Character {
    protected spriteSheet?: Image;
    protected currentFrame: number = 0;
    protected totalFrames: number = 10;
    protected frameWidth: number = 280;
    protected frameHeight: number = 385;
    protected animationSpeed: number = 0.2;
    protected velocity: Vector;
    protected state: string;

    constructor(
        p5: p5,
        position: p5.Vector,
        protected spritePath: string,
        intersectManager: IntersectManager,
        dataStore: DataStore
    ) {
        super(p5, position, intersectManager, dataStore);
        this.loadSprite();
        this.velocity = p5.createVector(0, 0);
        this.state = 'idle';
    }

    protected loadSprite(): void {
        this._p5.loadImage(this.spritePath, (img) => {
            this.spriteSheet = img;
            console.log("Sprite loaded successfully");
        });
    }

    draw() {
        if (this.spriteSheet) {
            this._p5.push();

            const frameIndex = Math.floor(this.currentFrame) % this.totalFrames;
            const row = Math.floor(frameIndex / 5);
            const col = frameIndex % 5;

            this._p5.imageMode(this._p5.CENTER);

            this._p5.translate(this._pos.x, this._pos.y);

            if (this._movingLeft) {
                this._p5.scale(-1, 1);
            }

            this._p5.image(
                this.spriteSheet,
                0, 0,
                this._size,
                this._size,
                col * this.frameWidth,
                row * this.frameHeight,
                this.frameWidth,
                this.frameHeight
            );

            this._p5.pop();

            if (this._movingRight || this._movingLeft) {
                this.currentFrame += this.animationSpeed;
            } else {
                this.currentFrame = 0;
            }
        } else {
            this._p5.fill('red');
            this._p5.ellipse(this._pos.x, this._pos.y, this._size);
        }
    }

    updatePosition() {
        if (this.isIdle()) {
            this.velocity.x = 0;
            this.velocity.y = 0;
        } else if (this._movingRight) {
            this.velocity.x = this._speed;
            this.state = 'moving';
        } else if (this._movingLeft) {
            this.velocity.x = -this._speed;
            this.state = 'moving';
        }

        // Apply velocity to position
        this._pos.add(this.velocity);
    }

    isIdle() {
        return this.state === 'idle' && !this._movingLeft && !this._movingRight;
    }

    intersectWithGround() {
        this.velocity.y = 0; // Stop vertical movement
        this.state = 'idle'; // Set state to idle
    }
} 