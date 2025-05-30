import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode; // Define any props that GameCardContainer might need here
}
const GameCardContainer = ({ children }: Props) => {
  return (
    <Box width="300px" borderRadius="10px" overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
