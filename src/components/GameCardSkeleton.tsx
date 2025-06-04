import { Box, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  // This component renders a skeleton for a game card
  return (
    <Box borderRadius="lg" overflow="hidden" boxShadow="md" bg="gray.700">
      <Skeleton height="200px" />
      <Box p={4}>
        <SkeletonText />
      </Box>
    </Box>
  );
};

export default GameCardSkeleton;
