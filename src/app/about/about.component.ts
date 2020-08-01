import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  services = [
    {item: 1},
    {item: 2},
    {item: 3}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
