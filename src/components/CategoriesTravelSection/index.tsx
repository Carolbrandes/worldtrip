import React from "react";
import { Container } from "../Container";
import { Box, SimpleGrid, useBreakpointValue } from "@chakra-ui/react";
import { CategoriesTravelItem } from "./CategoriesTravelItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function CategoriesTravelSection() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const categories = [
    {
      text: "vida noturna",
      src: "vidanoturna.svg",
      alt: "copo de bebida",
    },
    {
      text: "praia",
      src: "surf.svg",
      alt: "prancha de surf",
    },
    {
      text: "moderno",
      src: "building.svg",
      alt: "prédio moderno",
    },
    {
      text: "clássico",
      src: "museum.svg",
      alt: "museu",
    },
    {
      text: "e mais...",
      src: "earth.svg",
      alt: "planeta terra",
    },
  ];

  return isWideVersion ? (
    <Container>
      <SimpleGrid columns={5} justifyContent="center">
        {categories.map((category) => (
          <CategoriesTravelItem
            text={category.text}
            src={`/images/${category.src}`}
            alt={category.alt}
          />
        ))}
      </SimpleGrid>
    </Container>
  ) : (
    <Swiper
      cssMode={true}
      navigation={false}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
    >
      {categories.map((category) => (
        <SwiperSlide>
          <Box pb="3.25rem">
            <CategoriesTravelItem
              text={category.text}
              src={`/images/${category.src}`}
              alt={category.alt}
            />
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
