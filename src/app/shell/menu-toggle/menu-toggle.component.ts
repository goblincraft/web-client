import { Component, EventEmitter, Output, signal } from '@angular/core';
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

  @Output() menuToggle = new EventEmitter<void>();
  menuOpened = signal(false);
  menuIcon = signal('menu'); 

  toggleMenu(): void {
    this.menuOpened.set(!this.menuOpened());
    this.menuIcon.set(this.menuOpened() ? 'menu_open' : 'menu');
    this.menuToggle.emit();
  }

}
