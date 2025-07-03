export interface Books {
  _id: string;
  title: string;
  author: string;
  genre: 'FICTION' | 'NON_FICTION' | 'SCIENCE' | 'HISTORY' | 'BIOGRAPHY' | 'FANTASY';
  isbn: string;
  description?: string;
  copies: number;
  available?: boolean;
   updateAvailability: () => void;
}

export interface Borrow  {
  book: string;
  quantity: number;
  dueDate: Date;
}

// Define the full API response type
export interface ApiBooksResponse {
  success: boolean;
  message: string;
  data: Books[];
}