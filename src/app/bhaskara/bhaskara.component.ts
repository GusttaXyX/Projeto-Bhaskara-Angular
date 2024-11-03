import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bhaskara',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './bhaskara.component.html',
  styleUrl: './bhaskara.component.css'
})
export class BhaskaraComponent {

  IsVisible: boolean = false;

  a: number = 0;
  b: number = 0;
  c: number = 0;
  delta: number = 0;
  x1: number | null = null;
  x2: number | null = null;
  resultMessage: string = '';

  deltaCalc() {
    this.delta = this.b ** 2 - 4 * this.a * this.c;
    if (this.delta > 0) {
      this.resultMessage = 'Existem Raízes';
      this.IsVisible = true
    } else if (this.delta < 0) {
      this.resultMessage = 'Não existem raízes reais';
      this.x1 = this.x2 = null;
      this.IsVisible = false
    } else {
      this.resultMessage = 'As raízes serão iguais';
      this.IsVisible = true
    }
  }

  calculateRoots() {
    if (this.delta >= 0) {
      const raiz = Math.sqrt(this.delta);
      this.x1 = (-this.b + raiz) / (2 * this.a);
      this.x2 = (-this.b - raiz) / (2 * this.a);
    }
  }

}
