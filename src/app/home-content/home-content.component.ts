import { Component, OnInit } from '@angular/core';
import { RoutingService } from '../app-services/routing.service';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent implements OnInit {

  burgerClicked = false;
  services = [
    {
      image: '../../assets/icons/group-37.svg',
      title: 'Project Management',
      paragrath: 'ZENTAE Consulting leverages off its years of local and international experience to ensure successful project implementations within accelerated time frames.',
    },
    {
      image: '../../assets/icons/group-19.svg',
      title: 'SAP Software Solutions',
      paragrath: 'ZENTAE Consulting is a certified implementation and value added partner for SAP Concur Travel, Expense and Invoice.',
    },
    {
      image: '../../assets/icons/group-27.svg',
      title: 'Integration',
      paragrath: 'Whether it is cloud or on-premise, ZENTAE Consulting will ensure that your organization’s integration landscape is ready for its SAP journey.',
    },
    {
      image: '../../assets/icons/group-25.svg',
      title: 'Managed Services',
      paragrath: 'Our proven managed services framework is built on the principles of customer satisfaction, data transparency, lean & efficient processes and ensuring best practices.',
    },
    {
      image: '../../assets/icons/group-29.svg',
      title: 'Training & Change Management',
      paragrath: 'ZENTAE Consulting offers bespoke training and change management initiatives to ensure a successful go-live for all end-users.',
    },
    {
      image: '../../assets/icons/group-18.svg',
      title: 'Business Process Optimization',
      paragrath: 'ZENTAE Consulting will evaluate your new solution’s entire value chain to ensure processes are optimized for maximum ROI.',
    },
  ]
  constructor(public routingService: RoutingService) { }

  ngOnInit(): void {
  }

  routeToProducts(item) {
    this.routingService.setActiveItem('Products');
    this.routingService.setActiveProduct(item);
    this.routingService.productsTrigger.next(true);
  }

  routeToServices(item) {
    this.routingService.setActiveItem('Services');
    this.routingService.setActiveServices(item);
    this.routingService.servicesTrigger.next(true);
  }

  routeToServicesAccordion(item) {
    this.routingService.setActiveItem('Services');
    this.routingService.openAccordionServices(item);
    this.routingService.servicesTrigger.next(true);
  }
}
