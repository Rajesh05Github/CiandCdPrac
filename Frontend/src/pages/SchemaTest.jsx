import * as z from "zod";

// Step 1: User Info Schema
export const userInfoschema = z.object({
  name: z.string().min(1, "Name is required"),
  sex: z.string().min(1, "Gender is required"),
  email: z.string().email("Invalid email"),
});

// Step 2: Address Schema
export const addressSchema = z.object({
  phone: z
    .string()
    .min(10, "Phone number must be 10 digits")
    .max(10, "Phone number must be 10 digits")
    .regex(/^\d+$/, "Phone must contain only digits"),

  address: z.object({
    Address1: z.string().min(1, "Address 1 is required"),
    Address2: z.string().min(1, "Address 2 is required"),
    Address3: z.string().min(1, "Address 3 is required"),
    pincode: z
      .string()
      .min(6, "Pincode must be 6 digits")
      .max(6, "Pincode must be 6 digits")
      .regex(/^\d+$/, "Pincode must contain only digits"),
  }),
});
