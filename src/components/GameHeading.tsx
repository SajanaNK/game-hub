import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../types/types'
import useGeneres from '../hooks/useGenres'
import usePlatforms from '../hooks/usePlatforms';
import useGameQuery from '../hooks/useGameQuery';
import usePlatform from '../hooks/usePlatform';
import useGenre from '../hooks/useGenre';

interface Props {
    gameQuery: GameQuery
}

function GameHeading({gameQuery}:Props) {

  // const {data: genres} = useGeneres();
  // const {data: platforms} = usePlatforms();

  // const genre = genres?.results.find(genre => genre.id === gameQuery.genreId);
  // const platform = platforms?.results.find(platform => platform.id === gameQuery.platformId);

  // const {genre, platform} = useGameQuery(gameQuery.genreId, gameQuery.platformId);


  const platform = usePlatform(gameQuery.platformId);
  const genre = useGenre(gameQuery.genreId);

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