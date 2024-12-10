import { FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { Control, Controller, FieldError } from "react-hook-form";

interface Props {
  name: string;
  control: Control<any>;
  label: string;
  type?: string;
  error?: FieldError;
}

const InputForm = ({ name, control, label, type, error }: Props) => {
  return (
    <>
      {/** isInvalid={!!errors.coDocumento}*/}

      <FormControl mr="5%">
        <FormLabel htmlFor={name} fontWeight="normal">
          {label}
        </FormLabel>
        <Controller
          name={name}
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Input
              type={type}
              id={name}
              className={`form-control ${error ? "in-invalid" : ""}`}
              {...field}
            />
          )}
        ></Controller>
        {error && <Text color="red.500">{error.message}</Text>}
        {/** 
          {errors.coDocumento && (
            <Text color="red.500">{errors.coDocumento.message}</Text>
          )}
            */}
      </FormControl>
    </>
  );
};

export default InputForm;
