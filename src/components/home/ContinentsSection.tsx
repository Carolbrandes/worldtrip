import { Box, Flex, Heading, Text, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";
import { Container } from "../Container";

export function ContinentsSection() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const continents = [
    {
      title: "américa do norte",
      subtitle: "Lorem ipsum dolor sit amet",
      src: "north.jpg",
      colorFont: "white",
    },

    {
      title: "américa do sul",
      subtitle: "Lorem ipsum dolor sit amet",
      src: "americasul.jpg",
      colorFont: "gray.700",
    },

    {
      title: "áfrica",
      subtitle: "Lorem ipsum dolor sit amet",
      src: "africa.jpg",
      colorFont: "gray.700",
    },

    {
      title: "oceania",
      subtitle: "Lorem ipsum dolor sit amet",
      src: "oceania.jpg",
      colorFont: "gray.700",
    },

    {
      title: "ásia",
      subtitle: "Lorem ipsum dolor sit amet",
      src: "asia.jpg",
      colorFont: "white",
    },

    {
      title: "europa",
      subtitle: "O continente mais antigo.",
      src: "europe.png",
      colorFont: "white",
    },
  ];

  return (
    <Container>
      <Heading
        as="h2"
        fontSize={["1.25rem", "2.25rem"]}
        textAlign="center"
        pb="3.25rem"
      >
        Vamos nessa? <br /> Então escolha seu continente
      </Heading>

      <Swiper
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={isWideVersion ? true : false}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        {continents.map((continent) => (
          <SwiperSlide key={continent.title}>
            <Flex
              as="section"
              bgImage={`/images/${continent.src}`}
              bgRepeat="no-repeat"
              bgSize="cover"
              h={[250, 450]}
              mb={["2.25rem", "5.625rem"]}
              justifyContent="center"
              alignItems="center"
            >
              <Flex
                direction="column"
                justifyContent="center"
                alignItems="center"
                h="fit-content"
                p="0.31rem"
                bg="#3736369c"
              >
                <Heading
                  as="h3"
                  color="white"
                  fontSize={["1.25rem", "3rem"]}
                  textAlign="center"
                  pb="1.25rem"
                  textTransform="capitalize"
                >
                  {continent.title}
                </Heading>
                <Text
                  color="white"
                  fontSize={["0.875rem", "1.5rem"]}
                  textAlign="center"
                >
                  {continent.subtitle}
                </Text>
              </Flex>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
