"use client"

import Link from "next/link";
import { useFormState } from "react-dom";
import { loginUserAction } from "@/data/actions/auth-actions";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ZodErrors } from "@/components/custom/ZodErrors";
import { StrapiErrors } from "@/components/custom/StrapiErrors";
import { SubmitButton } from "@/components/custom/SubmitButton";

const INITIAL_STATE = {
  zodErrors: null,
  strapiErrors: null,
  data: null,
  message: null,
};


export default function SignIn() {
  const [formState, formAction] = useFormState(loginUserAction, INITIAL_STATE);
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-6  bg-slate-600 rounded-lg shadow-md">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Sign In</h2>
          <p className="text-sm text-muted-foreground">Enter your details to sign in to your account</p>
        </div>

        <form action={formAction} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Username/Email</Label>
            <Input 
              id="identifier" 
              name="identifier"
              placeholder="username or email" 
              type="text" 
            />
            <ZodErrors error={formState?.zodErrors?.identifier} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input 
              id="password" 
              name="password"
              placeholder="password" 
              type="password" 
            />
            <ZodErrors error={formState.zodErrors?.password} />
          </div>
          <SubmitButton
              className="w-full"
              text="Sign In"
              loadingText="Loading"
            />
            <StrapiErrors error={formState?.strapiErrors} />
        </form>

        <p className="text-sm text-center text-muted-foreground">
          Don't have an account?{" "}
          <a href="#" className="font-medium text-primary">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  )
}