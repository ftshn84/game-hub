import { HStack, Image, Text } from "@chakra-ui/react";
import Logo from "../assets/logo.webp";
import React from "react";

export const NavBar = () => {
  return (
    <HStack>
      <Image src={Logo} boxSize="14" />
      <Text> NanBar</Text>
    </HStack>
  );
};
