/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useState } from "react";
import { getUserInfo } from "../../services/auth.service";
import { useAddRecipeMutation } from "../../redux/api/recipeApi";
import toast from "react-hot-toast";

const AddRecipes = () => {
  const [recipeName, setRecipeName] = useState("");
  const [image, setImage] = useState(null);
  const [recipeDetails, setRecipeDetails] = useState("");
  const [youtubeCode, setYoutubeCode] = useState("");
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState("");

  const userInfo = getUserInfo() as any;

  const [addRecipe] = useAddRecipeMutation();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const newRecipe = {
      name: recipeName,
      image,
      details: recipeDetails,
      videoCode: youtubeCode,
      country,
      category,
      creatorEmail: userInfo.email,
    };
    console.log("Recipe submitted:", newRecipe);

    const res = await addRecipe(newRecipe);

    if (res.error) {
      toast.error("Error adding recipe, Try again!");
    } else {
      toast.success("Recipe added successfully");
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const formData = new FormData();
    if (file) {
      formData.append("image", file);
    }

    try {
      const response = await axios.post(
        "https://api.imgbb.com/1/upload?key=f9bb5e873b62f12e27ad3be978418631",
        formData
      );
      setImage(response.data.data.url);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-20">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Recipe Name</label>
          <input
            type="text"
            value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Recipe Image</label>
          <input
            type="file"
            onChange={handleImageUpload}
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Recipe Details</label>
          <textarea
            value={recipeDetails}
            onChange={(e) => setRecipeDetails(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">
            Embedded YouTube Video Code
          </label>
          <input
            type="text"
            value={youtubeCode}
            onChange={(e) => setYoutubeCode(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="e.g., https://www.youtube.com/embed/..."
          />
        </div>
        <div className="flex justify-between w-[100%] gap-2">
          <div className="mb-4 w-[40%]">
            <label className="block text-gray-700">Country</label>
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4 w-[40%]">
            <label className="block text-gray-700">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            >
              <option value="">Select a category</option>
              <option value="Main Course">Main Course</option>
              <option value="Appetizer">Appetizer</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Soup">Soup</option>
              <option value="Dessert">Dessert</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipes;
