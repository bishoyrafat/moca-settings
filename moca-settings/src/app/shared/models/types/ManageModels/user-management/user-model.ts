export type usersModel = {
  index:number,
  AccessFailedCount: number,
  BirthDate: string,
  ConcurrencyStamp: string,
  CountryCode?: number,
  DepartmentID: number,
  DepartmentName: string,
  Email: string
  EmailConfirmed: boolean
  FirstName: string
  Gender: number
  Id: string
  IsActive: boolean
  LastName: string
  LockoutEnabled: boolean
  LockoutEnd?: null
  NormalizedEmail: string
  NormalizedUserName: string
  PasswordHash: string
  PhoneNumber: string
  PhoneNumberConfirmed: false
  PositionID: number
  PositionName: string
  Profile_Pic_Path?: string
  RoleName: string
  SecurityStamp: string
  TwoFactorEnabled: boolean
  UserName: string
  pg_total: number
};

export type userGetModel={
  BirthDate: string
  CountryCode: null
  DepartmentID: number
  Email: string
  FirstName: string
  Gender: number
  Id: string
  IsActive: boolean
  LastName: string
  PassEmail: number
  Password: number
  PhoneNumber: string
  PositionID: number
  Profile_Pic_Path: string
  RoleName: string
  UserName: string
}
