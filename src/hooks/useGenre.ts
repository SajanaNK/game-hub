import useGeneres from "./useGenres";

const useGenre = (id? : number) => {
      const {data: genres} = useGeneres();

      const genre = genres?.results.find(genre => genre.id === id);

      return genre;
}

export default useGenre