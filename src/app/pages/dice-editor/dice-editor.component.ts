import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DiceOptions, IDiceOption } from '../../cls/dice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dice-editor',
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  templateUrl: './dice-editor.component.html',
  styleUrl: './dice-editor.component.css',
})
export class DiceEditorComponent {

  options: IDiceOption[] = DiceOptions;

}
