/* import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../core/services/cart.service';
import { AppCardComponent } from '../../shared/card/card';
import { Observable } from 'rxjs';
import { ProductDto, ProductsService } from '../../core/services/products.service';
import { AppButtonComponent } from '../../shared/button/button';
import { Header } from "../../shared/header/header";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AppCardComponent, AppButtonComponent, Header],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {
   products$: Observable<ProductDto[]>;
  //products$ = this.productsService.products$;

  constructor(private productsService: ProductsService, private cartService: CartService) {
    this.products$ = this.productsService.products$;
  }

  ngOnInit() {
    this.productsService.loadAll().subscribe();
  }

  addToCart(id: string) {
    this.cartService.add(id);
  }
}
 */
/* 
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { CartService } from '../../core/services/cart.service';
import { ProductsService, ProductDto } from '../../core/services/products.service';
import { AppCardComponent } from '../../shared/card/card';
import { AppButtonComponent } from '../../shared/button/button';
import { Header } from "../../shared/header/header";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AppCardComponent, AppButtonComponent, Header],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {
  products$!: Observable<ProductDto[]>;

  constructor(private productsService: ProductsService, private cartService: CartService) {}

  ngOnInit(): void {
    // On charge tous les produits
    this.products$ = this.productsService.products$;
    this.productsService.loadAll().subscribe();
  }

  addToCart(id: string): void {
    this.cartService.addToCart(id);
  }
}
 */

import { Component, OnInit } from '@angular/core';
import { ProductsService, ProductDto } from '../../core/services/products.service';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { AppCardComponent } from '../../shared/card/card';
import { AppButtonComponent } from '../../shared/button/button';
import { Header } from '../../shared/header/header';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AppCardComponent, AppButtonComponent, Header, CurrencyPipe],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {
  products: ProductDto[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.loadAll().subscribe(res => {
      this.products = res.items;
    });
  }
}
