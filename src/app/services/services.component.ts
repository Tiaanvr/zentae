import { Component, OnInit } from '@angular/core';
import { RoutingService } from '../app-services/routing.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor(
    public routingService: RoutingService,
    private viewportScroller: ViewportScroller) {
    this.routingService.productsTrigger.subscribe(response => {
      this.onClick('serviceFocus');
    });
  }

  ngOnInit() {
    // this.onClick('serviceFocus');
  }

  onClick(elementId: string): void { 
    this.viewportScroller.scrollToAnchor(elementId);
  }
}
