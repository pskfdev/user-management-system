export type RegisterValues = {
  name: string;
  email: string;
  password: string;
};

export type LoginValues = {
  email: string;
  password: string;
};

export type ResProfile = {
  id: number;
  name: string;
  email: string;
  role: string;
  permissions: string[];
}