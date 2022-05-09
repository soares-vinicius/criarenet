import React, { useEffect, useState } from "react";
import {
  Box,
  Stack,
  Heading,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Icon,
} from "@chakra-ui/react";
import { IoMdArrowBack } from "react-icons/io";
import { useLocation } from "react-router-dom";
import Menu from "../components/menu";
import Form from "../components/form";
import * as I from "../interfaces/location";

const Edit: React.FC = () => {
  const {
    state: { id },
  } = useLocation() as I.LocationParams;
  const getUser = JSON.parse(localStorage.getItem("users") || "[]");
  const [user, setUser] = useState();

  useEffect(() => {
    if (getUser.length > 0) {
      setUser({ ...getUser[id], index: id });
    }
  }, [getUser, id]);

  return (
    <>
      <Menu />
      <Stack
        maxW="1080px"
        margin="0 auto"
        padding="25px"
        direction="column"
        spacing="25px"
      >
        <Box>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" d="flex" alignItems="center">
                <Icon as={IoMdArrowBack} mr="0.2rem" /> Lista
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading as="h1">Editar Usuário</Heading>
        </Box>

        <Box bg="white" padding="25px" borderRadius="md">
          {user && <Form user={user} />}
        </Box>
      </Stack>
    </>
  );
};

export default Edit;
