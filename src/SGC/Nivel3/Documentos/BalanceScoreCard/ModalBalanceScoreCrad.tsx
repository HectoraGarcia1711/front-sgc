import { useState } from "react";
import { FormConPasos } from "../../../../ComponentesGlobales/FormConPasos";
import { FormEncabezadoBSC } from "./Formularios/FormEncabezadoBSC";
import {
  FormDataEncabezadoBSC,
  FormDataMetricasBSC,
  FormDataPartesInteresadasBSC,
  FormDataPrespectivaBSC,
} from "./Types";
import { FormAndTablePrespectivaBSC } from "./Formularios";
import axios from "../../../../libs/axios";
import { useCrud } from "../../../../libs/useCrud";
import { useQueryClient } from "@tanstack/react-query";
import { useToast } from "@chakra-ui/react";

//esta es la peticion a la api, ya que es la unica que se utiliza la usaremos en esta parte para
//no crear un nuevo archivo
//pero esto puede cambiar algun dia
export const createEncabezadoBSC = async (
  data: FormDataEncabezadoBSC
): Promise<FormDataEncabezadoBSC> => {
  const response = await axios.post("/api/balanceScoreCard", data);
  return response.data;
};

export const ModalBalanceScoreCrad = () => {
  //<></>

  const toast = useToast();
  const queryClient = useQueryClient(); // Accede al cliente de `react-query`

  const [encabezadoBSC, setEncabezadoBSC] =
    useState<FormDataEncabezadoBSC | null>(null);
  const [prespectivaBSC, setPrespectivaBSC] = useState<
    FormDataPrespectivaBSC[]
  >([]);
  const [partesIn, setPartesIn] = useState<FormDataPartesInteresadasBSC[]>([]);
  const [metricasBSC, setMetricasBSC] = useState<FormDataMetricasBSC[]>([]);

  const resetStates = () => {
    setEncabezadoBSC(null);
    setPrespectivaBSC([]);
  };

  const steps = [
    <div key="1">
      <FormEncabezadoBSC setEncabezadoData={setEncabezadoBSC} />
    </div>,
    <div key="2">
      <FormAndTablePrespectivaBSC
        setTablaDisDoc={setPrespectivaBSC}
        setPartesIn={setPartesIn}
        setMetricasBSC={setMetricasBSC}
      />
    </div>,
  ];

  type FinalData = FormDataEncabezadoBSC & {
    balanceSCPrespectivas: Array<
      FormDataPrespectivaBSC & {
        partesInteresadas: FormDataPartesInteresadasBSC[];
        metricasBSCList: FormDataMetricasBSC[];
      }
    >;
  };

  // Utilizamos el custom hook
  const { createItem } = useCrud<FormDataEncabezadoBSC>({
    queryKey: ["encabezadoBalanceScoreCard"], // Puedes ajustar el key según necesites
    getAll: async () => [], // No necesitamos esta función por ahora
    createItem: createEncabezadoBSC, // Pasamos la función de creación
    updateItem: async () => {
      throw new Error("No implementado");
    },
    deleteItem: async () => {
      throw new Error("No implementado");
    },
  });

  // Manejo del envío
  const handleSend = async () => {
    if (encabezadoBSC && prespectivaBSC) {
      // Verificar que ambos datos estén disponibles
      // Construir el objeto finalData según la estructura proporcionada
      const finalData: FinalData = {
        ...encabezadoBSC,
        balanceSCPrespectivas: prespectivaBSC.map((perspectiva) => ({
          ...perspectiva,
          partesInteresadas: partesIn,
          metricasBSCList: metricasBSC,
        })),
      };

      console.log(finalData);
      try {
        // Llama a la función de creación y envía los datos
        const nuevoEncabezado = await createItem(finalData);
        console.log("Guardado en la base de datos: ", nuevoEncabezado);

        // Invalida la caché y resetea los estados después de guardar
        await queryClient.invalidateQueries({
          queryKey: ["BalanceScoreCard"], // Ajustar según el nombre de la entidad relacionada
        });
        resetStates(); // Resetea todos los estados a su valor inicial
        toast({
          title: "Datos enviados.",
          description: "Tu formulario ha sido enviado con éxito.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } catch (error) {
        console.error("Error al guardar en la base de datos:", error);
      }
    } else {
      console.error("Faltan datos necesarios (encabezado o perspectivas)");
    }
  };

  return (
    <>
      <FormConPasos
        buttonText="Crear Balance Score Card"
        drawerTitle="Balance Score Card"
        steps={steps}
        onSubmit={handleSend}
      />
    </>
  );
};
