import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  productsTrigger = new Subject<any>();
  servicesTrigger = new Subject<any>();

  activeItem = 'Home';

  activeItemProducts = 0;
  activeAccordionProducts;

  activeItemServices = 0;
  activeAccordionServices;
  constructor() { }

  setActiveItem(item) {
    this.activeItem = item;
    this.activeItemProducts = 0;
    this.activeItemServices = 0;
  }

  setActiveProduct(item) {
    this.activeItemProducts = item;
  }

  setActiveServices(item) {
    this.activeItemServices = item;
  }

  openAccordionServices(item) {
    if (item === this.activeAccordionServices) {
      this.activeAccordionServices = null;
      return;
    }
    this.activeAccordionServices = item;
  }
}
