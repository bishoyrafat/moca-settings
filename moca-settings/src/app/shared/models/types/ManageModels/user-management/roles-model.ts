import { rolesclaimModel } from "./role-claim.model";

export type rolesModel = {
  index:number,
  ConcurrencyStamp: string
  Id: string
  Name: string
  NormalizedName: string
  lstRoleClaims?: rolesclaimModel[]
};
