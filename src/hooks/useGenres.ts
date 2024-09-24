import { FetchResponse, Genre } from "../types/types";
import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GENRES } from "../constants";
import ApiClient from "../services/api-client";
import genres from "../data/genres";
import ms from "ms";

const APIClient = new ApiClient<FetchResponse<Genre>>("/genres");


// const useGeneres = () => ({data: genres, error: null, isLoading: false});
// const useGeneres = () => useData<Genre>("/genres");
const useGeneres = () => {
    return useQuery({
        queryKey: [CACHE_KEY_GENRES],
        queryFn: () => APIClient.get(),
        staleTime: ms('24h'), //24 hours
        initialData: genres,
    })
}

export default useGeneres;
