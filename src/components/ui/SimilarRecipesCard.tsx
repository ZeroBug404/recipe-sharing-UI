/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { useAllRecipesQuery } from "../../redux/api/recipeApi";

const SimilarRecipesCard = ({ recipeDetail }: { recipeDetail: any }) => {

  const { data: allRecipes } = useAllRecipesQuery({});

  const recipes = allRecipes?.data;

  const suffledByCategory = recipes?.filter(
    (item: { _id: any; category: any }) =>
      item?.category === recipeDetail?.data?.category &&
      item?._id !== recipeDetail?.data?._id
  );

  if (suffledByCategory?.length === 0) {
    return <div>No other recipes in this category</div>;
  }

  return (
    <div>
      {suffledByCategory?.map((item: any) => {
        return (
          <Link
            key={item?._id}
            to={`/recipe/${item?._id}`}
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100  px-3 mt-3"
          >
            <img
              className="w-full h-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={item?.image}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700 ">
                {item?.name}
              </h5>
              <p className="mb-3 font-normal text-gray-700 ">
                {item?.details.length > 100
                  ? item?.details.substring(0, 80) + "..."
                  : item?.details}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SimilarRecipesCard;
