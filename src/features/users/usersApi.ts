import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpkZGlyZGtuZEBnbWFpbC5jb20iLCJpYXQiOjE3MTk1MjQ3MDcsImV4cCI6MTcyMDEyOTUwN30.sbldlCzoQs2CasiQhH4dVgDawh86qLzU4L4ud6k4rSU";
interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  isVerified: boolean;
  username: string;
  id: string;
}
interface FetchUser {
  users: UserData[];
  size: number;
}

export const userApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/v1",
    prepareHeaders(headers) {
      headers.set("Authorization", token);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    fetchUser: builder.query<FetchUser[], number | void>({
      query: () => `/users`,
    }),
  }),
});

export const { useFetchUserQuery } = userApi;
