/* arg data */
export type RegisterValues = {
  name: string;
  email: string;
  password: string;
};

export type LoginValues = {
  email: string;
  password: string;
};

export type UserValues = {
  name: string;
  email: string;
  password: string;
  roleId: number;
};

/* Response */
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