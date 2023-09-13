import { Container } from "@/components/Container";
import { Cities } from "@/components/continent/Cities";
import { DatasQtd } from "@/components/continent/DatasQtd";
import { FullBannerSection } from "@/components/continent/FullBannerSection";
import { continents } from "@/continents";
import { Flex, Text, SimpleGrid, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

function Continent() {
  const { asPath } = useRouter();
  const currentContinent = continents.find(
    (continent) => continent.href == asPath
  );

  if (!currentContinent) return null;

  return (
    <>
      <FullBannerSection
        src={currentContinent?.src}
        title={currentContinent?.title}
      />

      <Container>
        <Stack spacing="28" pb="36">
          <SimpleGrid columns={[1, 2]} spacing="4.3rem">
            <Text fontSize={["0.875rem", "1.5rem"]}>
              {currentContinent?.ownerPage?.description}
            </Text>

            <Flex justifyContent="space-between">
              <DatasQtd
                type="países"
                qtd={currentContinent?.ownerPage?.qtdCountries}
              />

              <DatasQtd
                type="línguas"
                qtd={currentContinent?.ownerPage?.qtdLanguages}
              />

              <DatasQtd
                type="cidades +100"
                qtd={currentContinent?.ownerPage?.qtdCities}
              />
            </Flex>
          </SimpleGrid>

          <Cities cities={currentContinent?.ownerPage?.cities} />
        </Stack>
      </Container>
    </>
  );
}

export default Continent;
