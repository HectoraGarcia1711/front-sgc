import React from "react";
import ReactECharts from "echarts-for-react";
import { EChartsOption } from "echarts";

type DataPoint = {
  label: string; // Nombre de la categoría (por ejemplo, día de la semana)
  barValue: number; // Valor de la barra
  lineValue: number; // Valor de la línea de tendencia
};

type GraficoBarrasLineaProps = {
  data: DataPoint[]; // Array de datos que recibe el componente
};

const GraficaTendenciaBSC: React.FC<GraficoBarrasLineaProps> = ({ data }) => {
  // Extraer las etiquetas y los valores para las series
  const labels = data.map((point) => point.label);
  const barValues = data.map((point) => point.barValue);
  const lineValues = data.map((point) => point.lineValue);

  // Configuración de las opciones de ECharts
  const options: EChartsOption = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        crossStyle: {
          color: "#999",
        },
      },
    },
    legend: {
      data: ["Estado Actual", "Meta"],
    },
    xAxis: {
      type: "category",
      data: labels,
      axisPointer: {
        type: "shadow",
      },
    },
    yAxis: [
      {
        type: "value",
        name: "Estado Actual",
        axisLabel: {
          formatter: "{value}",
        },
      },
      {
        type: "value",
        name: "Meta",
        axisLabel: {
          formatter: "{value}",
        },
      },
    ],
    series: [
      {
        name: "Estado Actual",
        type: "bar",
        data: barValues,
        tooltip: {
          valueFormatter: (value) => `${value}`,
        },
      },
      {
        name: "Meta",
        type: "line",
        yAxisIndex: 1,
        data: lineValues,
        tooltip: {
          valueFormatter: (value) => `${value}`,
        },
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

export default GraficaTendenciaBSC;
