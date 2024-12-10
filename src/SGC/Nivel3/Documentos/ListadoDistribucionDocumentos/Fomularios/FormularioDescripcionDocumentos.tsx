import { Button, Heading } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import InputForm from "../../../../../ComponentesGlobales/InputForm";
import {
  schemaDescripcionDocumentos,
  FormDataDescripcionDocumentos,
} from "../Types";

type FormularioDescripcionDocumentosProps = {
  setDescripcionDocs: React.Dispatch<
    React.SetStateAction<FormDataDescripcionDocumentos[]>
  >;
};

export const FormularioDescripcionDocumentos: React.FC<
  FormularioDescripcionDocumentosProps
> = ({ setDescripcionDocs }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataDescripcionDocumentos>({
    resolver: zodResolver(schemaDescripcionDocumentos),
  });

  const onSubmit: SubmitHandler<FormDataDescripcionDocumentos> = (data) => {
    setDescripcionDocs((prev) => [...prev, data]);
    console.log(data); // Añade un nuevo objeto al array
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Heading w="100%" textAlign="center" fontWeight="normal" mb="2%">
        Descripción
      </Heading>

      <InputForm
        name="descripcion"
        control={control}
        label="Descripcion"
        error={errors.descripcion}
      />

      <InputForm
        name="documento"
        control={control}
        label="Documento"
        error={errors.documento}
      />

      <InputForm
        name="area"
        control={control}
        label="Area"
        error={errors.area}
      />

      <InputForm
        name="codigoDocumento"
        control={control}
        label="Codigo Del Documento"
        error={errors.codigoDocumento}
      />

      <InputForm
        name="revision"
        control={control}
        label="Revision"
        error={errors.revision}
      />

      <InputForm
        name="fechaImplantacion"
        control={control}
        label="Fecha De Implantacion"
        error={errors.fechaImplantacion}
        type="date"
      />
      <Button type="submit">Guardar Descripción</Button>
    </form>
  );
};

//export default FormularioDescripcionDocumentos;
