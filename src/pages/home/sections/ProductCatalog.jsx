import React, { useState, useMemo } from "react";
import { Search, Grid, List, X } from "lucide-react";
import Feature1 from "../../../assets/about2.jpg";
import Feature2 from "../../../assets/feat1.jpg";
import Feature3 from "../../../assets/product1.jpg";
import Feature4 from "../../../assets/feat2.jpg";
import Feature5 from "../../../assets/product3.jpg";
import Feature6 from "../../../assets/feat3.jpg";
import Feature7 from "../../../assets/product6.jpg";
import Feature8 from "../../../assets/feat4.jpg";

const ProductCatalog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortType, setSortType] = useState("priceAsc");
  const [priceRange, setPriceRange] = useState(6000);
  const [viewMode, setViewMode] = useState("grid");

  const allProducts = useMemo(
    () => [
      {
        id: 1,
        title: "Fowohodie Conversion Kit",
        description:
          "A locally designed mobility solution to help individuals with physical disabilities gain independence. It can be easily installed on existing wheelchairs.",
        imageUrl: Feature1,
        price: "3500",
        category: "Mobility",
      },
      {
        id: 2,
        title: "Accessible Design Workshops",
        description:
          "Workshops aimed at training young engineers to design accessible technologies that improve the lives of people with disabilities.",
        imageUrl: Feature2,
        price: "1800",
        category: "Education",
      },
      {
        id: 3,
        title: "Smart Mobility Device",
        description:
          "A wearable, AI-powered device to assist with mobility in urban spaces. It offers real-time guidance and obstacle detection.",
        imageUrl: Feature3,
        price: "5900",
        category: "Technology",
      },
      {
        id: 4,
        title: "Community Support Groups",
        description:
          "Local communities formed to support individuals with disabilities by advocating for accessible public spaces and providing peer support.",
        imageUrl: Feature4,
        price: "Free",
        category: "Community",
      },
      {
        id: 5,
        title: "Fowohodie Conversion Kit",
        description:
          "A locally designed mobility solution to help individuals with physical disabilities gain independence. It can be easily installed on existing wheelchairs.",
        imageUrl: Feature5,
        price: "3500",
        category: "Mobility",
      },
      {
        id: 6,
        title: "Accessible Design Workshops",
        description:
          "Workshops aimed at training young engineers to design accessible technologies that improve the lives of people with disabilities.",
        imageUrl: Feature6,
        price: "1800",
        category: "Education",
      },
      {
        id: 7,
        title: "Smart Mobility Device",
        description:
          "A wearable, AI-powered device to assist with mobility in urban spaces. It offers real-time guidance and obstacle detection.",
        imageUrl: Feature7,
        price: "5900",
        category: "Technology",
      },
      {
        id: 8,
        title: "Community Support Groups",
        description:
          "Local communities formed to support individuals with disabilities by advocating for accessible public spaces and providing peer support.",
        imageUrl: Feature8,
        price: "Free",
        category: "Community",
      },
    ],
    []
  );

  const categories = useMemo(
    () => [
      { name: "All", count: allProducts.length },
      ...Object.entries(
        allProducts.reduce((acc, product) => {
          acc[product.category] = (acc[product.category] || 0) + 1;
          return acc;
        }, {})
      ).map(([name, count]) => ({ name, count })),
    ],
    [allProducts]
  );

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = allProducts.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      const matchesPrice = product.price <= priceRange;
      const matchesSearch =
        searchQuery === "" ||
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesPrice && matchesSearch;
    });

    return filtered.sort((a, b) => {
      switch (sortType) {
        case "priceAsc":
          return a.price - b.price;
        case "priceDesc":
          return b.price - a.price;
        case "nameAsc":
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });
  }, [allProducts, selectedCategory, sortType, priceRange, searchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(searchInput);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <div className="hidden md:block w-74 flex-shrink-0">
            <div className="absolute w-74 bg-white p-6 rounded-lg shadow-sm overflow-y-auto max-h-[calc(100vh-6rem)]">
              <h2 className="text-xl font-semibold mb-6">FILTER BY</h2>

              {/* Search with Form */}
              <form onSubmit={handleSearch} className="relative mb-6">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="Search product..."
                      className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    {searchInput && (
                      <button
                        type="button"
                        onClick={() => {
                          setSearchInput("");
                          setSearchQuery("");
                        }}
                        className="absolute right-3 top-2.5"
                      >
                        <X className="h-5 w-5 text-gray-400" />
                      </button>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center"
                  >
                    <Search className="h-5 w-5" />
                  </button>
                </div>
              </form>

              {/* Categories */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.name}>
                      <button
                        onClick={() => setSelectedCategory(category.name)}
                        className={`w-full text-left flex justify-between items-center py-1 ${
                          selectedCategory === category.name
                            ? "text-indigo-600 font-medium"
                            : "text-gray-600"
                        }`}
                      >
                        <span>{category.name}</span>
                        <span className="text-sm text-gray-400">
                          ({category.count})
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Price Range</h3>
                <input
                  type="range"
                  min="0"
                  max="6000"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>GH₵0</span>
                  <span>GH₵{priceRange.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 md:ml-4">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <div className="text-gray-600">
                {filteredAndSortedProducts.length} Products found
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 ${
                      viewMode === "grid" ? "text-indigo-600" : "text-gray-400"
                    }`}
                  >
                    <Grid size={20} />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 ${
                      viewMode === "list" ? "text-indigo-600" : "text-gray-400"
                    }`}
                  >
                    <List size={20} />
                  </button>
                </div>
                <select
                  value={sortType}
                  onChange={(e) => setSortType(e.target.value)}
                  className="p-2 border rounded-lg bg-white"
                >
                  <option value="priceAsc">Price (Lowest)</option>
                  <option value="priceDesc">Price (Highest)</option>
                  <option value="nameAsc">Name (A-Z)</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            <div
              className={`grid ${
                viewMode === "grid"
                  ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  : "grid-cols-1 gap-4"
              }`}
            >
              {filteredAndSortedProducts.map((product) => (
                <div
                  key={product.id}
                  className={`bg-white rounded-lg shadow-sm overflow-hidden ${
                    viewMode === "list" ? "flex" : ""
                  }`}
                >
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className={`object-cover ${
                      viewMode === "list" ? "w-48 h-48" : "w-full h-48"
                    }`}
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">
                      {product.title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-indigo-600">
                        {product.price === 0
                          ? "Free"
                          : `GH₵${product.price.toLocaleString()}`}
                      </span>
                      <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                        {product.price === 0 ? "Get Started" : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCatalog;
