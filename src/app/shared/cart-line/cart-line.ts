import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppButtonComponent } from '../button/button';
import { PricePipe } from '../pipes/price-pipe';

@Component({
  selector: 'cart-line',
  standalone: true,
  imports: [CommonModule, AppButtonComponent, PricePipe],
  templateUrl: './cart-line.html',
  styleUrls: ['./cart-line.css']
})
export class AppCartLineComponent {
  @Input() id!: string;
  @Input() name!: string;
  @Input() price!: number;
  @Input() imageUrl!: string;
  @Input() available = true;
  @Output() remove = new EventEmitter<string>();
}
