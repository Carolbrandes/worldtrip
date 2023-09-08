import React, { ReactNode } from "react";
import { Container as ContainerChackra } from "@chakra-ui/react";

interface ContainerProps {
  children: ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <ContainerChackra maxW="1240px" h="inherit">
      {children}
    </ContainerChackra>
  );
}
