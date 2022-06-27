export interface Users {
  accessToken: string;
  adress: string;
  createdAt: string;
  email: string;
  firstName: string;
  lastName: string;
  id: string;
  photo_url: string | null;
  roles: UserRoles[];
}

export enum Roles {
  EMPLOYEE = 'EMPLOYEE',
  ADMIN = 'ADMIN',
  SUPER_ADMIN = 'SUPER_ADMIN',
}

export interface UserRoles {
  role: {
    id: string;
    name: Roles;
  };
}
