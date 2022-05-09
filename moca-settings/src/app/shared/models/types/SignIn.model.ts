export type SignInResponseModel = {
  Succeeded: boolean;
  Message: string;
  Errors: string[];
  Data: {
    Id: string;
    UserName: string;
    Email: string;
    Roles: [
      {
        RoleName: string;
        RoleId: string;
      }
    ];
    IsVerified: boolean;
    JWToken:string;
  };
};
