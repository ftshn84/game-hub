import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

interface props {
  game: Game; // Define any props that GameCard might need here
}

const GameCard = ({ game }: props) => {
  return (
    <Card borderRadius="10px" overflow="hidden" boxShadow="lg">
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize="2xl"> {game.name} </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
