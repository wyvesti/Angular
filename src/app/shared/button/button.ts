import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrls: ['./button.css']
})
export class AppButtonComponent {
  @Input() disabled = false;
  @Input() label = '';
  @Input() type: 'inscription' | 'connexion' | 'logout' | 'profile' | '' | 'form-btn' = '';
}

