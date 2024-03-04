import type { Metadata } from "next";
import SocialSignIn from "../social-sign-in";
import Link from "next/link";
import SignUpOptions from "./sign-up-options";

export const metadata: Metadata = {
  title: "Sign up",
};

export default function SignUpPage() {
  return (
    <div>
      <p className="text-3xl font-semibold">Complete Information</p>
      <p className="mt-3 text-custom-gray2">
        Enter the fields below to get started.
      </p>

      <div className="mt-5">
        <SignUpOptions />
      </div>

      {/* <div className="mt-5">
        <SocialSignIn />
      </div> */}

      <div className="mt-4 flex justify-center gap-2 text-sm">
        <p className="text-custom-gray2">Already a Gotipath member?</p>
        <Link href="/sign-in" className="font-semibold text-custom-blue">
          Sign In
        </Link>
      </div>
    </div>
  );
}
