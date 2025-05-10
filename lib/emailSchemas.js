import { z } from "zod";

export const formSchema = z.object({
    firstname: z.string().min(2, "First name is too short").max(50),
    lastname: z.string().min(2, "Last name is too short").max(50),
    email: z.string().email("Invalid email"),
    service: z.string().min(1, "Please select a service"), // Ensure selection
    message: z.string().min(2, "Message is required"),
    terms: z.boolean().refine((val) => val === true, { message: "You must accept the terms." }),
  });
  