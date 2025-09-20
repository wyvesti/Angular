/* import { Component, Input } from '@angular/core';
import { AppCartLineComponent } from "../../shared/cart-line/cart-line";
import { AppButtonComponent } from "../../shared/button/button";
import { Header } from "../../shared/header/header";

@Component({
  selector: 'app-order-confirm',
  imports: [AppCartLineComponent, AppButtonComponent, Header],
  templateUrl: './order-confirm.html',
  styleUrl: './order-confirm.css'
})
export class OrderConfirm {
  @Input() name!: string;
  @Input() price!: number;
  @Input() imageUrl!: string;
  @Input() available = false;
} */

/* import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { AppCartLineComponent } from "../../shared/cart-line/cart-line";
import { AppButtonComponent } from "../../shared/button/button";
import { Header } from "../../shared/header/header";
import { OrdersService } from '../../core/services/orders.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-order-confirm',
  standalone: true,
  imports: [CommonModule, AppCartLineComponent, AppButtonComponent, Header],
  templateUrl: './order-confirm.html',
  styleUrls: ['./order-confirm.css']
})
export class OrderConfirm implements OnInit {
  orders$!: Observable<any[]>;
  user: any;

  constructor(
    private orders: OrdersService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.orders$ = this.orders.listMine();
    this.auth.me().subscribe(u => this.user = u);
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  goToProfile(): void {
    this.router.navigate(['/profile']);
  }
} */

import { Component } from '@angular/core';

@Component({
  selector: 'app-order-confirm',
  templateUrl: './order-confirm.html'
})
export class OrderConfirmComponent {}
