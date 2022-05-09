export type EventspaceBookingsModel = {
  Id: number;
  Location: {
    Id: number;
    LocationName: string;
  };
  EventRequester: {
    Id: number;
    Name: string;
  };
  CompanyCommericalName: string;
  Industry: { id: number; IndustryName: string };
  Other_IndustryName: string;
  CompanyWebsite: string;
  CompanyFacebook: string;
  CompanyLinkedin: string;
  CompanyInstgram: string;
  ContactFullName1: string;
  ContactMobile1: string;
  ContactEmail1: string;
  ContactFullName2: string;
  ContactMobile2: string;
  ContactEmail2: string;
  EventName: string;
  EventCategory: {
    Id: number;
    Name: string;
  };
  EventDescription: string;
  EventReccurance: {
    Id: number;
    Name: string;
  };
  ExpectedNoAttend: number;
  EventType: {
    Id: number;
    Name: string;
  };
  EventAttendance: {
    Id: number;
    Name: string;
  };
  DoesYourEventSupportStartup: boolean;
  IsThereThirdPartyOrganizer: boolean;
  OrgnizingCompany: string;
  CreatedAt: string;
  LastModifiedAt: string;
  NeedConsultancy: boolean;
  Platform: string;
  eventSpace_Times: {
    Id: number;
    BookEventSpace_ID: number;
    RecurrenceStartDate: string;
    RecurrenceEndDate: string;
    RecurrenceStartTime: string;
    RecurrenceEndTime: string;
    RecurrenceDay: string;
  }[];
  eventSpace_Venues: {
    Id: number;
    BookEventSpace_ID: number;
    VenueName: string;
  }[];
};
