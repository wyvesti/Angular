/* import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AppButtonComponent } from '../../shared/button/button';
import { AppBadgeComponent } from '../../shared/badge/badge';
import { Observable, of, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../core/services/products.service';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, AppButtonComponent, AppBadgeComponent],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product implements OnInit {
  product$!: Observable<any>;
  id!: string;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.product$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.id = params.get('id') || '';
        if (!this.id) { return of(null); }
        return this.productsService.getById(this.id);
      })
    );
  }

  add(id: string | undefined) {
    if (!id) return;
    this.cartService.add(id);
  }
} */

/* 
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';

import { AppButtonComponent } from '../../shared/button/button';
import { AppBadgeComponent } from '../../shared/badge/badge';
import { AppCardComponent } from '../../shared/card/card';
import { Header } from "../../shared/header/header";
import { ProductsService, ProductDto } from '../../core/services/products.service';
import { CartService } from '../../core/services/cart.service';
import { PricePipe } from '../../shared/pipes/price-pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, AppButtonComponent, AppBadgeComponent, AppCardComponent, Header, PricePipe],
  templateUrl: './product.html',
  styleUrls: ['./product.css']
})
export class Product implements OnInit {
  product$!: Observable<ProductDto | null>;
  related$!: Observable<ProductDto[]>;
  id!: string;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.product$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.id = params.get('id') || '';
        if (!this.id) return of(null);
        return this.productsService.getById(this.id);
      })
    );

    this.related$ = this.productsService.getRelated(this.id);
  }

  add(id: string | undefined) {
    if (!id) return;
    this.cartService.add(id);
  }
} */
/* 
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService, ProductDto } from '../../core/services/products.service';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.html'
})
export class ProductComponent implements OnInit {
  product: ProductDto | null = null;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productsService.getById(id).subscribe(p => this.product = p || null);
    }
  }

  addToCart() {
    if (this.product) {
      this.cartService.add(this.product.id);
      alert('Produit ajouté au panier !');
    }
  }
} */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService, ProductDto } from '../../core/services/products.service';
import { CartService } from '../../core/services/cart.service';
import { CommonModule } from '@angular/common';
import { AppButtonComponent } from '../../shared/button/button';
import { AppBadgeComponent } from '../../shared/badge/badge';
import { AppCardComponent } from '../../shared/card/card';
import { Header } from '../../shared/header/header';
import { PricePipe } from '../../shared/pipes/price-pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, AppButtonComponent, AppBadgeComponent, AppCardComponent, Header, PricePipe],
  templateUrl: './product.html',
  styleUrls: ['./product.css']
})
export class ProductComponent implements OnInit {
  product: ProductDto | null = null;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productsService.getById(id).subscribe(p => this.product = p || null);
    }
  }

  addToCart() {
    if (this.product) {
      this.cartService.add(this.product.id);
      alert('Produit ajouté au panier !');
    }
  }
}

