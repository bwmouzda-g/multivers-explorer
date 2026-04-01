export type Character = {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  gender: string;
  origin: { name: string };
  location: { name: string };
  image: string;
  episode: string[];
};

export type ApiInfo = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

export type ApiResponse = {
  info: ApiInfo;
  results: Character[];
};
