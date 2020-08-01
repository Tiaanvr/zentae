import { Component, OnInit } from '@angular/core';
import { RoutingService } from '../app-services/routing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  burgerOpen = false;
  constructor(public routingService: RoutingService) {
  }

  ngOnInit(): void {
  }

  toggleBurger() {
    this.burgerOpen = !this.burgerOpen;
  }
  
  sidebarNav(item): void {
    this.routingService.setActiveItem(item);
    this.burgerOpen = false;
  }

  contactUs() {
    const element = document.querySelector("#contact") as HTMLElement;
    if (element) {
      element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
    this.toggleBurger();
  }

}
