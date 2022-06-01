import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const photoApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getPhotos: builder.query({
      query: () => "/photos",
      async onQueryStarted(arg, arg1) {
         debugger;
      },
      async onCacheEntryAdded(arg,arg1) {
        debugger;
      }
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPhotosQuery } = photoApi;
