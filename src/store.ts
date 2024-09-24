import { create } from "zustand";
import { GameQuery } from "./types/types";

interface GameQueryStore {
  gameQuery: GameQuery;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
  setSearch: (search: string) => void;
}

const gameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {
    genreId: undefined,
    platformId: undefined,
    sortOrder: "",
    search: "",
  },
  setGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatformId: (platformId) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, platformId },
    })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
  setSearch: (search) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, search } })),
}));

export default gameQueryStore;
