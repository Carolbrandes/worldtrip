import { CategoriesTravelSection } from "@/components/home/CategoriesTravelSection";
import { ContinentsSection } from "@/components/home/ContinentsSection";
import { FullBannerSection } from "@/components/home/FullBannerSection";
import { Divider } from "@chakra-ui/react";

export default function Home() {
  return (
    <main>
      <FullBannerSection />
      <CategoriesTravelSection />
      <Divider
        w={90}
        borderColor="gray.700"
        borderWidth={2}
        marginInline="auto"
        mt="5rem"
        mb="3.25rem"
      />
      <ContinentsSection />
    </main>
  );
}
