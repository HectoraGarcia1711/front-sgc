import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryKey,
} from "@tanstack/react-query";
import React from "react";

interface PaginatedResponse<T> {
  content: T[];
  totalPages: number;
  totalElements: number;
}

interface UseCrudOptions<T, CreateInput, UpdateInput> {
  queryKey: QueryKey;
  getAll?: () => Promise<T[]>; // Hacer getAll opcional
  getPaginated?: (page: number, size: number) => Promise<PaginatedResponse<T>>;
  createItem: (data: CreateInput) => Promise<T>;
  updateItem: (id: string, data: UpdateInput) => Promise<T>;
  deleteItem: (id: string) => Promise<void>;
}

export const useCrud = <T, CreateInput = T, UpdateInput = Partial<T>>({
  queryKey,
  getAll,
  getPaginated,
  createItem,
  updateItem,
  deleteItem,
}: UseCrudOptions<T, CreateInput, UpdateInput>) => {
  const queryClient = useQueryClient();
  const [currentParams, setCurrentParams] = React.useState({
    page: 0,
    size: 5,
  });

  const {
    data: items,
    isLoading,
    error,
  } = useQuery<T[]>({
    queryKey,
    queryFn: getAll || (() => Promise.resolve([])), // Proveer un valor por defecto si no se usa getAll
    enabled: !!getAll,
  });

  const paginatedQuery = useQuery<PaginatedResponse<T>, Error>({
    queryKey: [
      ...queryKey,
      "paginated",
      currentParams.page,
      currentParams.size,
    ], // Las claves deben incluir dinámicamente los parámetros actuales
    queryFn: async () => {
      if (!getPaginated) {
        throw new Error("No se implementó la consulta paginada.");
      }
      {
        /** console.log(
        "Ejecutando paginación con: page=",
        currentParams.page,
        ", size=",
        currentParams.size
      ); */
      }
      return getPaginated(currentParams.page, currentParams.size);
    },
    enabled: !!getPaginated,
  });

  const createMutation = useMutation<T, Error, CreateInput>({
    mutationFn: createItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });

  const updateMutation = useMutation<
    T,
    Error,
    { id: string; data: UpdateInput }
  >({
    mutationFn: ({ id, data }: { id: string; data: UpdateInput }) =>
      updateItem(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });

  const deleteMutation = useMutation<void, Error, string>({
    mutationFn: deleteItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });

  const setPaginatedParams = (page: number, size: number) => {
    //console.log("Estableciendo parámetros de paginación:", { page, size });
    setCurrentParams({ page, size });

    // Invalida todas las consultas relacionadas con la clave "paginated"
    queryClient.invalidateQueries({
      queryKey: [...queryKey, "paginated"],
      exact: false, // Invalida cualquier consulta que coincida parcialmente con esta clave
    });
  };

  return {
    items,
    paginatedItems: paginatedQuery.data?.content || [],
    totalPages: paginatedQuery.data?.totalPages,
    totalElements: paginatedQuery.data?.totalElements,
    isLoading: isLoading || paginatedQuery.isLoading,
    error,
    createItem: createMutation.mutateAsync,
    updateItem: updateMutation.mutateAsync,
    deleteItem: deleteMutation.mutateAsync,
    setPaginatedParams,
  };
};

/* / hooks/useCrud.ts
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryKey,
} from "@tanstack/react-query";

interface UseCrudOptions<T, CreateInput, UpdateInput> {
  queryKey: QueryKey;
  getAll: () => Promise<T[]>;
  createItem: (data: CreateInput) => Promise<T>;
  updateItem: (id: string, data: UpdateInput) => Promise<T>;
  deleteItem: (id: string) => Promise<void>;
}

export const useCrud = <T, CreateInput = T, UpdateInput = Partial<T>>({
  queryKey,
  getAll,
  createItem,
  updateItem,
  deleteItem,
}: UseCrudOptions<T, CreateInput, UpdateInput>) => {
  const queryClient = useQueryClient();

  // Obtener todos los elementos
  const {
    data: items,
    isLoading,
    error,
  } = useQuery<T[]>({
    queryKey,
    queryFn: getAll,
  });

  // Crear un nuevo elemento
  const createMutation = useMutation<T, Error, CreateInput>({
    mutationFn: createItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });

  // Actualizar un elemento existente
  const updateMutation = useMutation<
    T,
    Error,
    { id: string; data: UpdateInput }
  >({
    mutationFn: ({ id, data }: { id: string; data: UpdateInput }) =>
      updateItem(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });

  // Eliminar un elemento
  const deleteMutation = useMutation<void, Error, string>({
    mutationFn: deleteItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });

  return {
    items,
    isLoading,
    error,
    createItem: createMutation.mutateAsync,
    updateItem: updateMutation.mutateAsync,
    deleteItem: deleteMutation.mutateAsync,
  };
};*/
