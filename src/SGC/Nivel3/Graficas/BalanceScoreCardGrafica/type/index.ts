export type Metricas = {
  objetivo: string;
};

export type DataPoint = {
  label: string; // Nombre de la categoría
  barValue: number; // Valor para la barra
  lineValue: number; // Valor para la línea
};

export type DataPointGraf = {
  label: string;
  value: number;
};
