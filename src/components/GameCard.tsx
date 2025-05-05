import React from "react";
import { Game, Platform } from "../hooks/useGames";
import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../assets/services/image-url";

interface props {
  game: Game; // Define any props that GameCard might need here
}

const GameCard = ({ game }: props) => {
  return (
    <Card>
      <Image
        src={getCroppedImageUrl(
          game.background_image || "path/to/placeholder/image.jpg"
        )}
      ></Image>
      <CardBody>
        <Heading fontSize="2xl"> {game.name} </Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map(
              (p: { platform: Platform }) => p.platform
            )}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
