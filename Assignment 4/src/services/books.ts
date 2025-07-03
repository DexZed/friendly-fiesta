// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ApiBooksResponse, Book } from "../utils/Customtypes";

// Define a service using a base URL and expected endpoints
export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  tagTypes: ["Books"],
  endpoints: (builder) => ({
    getBooks: builder.query<ApiBooksResponse, undefined>({
      query: () => "books",
      providesTags: ["Books"],
    }),

    createBook: builder.mutation<ApiBooksResponse, Partial<Book>>({
      query: (book) => {
        return {
          url: "/books",
          method: "POST",
          body: book,
        };
      },
      invalidatesTags: ["Books"],
    }),
    updateBook: builder.mutation<Book, Book>({
      query: (book) => {
        return {
          url: `/books/${book._id}`,
          method: "PUT",
          body: book,
        };
      },
      invalidatesTags: ["Books"],
    }),
    deleteBook: builder.mutation<{ success: boolean; id: string }, string>({
      query: (id) => {
        return {
          url: `/books/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Books"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetBooksQuery, useCreateBookMutation, useUpdateBookMutation, useDeleteBookMutation } = bookApi;
