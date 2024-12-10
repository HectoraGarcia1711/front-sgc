import { Grid, GridItem, Spinner, Text } from "@chakra-ui/react";
import BarraBSC from "./BarraBSC";
import { useEffect, useState } from "react";
import GraficasDatosBSC from "./GraficasDatosBSC";
import GraficaTendenciaBSC from "./GraficaTendenciaBSC";
import { DataPoint, DataPointGraf } from "./type"; // Asegúrate de importar los tipos
import axios from "../../../../libs/axios";
import { useQuery } from "@tanstack/react-query";

interface Objetivo {
  objetivo: string;
}

interface Metrica {
  idMetricasBSC: number;
  objetivo: string;
  meta: number;
  frecuencia: string;
  responsable: string;
  estadoActual: number;
  idBalanceSCPrespectiva: number;
}

const fetchObjetivosList = async (): Promise<Objetivo[]> => {
  const response = await axios.get("/api/metricasBSC/objetivosLista");
  return response.data;
};

const GraficaBSC = () => {
  const [selectedObjetivo, setSelectedObjetivo] = useState<Objetivo>({
    objetivo: "Incrementar ingresos",
  });
  const [metricasData, setMetricasData] = useState<DataPoint[]>([]);

  const {
    data: objetivosList,
    isLoading,
    error,
  } = useQuery<Objetivo[], Error>({
    queryKey: ["objetivosList"],
    queryFn: fetchObjetivosList,
  });

  useEffect(() => {
    const fetchMetricasData = async () => {
      try {
        const response = await axios.get<Metrica[]>(
          `/api/metricasBSC/buscar-por-objetivo?objetivo=${encodeURIComponent(
            selectedObjetivo.objetivo
          )}`
        );
        const formattedData: DataPoint[] = response.data.map(
          (metrica, index) => ({
            label: `Mes ${index + 1}`,
            barValue: metrica.estadoActual,
            lineValue: metrica.meta,
          })
        );
        setMetricasData(formattedData);
      } catch (error) {
        console.error("Error fetching metricas data:", error);
      }
    };

    fetchMetricasData();
  }, [selectedObjetivo]);

  if (isLoading) {
    return <Spinner size="xl" />;
  }

  if (error) {
    return <Text color="red.500">Error al cargar los objetivos</Text>;
  }

  // Mapeo para GraficasDatosBSC
  const dataForGraficasDatosBSC: DataPointGraf[] = metricasData.map(
    (dataPoint) => ({
      label: dataPoint.label,
      value: dataPoint.barValue, // Usar barValue como el valor para la gráfica
    })
  );

  return (
    <>
      <Grid
        templateAreas={`"nav main"`}
        gridTemplateRows={"50px 1fr"}
        gridTemplateColumns={{ sm: `0 1fr`, md: `250px 1fr` }}
      >
        <GridItem p="5" area={"nav"} height={"calc(100vh - 60px)"}>
          <BarraBSC
            selectedObjetivo={selectedObjetivo}
            setSelectedObjetivo={setSelectedObjetivo}
            objetivosList={objetivosList ?? []}
          />
        </GridItem>
        <GridItem pl="2" area={"main"} height={"calc(100vh - 60px)"}>
          <GraficasDatosBSC data={dataForGraficasDatosBSC} />
          <GraficaTendenciaBSC data={metricasData} />
        </GridItem>
      </Grid>
    </>
  );
};

export default GraficaBSC;
