export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms:  {platform: Platforms}[];
  metacritic: number;
  rating_top: number;
  rating:number;
}

export interface FetchGamesResponse {
  count: number;
  results: Game[];
}

export interface Platforms {
  id: number,
  name: string,
  slug: string
}




export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}


export interface FetchResponse<T> {
  count: number;
  results: T[];
  next: string | null;
}


export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  search: string;

}