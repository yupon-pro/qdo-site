import { z } from "zod";

export const FormScheme = z.object({
  name: z.string(),
  email: z.string().email({ message: "Please print valid email address." }),
  content: z
    .string()
    .min(10, { message: "Please tell me your inquiry at least 10 letters." })
    .max(2000, { message: "You can print sentence up to 2000 letters." }),
});
