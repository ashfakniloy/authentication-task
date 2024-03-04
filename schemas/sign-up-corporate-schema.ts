import { z } from "zod";

export const signUpCorporateSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .min(5, "Invalid phone number"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters")
    .regex(
      /^(?=.*[a-zA-Z])(?=.*\d).+$/,
      "Password requires atleast 1 letter and 1 number."
    ),
  country: z.string().min(1, "Country is required"),
  company_name: z.string().min(1, "Company name is required"),
  type: z.string().min(1, "Account type is required"),
  profession: z.string().min(1, "Profession is required"),
  team_size: z.string().min(1, "Team size is required"),
  accept_terms_and_conditions: z.boolean(),
});

export type SignUpCorporateProps = z.infer<typeof signUpCorporateSchema>;
