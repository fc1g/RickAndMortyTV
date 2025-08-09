export type Characters = {
  info: Info;
  results: Character[];
};
export type GET_CHARACTERS_TYPE = {
  characters: Characters;
};
export type GET_CHARACTERS_VARIABLES = {
  page: number;
};

export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  origin: Location;
  image: string;
};
export type GET_CHARACTER_TYPE = {
  character: Character;
};
export type GET_CAHRACTER_VARIABLES = {
  id: number;
};

type Location = {
  id: string;
  name: string;
  type: string;
};

export type Info = {
  count: number;
  pages: number;
  next: number;
  prev: number;
};
