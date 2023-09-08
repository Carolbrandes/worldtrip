import { Flex, Image, Heading } from "@chakra-ui/react";
import React from "react";

interface CategoriesTravelItemProps {
  src: string;
  alt: string;
  text: string;
}

export function CategoriesTravelItem({
  src,
  alt,
  text,
}: CategoriesTravelItemProps) {
  return (
    <Flex direction="column" justifyContent="center" alignItems="center">
      <Image boxSize="85px" objectFit="cover" src={src} alt={alt} />

      <Heading as="h4" fontSize="1.5rem" textAlign="center" pt="1.5rem">
        {text}
      </Heading>
    </Flex>
  );
}
