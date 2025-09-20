/* import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { OrdersService } from '../../core/services/orders.service';
import { Router } from '@angular/router';
import { Observable, take } from 'rxjs';
import { ProductVM } from '../../shared/models/product.vm';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
export class Cart implements OnInit {
  // ✅ Observables typés correctement
  items$!: Observable<string[]>;
  detailedItems$!: Observable<ProductVM[]>;
  total$!: Observable<number>;

  checkoutInProgress = false;
  errorMsg = '';

  constructor(
    private cart: CartService,
    private orders: OrdersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.items$ = this.cart.items$;
    this.detailedItems$ = this.cart.detailedItems$;
    this.total$ = this.cart.total$;
  }

  remove(id: string): void {
    this.cart.remove(id);
  }

  checkout(): void {
    this.checkoutInProgress = true;
    this.errorMsg = '';

    this.cart.items$.pipe(take(1)).subscribe(ids => {
      if (!ids || ids.length === 0) {
        this.errorMsg = 'Votre panier est vide';
        this.checkoutInProgress = false;
        return;
      }

      this.orders.create(ids).subscribe({
        next: () => {
          this.cart.clear();
          this.router.navigate(['/order/confirm']);
        },
        error: () => {
          this.errorMsg = 'Impossible de finaliser la commande. Réessayez.';
          this.checkoutInProgress = false;
        }
      });
    });
  }
} */

/* import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AppCartLineComponent } from '../../shared/cart-line/cart-line';
import { AppTotalComponent } from '../../shared/total/total';
import { AppButtonComponent } from '../../shared/button/button';
import { AppEmptyStateComponent } from '../../shared/empty-state/empty-state';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, AppCartLineComponent, AppTotalComponent, AppButtonComponent, AppEmptyStateComponent],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
export class Cart implements OnInit {
  cartItems: any[] = [];
  cartTotal = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void {
    this.cartItems = this.cartService.getCartItems();
    this.updateTotal();
  }

  removeFromCart(productId: string): void {
    this.cartService.removeFromCart(productId);
    this.loadCart();
  }

  updateTotal(): void {
    this.cartTotal = this.cartItems.reduce((sum, item) => sum + item.price, 0);
  }

  checkout(): void {
    console.log("Commande validée !");
    // navigation vers order-confirm si besoin
  }
} */
 