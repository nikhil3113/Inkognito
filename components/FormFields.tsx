import { useState } from "react";
import { Controller, FieldValues, Control, Path } from "react-hook-form";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/select";
import { Eye, EyeOff } from "lucide-react"; // <-- Add this

interface Option {
  label: string;
  value: string;
}

interface FormFieldProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  placeholder?: string;
  type?: string;
  description?: string;
  autocomplete?: string;
  disabled?: boolean;
  options?: Option[];
}

const FormFields = <T extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  type = "text",
  description,
  autocomplete = "on",
  disabled = false,
  options = [],
}: FormFieldProps<T>) => {
  // Add state for password visibility
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormItem>
      <FormLabel className="text-[15px]">{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <>
            <FormControl>
              {type === "textarea" ? (
                <Textarea
                  {...field}
                  placeholder={placeholder}
                  aria-invalid={!!fieldState.error}
                  onChange={(e) => field.onChange(e.target.value)}
                  rows={5}
                  disabled={disabled}
                  value={field.value ?? ""}
                />
              ) : type === "select" ? (
                <Select
                  value={field.value || ""}
                  onValueChange={field.onChange}
                  disabled={disabled}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={placeholder || "Select..."} />
                  </SelectTrigger>
                  <SelectContent>
                    {options.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) : type === "password" ? (
                <div className="relative">
                  <Input
                    {...field}
                    className="dark:border-gray-600 pr-10"
                    placeholder={placeholder}
                    type={showPassword ? "text" : "password"}
                    aria-invalid={!!fieldState.error}
                    value={field.value ?? ""}
                    onChange={(e) => field.onChange(e.target.value)}
                    autoComplete={autocomplete}
                    disabled={disabled}
                  />
                  <button
                    type="button"
                    tabIndex={-1}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground"
                    onClick={() => setShowPassword((v) => !v)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              ) : (
                <Input
                  {...field}
                  className="dark:border-gray-600"
                  placeholder={placeholder}
                  type={type}
                  aria-invalid={!!fieldState.error}
                  value={field.value ?? ""}
                  onChange={(e) => {
                    if (type === "number") {
                      const value = e.target.value;
                      if (value === "") {
                        field.onChange(undefined);
                      } else {
                        const numericValue = parseFloat(value);
                        if (!isNaN(numericValue)) {
                          field.onChange(numericValue);
                        }
                      }
                    } else {
                      field.onChange(e.target.value);
                    }
                  }}
                  autoComplete={autocomplete}
                  disabled={disabled}
                />
              )}
            </FormControl>
            {description && <FormDescription>{description}</FormDescription>}
            {fieldState.error && (
              <FormMessage>{fieldState.error.message}</FormMessage>
            )}
          </>
        )}
      />
    </FormItem>
  );
};

export default FormFields;