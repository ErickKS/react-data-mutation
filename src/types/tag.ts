export interface TagResponse {
  first: number;
  prev: number | null;
  next: number;
  last: number;
  pages: number;
  items: number;
  data: Tag[];
}

interface Tag {
  title: string;
  amountOfVideos: number;
  id: string;
}
