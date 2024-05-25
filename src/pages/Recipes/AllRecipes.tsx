import { useState } from "react";
import FilterSidebar from "../../components/ui/FilterSidebar";
import RecipesList from "../../components/ui/RecipesList";

const AllRecipes = () => {
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    country: "",
  });
  return (
    <div className="flex mt-16 relative w-[1200px] m-auto gap-5">
      <FilterSidebar filters={filters} setFilters={setFilters} />
      <RecipesList filters={filters} />
    </div>
  );
};

export default AllRecipes;
