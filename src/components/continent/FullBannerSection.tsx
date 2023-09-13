import { Container, Flex, Heading, Box } from "@chakra-ui/react";
import React from "react";

interface FullBannerSectionProps {
  src: string;
  title: string;
}

export function FullBannerSection({ src, title }: FullBannerSectionProps) {
  return (
    <Box
      bgImage={`/images/${src}`}
      bgRepeat="no-repeat"
      bgSize="cover"
      width="100vw"
      height={[150, 500]}
      mb="5rem"
    >
      <Flex
        justifyContent={["center", "flex-start"]}
        alignItems={["center", "flex-end"]}
        height="inherit"
        width="inherit"
      >
        <Box p={["0.68rem", "3.68rem"]}>
          <Heading
            as="h1"
            color="white"
            bg="#3736369c"
            fontSize={["1.75rem", "3rem"]}
            textTransform="capitalize"
            p="1.5"
          >
            {title}
          </Heading>
        </Box>
      </Flex>
    </Box>
  );
}
