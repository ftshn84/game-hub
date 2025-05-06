import {
  Button,
  HStack,
  Image,
  Link,
  List,
  ListItem,
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
  const { data } = useGenres(); // Assuming useGenres is imported correctly
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingX={4} paddingY={1}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
              objectFit="cover"
              alt={genre.name}
            />
            <Button
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
  );
};

export default GenreList;
