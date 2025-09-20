/* import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdersService } from '../../core/services/orders.service';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile implements OnInit {
  orders$!: Observable<any[]>;
  user: any;

  constructor(private orders: OrdersService, private auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.orders$ = this.orders.listMine();
    this.auth.me().subscribe(u => this.user = u);
  }

  viewOrder(id: string) {
    this.router.navigate(['/order', id]);
  }
} */

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { FormsModule } from '@angular/forms';

import { Header } from '../../shared/header/header';
import { AppEmptyStateComponent } from '../../shared/empty-state/empty-state';
import { PricePipe } from '../../shared/pipes/price-pipe';
import { AuthService, UserDto } from '../../core/services/auth.service';
import { OrdersService } from '../../core/services/orders.service';
import { OrderDTO } from '../../core/models/order.dto';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, Header, AppEmptyStateComponent, PricePipe, FormsModule],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css']
})
export class Profile implements OnInit {
  user$!: Observable<UserDto | null>;
  orders$!: Observable<OrderDTO[]>;

  constructor(
    private authService: AuthService,
    private ordersService: OrdersService
  ) {}

  ngOnInit() {
    // Récupérer l'utilisateur depuis { user: UserDto }
    this.user$ = this.authService.me().pipe(map(res => res.user));

    // Récupérer les commandes et transformer items: string[] en ProductDto[]
    this.orders$ = this.ordersService.listMine().pipe(
      map(orders =>
        orders.map(order => ({
          ...order,
          items: order.items.map(id => ({ id, name: 'Produit inconnu', price: 0, imageUrl: '', available: true, availabilityLabel: 'Disponible', description: '' })) // placeholder
        }))
      )
    );
  }

  logout() {
    this.authService.logout();
  }
}


