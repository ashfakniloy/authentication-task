import { Check, ChevronUpDown } from "@/components/icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Controller, useFormContext } from "react-hook-form";
import { useEffect, useState } from "react";

export function ComboField({
  name,
  options,
  ...props
}: {
  name: string;
  options: string[];
  placeholder?: string;
  label?: string;
}) {
  const [open, setOpen] = useState(false);
  // const [value, setValue] = React.useState("");

  const {
    formState: { errors },
    watch,
  } = useFormContext();

  const fieldValue = watch(name);

  const [value, setValue] = useState(fieldValue);

  useEffect(() => {
    setValue(fieldValue);
  }, [fieldValue]);

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
      <div className="mt-1 w-full">
        <Controller
          name={name}
          {...props}
          render={({ field }) => (
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-full justify-between"
                >
                  {value
                    ? options.find((option) => option === value)
                    : props.placeholder}
                  <ChevronUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0">
                <Command>
                  <CommandInput placeholder={`Search ${name}...`} />
                  <CommandEmpty className="text-sm p-2 text-center">{`No ${name} found.`}</CommandEmpty>
                  <CommandGroup>
                    {options.map((framework) => (
                      <CommandItem
                        key={framework}
                        value={framework}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? "" : currentValue);
                          setOpen(false);
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            value === framework ? "opacity-100" : "opacity-0"
                          )}
                        />
                        {framework}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
          )}
        />
      </div>
    </div>
  );
}
