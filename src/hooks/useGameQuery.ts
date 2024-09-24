import useGeneres from "./useGenres";
import usePlatforms from "./usePlatforms";

const useGameQuery = (genreId?: number , platformId? : number) => {

    const {data: genres} = useGeneres();
    const {data: platforms} = usePlatforms();

    
    const genre = genres?.results.find(genre => genre.id === genreId);
    const platform = platforms?.results.find(platform => platform.id === platformId);

    return {
        genre,
        platform
    }

}

export default useGameQuery;