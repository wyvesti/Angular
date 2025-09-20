import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppButtonComponent } from '../button/button';
import { AppBadgeComponent } from '../badge/badge';
import { PricePipe } from '../pipes/price-pipe';
import { ProductsService } from '../../core/services/products.service';

@Component({
  selector: 'card',
  standalone: true,
  imports: [CommonModule, AppButtonComponent, AppBadgeComponent, RouterModule, PricePipe],
  templateUrl: './card.html',
  styleUrls: ['./card.css']
})
export class AppCardComponent {
  constructor(private productsService: ProductsService) {}

  @Input() id!: string;
  @Input() name!: string;
  @Input() price!: number;
  @Input() imageUrl!: string;
  @Input() available: boolean = true;
  @Output() add = new EventEmitter<void>();

}

