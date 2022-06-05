import { ChangeDetectorRef, Component } from '@angular/core';
import {  Router, RouteConfigLoadStart, RouteConfigLoadEnd, NavigationEnd } from '@angular/router';
import { filter, Subject } from 'rxjs';
import { CoreAppService } from './shared/service/core-app/coreApp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

constructor(
  private loaderService: CoreAppService,
  private router: Router,
  private readonly changeDetectorRef: ChangeDetectorRef
) {

}

isLoading: Subject<boolean> = this.loaderService.isLoading;
loading: boolean;
ngOnInit(): void {
  this.router.events
    .pipe(filter((rs): rs is NavigationEnd => rs instanceof NavigationEnd))
    .subscribe(event => {
      if (
        event.id === 1 &&
        event.url === event.urlAfterRedirects
      ) {
          // Your code here for when the page is refreshd
          // this.router.navigate(['/'])
      }
    })


  this.router.events.subscribe((event) => {
    if (event instanceof RouteConfigLoadStart) {
      this.loaderService.show();
    } else if (event instanceof RouteConfigLoadEnd) {
      this.loaderService.hide();
    }
  });
  this.isLoading.subscribe((data) => {
    this.loading = data;
  });
}


ngAfterViewInit(): void {
  this.changeDetectorRef.detectChanges();
}
  title = 'moca-settings';
  innerNavs=[
    {
      name: 'Plans',
      url: '/plans',
      active: true,
      visible:true,
      editMode:true
    },
    {
      name: 'FAQs',
      url: '/faqs',
      active: false,
      visible:true,
      editMode:true
    },
    {
      name: 'Top Up',
      url: '/topup',
      active: false,
      visible:true,
      editMode:true
    },
    {
      name: 'Policies',
      url: '/policies',
      active: false,
      visible:true,
      editMode:true
    },
    {
      name: 'Wifi',
      url: '/wifi',
      active: false,
      visible:true,
      editMode:true
    }
  ]
}
