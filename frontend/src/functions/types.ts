export type RegisterValues = {
  name: string;
  email: string;
  password: string;
};

export type LoginValues = {
  email: string;
  password: string;
};

export type ResRole = {
  id: number;
  name: string;
  createdAt: string;
} 

export type ResUser = {
  id: number;
  name: string;
  email: string;
  role: ResRole;
}

export type ResProfile = {
  id: number;
  name: string;
  email: string;
  role: string;
  permissions: string[];
}