import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { GameQuery } from "./types/types";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    genreId: undefined,
    platformId: undefined,
    sortOrder: "",
    search: "",
  });

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(search) => {
            setGameQuery({ ...gameQuery, search });
          }}
        />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenreId={gameQuery.genreId}
            onGenreSelected={(genre) => {
              setGameQuery({ ...gameQuery, genreId: genre.id });
            }}
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery}></GameHeading>
          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector
              onPlatformSelected={(platform) => {
                setGameQuery({ ...gameQuery, platformId: platform?.id });
              }}
              selectedPlatformId={gameQuery.platformId}
            />
            <SortSelector
              onSortSelected={(sortOrder) => {
                setGameQuery({ ...gameQuery, sortOrder });
              }}
              selectedSortOrder={gameQuery.sortOrder}
            />
          </HStack>
          <GameGrid gameQuery={gameQuery} />
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
