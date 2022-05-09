export type LocationsWithEventspacesModel = {
  Location_ID: number;
  Location_Name: string;
  Eventspace: {
    Eventspace_ID: number;
    Eventspace_Name: string;
  }[];
  WorkingHours: {
    StartWorkingHour: string;
    StartWorkingDay: string;
    LastWorkingHour: string;
    LastWorkingDay: string;
  }[];
};
