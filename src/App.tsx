import { Grid, GridItem, Show } from "@chakra-ui/react"

function App() {




  return <Grid templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "main aside"` }}
  >

    <GridItem area="nav" bg="blue" display={{ base: "block", lg: "none" }}>
      Nav
    </GridItem>
    <GridItem area="aside" bg="red" display={{ base: "block", lg: "none" }}>
      Aside
    </GridItem>
    <GridItem area="main" bg="blue">
      Main
    </GridItem>
  </Grid>

}

export default App;
