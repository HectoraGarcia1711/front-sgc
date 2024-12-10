import {
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Text,
} from "@chakra-ui/react";
import { Control, Controller, FieldError } from "react-hook-form";

interface Props {
  name: string;
  control: Control<any>;
  label: string;
  defaultValue?: number;
  min?: number;
  max?: number; // max es opcional
  step?: number;
  error?: FieldError;
}

export const InputNumberForm = ({
  name,
  control,
  label,
  defaultValue = 0,
  min,
  max, // max sigue siendo opcional
  step = 1,
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
        defaultValue={defaultValue}
        render={({ field: { onChange, value, ref } }) => (
          <NumberInput
            value={value}
            onChange={(val) => onChange(Number(val))}
            min={min}
            max={max} // max no se aplica si no está definido
            step={step}
          >
            <NumberInputField id={name} ref={ref} />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        )}
      />
      {error && <Text color="red.500">{error.message}</Text>}
    </FormControl>
  );
};
