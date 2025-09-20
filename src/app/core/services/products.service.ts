/* import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, of, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface ProductDto {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  available: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productsSubject = new BehaviorSubject<ProductDto[]>([]);
  public products$ = this.productsSubject.asObservable();

  constructor(private http: HttpClient) {}

  loadAll() {
    return this.http.get<{ items: ProductDto[] }>(`${environment.apiBaseUrl}/products`)
  .pipe(
    map(res => res.items), // <-- ici on prend "items" au lieu de "data"
    tap(products => this.productsSubject.next(products))
  );
}

  getById(id: string): Observable<ProductDto | undefined> {
    const cached = this.productsSubject.getValue();
    if (cached.length > 0) {
      return of(cached.find(p => p.id === id));
    }
    return this.http.get<ProductDto>(`${environment.apiBaseUrl}/products/${id}`);
  }

  getRelated(id: string): Observable<ProductDto[]> {
    return of([]);
  }
}
 */

// src/app/core/services/products.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, of, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface ProductDto {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  available: boolean;
  description?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productsSubject = new BehaviorSubject<ProductDto[]>([]);
  public products$ = this.productsSubject.asObservable();

  constructor(private http: HttpClient) {}

  loadAll() {
    return this.http.get<{ items: ProductDto[] }>(`${environment.apiBaseUrl}/products`)
      .pipe(
        tap(res => this.productsSubject.next(res.items))
      );
  }

  getById(id: string): Observable<ProductDto> {
    return this.http.get<ProductDto>(`${environment.apiBaseUrl}/products/${id}`);
  }
}


