import React from "react";
import useGenres from "../hooks/useGenres";
import { Genre } from "../types/types";
import {
  HStack,
  List,
  ListItem,
  Image,
  Text,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onGenreSelected: (genre: Genre) => void;
  selectedGenreId?: number;
}

function GenreList({ onGenreSelected, selectedGenreId}: Props) {
  const { data , error } = useGenres();
//   const { data, error, isLoading } = useGenres();

//   if (isLoading) {
//     return <Spinner />;
//   }


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
                    onGenreSelected(genre);
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
