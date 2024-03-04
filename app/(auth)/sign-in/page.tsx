import type { Metadata } from "next";
import Link from "next/link";
import SignInForm from "./sign-in-form";
import SocialSignIn from "../social-sign-in";

export const metadata: Metadata = {
  title: "Sign in",
};

export default function SignInPage() {
  return (
    <div>
      <p className="text-3xl font-semibold">Sign in to account</p>
      <p className="mt-3 text-custom-gray2">
        Enter your credentials to access your account
      </p>

      <SignInForm />

      <div className="mt-5">
        <SocialSignIn />
      </div>

      <div className="mt-4 flex justify-center gap-2 text-sm">
        <p className="text-custom-gray2">New to Gotipath?</p>
        <Link href="/sign-up" className="font-semibold text-custom-blue">
          Create Account
        </Link>
      </div>
    </div>
  );
}
