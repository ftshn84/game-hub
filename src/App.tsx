import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{ base: '"nav" "main"', lg: '"nav nav" "aside main"' }}
    >
      <GridItem area={"nav"} bg="red.500" height="100px">
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} bg="blue.200">
          Aside
        </GridItem>
      </Show>
      <GridItem area={"main"} bg="pink.200">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
