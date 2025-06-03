import { HStack, Image } from "@chakra-ui/react";
import Logo from "../assets/logo.webp";
import React from "react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

export const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={Logo} boxSize="60" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};
