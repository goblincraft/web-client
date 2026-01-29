import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { DiceRendererService } from '../../srv/dice-renderer.service';
import { ToastService } from '../../srv/toast.service';

@Component({
  selector: 'app-dice-viewer',
  imports: [],
  templateUrl: './dice-viewer.component.html',
  styleUrl: './dice-viewer.component.css',
})
export class DiceViewerComponent implements AfterViewInit {

  @ViewChild('diceViewer') diceViewer: ElementRef<HTMLCanvasElement> | undefined;
  private diceRendererService = inject(DiceRendererService);
  private toastService = inject(ToastService);

  ngAfterViewInit(): void {
    if (this.diceViewer) {
      this.diceRendererService.createScene(this.diceViewer.nativeElement);
      this.diceRendererService.renderScene();
    } else {
      this.toastService.showErrorMessage('Dice viewer not found.');
    }
  }

}