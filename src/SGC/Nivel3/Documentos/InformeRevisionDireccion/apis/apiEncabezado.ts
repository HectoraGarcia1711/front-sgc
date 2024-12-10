import axios from "../../../../../libs/axios";

export interface Encabezado {
  coDocumento: string;
  noRevision: string;
  fechaEmicion: Date;
  fechaRevision: Date;
}

export const createEncabezado = async (
  data: Encabezado
): Promise<Encabezado> => {
  const response = await axios.post("/api/informeRevisionDireccion", data);
  return response.data;
};
export const getAllEncabezados = async (): Promise<Encabezado[]> => {
  const response = await axios.get("/api/informeRevisionDireccion");
  return response.data;
};

export const deleteEncabezado = async (id: string): Promise<void> => {
  await axios.delete(`/api/informeRevisionDireccion/${id}`);
};
