/* import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Data } from '@angular/router';
import { AppEmptyStateComponent } from "../../shared/empty-state/empty-state";
import { AppButtonComponent } from "../../shared/button/button";
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule, AppEmptyStateComponent, AppButtonComponent],
  templateUrl: './auth.html',
  styleUrls: ['./auth.css']
})
export class AuthComponent implements OnInit {
  mode: 'login' | 'register' = 'login';
  title = '';
  form = { name: '', email: '', password: '' };

  constructor(private route: ActivatedRoute, private auth: AuthService) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.mode = data['mode'] === 'register' ? 'register' : 'login';
      this.title = this.mode === 'login' ? 'Je me connecte' : 'Je m\'inscris';
    });
  }

  onSubmit(formValue: any) {
    if (this.mode === 'login') {
      this.auth.login(formValue.email, formValue.password).subscribe({
        next: res => console.log('Login OK', res),
        error: err => console.error('Erreur login', err)
      });
    } else {
      this.auth.register(formValue).subscribe({
        next: res => console.log('Register OK', res),
        error: err => console.error('Erreur register', err)
      });
    }
  }
} */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppEmptyStateComponent } from '../../shared/empty-state/empty-state';
import { AppButtonComponent } from '../../shared/button/button';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule, AppEmptyStateComponent, AppButtonComponent],
  templateUrl: './auth.html',
  styleUrls: ['./auth.css']
})
export class AuthComponent {
  mode: 'login' | 'register' = 'login'; // toggle login/register
  email = '';
  password = '';
  name = '';

  constructor(private auth: AuthService, private router: Router) {}

  toggleMode() {
    this.mode = this.mode === 'login' ? 'register' : 'login';
  }

  submit() {
    if (this.mode === 'login') {
      this.auth.login(this.email, this.password).subscribe({
        next: () => this.router.navigate(['/profile']),
        error: err => alert(err.error?.message || 'Erreur de connexion')
      });
    } else {
      this.auth.register({ name: this.name, email: this.email, password: this.password }).subscribe({
        next: () => this.router.navigate(['/profile']),
        error: err => alert(err.error?.message || 'Erreur d’inscription')
      });
    }
  }
}

