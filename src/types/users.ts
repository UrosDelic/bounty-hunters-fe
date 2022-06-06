export interface Users {
  adress: string;
  createdAt: string;
  email: string;
  firstName: string;
  lastName: string;
  id: string;
  photo_url: string | null;
  roles: UserRoles[];
}

export type UserRoles = {
  role: {
    id: string;
    name: string;
  };
};
