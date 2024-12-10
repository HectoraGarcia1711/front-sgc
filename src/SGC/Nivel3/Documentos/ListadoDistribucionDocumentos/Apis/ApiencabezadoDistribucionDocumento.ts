import axios from "../../../../../libs/axios";

export interface Encabezado {
  coDocumento: string;
  noRevision: string;
  fechaEmicion: string;
  fechaRevision: string;
}

export const createEncabezadoDisDocu = async (
  data: Encabezado
): Promise<Encabezado> => {
  const response = await axios.post("/api/listadoDistribucionDocumentos", data);
  return response.data;
};

// Función para eliminar un usuario
export const deleteUser = async (id: string) => {
  await axios.delete(`/api/users/${id}`);
};
