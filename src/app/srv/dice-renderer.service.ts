import { inject, Injectable } from '@angular/core';
import * as BABYLON from '@babylonjs/core';
import { ToastService } from './toast.service';
import { Dice } from '../cls/dice';

@Injectable({
  providedIn: 'root',
})
export class DiceRendererService {

  private engine: BABYLON.Engine | null = null;
  private scene: BABYLON.Scene | null = null;
  private camera: BABYLON.ArcRotateCamera | null = null;
  private light: BABYLON.HemisphericLight | null = null;
  private ground: BABYLON.Mesh | null = null;
  private diceObjects: BABYLON.Mesh[] = [];
  private selectedDie: BABYLON.Mesh | null = null;
  private isDragging: boolean = false;
  private lastPointerX: number = 0;
  private lastPointerY: number = 0;
  private canvas: HTMLCanvasElement | null = null; 
  private toastService = inject(ToastService);

  public renderScene(): void {
    if (this.engine && this.scene) {
      this.engine.runRenderLoop(() => {
        this.scene!.render();
      });
    }
  }

  public resetCamera(): void {
    if (this.camera) {
      this.camera.radius = 10;
    }
  }

  public zoomIn(): void {
    if (this.camera) {
      this.camera.radius -= 1;
    }
  }

  public zoomOut(): void {
    if (this.camera) {
      this.camera.radius += 1;
    }
  }

  public addDieToScene(die: Dice): void {
    if (!this.scene) {
      this.toastService.showErrorMessage('Scene is not initialized.');
      return;
    } else {
      let dieMesh: BABYLON.Mesh;
      switch (die.type.object) {
        case 0: // Tetrahedron
          dieMesh = BABYLON.MeshBuilder.CreatePolyhedron(die.name, { type: 0, size: 1 }, this.scene);
          break;
        case 1: // Octahedron
          dieMesh = BABYLON.MeshBuilder.CreatePolyhedron(die.name, { type: 1, size: 1 }, this.scene);
          break;
        case 2: // Dodecahedron
          dieMesh = BABYLON.MeshBuilder.CreatePolyhedron(die.name, { type: 2, size: 1 }, this.scene);
          break;
        case 3: // Icosahedron
          dieMesh = BABYLON.MeshBuilder.CreatePolyhedron(die.name, { type: 3, size: 1 }, this.scene);
          break;
        case 15: // Cube
          dieMesh = BABYLON.MeshBuilder.CreateBox(die.name, { size: 1 }, this.scene);
          break;
        default:
          this.toastService.showErrorMessage('Unsupported die shape.');
          return;
      }
      dieMesh.position = new BABYLON.Vector3(0, 1, 0);
      this.diceObjects.push(dieMesh);
    }
  }

  public clearScene(): void {
    if (this.diceObjects.length > 0) {
      this.diceObjects.forEach((dieMesh) => {
        dieMesh.dispose();
      });
      this.diceObjects = [];
    }
  }

  public listenForClickAndRotate(): void {
    if (this.canvas && this.scene) {
      this.scene.onPointerObservable.add((pointerInfo) => {
        switch (pointerInfo.type) {
          case BABYLON.PointerEventTypes.POINTERDOWN:
            const pickResult = this.scene!.pick(this.scene!.pointerX, this.scene!.pointerY);
            if (pickResult && pickResult.hit && pickResult.pickedMesh && this.diceObjects.includes(pickResult.pickedMesh as BABYLON.Mesh)) {
              this.selectedDie = pickResult.pickedMesh as BABYLON.Mesh;
              this.lastPointerX = this.scene!.pointerX;
              this.lastPointerY = this.scene!.pointerY;
              this.isDragging = true;
            }
            
            break;
          case BABYLON.PointerEventTypes.POINTERUP:
            this.selectedDie = null;
            this.isDragging = false;
            break;
          case BABYLON.PointerEventTypes.POINTERMOVE:
            if (this.selectedDie && this.isDragging) {
              const deltaX = this.scene!.pointerX - this.lastPointerX;
              const deltaY = this.scene!.pointerY - this.lastPointerY;
              this.selectedDie.rotation.y += deltaX * 0.01;
              this.selectedDie.rotation.x += deltaY * 0.01;
              this.lastPointerX = this.scene!.pointerX;
              this.lastPointerY = this.scene!.pointerY;
            }
            break;
        }
      });
    }
  }
  
  public createScene(canvas: HTMLCanvasElement): boolean {
    try {
      this.canvas = canvas;
      this.engine = new BABYLON.Engine(this.canvas, true);
      this.scene = new BABYLON.Scene(this.engine);
      this.camera = new BABYLON.ArcRotateCamera('camera', Math.PI / 2, 0, 10, new BABYLON.Vector3(0, 0, 0), this.scene);
      this.light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), this.scene);
      this.light.intensity = 0.5;
      this.ground = BABYLON.MeshBuilder.CreateGround('ground', { width: 10, height: 10 }, this.scene);
      return true;
    } catch (error) {
      this.toastService.showErrorMessage('Failed to create dice renderer scene.');
      return false;
    }
  }

}
