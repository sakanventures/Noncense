"use server"
import { z } from "zod";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { 
    registerUserService,
    loginUserService,
} from "@/data/services/auth-service";

const config = {
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: "/",
    domain: process.env.HOST ?? "localhost",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
};

// Calculate the date 13 years ago from today
const today = new Date();
const minAgeDate = new Date(today.getFullYear() - 13, today.getMonth(), today.getDate());

const schemaRegister = z.object({
    firstname: z.string().min(1).max(20, {
        message: "Firstname must be between 1 to 20 characters"
    }),
    lastname: z.string().min(1).max(20, {
        message: "Lastname must be between 1 to 20 characters"
    }),
    dob: z.date().max(minAgeDate, {
        message: "You must be at least 13 years old"
    }),
    username: z.string().min(1).max(20, {
        message: "Username must be between 1 to 20 characters"
    }),
    email: z.string().email({
        message: "Please enter a valid email address"
    }).min(1).max(50), // Updated max length for email
    password: z.string().min(8).max(20, {
        message: "Password must be between 8 to 20 characters"
    })
});

export async function registerUserAction(prevState: any, formData: FormData) {

    const validatedFields = schemaRegister.safeParse({
        firstname: formData.get("firstname"),
        lastname: formData.get("lastname"),
        dob: new Date(formData.get("dob") as string), // Convert to Date object
        username: formData.get("username"),
        email: formData.get("email"),
        password: formData.get("password"),
    });

    if (!validatedFields.success) {
        return {
            ...prevState,
            zodErrors: validatedFields.error.flatten().fieldErrors,
            strapiErrors: null,
            message: "Missing Fields. Failed to Register",
        };
    }

    const responseData = await registerUserService(validatedFields.data);

    if (!responseData) {
        return {
            ...prevState,
            strapiErrors: null,
            zodErrors: null,
            message: "Oops! Something went wrong. Please try again",
        };
    }

    if (responseData.error) {
        return {
            ...prevState,
            strapiErrors: responseData.error,
            zodErrors: null,
            message: "Failed to Register",
        }
    }

    cookies().set("jwt", responseData.jwt, config);
    redirect("/dashboard")
}

const schemaLogin = z.object({
    identifier: z.string().min(3).max(50, {
      message: "Please enter a valid username or email address",
    }),
    password: z.string().min(8).max(100, {
      message: "Password must be between 8 and 100 characters",
    }),
  });

  export async function loginUserAction(prevState: any, formData: FormData) {
    const validatedFields = schemaLogin.safeParse({
      identifier: formData.get("identifier"),
      password: formData.get("password"),
    });
  
    if (!validatedFields.success) {
      return {
        ...prevState,
        zodErrors: validatedFields.error.flatten().fieldErrors,
        message: "Missing Fields. Failed to Login.",
      };
    }
  
    const responseData = await loginUserService(validatedFields.data);
  
    if (!responseData) {
      return {
        ...prevState,
        strapiErrors: responseData.error,
        zodErrors: null,
        message: "Ops! Something went wrong. Please try again.",
      };
    }

    if (responseData.error) {
        return {
          ...prevState,
          strapiErrors: responseData.error,
          zodErrors: null,
          message: "Failed to Login.",
        };
      }
    
      cookies().set("jwt", responseData.jwt, config);
      redirect("/dashboard");
    }
    
    export async function logoutAction() {
      cookies().set("jwt", "", { ...config, maxAge: 0 });
      redirect("/");
    }