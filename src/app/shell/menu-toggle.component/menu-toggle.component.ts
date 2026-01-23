import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-menu-toggle',
  imports: [
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './menu-toggle.component.html',
  styleUrl: './menu-toggle.component.css',
})
export class MenuToggleComponent {

}
