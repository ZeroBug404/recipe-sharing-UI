/* eslint-disable @typescript-eslint/no-explicit-any */
import { Key } from "react";
import { useAllRecipesQuery } from "../../redux/api/recipeApi";
import RecipeCard from "./RecipeCard";

interface RecipeType {
  name: string;
  image: string;
  creatorEmail: string;
  country: string;
}

const RecipesList = ({ filters }: { filters: any }) => {
  const { data: allRecipes } = useAllRecipesQuery({});

  const recipes = allRecipes?.data;

  const filteredRecipes = recipes?.filter(
    (recipe: { name: string; category: any; country: any }) => {
      return (
        (filters.search === "" ||
          recipe?.name
            ?.toLowerCase()
            .includes(filters?.search?.toLowerCase())) &&
        (filters.category === "" || recipe.category === filters.category) &&
        (filters.country === "" || recipe.country === filters.country)
      );
    }
  );

  return (
    <div className="w-[70%] h-full p-4">
      {filteredRecipes?.length > 0 ? (
        filteredRecipes?.map((recipe: { id: Key | null | undefined }) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe as unknown as RecipeType}
          />
        ))
      ) : (
        <p>No recipes found</p>
      )}
    </div>
  );
};

export default RecipesList;
