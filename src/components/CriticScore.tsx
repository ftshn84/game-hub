import { Badge } from "@chakra-ui/react";
import { px } from "framer-motion";

interface Props {
  score: number; // Define the type of the score prop
  // Define any props that CriticScore might need here
}
const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "red"; // Set the color based on the score
  return (
    <Badge colorScheme={color} fontSize="14px" padding={2} borderRadius={5}>
      {score}
    </Badge>
  );
};

export default CriticScore;
