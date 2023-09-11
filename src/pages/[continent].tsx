import { Container } from "@/components/Container";
import {
  Flex,
  Heading,
  Box,
  Text,
  Highlight,
  Mark,
  SimpleGrid,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

function Continent() {
  const router = useRouter();
  console.log("🚀 ~ file: [continent].tsx:6 ~ Continent ~ router:", router);

  return (
    <>
      <Box
        bgImage="/images/europe.png"
        bgRepeat="no-repeat"
        bgSize="cover"
        height={500}
        mb="5rem"
      >
        <Container>
          <Flex alignItems="flex-end" height="inherit">
            <Heading as="h1" color="white" fontSize={"3rem"} pb="3.68rem">
              Europa
            </Heading>
          </Flex>
        </Container>
      </Box>

      <Container>
        <SimpleGrid columns={2} spacing="4.3rem">
          <Text fontSize="1.5rem">
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>

          <Flex justifyContent="space-between">
            <Text fontSize="1.5rem" fontWeight="700" textAlign="center">
              <Mark fontSize="3rem" color="yellow.400">
                50
              </Mark>{" "}
              <br /> países
            </Text>

            <Text fontSize="1.5rem" fontWeight="700" textAlign="center">
              <Mark fontSize="3rem" color="yellow.400">
                60
              </Mark>{" "}
              <br /> línguas
            </Text>

            <Text fontSize="1.5rem" fontWeight="700" textAlign="center">
              <Mark fontSize="3rem" color="yellow.400">
                27
              </Mark>{" "}
              <br /> cidades +100
            </Text>
          </Flex>
        </SimpleGrid>
      </Container>
    </>
  );
}

export default Continent;
