import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'moca-settings';
  innerNavs=[
    {
      name: 'plans',
      url: 'plans',
      active: true,
      visible:true
    },
    {
      name: 'FAQs',
      url: 'faqs',
      active: true,
      visible:true
    },
    {
      name: 'Top Up',
      url: 'topup',
      active: true,
      visible:true
    },
    {
      name: 'Policies',
      url: 'policies',
      active: true,
      visible:true
    },
    {
      name: 'Wifi',
      url: 'assets/list',
      active: true,
      visible:true
    }
  ]
}
