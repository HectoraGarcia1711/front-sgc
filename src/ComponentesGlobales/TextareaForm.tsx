import {
    FormControl,
    FormLabel,
    Textarea,
    Text,
  } from "@chakra-ui/react";
  import { Control, Controller, FieldError } from "react-hook-form";
  
  interface Props {
    name: string;
    control: Control<any>;
    label: string;
    placeholder?: string;
    error?: FieldError;
  }
  
  const TextareaForm = ({ name, control, label, placeholder, error }: Props) => {
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
            <Textarea
              id={name}
              placeholder={placeholder}
              className={`form-control ${error ? "in-invalid" : ""}`}
              {...field}
            />
          )}
        />
        {error && <Text color="red.500">{error.message}</Text>}
      </FormControl>
    );
  };
  
  export default TextareaForm;
  