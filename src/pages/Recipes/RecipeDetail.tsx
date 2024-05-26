import { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetSingleRecipeQuery } from "../../redux/api/recipeApi";
import ReactPlayer from "react-player";
import { FaHeart } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const RecipeDetail = () => {
  const { id } = useParams();
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const { data: recipeDetail } = useGetSingleRecipeQuery(id);

  console.log(recipeDetail?.data);

  return (
    <>
      <div className="bg-white mt-20" key={recipeDetail?.data?._id}>
        <div className="w-[1200px] mx-auto">
          {/* <div className="pt-[6rem]">
            <Breadcrumb paths={paths} />
          </div> */}
          <div className="flex justify-between gap-5">
            {/* <ListingSlider image_url={recipeDetail?.data?.image} /> */}
            <div style={{ width: "56%" }} className="mt-4">
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
                      <div className="w-8 h-8 border rounded-full border-gray-400 flex justify-center items-center">
                        <FaHeart className="text-sm text-gray-700" />
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

          <div className="">
            {/* More details about this user */}
            <div
              className="border p-5 rounded mt-5 flex-1"
              style={{ height: "max-content" }}
            >
              <h4 className="text-lg font-medium mb-3">Similar Recipes</h4>

              {/* <OldListingCard recipeDetail={recipeDetail} /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeDetail;
