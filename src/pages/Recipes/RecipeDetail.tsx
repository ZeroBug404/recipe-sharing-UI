import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import SimilarRecipesCard from "../../components/ui/SimilarRecipesCard";
import {
  useGetSingleUserQuery,
  useUpdateUserMutation,
} from "../../redux/api/authApi";
import { useGetSingleRecipeQuery } from "../../redux/api/recipeApi";

const RecipeDetail = () => {
  const { id } = useParams();
  const [isReadMore, setIsReadMore] = useState(true);
  const [reacted, setReacted] = useState(false);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const userId = localStorage.getItem("userId");

  const { data: userData } = useGetSingleUserQuery(userId);

  const { data: recipeDetail } = useGetSingleRecipeQuery(id);

  //   console.log(userData?.data);

  const [updateUser] = useUpdateUserMutation();

  const handleReact = async () => {
    setReacted(!reacted);

    if (reacted === true) {
      const response = await updateUser({
        id: userId,
        data: {
          reacted: [...userData.data.reacted, recipeDetail?.data?.id],
        },
      });

      console.log(response);
    }
  };

  return (
    <>
      <div className="bg-white mt-20" key={recipeDetail?.data?._id}>
        <div className="w-[1400px] mx-auto flex gap-8">
          {/* <div className="pt-[6rem]">
            <Breadcrumb paths={paths} />
          </div> */}
          <div className="flex w-[48%] justify-between gap-5">
            {/* <ListingSlider image_url={recipeDetail?.data?.image} /> */}
            <div className="mt-4">
              <div className="border flex justify-center p-4 flex-col gap-3">
                {/* Seller deatil, price etc */}
                <div className="flex gap-6">
                  <div className="flex flex-col gap-3">
                    <ReactPlayer
                      className="w-full"
                      controls={true}
                      url={recipeDetail?.data?.videoCode}
                    />
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-gray-800 text-2xl font-semibold">
                          {recipeDetail?.data?.name}
                        </p>
                        <p className="flex gap-1 items-center text-lg">
                          <span className="text-gray-500">
                            <IoLocationOutline />
                          </span>{" "}
                          {recipeDetail?.data?.country}
                        </p>
                      </div>
                      <div
                        onClick={handleReact}
                        className="w-8 h-8 border rounded-full border-gray-400 flex justify-center items-center"
                      >
                        <FaHeart
                          className={
                            reacted
                              ? "text-red-500 text-sm"
                              : "text-gray-500 text-sm"
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border w-full"></div>

                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <p>
                      <span className="font-medium">Category:</span>{" "}
                      {recipeDetail?.data?.category}
                    </p>
                    <p>
                      <span className="font-medium">Purchased By:</span>{" "}
                      {recipeDetail?.data?.purchasedBy?.length}
                    </p>
                  </div>
                  <p>
                    <span className="font-medium">Creator:</span>{" "}
                    {recipeDetail?.data?.creatorEmail}
                  </p>
                </div>

                <div className="border w-full"></div>

                <div className="border p-5 rounded">
                  <p className="text-base font-medium mb-1">Description</p>
                  <p className="text-gray-500">
                    {isReadMore
                      ? recipeDetail?.data?.details.slice(0, 472)
                      : recipeDetail?.data?.details}
                    <span
                      onClick={toggleReadMore}
                      style={{ color: "blue", cursor: "pointer" }}
                    >
                      {isReadMore ? "...read more" : " show less"}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center">
            {/* More details about this user */}
            <div
              className="border p-5 rounded mt-4"
              style={{ height: "max-content" }}
            >
              <h4 className="text-lg font-medium mb-3">Similar Recipes</h4>

              <SimilarRecipesCard recipeDetail={recipeDetail} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeDetail;
