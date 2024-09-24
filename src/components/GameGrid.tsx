import { Box, Button, SimpleGrid, Spinner } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameQuery, Genre, Platforms } from "../types/types";
import GameCardContainer from "./GameCardContainer";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: Props) {
  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useGames(gameQuery);

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (error) {
    return <p>{error.message}</p>;
  }

  const fetchGamesCount = data?.pages.reduce(
    (total, page) => total + page.results.length, 0
  ) || 0;

  return (
      <InfiniteScroll
        next={fetchNextPage}
        hasMore={!!hasNextPage} //UNDEFINED TO FALSE
        dataLength={fetchGamesCount}
        loader={<Spinner />}
        
      >
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6} padding="10px">
          {isLoading &&
            skeletons.map((skeleton) => {
              return (
                <GameCardContainer key={skeleton}>
                  <GameCardSkeleton />
                </GameCardContainer>
              );
            })}

          {!isLoading &&
            data?.pages.map((page, index) => (
              <React.Fragment key={index}>
                {page.results.map((game) => (
                  <GameCardContainer key={game.id}>
                    <GameCard game={game} />
                  </GameCardContainer>
                ))}{" "}
              </React.Fragment>
            ))}

          {/* {!isLoading &&
          data?.results.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          ))} */}
        {/* {hasNextPage && (
          <Button
            marginY={5}
            disabled={isLoading}
            onClick={() => fetchNextPage()}
          >
            {" "}
            {isLoading ? "Loading..." : "LoadMore"}
          </Button>
        )} */}
        </SimpleGrid>
      </InfiniteScroll>

  );
}

export default GameGrid;
