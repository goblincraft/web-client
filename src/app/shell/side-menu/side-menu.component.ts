import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule
  ],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
})
export class SideMenuComponent {

  routes: { path: string; label: string, icon: string }[] = [
    { path: 'dice-dashboard', label: 'Dice', icon: 'casino' }
  ];

}
