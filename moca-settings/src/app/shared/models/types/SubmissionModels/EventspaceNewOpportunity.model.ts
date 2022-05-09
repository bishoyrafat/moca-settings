export type EventspaceNewOpportunityModel = {
  Opportunity_ID: number;
  SubmissionDate: string;
  OpportunityOwner: string;
  EventRequester_ID: number;
  CompanyName: string;
  ContactDetails: {
    id: number;
    name: string;
    email: string;
    mobileNumber: string;
  }[];
  SendEmails: {
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
