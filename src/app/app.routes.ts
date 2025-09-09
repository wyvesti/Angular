import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Product } from './features/product/product';
import { Cart } from './features/cart/cart';
import { Auth } from './features/auth/auth';
import { Profile } from './features/profile/profile';
import { OrderConfirm } from './features/order-confirm/order-confirm';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'product/:id', component: Product },
    { path: 'cart', component: Cart },
    { path: 'auth', component: Auth },
    { path: 'profile', component: Profile },
    { path: 'order-confirm', component: OrderConfirm },
    { path: '**', redirectTo: '' }
];
