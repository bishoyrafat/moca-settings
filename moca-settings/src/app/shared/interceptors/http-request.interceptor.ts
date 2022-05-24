import { CoreAppService } from '../service/core-app/coreApp.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { catchError, finalize, map, Observable, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  constructor(
    private toasterService: ToastrService,
    private router: Router,
    private coreService: CoreAppService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): any {
    // this.coreService.show();

      const authRequest = request.clone();
      return next.handle(authRequest).pipe(
        finalize(() => {
          this.coreService.hide();
        }),

        catchError((error: any) => {
          if (error.status == 400) {
            if (error.error.errors) {
              let err: any = Object.entries(error.error.errors);
              err.forEach((element: any) => {
                this.toasterService.error(element[1][0], element[0]);
              });
            }
            return throwError(() =>error);
          } else if (error.status == 500) {
            this.toasterService.error('internal server error', 'Error');
            return throwError(() => error);
          } else {
            this.toasterService.error('ConnectionError', 'Error');
            return throwError(() => error);
          }
        })
      );
    }

}
