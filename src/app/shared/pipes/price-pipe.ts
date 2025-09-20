import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'price', standalone: true })
export class PricePipe implements PipeTransform {
  transform(value: number): string {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(value);
  }
}
