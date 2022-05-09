import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Stack,
  useToast,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { RiAddFill } from "react-icons/ri";
import { AiFillDelete } from "react-icons/ai";

import * as I from "../interfaces/form";

export default function Form({ user }: I.FromProps): React.ReactElement {
  const history = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: user,
  });

  function onSubmit(values: any) {
    return new Promise<void>((resolve) => {
      const oldData = JSON.parse(localStorage.getItem("users") || "[]");
      const newData = [...oldData, values];

      if (user?.index !== undefined) {
        delete values.index;
        oldData[user.index] = values;

        localStorage.setItem("users", JSON.stringify(oldData));
        setTimeout(() => {
          toast({
            title: `Alterado com sucesso!`,
            position: "top",
            status: "success",
            isClosable: true,
          });
          history("/");
          resolve();
        }, 2000);
        return;
      }

      localStorage.setItem("users", JSON.stringify(newData));
      setTimeout(() => {
        toast({
          title: `Criado com sucesso!`,
          position: "top",
          status: "success",
          isClosable: true,
        });
        history("/");
        resolve();
      }, 2000);
    });
  }

  const handleDelete = () => {
    setIsLoading(true);
    const oldData = JSON.parse(localStorage.getItem("users") || "[]");

    if (user?.index !== undefined) {
      return new Promise<void>((resolve) => {
        oldData.splice(user.index, 1);
        localStorage.setItem("users", JSON.stringify(oldData));

        setTimeout(() => {
          toast({
            title: `Removido com sucesso!`,
            position: "top",
            status: "success",
            isClosable: true,
          });
          history("/");
          setIsLoading(false);
          resolve();
        }, 2000);
        return;
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing="15px">
        <FormControl isInvalid={!!errors.name}>
          <FormLabel htmlFor="name">Nome</FormLabel>
          <Input
            id="name"
            placeholder="nome"
            {...register("name", {
              required: "Nome é obrigatório",
              minLength: { value: 4, message: "Minimo 4 letras" },
            })}
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.cpf}>
          <FormLabel htmlFor="cpf">CPF</FormLabel>
          <Input
            id="cpf"
            placeholder="111.111.111-11"
            maxLength={11}
            {...register("cpf", {
              required: "CPF é obrigatório",
              minLength: { value: 11, message: "CPF invalido" },
            })}
          />
          <FormErrorMessage>
            {errors.cpf && errors.cpf.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.email}>
          <FormLabel htmlFor="email">E-mail</FormLabel>
          <Input
            id="email"
            placeholder="email@exemplo.com"
            {...register("email", {
              required: "E-mail é obrigatório",
              pattern: { value: /^\S+@\S+$/i, message: "E-mail inválido" },
            })}
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.phone}>
          <FormLabel htmlFor="phone">Telefone</FormLabel>
          <Input
            id="phone"
            placeholder="(11) 99999-9999"
            maxLength={11}
            {...register("phone", {
              required: "Telefone é obrigatório",
              minLength: { value: 10, message: "Telefone invalido" },
            })}
          />
          <FormErrorMessage>
            {errors.phone && errors.phone.message}
          </FormErrorMessage>
        </FormControl>

        <Flex direction="row" alignItems="center" justifyContent="center">
          <Button
            colorScheme="blue"
            isLoading={isSubmitting || isLoading}
            type="submit"
          >
            <Icon as={user ? FaEdit : RiAddFill} mr="0.2rem" />
            {user ? "Alterar" : "Criar"}
          </Button>

          {user && (
            <Button
              colorScheme="red"
              type="button"
              onClick={handleDelete}
              ml="25px"
              isLoading={isSubmitting || isLoading}
            >
              <Icon as={AiFillDelete} mr="0.2rem" />
              Excluir
            </Button>
          )}
        </Flex>
      </Stack>
    </form>
  );
}
