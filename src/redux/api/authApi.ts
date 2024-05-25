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
  }),
});

export const { useUserLoginMutation } = authApi;