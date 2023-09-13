import { Mark, Text } from "@chakra-ui/react";
import React from "react";

interface DatasQtdProps {
  type: string;
  qtd: number;
}

export function DatasQtd({ qtd, type }: DatasQtdProps) {
  return (
    <Text
      fontSize={["1.125rem", "1.5rem"]}
      fontWeight="700"
      textAlign={["left", "center"]}
    >
      <Mark fontSize={["1.5rem", "3rem"]} color="yellow.400">
        {qtd}
      </Mark>{" "}
      <br /> {type}
    </Text>
  );
}
