"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SubmitButton } from "@/components/custom/SubmitButton"

import { useFormState } from "react-dom";
import { registerUserAction } from "@/data/actions/auth-actions"
import { ZodErrors } from "@/components/custom/ZodErrors"
import { StrapiErrors } from "@/components/custom/StrapiErrors"

const INITIAL_STATE = {
    data: null,
    zodErrors: null,
    message: null,
};

export default function SignUpForm() {
    const [formState, formAction] = useFormState(registerUserAction, INITIAL_STATE);

    console.log(formState, "client");
  return (
    <div className="flex items-center justify-center min-h-screen">
        <form action={formAction}>
      <Card className="w-full max-w-md p-6 max-h-[700px]">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Sign Up</CardTitle>
          <CardDescription>Enter your details to create a new account.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstname">First Name</Label>
              <Input 
                id="firstname" 
                name="firstname"
                type="text"
                placeholder="First Name" 
            />
            <ZodErrors error={formState?.zodErrors?.firstname}/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastname">Last Name</Label>
              <Input 
                id="lastname"
                name="lastname"
                type="text"
                placeholder="Last Name" 
            />
            <ZodErrors error={formState?.zodErrors?.lastname}/>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="dob">Birthday</Label>
            <Input 
                id="dob" 
                name="dob"
                type="date" 
                placeholder="dob"
            />
            <ZodErrors error={formState?.zodErrors?.dob}/>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Username</Label>
            <Input 
                id="username" 
                name="username"
                placeholder="username" 
                type="username" 
            />
            <ZodErrors error={formState?.zodErrors?.username}/>
            </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
                id="email" 
                name="email"
                placeholder="name@example.com" 
                type="email" 
            />
            <ZodErrors error={formState?.zodErrors?.email}/>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input 
                id="password"
                name="password" 
                placeholder="password" 
                type="password" />
          </div>
          <ZodErrors error={formState?.zodErrors?.password}/>
        </CardContent>
        <CardFooter>
          <SubmitButton 
            className="w-full"
            text="Sign Up"
            loadingText="Loading"
            />
          <StrapiErrors error={formState?.strapiErrors}/>
        </CardFooter>
        <div className="mt-4 text-center">
          <p className="text-sm text-muted-foreground">
            Have an account?{" "}
            <a href="#" className="text-primary">
              Sign In
            </a>
          </p>
        </div>
      </Card>
      </form>
    </div>
  )
}