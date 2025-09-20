import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'empty-state',
  standalone: true,
  imports: [CommonModule, RouterModule, ],
  templateUrl: './empty-state.html',
  styleUrls: ['./empty-state.css']
})
export class AppEmptyStateComponent {
  type: 'text' | 'email' | 'password' | 'Connexion' = 'text';
  placeholder = 'Enter text';
}
