import {
    FormControl,
    FormLabel,
    Select,
    Text,
  } from "@chakra-ui/react";
  import { Control, Controller, FieldError } from "react-hook-form";
  
  interface SelectOption {
    value: string | number;
    label: string;
  }
  
  interface Props {
    name: string;
    control: Control<any>;
    label: string;
    placeholder?: string;
    options: SelectOption[]; // Opciones dinámicas
    error?: FieldError;
  }
  
  export const SelectForm = ({
    name,
    control,
    label,
    placeholder = "Select an option", // Valor predeterminado
    options,
    error,
  }: Props) => {
    return (
      <FormControl mr="5%">
        <FormLabel htmlFor={name} fontWeight="normal">
          {label}
        </FormLabel>
        <Controller
          name={name}
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Select
              id={name}
              placeholder={placeholder}
              className={`form-control ${error ? "in-invalid" : ""}`}
              {...field}
            >
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
          )}
        />
        {error && <Text color="red.500">{error.message}</Text>}
      </FormControl>
    );
  };
  