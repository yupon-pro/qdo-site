export type Partner = {
  name: string;
  ref: string;
};

export type Staff = {
  image: string;
  name: string;
  role: string;
};

export type FormFields = "name" | "email" | "content";

export type FormState = {
  errors?: {
    name?: string[];
    email?: string[];
    content?: string[];
  };
  message?: string;
};
