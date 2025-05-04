import { HStack, Image } from "@chakra-ui/react";
import Logo from "../assets/logo.webp";
import React from "react";
import ColorModeSwitch from "./ColorModeSwitch";

export const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={Logo} boxSize="60" />
      <ColorModeSwitch />
    </HStack>
  );
};
