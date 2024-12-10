import React from "react";
import ReactECharts from "echarts-for-react";
import { EChartsOption } from "echarts";

type DataPointGraf = {
  label: string; // Nombre de la categoría (por ejemplo, día de la semana o mes)
  value: number; // Valor de la línea o la serie
};

type GraficasDatosBSCProps = {
  data: DataPointGraf[]; // Prop que representa los datos que recibe el componente
};

const GraficasDatosBSC: React.FC<GraficasDatosBSCProps> = ({ data }) => {
  // Extraer las etiquetas y los valores de los datos pasados como `props`
  const labels = data.map((point) => point.label);
  const values = data.map((point) => point.value);

  // Configuración de las opciones de ECharts
  const options: EChartsOption = {
    title: {
      text: "Datos Semanales",
    },
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      type: "category",
      data: labels,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: values,
        type: "line", // Tipo de gráfico, puede ser 'line', 'bar', etc.
      },
    ],
  };

  return (
    <ReactECharts
      option={options}
      style={{ height: "400px", width: "100%" }}
      notMerge={true}
      lazyUpdate={true}
    />
  );
};

export default GraficasDatosBSC;
