import { FormErrorMessage, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard"; // Assuming GameCard is imported correctly

// Assuming GameCard is imported correctly

const GameGrid = () => {
  const { games, error } = useGames(); // Assuming useGames is imported correctly
  return (
    <div>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={10}
        spacing={10}
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
