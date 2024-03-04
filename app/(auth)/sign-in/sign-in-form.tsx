"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import useLocalStorage from "@/hooks/useLocalStorage";
import { InputField } from "@/components/form-fields/input-field";
import { CheckboxField } from "@/components/form-fields/checkbox-field";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { API_URL } from "@/config";
import { SignInProps, signInSchema } from "@/schemas/sign-in-schema";
// import { signIn } from "@/utils/sign-in"; // with cookie based authentication

export default function SignInForm() {
  const router = useRouter();

  const { setStorageValue } = useLocalStorage("token");

  const defaultValues = {
    email: "",
    password: "",
    remember: false,
  };

  const form = useForm<SignInProps>({
    defaultValues,
    resolver: zodResolver(signInSchema),
  });

  const {
    formState: { isSubmitting },
    setError,
  } = form;

  const onSubmit = async (values: SignInProps) => {
    // console.log("values", values);
    const url = `${API_URL}/auth/login`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const data = await response.json();

    console.log("data", data);

    if (response.ok) {
      setStorageValue(data.access_token);
      toast.success("Signed in successfully");
      router.push("/");
    } else {
      const errorField = data.details?.[0]?.field;
      const errorMessage = data.details?.[0]?.error || data.message;

      errorField &&
        setError(errorField, { message: errorMessage }, { shouldFocus: true });
      toast.error(errorMessage || "Something went wrong");
    }

    // // with cookie based authentication
    // const { success, message, errorField } = await signIn({ values });
    // if (success) {
    //   toast.success("Signin success");
    // } else {
    //   toast.error(message);
    //   errorField &&
    //     setError(errorField, { message: message }, { shouldFocus: true });
    // }
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-5 space-y-5"
        noValidate
      >
        <InputField
          name="email"
          label="Email"
          placeholder="Enter email address"
        />
        <InputField
          type="password"
          name="password"
          label="Password"
          placeholder="Enter password"
          autoComplete="on"
        />
        <div className="flex justify-between items-center">
          <CheckboxField name="remember" label="Remember me for 7 days." />
          <Link href="" className="font-medium text-custom-blue">
            Forgot Password?
          </Link>
        </div>

        <Button
          type="submit"
          className="relative w-full"
          disabled={isSubmitting}
        >
          {isSubmitting && (
            <span className="absolute flex items-center left-24 2xl:left-32">
              <Spinner />
            </span>
          )}
          Sign In
        </Button>
      </form>
    </FormProvider>
  );
}
