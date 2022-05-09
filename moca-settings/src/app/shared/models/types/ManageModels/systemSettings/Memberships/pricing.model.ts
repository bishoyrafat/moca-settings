export type pricingModel = {
  Id: number;
  Main_Cat_ID: number;
  Membership_Category_Id: number;
  Membership_Type_Id: number;
  Price: number;
  No_Of_Hours?: number;
  Membership_Category_Name: string;
  Membership_Type_Name: string;
  MainCategory: string;
  lstHybirdPricing: HybridListModel[];
  pg_total: 0;
};

export type HybridListModel = {
  Id: number;
  Membership_Pricing_Id: number;
  No_Of_Employees: number;
  No_Of_Hours: number;
  No_Of_MeetingRoon_Hours: number;
  NumberOfEmployees: number;
};
