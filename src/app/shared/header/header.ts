import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  isAuthenticated$!: Observable<boolean>;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.isAuthenticated$ = this.auth.isAuthenticated$;
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
