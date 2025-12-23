import { z } from "zod";

export const checkoutSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Wrong format"),
  phone: z.string().optional(),
  address: z.string().min(5, "Address is required"),
  zip: z.string().min(4, "ZIP Code is required"),
  city: z.string().min(2, "City is required"),
  country: z.string().min(2, "Country is required"),
  paymentMethod: z.enum(["emoney", "cash"]),
});

export type CheckoutFormValues = z.infer<typeof checkoutSchema>;
