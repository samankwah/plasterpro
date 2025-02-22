import React, { useState, useMemo } from "react";
import { Search, Grid, List, X } from "lucide-react";
import Feature1 from "../../../assets/kitchenInterior.jpg";
import Feature2 from "../../../assets/tappingscrew.jpg";
import Feature3 from "../../../assets/wwallangle.jpg";
import Feature4 from "../../../assets/drywallscrews.jpg";
import Feature5 from "../../../assets/lighting1.jpg";
import Feature6 from "../../../assets/galvanisedprofiles.jpg";
import Feature7 from "../../../assets/outdoorinetrior.jpg";
import Feature8 from "../../../assets/popbucket.jpg";

const ProductCatalog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortType, setSortType] = useState("priceAsc");
  const [priceRange, setPriceRange] = useState(10000);
  const [viewMode, setViewMode] = useState("grid");

  const allProducts = useMemo(
    () => [
      {
        id: 1,
        title: "POP Ceiling Installation",
        description:
          "High-quality Plaster of Paris (POP) ceiling designs for modern homes and offices.",
        imageUrl: Feature1,
        price: "5000",
        category: "Ceilings",
      },
      {
        id: 2,
        title: "Room Lighting Solutions",
        description:
          "Professional installation of stylish and energy-efficient lighting for interiors.",
        imageUrl: Feature5,
        price: "2500",
        category: "Lighting",
      },
      {
        id: 3,
        title: "Tapping Screws",
        description:
          "Durable tapping screws for securing metal and wood surfaces with precision.",
        imageUrl: Feature2,
        price: "150",
        category: "Hardware",
      },
      {
        id: 4,
        title: "Drywall Screws",
        description:
          "Reliable drywall screws for securing plasterboard installations with ease.",
        imageUrl: Feature4,
        price: "200",
        category: "Hardware",
      },
      {
        id: 5,
        title: "Wall Angle Brackets",
        description:
          "Premium wall angle brackets for strong and lasting interior structures.",
        imageUrl: Feature3,
        price: "1200",
        category: "Hardware",
      },
      {
        id: 6,
        title: "Galvanized Profiles",
        description:
          "Corrosion-resistant galvanized profiles for durable ceiling and wall support.",
        imageUrl: Feature6,
        price: "3000",
        category: "Profiles",
      },
      {
        id: 7,
        title: "Hardware Installation Services",
        description:
          "Expert installation of various building hardware for residential and commercial spaces.",
        imageUrl: Feature7,
        price: "7000",
        category: "Services",
      },
      {
        id: 8,
        title: "Repairs & Maintenance",
        description:
          "Professional repair and maintenance services for ceilings, walls, and lighting fixtures.",
        imageUrl: Feature8,
        price: "Free",
        category: "Services",
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
      const matchesPrice =
        product.price === "Free" || Number(product.price) <= priceRange;
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
    <div className="min-h-screen bg-slate-50 pt-20 pb-12">
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8 relative">
          {/* Sticky Sidebar */}
          <div className="hidden md:block w-80 flex-shrink-0">
            <div className="sticky top-24 w-80 bg-white p-6 rounded-xl shadow-lg border border-slate-100 overflow-y-auto max-h-[calc(100vh-8rem)]">
              <h2 className="text-xl font-semibold mb-6 text-slate-800">
                FILTER BY
              </h2>

              {/* Search with Form */}
              <form onSubmit={handleSearch} className="relative mb-6">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="Search product..."
                      className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <Search className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                    {searchInput && (
                      <button
                        type="button"
                        onClick={() => {
                          setSearchInput("");
                          setSearchQuery("");
                        }}
                        className="absolute right-3 top-3"
                      >
                        <X className="h-5 w-5 text-slate-400 hover:text-slate-600" />
                      </button>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center shadow-sm"
                  >
                    <Search className="h-5 w-5" />
                  </button>
                </div>
              </form>

              {/* Categories */}
              <div className="mb-8">
                <h3 className="font-semibold mb-4 text-slate-800">
                  Categories
                </h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.name}>
                      <button
                        onClick={() => setSelectedCategory(category.name)}
                        className={`w-full text-left flex justify-between items-center py-2 px-3 rounded-lg transition-colors ${
                          selectedCategory === category.name
                            ? "bg-emerald-50 text-emerald-700 font-medium"
                            : "text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        <span>{category.name}</span>
                        <span className="text-sm text-slate-400">
                          ({category.count})
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-semibold mb-4 text-slate-800">
                  Price Range
                </h3>
                <input
                  type="range"
                  min="0"
                  max="6000"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full accent-emerald-600"
                />
                <div className="flex justify-between text-sm text-slate-600 mt-3">
                  <span>GH₵0</span>
                  <span>GH₵{priceRange.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 md:ml-4">
            {/* Header */}
            <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-lg shadow-sm">
              <div className="text-slate-600 font-medium">
                {filteredAndSortedProducts.length} Products found
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-slate-100 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === "grid"
                        ? "bg-white text-emerald-600 shadow-sm"
                        : "text-slate-400 hover:text-slate-600"
                    }`}
                  >
                    <Grid size={20} />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === "list"
                        ? "bg-white text-emerald-600 shadow-sm"
                        : "text-slate-400 hover:text-slate-600"
                    }`}
                  >
                    <List size={20} />
                  </button>
                </div>
                <select
                  value={sortType}
                  onChange={(e) => setSortType(e.target.value)}
                  className="p-2 border border-slate-200 rounded-lg bg-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
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
                  className={`bg-white rounded-xl shadow-sm overflow-hidden border border-slate-100 transition-transform hover:scale-[1.02] ${
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
                  <div className="p-5">
                    <h2 className="text-xl font-semibold mb-2 text-slate-800">
                      {product.title}
                    </h2>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-emerald-600">
                        {product.price === "Free"
                          ? "Free"
                          : `GH₵${Number(product.price).toLocaleString()}`}
                      </span>
                      <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all shadow-sm hover:shadow-md">
                        {product.price === "Free"
                          ? "Get Started"
                          : "Add to Cart"}
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
