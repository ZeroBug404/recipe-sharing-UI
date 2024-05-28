/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useAllRecipesQuery } from "../../redux/api/recipeApi";
import RecipeCard from "./RecipeCard";

interface RecipeType {
  id: string;
  name: string;
  image: string;
  creatorEmail: string;
  country: string;
  category: string;
}

const RecipesList = ({ filters }: { filters: any }) => {
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [recipes, setRecipes] = useState<RecipeType[]>([]);
  const limit = 5;

  const { data: allRecipes, isFetching } = useAllRecipesQuery({ page, limit });

  useEffect(() => {
    if (allRecipes?.data.length) {
      setRecipes((prevRecipes) => [...prevRecipes, ...allRecipes.data]);
    }
    if (allRecipes?.data.length < limit) {
      setHasMore(false);
    }
  }, [allRecipes]);

  const fetchMoreData = () => {
    if (!isFetching) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const filteredRecipes = recipes.filter((recipe: RecipeType) => {
    return (
      (filters.search === "" ||
        recipe?.name?.toLowerCase().includes(filters?.search?.toLowerCase())) &&
      (filters.category === "" || recipe.category === filters.category) &&
      (filters.country === "" || recipe.country === filters.country)
    );
  });

  return (
    <div className="w-[70%] h-full p-4">
      <InfiniteScroll
        dataLength={filteredRecipes.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe: RecipeType) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))
        ) : (
          <p>No recipes found</p>
        )}
      </InfiniteScroll>
    </div>
  );
};

export default RecipesList;
