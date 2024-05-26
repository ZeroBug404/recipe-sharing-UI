/* eslint-disable @typescript-eslint/no-explicit-any */
import toast from "react-hot-toast";
import { getUserInfo } from "../../services/auth.service";
import { Link } from "react-router-dom";

interface RecipeType {
  [x: string]: any;
  name: string;
  image: string;
  creatorEmail: string;
  country: string;
}

const RecipeCard = ({ recipe }: { recipe: RecipeType }) => {
  const userInfo = getUserInfo() as any;

  const handleViewRecipe = () => {
    if (!userInfo) {
      toast.error("You must be logged in to view a recipe");
      return;
    }

    if (recipe.creatorEmail === userInfo.email) {
      // redirect to recipe detail page
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md flex p-4 mb-4">
      <img
        src={recipe.image}
        alt=""
        className="w-[45%] h-full object-cover rounded-l-lg"
      />
      <div className="w-2/3 p-4 flex flex-col justify-between">
        <div className="flex justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              {recipe.name}
            </h2>

            <div className=" items-center mt-2">
              <p className="text-gray-600">Email: {recipe.creatorEmail}</p>
              <p className="text-gray-600 text-lg">{recipe.country}</p>
            </div>
          </div>
          <div>
            <p className="text-gray-600 mt-2">Purchased By:</p>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <Link to={{ pathname: `/recipe/${recipe._id}` }}>
            <button
              type="button"
              onClick={handleViewRecipe}
              className="text-white border-2 bg-[#21286a] hover:bg-[white] hover:border-[#21286a] hover:text-[#21286a] text-lg font-regular py-2 px-4 rounded transition duration-500 ease-in-out transform"
            >
              View Recipe
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
