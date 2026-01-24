import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-dice-gallery',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
],
  templateUrl: './dice-gallery.component.html',
  styleUrl: './dice-gallery.component.css',
})
export class DiceGalleryComponent {

}
