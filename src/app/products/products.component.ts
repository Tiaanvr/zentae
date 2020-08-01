import { Component, OnInit } from '@angular/core';
import { RoutingService } from '../app-services/routing.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(
    public routingService: RoutingService,
    private viewportScroller: ViewportScroller) {
      this.routingService.productsTrigger.subscribe(response => {
        this.onClick('productFocus');
      });   
    }

  ngOnInit() {
    // this.onClick('productFocus');
  }

  onClick(elementId: string): void { 
    this.viewportScroller.scrollToAnchor(elementId);
  }

}
