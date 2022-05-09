import React from "react";
import { Link as LinkDom } from "react-router-dom";
import { Box, Link, Heading, Text } from "@chakra-ui/react";
import { cpfMask, phoneMask } from "../utils/masks";
import * as I from "../interfaces/user";

export default function Card({
  cpf,
  email,
  name,
  phone,
  index,
}: I.User): React.ReactElement {
  return (
    <Link
      as={LinkDom}
      to="/edit"
      state={{ id: index }}
      d="flex"
      cursor="pointer"
      key={cpf}
      bg="white"
      padding="10px 25px"
      borderRadius="md"
      flexDirection={{ base: "column", sm: "row" }}
      transition="0.3s"
      _hover={{ transform: "translateX(15px)" }}
    >
      <Box>
        <Heading as="h2" fontSize="md">
          {name}
        </Heading>
        <Text>{cpfMask(cpf)}</Text>
      </Box>
      <Box
        marginLeft={{ base: "0", sm: "auto" }}
        textAlign={{ base: "left", sm: "right" }}
      >
        <Text>{email}</Text>
        <Text>{phoneMask(phone)}</Text>
      </Box>
    </Link>
  );
}
