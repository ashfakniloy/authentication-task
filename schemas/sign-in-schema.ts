import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z.string().min(1, "Password is required"),
  remember: z.boolean(),
});

export type SignInProps = z.infer<typeof signInSchema>;
