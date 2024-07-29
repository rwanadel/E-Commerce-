import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CounterService } from '../servics/counter.service';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  cartQuantity: number = 0;


  constructor(private counterService: CounterService) {}

  ngOnInit() {
    this.counterService.cartQuantity$.subscribe((quantity) => {
      this.cartQuantity = quantity;
    });
  }
}
