import { Box } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: React.ReactNode; // Define any props that GameCardContainer might need here
}
const GameCardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius="10px" overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
