import { AfterViewInit, Component, ElementRef, inject, Input, SimpleChange, ViewChild } from '@angular/core';
import { DiceRendererService } from '../../srv/dice-renderer.service';
import { ToastService } from '../../srv/toast.service';
import { Dice } from '../../cls/dice';

@Component({
  selector: 'app-dice-viewer',
  imports: [],
  templateUrl: './dice-viewer.component.html',
  styleUrl: './dice-viewer.component.css',
})
export class DiceViewerComponent implements AfterViewInit {

  @ViewChild('diceViewer') diceViewer: ElementRef<HTMLCanvasElement> | undefined;
  @Input() public dice: Dice[] = [];
  private diceRendererService = inject(DiceRendererService);
  private toastService = inject(ToastService);

  ngOnChanges(): void {
    this.loadDie();
  }

  loadDie(): void {
    if (this.diceViewer) {
      this.diceRendererService.clearScene();
      this.dice.forEach((die) => {
        this.diceRendererService.addDieToScene(die);
      });
    }
  }

  ngAfterViewInit(): void {
    if (this.diceViewer) {
      this.diceRendererService.createScene(this.diceViewer.nativeElement);
      this.loadDie();
      this.diceRendererService.listenForClickAndRotate();
      this.diceRendererService.renderScene();
    } else {
      this.toastService.showErrorMessage('Dice viewer not found.');
    }
  }

}