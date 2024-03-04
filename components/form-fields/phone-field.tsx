import { Controller, useFormContext } from "react-hook-form";
import { PhoneInput } from "react-international-phone";
import { InputProps } from "../ui/input";
import "react-international-phone/style.css";

type PhoneFieldProps = {
  name: string;
  label?: string;
} & InputProps;

export function PhoneField({ name, className, ...props }: PhoneFieldProps) {
  const {
    formState: { errors },

    control,
  } = useFormContext();

  return (
    <div className="w-full">
      {props.label && (
        <label
          htmlFor={name}
          className={`inline-block text-sm font-medium ${
            errors[name] && "text-red-500"
          }`}
        >
          {props.label}
        </label>
      )}
      <div className="mt-1 relative w-full ">
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value } }) => (
            <PhoneInput
              defaultCountry="bd"
              value={value}
              onChange={onChange}
              // onChange={(phone, { country: { name: countryName } }) => {
              //   onChange(phone);
              //   setValue("country", countryName);
              // }}
              inputClassName="absolute w-[350px] left-[50px] rounded-md border !border-custom-gray3 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-custom-blue focus-visible:ring-offset-2 focus-visible:transition focus-visible:duration-100 disabled:cursor-not-allowed disabled:opacity-50"
            />
          )}
        />

        {errors[name] && (
          <p className="mt-1 text-xs text-red-600">
            {errors[name]?.message?.toString()}
          </p>
        )}
      </div>
    </div>
  );
}
