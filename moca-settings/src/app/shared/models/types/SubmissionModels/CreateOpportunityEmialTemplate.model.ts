export type CreateOpportunityEmailTemplateModel = {
  Opportunity_ID: number;
  SubmissionDate: string;
  OpportunityOwner: string;
  EventRequester_ID: number;
  CompanyName: string;
  ContactDetails:contactDetailsModel [];
  EmailTemplate: EmailTemplateModel ;
};
type contactDetailsModel = {
  id: number;
  name: string;
  email: string;
  mobileNumber: string;
};

export type EmailTemplateModel = {
  Id: number;
  Subject: string;
  Body: string;
  UserId: string;
  ImagePath: string;
  EmailTemplateTypeID: number;
  CreatedAt: string;
  CC: null;
  FromUser: null;
  ContactDetails_ID: 0;
  BookATour_ID: null;
  EventsOpportunities_ID: null;
  EmailTemplate_ID: null;
  ContactDetails: contactDetailsModel[];
};

