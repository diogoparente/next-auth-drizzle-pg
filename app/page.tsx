import { HeroSection } from "@/islands/hero-section";
import { Container, Center } from "@mantine/core";
import React from "react";

function Index() {
  return (
    <Center>
      <Container size="sm" mih={"50vh"}>
        <HeroSection />
      </Container>
    </Center>
  );
}

export default Index;
