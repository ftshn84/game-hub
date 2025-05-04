import { HStack, Image } from "@chakra-ui/react";
import Logo from "../assets/logo.webp";
import React from "react";
import ColorModeSwitch from "./ColorModeSwitch";

export const NavBar = () => {
  return (
    <HStack justifyContent="space-between">
      <Image src={Logo} boxSize="14" />
      <ColorModeSwitch />
    </HStack>
  );
};
