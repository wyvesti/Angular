import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricePipe } from '../pipes/price-pipe';

@Component({
  selector: 'total',
  standalone: true,
  imports: [CommonModule, PricePipe],
  template: `
    <div class="total">
      <span>Total</span>
      <span>{{ total | price }}</span>
    </div>
  `,
  styleUrls: ['./total.css']
})
export class AppTotalComponent {
  @Input() total = 0;
}
