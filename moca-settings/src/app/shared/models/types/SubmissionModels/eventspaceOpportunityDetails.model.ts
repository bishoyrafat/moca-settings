export type EventspaceOpportunityDetailsModel = {
  Opportunity_ID: number;
  SubmissionDate: string;
  OpportunityOwner: string;
  EventRequester_ID: number;
  CompanyName: string;
  ContactDetails: {
    Id: number;
    Name: string;
    Email: string;
    MobileNumber: string;
  }[];
  EmailTemplate: {
    Id: number;
    CC: null;
    FromUser: string;
    Subject: string;
    Body: string;
    ContactDetails_ID: number;
    BookATour_ID: null;
    EventsOpportunities_ID: number;
    EmailTemplate_ID: number;
    CreatedAt: string;
  }[];
};
