import { Component } from '@angular/core';
import { DiceGalleryComponent } from './features/dice-gallery/dice-gallery.component';

@Component({
  selector: 'app-dice-dashboard',
  imports: [
    DiceGalleryComponent
  ],
  templateUrl: './dice-dashboard.component.html',
  styleUrl: './dice-dashboard.component.css',
})
export class DiceDashboardComponent {

}
