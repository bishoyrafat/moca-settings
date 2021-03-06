import { PlansService } from './plans/plans.service';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import {
  Router,
  RouteConfigLoadStart,
  RouteConfigLoadEnd,
  NavigationEnd,
  ActivatedRoute,
} from '@angular/router';
import { filter, Subject } from 'rxjs';
import { CoreAppService } from './shared/service/core-app/coreApp.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(
    private loaderService: CoreAppService,
    private router: Router,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private PlansService: PlansService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) {}

  isLoading: Subject<boolean> = this.loaderService.isLoading;
  loading: boolean;
  defaultId: any;
  ngOnInit(): void {
    this.router.events
      .pipe(filter((rs): rs is NavigationEnd => rs instanceof NavigationEnd))
      .subscribe((event) => {
        if (event.id === 1 && event.url === event.urlAfterRedirects) {
          // Your code here for when the page is refreshd
           this.router.navigate(['/'])

          // let currentUrl = this.router.url;
          // this.router.onSameUrlNavigation = 'reload';
          // this.router.navigate([currentUrl]);
          //   const url = this.route.url;
          //   let x = '/' + url.split('/')[1]
          //   console.log(x)
          // let arr =   this.innerNavs.find((el:any)=>{
          //     console.log(el.url)
          //    return el.url === x
          //   })
          //   console.log(!arr?.active)
          //   !arr?.active
        }
      });

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
  innerNavs = [
    {
      name: 'Plans',
      url: '/plans',
      active: true,
      visible: true,
      editMode: true,
    },
    {
      name: 'FAQs',
      url: '/faqs',
      active: false,
      visible: true,
      editMode: true,
    },
    {
      name: 'Top Up',
      url: '/topup',
      active: false,
      visible: true,
      editMode: true,
    },
    {
      name: 'Policies',
      url: '/policies',
      active: false,
      visible: true,
      editMode: true,
    },
    {
      name: 'Wifi',
      url: '/wifi',
      active: false,
      visible: true,
      editMode: true,
    },
  ];
}
