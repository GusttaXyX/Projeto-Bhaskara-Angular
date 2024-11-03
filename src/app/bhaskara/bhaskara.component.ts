import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bhaskara',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './bhaskara.component.html',
  styleUrl: './bhaskara.component.css'
})
export class BhaskaraComponent {
  IsVisible: boolean = false;

  a: number | null = null;
  b: number | null = null;
  c: number | null = null;
  delta: number = 0;
  x1: number | null = null;
  x2: number | null = null;
  resultMessage: string = '';

  deltaCalc() {
    if (this.a !== null && this.b !== null && this.c !== null) {
      this.delta = this.b ** 2 - 4 * this.a * this.c;
      if (this.delta > 0) {
        this.resultMessage = 'Existem Raízes <br> Δ = '+ this.delta;
        this.IsVisible = true;
        this.calculateRoots()
      } else if (this.delta < 0) {
        this.resultMessage = 'Não existem raízes reais';
        this.x1 = this.x2 = null;
        this.IsVisible = false; // Oculta a aba de raízes
      } else {
        this.resultMessage = 'As raízes serão iguais';
        this.IsVisible = true;
        this.calculateRoots()
      }
    } else {
      this.resultMessage = ''; // Limpa a mensagem se algum valor for nulo
      this.IsVisible = false; // Oculta a aba de raízes
    }
  }

  calculateRoots() {
    if (this.a !== null && this.b !== null && this.c !== null) {
      if (this.delta >= 0) {
        const raiz = Math.sqrt(this.delta);
        this.x1 = (-this.b + raiz) / (2 * this.a);
        this.x2 = (-this.b - raiz) / (2 * this.a);
      }
    }
  }


}