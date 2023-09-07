import { Flex, Icon } from "@chakra-ui/react";
import React from "react";
import { BackButton } from "./BackButton";
import { useRouter } from "next/router";

export function Header() {
  const { asPath } = useRouter();

  return (
    <Flex
      as="header"
      justify="center"
      align="center"
      h="6.25rem"
      bg="white"
      position="relative"
    >
      {asPath !== "/" && (
        <Flex position="absolute" left="8.75rem" align="center">
          <Icon as={BackButton} />
        </Flex>
      )}

      <img src="/images/logo.svg" alt="logo worldtrip" />
    </Flex>
  );
}
