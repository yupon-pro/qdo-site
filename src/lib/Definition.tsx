export type Partner = {
  name: string;
  image: string;
};

export type Staff = Partner & {
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
