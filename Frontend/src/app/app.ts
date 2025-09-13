import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PasienteList } from './components/pasiente-list/pasiente-list';

@Component({
  selector: 'app-root',
  imports: [PasienteList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Frontend');
}
