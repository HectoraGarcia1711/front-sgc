import axios from "../../../../../libs/axios";

export interface Encabezado {
  coDocumento: string;
  noRevision: string;
  fechaEmicion: Date;
  fechaRevision: Date;
}

export const createEncabezadoLisMa = async (
  data: Encabezado
): Promise<Encabezado> => {
  const response = await axios.post("/api/listadoMaestroDocumentos", data);
  return response.data;
};
