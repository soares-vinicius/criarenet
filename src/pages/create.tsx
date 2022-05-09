import React from "react";
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
import Menu from "../components/menu";
import Form from "../components/form";

const Create: React.FC = () => {
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
          <Heading as="h1">Criar Usuário</Heading>
        </Box>

        <Box bg="white" padding="25px" borderRadius="md">
          <Form />
        </Box>
      </Stack>
    </>
  );
};

export default Create;
