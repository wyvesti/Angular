/* import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface Order {
  id: string;
  items: string[];
  total: number;
  createdAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  constructor(private http: HttpClient) {}

  create(items: string[]): Observable<Order> {
    return this.http.post<Order>(`${environment.apiBaseUrl}/orders`, { items });
  }

  listMine(): Observable<Order[]> {
    return this.http.get<Order[]>(`${environment.apiBaseUrl}/orders/me`);
  }

  getById(id: string): Observable<Order> {
    return this.http.get<Order>(`${environment.apiBaseUrl}/orders/${id}`);
  }

  getMyOrders(): Observable<Order[]> {
    return this.listMine();
  }

}
 */

// src/app/core/services/orders.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ProductDto } from './products.service';

export interface OrderDto {
  id: string;
  items: string[];   // liste d’IDs produit
  total: number;
  createdAt: string;
  updatedAt: string;
  // si ton API renvoie plus (ex: status, user), ajoute-les
}

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  constructor(private http: HttpClient) {}

  create(items: string[]): Observable<{ order: OrderDto; items: ProductDto[] }> {
    return this.http.post<{ order: OrderDto; items: ProductDto[] }>(
      `${environment.apiBaseUrl}/orders`,
      { items }
    );
  }

  listMine(): Observable<OrderDto[]> {
    return this.http.get<OrderDto[]>(`${environment.apiBaseUrl}/orders/me`);
  }

  getById(id: string): Observable<{ order: OrderDto; items: ProductDto[] }> {
    return this.http.get<{ order: OrderDto; items: ProductDto[] }>(
      `${environment.apiBaseUrl}/orders/${id}`
    );
  }
}

