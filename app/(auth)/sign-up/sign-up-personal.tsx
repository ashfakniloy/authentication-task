"use client";

import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { InputField } from "@/components/form-fields/input-field";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import {
  SignUpPersonalProps,
  signUpPersonalSchema,
} from "@/schemas/sign-up-personal-schema";
import { PhoneField } from "@/components/form-fields/phone-field";
import { SelectField } from "@/components/form-fields/select-field";
import { API_URL } from "@/config";
import { professionList } from "@/data/profession-list";
import { teamSizeList } from "@/data/team-list";

export default function SignUpPersonal() {
  const router = useRouter();

  const defaultValues = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
    company_name: "",
    type: "personal",
    profession: "",
    country: "",
    team_size: "",
    accept_terms_and_conditions: true,
  };

  const form = useForm<SignUpPersonalProps>({
    defaultValues,
    resolver: zodResolver(signUpPersonalSchema),
  });

  const {
    formState: { isSubmitting, errors },
    setError,
  } = form;

  const onSubmit = async (values: SignUpPersonalProps) => {
    // console.log("values", values);
    const url = `${API_URL}/auth/register`;

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
      toast.success("Account created successfully");
      router.push("/sign-in");
    } else {
      const errorField = data.details?.[0]?.field;
      const errorMessage = data.details?.[0]?.error || data.details;

      errorField &&
        setError(errorField, { message: errorMessage }, { shouldFocus: true });

      toast.error(errorMessage || "Something went wrong");
    }
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-5 space-y-5"
        noValidate
      >
        <div>
          <label
            htmlFor="first_name"
            className={`inline-block text-sm font-medium ${
              (errors.first_name || errors.last_name) && "text-red-500"
            }`}
          >
            Name
          </label>
          <div className="flex justify-between gap-2">
            <InputField name="first_name" placeholder="First Name" />
            <InputField name="last_name" placeholder="Last Name" />
          </div>
        </div>
        <InputField
          name="email"
          label="Email"
          placeholder="Enter email address"
        />
        <PhoneField
          name="phone"
          type="tel"
          label="Phone"
          placeholder="Enter phone number"
        />
        <InputField
          type="password"
          name="password"
          label="Create a password"
          placeholder="Enter new password"
          autoComplete="on"
        />
        <InputField
          name="company_name"
          label="Organization name"
          placeholder="Enter organization name"
        />
        <InputField
          name="country"
          label="Country"
          placeholder="Enter country"
        />
        <SelectField
          name="profession"
          label="Profession"
          placeholder="Select profession"
          options={professionList}
        />
        <SelectField
          name="team_size"
          label="Team size"
          placeholder="Select team size"
          options={teamSizeList}
        />

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
          Sign Up
        </Button>
      </form>
    </FormProvider>
  );
}
