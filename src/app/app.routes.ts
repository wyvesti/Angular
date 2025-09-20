import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home';
import { AuthComponent } from './features/auth/auth';
import { Profile } from './features/profile/profile';
import { OrderConfirmComponent } from './features/order-confirm/order-confirm';
import { ProductComponent } from './features/product/product';
import { AppCardComponent } from './shared/card/card';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'product/:id', component: ProductComponent },
    { path: 'cart', component: AppCardComponent },
    { path: 'login', component: AuthComponent, data: { mode: 'login' } },
    { path: 'register', component: AuthComponent, data: { mode: 'register' } },
    { path: 'profile', component: Profile },
    { path: 'order-confirm', component: OrderConfirmComponent },
    { path: '**', redirectTo: '' }
];
