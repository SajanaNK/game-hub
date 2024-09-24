import { FetchResponse, Platforms } from "../types/types";
import ApiClient from "../services/api-client";
import { CACHE_KEY_PLATFORMS } from "../constants";
import { useQuery } from "@tanstack/react-query";
import platfroms from "../data/platfroms";
import ms from "ms";


const APIClient = new ApiClient<FetchResponse<Platforms>>("/platforms/lists/parents");

// const usePlatforms = () => useData<Platforms>("/platforms/lists/parents");
const usePlatforms = () => useQuery({
        queryKey: [CACHE_KEY_PLATFORMS],
        queryFn: () => APIClient.get(),
        staleTime:  ms('24h'),
        initialData: platfroms,
    })


export default usePlatforms