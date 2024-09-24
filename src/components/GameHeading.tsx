import { Heading } from '@chakra-ui/react'
import usePlatform from '../hooks/usePlatform';
import useGenre from '../hooks/useGenre';
import gameQueryStore from '../store';


function GameHeading() {

  // const {data: genres} = useGeneres();
  // const {data: platforms} = usePlatforms();

  // const genre = genres?.results.find(genre => genre.id === gameQuery.genreId);
  // const platform = platforms?.results.find(platform => platform.id === gameQuery.platformId);

  // const {genre, platform} = useGameQuery(gameQuery.genreId, gameQuery.platformId);
  const genreId =  gameQueryStore(s => s.gameQuery.genreId);
  const platform = usePlatform(genreId);

  const platformId =  gameQueryStore(s => s.gameQuery.platformId);
  const genre = useGenre(platformId);

    const heading = `
        ${platform?.name || ''} 
        ${genre?.name || ''}
        Games
    `

  return (
    <Heading as='h1' marginY={5} fontSize='5xl' >
        {heading}
    </Heading>
  )
}

export default GameHeading