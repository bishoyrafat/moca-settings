import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoliciesRoutingModule } from './policies-routing.module';
import { PoliciesComponent } from './policies/policies.component';
import { PoliciesNavBarComponent } from './policies-navBar/policies-navBar.component';
import { SharedComponentsModule } from '../shared/shared-components/shared-components.module';
import { CancellationPolicyComponent } from './cancellation-policy/cancellation-policy.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserTermsComponent } from './user-terms/user-terms.component';
import { EnterpriseTermsComponent } from './enterprise-terms/enterprise-terms.component';
import { VenueAccountAgreementComponent } from './venue-account-agreement/venue-account-agreement.component';
import { CookiePolicyComponent } from './cookie-policy/cookie-policy.component';
@NgModule({
  declarations: [
    PoliciesComponent,
    PoliciesNavBarComponent,
    CancellationPolicyComponent,
    PrivacyPolicyComponent,
    UserTermsComponent,
    EnterpriseTermsComponent,
    VenueAccountAgreementComponent,
    CookiePolicyComponent
  ],
  imports: [
    CommonModule,
    PoliciesRoutingModule,
    SharedComponentsModule,
    ReactiveFormsModule,
  ],
})
export class PoliciesModule {}
