import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react"
import { Game } from "../types/types"
import PlatformIconsList from "./PlatformIconsList"
import CriticScore from "./CriticScore"
import getCroppedImageUrl from "../services/image-url"
import Emoji from "./Emoji"

interface Props {
    game: Game
}

const GameCard = ({game}:Props) => {
  return (
   <Card width="100%" borderRadius={10} overflow={"hidden"} >
    <Image src={getCroppedImageUrl(game.background_image)} ></Image>
    <CardBody>
       <HStack justifyContent={'space-between'} marginBottom='3'>
        <PlatformIconsList platforms={game.parent_platforms.map((platform) => platform.platform)}/>
            <CriticScore score={game.metacritic} />
       </HStack>
        <Heading fontSize={'2xl'}  >
            {game.name}
        </Heading>
        <Emoji
            rating={game.rating_top}
        ></Emoji>
    </CardBody>
   </Card>
  )
}

export default GameCard