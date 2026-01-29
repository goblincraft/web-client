import { Injectable } from '@angular/core';
import * as BABYLON from '@babylonjs/core';

@Injectable({
  providedIn: 'root',
})
export class DiceRendererService {

  private engine: BABYLON.Engine | null = null;
  private scene: BABYLON.Scene | null = null;
  private camera: BABYLON.ArcRotateCamera | null = null;
  private light: BABYLON.HemisphericLight | null = null;
  private canvas: HTMLCanvasElement | null = null; 
  
  createScene(canvas: HTMLCanvasElement): void {
    this.canvas = canvas;
    this.engine = new BABYLON.Engine(this.canvas, true);
    this.scene = new BABYLON.Scene(this.engine);
    this.camera = new BABYLON.ArcRotateCamera('camera', Math.PI / 2, Math.PI / 4, 10, new BABYLON.Vector3(0, 0, 0), this.scene);
    this.camera.attachControl(this.canvas, true);
    this.light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), this.scene);
    this.light.intensity = 0.7;
  }

}
