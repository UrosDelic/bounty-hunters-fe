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

export interface UserRoles {
  role: {
    id: string;
    name: string;
  };
}
