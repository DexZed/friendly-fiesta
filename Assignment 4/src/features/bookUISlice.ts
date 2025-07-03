import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Book } from "../utils/Customtypes";

interface BooksState {
  books: Book[];
}

const initialState: BooksState = {
  books: [],
};

export const booksSlice = createSlice({
  name: "booksUI",
  initialState,
  reducers: {
    setBooks: (state, action: PayloadAction<Book[]>) => {
      state.books = action.payload;
    },
  },
});

export const { setBooks } = booksSlice.actions;

export default booksSlice.reducer;