import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Container } from "./Container";

export function FullBannerSection() {
  return (
    <Box
      as="section"
      bgImage="/images/banner01-home.png"
      bgRepeat="no-repeat"
      bgSize="cover"
      h={[220, 382]}
      mb={["2.25rem", "5.625rem"]}
    >
      <Container>
        <Flex direction="column" justifyContent="center" h="inherit">
          <Heading
            color="gray.50"
            fontSize={["1.25rem", "2.25rem"]}
            pb="1.25rem"
          >
            5 Continentes, <br />
            infinitas possibilidades.
          </Heading>
          <Text color="gray.50" fontSize={["0.875rem", "1.25rem"]}>
            Chegou a hora de tirar do papel a viagem que você <br /> sempre
            sonhou.{" "}
          </Text>
        </Flex>
      </Container>
    </Box>
  );
}
