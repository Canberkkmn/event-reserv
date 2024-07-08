export type Event = {
  id: number;
  title: string;
  description: string;
  price: number;
  date: string;
};

export type SortType = 'price' | 'date' | 'title';
export type SortOrder = 'asc' | 'desc';
