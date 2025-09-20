import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badge.html',
  styleUrls: ['./badge.css']
})
export class AppBadgeComponent {
  @Input() available = true;
  @Input() text = '';
  @Input() color = 'gray'; 
}
