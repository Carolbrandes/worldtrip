import {
  Heading,
  SimpleGrid,
  Card,
  CardBody,
  Flex,
  Stack,
  Box,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";

type City = {
  image: string;
  name: string;
  country: string;
  flag: string;
};

interface CitiesProps {
  cities: City[];
}

export function Cities({ cities }: CitiesProps) {
  return (
    <Box>
      <Heading as="h2" pb="10" fontSize={["1.5rem", "2.25rem"]}>
        Cidades +100
      </Heading>

      <SimpleGrid columns={[1, 4]} spacing="2.8rem">
        {cities?.map((city) => (
          <Card maxW="16rem" key={city.name}>
            <CardBody p={0}>
              <Image
                width="100%"
                src={`/images/${city.image}`}
                alt="Green double couch with wooden legs"
                borderRadius="4px 4px 0 0"
              />
              <Flex justifyContent="space-between" alignItems="center" p="3.5">
                <Stack mt="6" spacing="3">
                  <Heading as="h3" size="md" fontSize={["1.25rem"]}>
                    {city.name}
                  </Heading>
                  <Text fontSize={["1rem"]}>{city.country}</Text>
                </Stack>

                <Image
                  src={`/images/${city.flag}`}
                  alt="bandeira Reino Unido"
                />
              </Flex>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
}
