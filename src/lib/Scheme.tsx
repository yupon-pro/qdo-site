import { z } from "zod";

export const FormScheme = z.object({
  name: z.string().min(4,{ message: "Please print your name at least 4 letters" }),
  email: z.string().email({ message: "Please print valid email address." }),
  content: z
    .string()
    .min(10, { message: "Please tell me your inquiry at least 10 letters." })
    .max(2000, { message: "You can print sentence up to 2000 letters." }),
});
