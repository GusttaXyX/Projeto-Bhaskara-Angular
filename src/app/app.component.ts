import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BhaskaraComponent } from './bhaskara/bhaskara.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BhaskaraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Projeto-Bhaskara-Angular';
}

