/* eslint-disable @typescript-eslint/no-explicit-any */
const FilterSidebar = ({
  filters,
  setFilters,
}: {
  filters: any;
  setFilters: any;
}) => {
  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFilters((prevFilters: any) => ({ ...prevFilters, [name]: value }));
  };
  return (
    <div className="w-[30%] h-screen sticky top-0 p-4 bg-gray-100">
      <h2 className="text-xl font-bold mb-4">Filter Options</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Search</label>
        <input
          type="text"
          name="search"
          value={filters.search}
          onChange={handleInputChange}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Category</label>
        <select
          name="category"
          value={filters.category}
          onChange={handleInputChange}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"
        >
          <option value="">All</option>
          <option value="Main Course">Main Course</option>
          <option value="Appetizer">Appetizer</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Soup">Soup</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Country</label>
        <select
          name="country"
          value={filters.country}
          onChange={handleInputChange}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"
        >
          <option value="">All</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="UK">UK</option>
          <option value="Turky">Turky</option>
          <option value="India">India</option>
          <option value="Thailand">Thailand</option>
          <option value="Hungary">Hungary</option>
          <option value="Lebanon">Lebanon</option>
          <option value="China">China</option>
          <option value="Morocco">Morocco</option>
          <option value="France">France</option>
          <option value="Spain">Spain</option>
          <option value="Japan">Japan</option>
          <option value="Italy">Italy</option>
          <option value="Mexico">Mexico</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSidebar;
