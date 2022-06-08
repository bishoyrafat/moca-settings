import { PoliciesComponent } from './policies/policies.component';
import { VenueAccountAgreementComponent } from './venue-account-agreement/venue-account-agreement.component';
import { EnterpriseTermsComponent } from './enterprise-terms/enterprise-terms.component';
import { UserTermsComponent } from './user-terms/user-terms.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CancellationPolicyComponent } from './cancellation-policy/cancellation-policy.component';
import { CookiePolicyComponent } from './cookie-policy/cookie-policy.component';

const routes: Routes = [
  {
    path: '',
    component: PoliciesComponent,
    children: [
      {
        path: '',
        redirectTo: 'cancellationpolicy',
        pathMatch: 'full',
      },
      {
        path: 'cancellationpolicy',
        component: CancellationPolicyComponent,
      },
      {
        path: 'cancellationpolicy/:id',
        component: CancellationPolicyComponent,
      },
      {
        path: 'privacypolicy',
        component: PrivacyPolicyComponent,
      },
      {
        path: 'privacypolicy/:id',
        component: PrivacyPolicyComponent,
      },
      {
        path: 'userterms',
        component: UserTermsComponent,
      },
      {
        path: 'userterms/:id',
        component: UserTermsComponent,
      },
      {
        path: 'enterpriseterms',
        component: EnterpriseTermsComponent,
      },
      {
        path: 'enterpriseterms/:id',
        component: EnterpriseTermsComponent,
      },
      {
        path: 'venueaccountagreement',
        component: VenueAccountAgreementComponent,
      },
      {
        path: 'venueaccountagreement/:id',
        component: VenueAccountAgreementComponent,
      },
      {
        path: 'cookiepolicy',
        component: CookiePolicyComponent,
      },
      {
        path: 'cookiepolicy/:id',
        component: CookiePolicyComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoliciesRoutingModule {}
