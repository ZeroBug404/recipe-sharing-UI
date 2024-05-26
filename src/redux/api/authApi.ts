import { baseApi } from "./baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `users/create-user`,
        method: "POST",
        body: loginData,
      }),
    }),
    getAllUser: build.query({
      query: () => ({
        url: `users`,
      }),
    }),
    getSingleUser: build.query({
      query: (id) => ({
        url: `users/${id}`,
      }),
    }),
    updateUser: build.mutation({
      query: ({ id, data }) => ({
        url: `users/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const { useUserLoginMutation, useUpdateUserMutation, useGetSingleUserQuery, useGetAllUserQuery } = authApi;