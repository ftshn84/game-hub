import {
  Button,
  Heading,
  HStack,
  Image,
  Link,
  List,
  ListItem,
  Spinner,
  Text,
  // Removed Genre as it is not exported from @chakra-ui/react
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../assets/services/image-url";
// Ensure Genre is defined in a types file or replace with the correct path
import { Genre } from "../hooks/useGenres"; // Adjust the import path as necessary
interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  // Assuming useGenres is imported correctly
  if (error) return null;
  if (isLoading) return <Spinner></Spinner>;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingX={4} paddingY={1}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={
                  genre.platforms && genre.platforms.length > 0
                    ? getCroppedImageUrl(genre.platforms[0].image_background)
                    : undefined
                }
                objectFit="cover"
                alt={genre.name}
              />
              <Button
                whiteSpace={"normal"}
                textAlign="left" // Allow text to wrap
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"} // Highlight selected genre}>
                onClick={() => onSelectGenre(genre)}
                variant="Link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
