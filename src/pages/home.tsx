import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Heading,
  Link,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { RiAddFill } from "react-icons/ri";
import Menu from "../components/menu";
import Card from "../components/card";
import * as I from "../interfaces/user";

const Home: React.FC = () => {
  const [users, setUsers] = useState<I.User[]>([]);

  useEffect(() => {
    if (localStorage.getItem("users")) {
      setUsers(JSON.parse(localStorage.getItem("users") || "") as I.User[]);
    }
  }, []);

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
        <Box position="relative">
          <Heading as="h1">Usuários</Heading>
          <Link href="/create">
            <Button
              type="button"
              position="absolute"
              top="0"
              right="0"
              colorScheme="orange"
            >
              <Icon
                as={RiAddFill}
                height="1.5rem"
                w="auto"
                marginRight="0.2rem"
              />
              Criar novo
            </Button>
          </Link>
        </Box>

        <Stack direction="column" spacing="5px">
          {users ? (
            users.map((item, index) => (
              <Card {...item} key={item.cpf} index={index} />
            ))
          ) : (
            <Text>Loading...</Text>
          )}
        </Stack>
      </Stack>
    </>
  );
};

export default Home;
