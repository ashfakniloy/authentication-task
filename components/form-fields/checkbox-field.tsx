import { Controller, useFormContext } from "react-hook-form";
import { Checkbox } from "../ui/checkbox";

type CheckboxFieldProps = {
  name: string;
  label: string;
};

export function CheckboxField({ name, label }: CheckboxFieldProps) {
  const { control } = useFormContext();

  return (
    <div className="flex items-center space-x-2">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Checkbox
            id={name}
            checked={field.value}
            onCheckedChange={field.onChange}
          />
        )}
      />

      <label
        htmlFor={name}
        className="text-sm cursor-pointer leading-none text-custom-gray4 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        <span>{label}</span>
      </label>
    </div>
  );
}
