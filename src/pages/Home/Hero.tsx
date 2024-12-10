"use client";
import { Box, Heading, Container, Text, Stack, Flex } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Flex h={"calc(100vh - 64px)"}>
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: "100px" }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Bienvenido a <br />
            <Text as={"span"} color={"green.400"}>
              SGC
            </Text>
          </Heading>
          <Text color={"gray.500"}>Hola</Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          ></Stack>
        </Stack>
      </Container>
    </Flex>
  );
}
