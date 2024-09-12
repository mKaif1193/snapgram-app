import * as z from "zod";

export const SignupValidation = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(50, { message: "Name must be less than 50 characters" }),
  username: z
    .string()
    .min(2, { message: "Name must be at least 3 characters" }),
  email: z
    .string()
    .email()
    .min(3, { message: "Email must be at least 3 characters" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 8 characters" }),
});

export const LoginValidation = z.object({
  email: z
    .string()
    .email()
    .min(3, { message: "Email must be at least 3 characters" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export const ProfileValidation = z.object({
  file: z.custom<File[]>(),
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  username: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email(),
  bio: z.string(),
});

export const PostValidation = z.object({
  caption: z
    .string()
    .min(5, { message: "Caption must be at least 5 characters" })
    .max(2200, { message: "Caption must be less than 2200 characters" }),
  file: z.custom<File[]>(),
  location: z
    .string()
    .min(2, { message: "Location must be at least 2 characters" })
    .max(100, { message: "Location must be less than 100 characters" }),
  tags: z.string(),
});
