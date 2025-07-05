//General
export interface User {
  id: number;
  name: string;
  email: string;
}

export interface SingleUser {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  company: { name: string };
}
