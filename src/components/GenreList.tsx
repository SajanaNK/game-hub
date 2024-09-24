import useGenres from "../hooks/useGenres";
import {
  HStack,
  List,
  ListItem,
  Image,
  Button,
  Heading,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import gameQueryStore from "../store";


function GenreList() {
  const { data , error } = useGenres();
//   const { data, error, isLoading } = useGenres();

//   if (isLoading) {
//     return <Spinner />;
//   }

const selectedGenreId =  gameQueryStore(s => s.gameQuery.genreId);
const setGenreId =  gameQueryStore(s => s.setGenreId);


  if (error) {
    return null;
  }

  return (
    <>
      <Heading fontSize="2xl" marginBottom="3">
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => {
          return (
            <ListItem key={genre.id} paddingY="5px">
              <HStack>
                <Image
                  objectFit="cover"
                  boxSize="32px"
                  borderRadius={8}
                  src={getCroppedImageUrl(genre.image_background)}
                ></Image>
                <Button
                  whiteSpace="normal"
                  textAlign="left"
                  fontWeight={
                    genre.id === selectedGenreId ? "bold" : "normal"
                  }
                  onClick={() => {
                    setGenreId(genre.id);
                  }}
                  variant="link"
                  fontSize="lg"
                >
                  {" "}
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          );
        })}
      </List>
    </>
  );
}

export default GenreList;
