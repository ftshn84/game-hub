import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../assets/services/image-url";

const GenreList = () => {
  const { data } = useGenres(); // Assuming useGenres is imported correctly
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={2} paddingX={4} cursor="pointer">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
              objectFit="cover"
              alt={genre.name}
            />
            <Text fontSize="lg" fontWeight="bold">
              {genre.name}
            </Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
