import { useFormContext } from "react-hook-form";
import { Input, InputProps } from "../ui/input";
import { cn } from "@/lib/utils";

type InputFieldProps = {
  name: string;
  label?: string;
} & InputProps;

export function InputField({ name, className, ...props }: InputFieldProps) {
  const {
    register,
    formState: { errors },
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
      <div className="mt-1">
        <Input
          id={name}
          className={cn(className)}
          {...props}
          {...register(name)}
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
