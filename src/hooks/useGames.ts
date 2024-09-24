import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import {
  FetchResponse,
  Game,
  GameQuery,
  
} from "../types/types";
import ApiClient from "../services/api-client";
import ms from "ms";
import gameQueryStore from "../store";

const APIClient = new ApiClient<FetchResponse<Game>>("/games");


// const useGames = (gameQuery: GameQuery) =>
//   useData<Game>(
//     "/games",
//     {
//       params: {
//         genres: gameQuery.genre?.id,
//         platforms: gameQuery.platform?.id,
//         ordering: gameQuery.sortOrder,
//         search: gameQuery.search,
//       },
//     },
//     [gameQuery]
//   );
// const useGames = (gameQuery: GameQuery) => {
//   return useQuery<FetchResponse<Game>,Error>({
//     queryKey: ["games", gameQuery],
//     queryFn: () =>
//       APIClient.get({
//         params: {
//           genres: gameQuery.genre?.id,
//           parent_platforms: gameQuery.platform?.id,
//           ordering: gameQuery.sortOrder,
//           search: gameQuery.search,
//         }
//       })
        
//   });
// };


const useGames = () => {
  
  const gameQuery =  gameQueryStore(s => s.gameQuery);

  return useInfiniteQuery<FetchResponse<Game>,Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({pageParam = 1}) =>
      APIClient.get({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.search,
          page: pageParam
        }
      }),
    staleTime:  ms('24h'), // 24hrs
    getNextPageParam: (lastPage,allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
        
  });
};

export default useGames;
