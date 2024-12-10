import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";

import img from "../imgs/Isoftw.jpg";
import { Form, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axios from "../libs/axios";
import { useRef } from "react";
import { useAuthStore } from "../store/auth";

type usuario = {
  email: string;
  password: string;
};

export default function SplitScreen() {
  const setToken = useAuthStore((state) => state.setToken);

  // Datos del formulario
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  // Consulta para login
  const { mutate, isError, isPending } = useMutation({
    mutationFn: (user: usuario) => axios.post("/user/login", user),
    onSuccess: (response) => {
      // Asegúrate de que el token esté en response.data.token
      setToken(response.data.token);
      navigate("/home");
    },
    onError: (error) => {
      console.error("Error en la petición:", error);
    },
  });

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
        
        <Heading fontSize={"5xl"} textAlign={"center"}>Bienvenidos </Heading> 
        <Image
         borderRadius="full" // Hace la imagen circular
         boxSize="250px"      // Define el tamaño de la imagen
         src="/src/imgs/Blanco 2.svg"  // Ruta de la imagen
         mx="auto"              // Centra la imagen horizontalmente
         boxShadow="0 4px 8px rgba(0, 0, 0, 0.5)" // Sombra en los bordes de la imagen 
      />
      <Spacer /> {/* Esto agrega un espacio flexible */}
      <Spacer /> {/* Esto agrega un espacio flexible */}
      <Text  fontWeight="bold" fontSize={"2x1"}>
      Datos obligatorios *
      </Text>
      
          <FormControl id="email" textAlign={"center"}>
            <FormLabel></FormLabel>
            <Input ref={email} type="email" placeholder="Correo Electrónico *" w="400px"  boxShadow="md" _hover={{ boxShadow: "lg" }}  />
          </FormControl>
          <FormControl id="password" textAlign={"center"}>
            <FormLabel></FormLabel>
            <Input ref={password} type="password" placeholder="Contraseña *"  w="400px" boxShadow="md" _hover={{ boxShadow: "lg" }}/>
          </FormControl>

          {
            isError && "Error al iniciar sesión. Verifica tus credenciales"
            //  <Text>
            //    Error al iniciar sesión. Verifica tus credenciales.
            //  </Text>
          }
          <Stack align="center" spacing={8}>
            <Button
              colorScheme={"blue"}
              variant={"solid"}
              onClick={(e) => {
                e.preventDefault();
                if (email.current?.value && password.current?.value) {
                  mutate({
                    email: email.current.value,
                    password: password.current.value,
                  });
                }
              }}
            >
              {isPending ? "Iniciando sesión..." : "Iniciar sesión"}
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image alt={"Login Image"} objectFit={"cover"} src="/src/imgs/negro.svg" />
      </Flex>
    </Stack>
  );
}
