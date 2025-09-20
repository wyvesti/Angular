/* import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
import { ProductsService, ProductDto } from './products.service';
import { ProductVM } from '../../shared/models/product.vm';
import { mapProductDTOToVM } from '../../shared/mappers/product.mapper'; // 🆕 adapte le chemin si nécessaire

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly storageKey = 'cart_items';
  private itemsSubject = new BehaviorSubject<string[]>(this.loadFromStorage());
  public items$ = this.itemsSubject.asObservable();

  // ✅ Remplace ProductDto[] par ProductVM[]
  public detailedItems$!: Observable<ProductVM[]>;
  public total$!: Observable<number>;

  constructor(private productsService: ProductsService) {
    this.detailedItems$ = combineLatest([
      this.items$,
      this.productsService.products$
    ]).pipe(
      map(([ids, products]) =>
        ids
          .map(id => products.find(p => p.id === id))
          .filter(Boolean)
          .map(p => mapProductDTOToVM(p!)) // <-- conversion vers VM
      )
    );

    this.total$ = this.detailedItems$.pipe(
      map(items => items.reduce((sum, item) => sum + item.price, 0))
    );
  }

  private loadFromStorage(): string[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  private saveToStorage(ids: string[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(ids));
  }

  add(id: string): void {
    const items = [...this.itemsSubject.getValue(), id];
    this.itemsSubject.next(items);
    this.saveToStorage(items);
  }

  remove(id: string): void {
    const items = this.itemsSubject.getValue().filter(item => item !== id);
    this.itemsSubject.next(items);
    this.saveToStorage(items);
  }

  clear(): void {
    this.itemsSubject.next([]);
    localStorage.removeItem(this.storageKey);
  }

  getCartItems() {
    return this.items$;
  }

  addToCart(id: string) {
    return this.add(id);
  }

  removeFromCart(id: string) {
    return this.remove(id);
  }
} */

  // src/app/core/services/cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable, of } from 'rxjs';
import { ProductsService, ProductDto } from './products.service';
import { ProductVM } from '../../shared/models/product.vm';
import { mapProductDTOToVM } from '../../shared/mappers/product.mapper';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly storageKey = 'cart_items';
  private itemsSubject = new BehaviorSubject<string[]>(this.loadFromStorage());
  public items$ = this.itemsSubject.asObservable();

  public detailedItems$!: Observable<ProductVM[]>;
  public total$!: Observable<number>;

  constructor(private productsService: ProductsService) {
    this.detailedItems$ = combineLatest([
      this.items$,
      this.productsService.products$
    ]).pipe(
      map(([ids, products]) =>
        ids
          .map(id => products.find(p => p.id === id))
          .filter(Boolean)
          .map(p => mapProductDTOToVM(p!))
      )
    );

    this.total$ = this.detailedItems$.pipe(
      map(items => items.reduce((sum, item) => sum + item.price, 0))
    );
  }

  private loadFromStorage(): string[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  private saveToStorage(ids: string[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(ids));
  }

  // méthode "réelle"
  add(id: string): void {
    const items = [...this.itemsSubject.getValue(), id];
    this.itemsSubject.next(items);
    this.saveToStorage(items);
  }

  remove(id: string): void {
    const items = this.itemsSubject.getValue().filter(item => item !== id);
    this.itemsSubject.next(items);
    this.saveToStorage(items);
  }

  clear(): void {
    this.itemsSubject.next([]);
    localStorage.removeItem(this.storageKey);
  }

  // === ALIASES pour compatibilité avec le reste de l'app ===

  /**
   * getCartItems : retourne un tableau synchronisé (utilisé par des composants qui s'attendent
   * à un array direct).
   */
  getCartItems(): string[] {
    return this.itemsSubject.getValue();
  }

  /**
   * getCartItems$ : observable si tu préfères l'approche réactive
   */
  getCartItems$(): Observable<string[]> {
    return this.items$;
  }

  addToCart(id: string) {
    return this.add(id);
  }

  removeFromCart(id: string) {
    return this.remove(id);
  }
}
