import { baseApi } from "./baseApi";

export const recipeApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addRecipe: build.mutation({
      query: (recipeData) => ({
        url: `recipes/create-recipe`,
        method: "POST",
        body: recipeData,
      }),
    }),
    allRecipes: build.query({
      query: () => ({
        url: `recipes`,
        method: "GET",
      }),
    }),
    getSingleRecipe: build.query({
      query: (id) => ({
        url: `recipes/${id}`,
      }),
    }),
    updateRecipe: build.mutation({
      query: ({ id, data }) => ({
        url: `recipes/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useAddRecipeMutation,
  useAllRecipesQuery,
  useGetSingleRecipeQuery,
  useUpdateRecipeMutation,
} = recipeApi;
