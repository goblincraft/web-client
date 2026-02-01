import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Dice, DiceOptions, IDiceOption } from '../../cls/dice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DiceViewerComponent } from '../../shared/dice-viewer/dice-viewer.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dice-editor',
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    DiceViewerComponent
  ],
  templateUrl: './dice-editor.component.html',
  styleUrl: './dice-editor.component.css',
})
export class DiceEditorComponent {

  @ViewChild('diceViewer') diceViewer!: DiceViewerComponent;
  options: IDiceOption[] = DiceOptions;
  die: Dice = new Dice();
  loadedDie: Dice[] = [this.die];

  async rollDie(): Promise<void> {
    this.diceViewer.diceRendererService.roll();
  }

  updateDie(): void {
    this.loadedDie = [this.die];
  }

}
