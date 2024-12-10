"use client";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Stack,
  Link,
} from "@chakra-ui/react";
import { NavLink as RouterLink } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { useAuthStore } from "../store/auth";
import { useNavigate } from "react-router-dom";

const Links = [
  { uri: "/home", label: "Inicio" },
  { uri: "/home/filoOrganizacional", label: "Filosofia Organizacional" },
  { uri: "/home/EstOrganizacional", label: "Estructura Organizacional" },
  { uri: "/home/Graficas", label: "Graficas" },
];

const ruta = "Manuales";
const SubMenu = [
  { uri: `/home/${ruta}`, label: "Nivel 1: Manuales" },
  { uri: "/home/Procesos", label: "Nivel 2: Procesos" },
  { uri: "/home/Formatos", label: "Nivel 3: Formatos" },
  { uri: "/home/Anexos", label: "Anexos" },
  { uri: "/home/Instructivos", label: "Instructivos" },
];

interface Props {
  children: React.ReactNode;
  to: string;
}

const NavLink = (props: Props) => {
  const { children, to } = props;

  return (
    <Link
      as={RouterLink}
      to={to}
      px={2}
      py={1}
      rounded="md"
      color="white"
      _hover={{
        textDecoration: "none",
        bg: "#A2A2A2",
      }}
    >
      {children}
    </Link>
  );
};

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  return (
    <>
      <Box bg={"#292929"} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <IoMdClose /> : <GiHamburgerMenu />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box color={"white"}>SGC</Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink to={link.uri} key={link.uri}>
                  {link.label}
                </NavLink>
              ))}

              <Menu>
                <MenuButton
                  as={Button}
                  bg={"#292929"}
                  color={"white"}
                  _hover={{
                    textDecoration: "none",
                    bg: "#A2A2A2",
                  }}
                >
                  Información Documentada
                </MenuButton>
                <MenuList background={"#A2A2A2"}>
                  {SubMenu.map((menu) => (
                    <MenuItem key={menu.uri} onClick={() => navigate(menu.uri)}>
                      {menu.label}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
            </HStack>
          </HStack>

          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem
                  onClick={() => {
                    logout();
                    navigate("/");
                  }}
                >
                  Cerrar Sesión
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink to={link.uri} key={link.uri}>
                  {link.label}
                </NavLink>
              ))}
            </Stack>

            <Menu>
              <MenuButton
                as={Button}
                bg={"#292929"}
                color={"white"}
                _hover={{
                  textDecoration: "none",
                  bg: "#A2A2A2",
                }}
              >
                Información Documentada
              </MenuButton>
              <MenuList background={"#A2A2A2"}>
                {SubMenu.map((menu) => (
                  <MenuItem onClick={() => navigate(menu.uri)} key={menu.uri}>
                    {menu.label}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
