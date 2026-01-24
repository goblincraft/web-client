import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-side-menu',
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatDividerModule
  ],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
})
export class SideMenuComponent {

  @Output() menuClose = new EventEmitter<void>();
  routes: { path: string; label: string, icon: string }[] = [
    { path: 'dice-dashboard', label: 'Dice', icon: 'casino' }
  ];

  closeMenu(): void {
    this.menuClose.emit();
  }

}
