import { useState, useMemo } from "react";
import {
  Search,
  Grid,
  List,
  X,
  ChevronRight,
  Filter,
  Star,
  ShoppingCart,
} from "lucide-react";
import Feature1 from "../../../assets/kitchenInterior.jpg";
import Feature2 from "../../../assets/tappingscrew.jpg";
import Feature3 from "../../../assets/wwallangle.jpg";
import Feature4 from "../../../assets/drywallscrews.jpg";
import Feature5 from "../../../assets/lighting1.jpg";
import Feature6 from "../../../assets/galvanisedprofiles.jpg";
import Feature7 from "../../../assets/outdoorinetrior.jpg";
import Feature8 from "../../../assets/popbucket.jpg";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const ProductCatalog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortType, setSortType] = useState("priceAsc");
  const [priceRange, setPriceRange] = useState(10000);
  const [viewMode, setViewMode] = useState("grid");
  const [showFilters, setShowFilters] = useState(false);

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
        rating: 4.8,
        storefrontUrl:
          "https://paystack.com/buy/pop-cement-plaster-of-paris-cement-hvrybw",
      },
      {
        id: 2,
        title: "Room Lighting Solutions",
        description:
          "Professional installation of stylish and energy-efficient lighting for interiors.",
        imageUrl: Feature5,
        price: "2500",
        category: "Lighting",
        rating: 4.6,
        storefrontUrl:
          "https://paystack.com/buy/room-lighting-solutions-oquhor",
      },
      {
        id: 3,
        title: "Tapping Screws",
        description:
          "Durable tapping screws for securing metal and wood surfaces with precision.",
        imageUrl: Feature2,
        price: "150",
        category: "Hardware",
        rating: 4.3,
        storefrontUrl:
          "https://paystack.com/buy/hardware-installation-services-hyylda",
      },
      {
        id: 4,
        title: "Drywall Screws",
        description:
          "Reliable drywall screws for securing plasterboard installations with ease.",
        imageUrl: Feature4,
        price: "200",
        category: "Hardware",
        rating: 4.7,
        storefrontUrl:
          "https://paystack.com/buy/hardware-installation-services-hyylda",
      },
      {
        id: 5,
        title: "Wall Angle Brackets",
        description:
          "Premium wall angle brackets for strong and lasting interior structures.",
        imageUrl: Feature3,
        price: "1200",
        category: "Hardware",
        rating: 4.5,
        storefrontUrl:
          "https://paystack.com/buy/hardware-installation-services-hyylda",
      },
      {
        id: 6,
        title: "Galvanized Profiles",
        description:
          "Corrosion-resistant galvanized profiles for durable ceiling and wall support.",
        imageUrl: Feature6,
        price: "3000",
        category: "Profiles",
        rating: 4.9,
        storefrontUrl:
          "https://paystack.com/buy/hardware-installation-services-hyylda",
      },
      {
        id: 7,
        title: "Hardware Installation Services",
        description:
          "Expert installation of various building hardware for residential and commercial spaces.",
        imageUrl: Feature7,
        price: "7000",
        category: "Services",
        rating: 5.0,
        storefrontUrl:
          "https://paystack.com/buy/hardware-installation-services-hyylda",
      },
      {
        id: 8,
        title: "Repairs & Maintenance",
        description:
          "Professional repair and maintenance services for ceilings, walls, and lighting fixtures.",
        imageUrl: Feature8,
        price: "Free",
        category: "Services",
        rating: 4.4,
        storefrontUrl: "https://paystack.com/buy/repairs--maintenance-pgkwch",
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
          return a.price === "Free"
            ? -1
            : b.price === "Free"
            ? 1
            : a.price - b.price;
        case "priceDesc":
          return a.price === "Free"
            ? 1
            : b.price === "Free"
            ? -1
            : b.price - a.price;
        case "nameAsc":
          return a.title.localeCompare(b.title);
        case "ratingDesc":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });
  }, [allProducts, selectedCategory, sortType, priceRange, searchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(searchInput);
  };

  // Function to render stars based on rating
  const renderRating = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          size={16}
          className={`${
            i < Math.floor(rating)
              ? "text-yellow-400 fill-yellow-400"
              : i < rating
              ? "text-yellow-400 fill-yellow-400 opacity-50"
              : "text-gray-300"
          }`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-20 pb-12">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Our Products & Services
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Discover our comprehensive range of quality construction materials
            and professional services for your next project.
          </p>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="md:hidden mb-6">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="w-full flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-slate-100"
          >
            <div className="flex items-center">
              <Filter className="h-5 w-5 mr-2 text-blue-600" />
              <span className="font-medium text-slate-800">
                Filters & Search
              </span>
            </div>
            <ChevronRight
              className={`h-5 w-5 text-slate-400 transition-transform ${
                showFilters ? "rotate-90" : ""
              }`}
            />
          </button>

          {showFilters && (
            <div className="mt-4 bg-white p-6 rounded-xl shadow-lg border border-slate-100">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative mb-6">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="Search product..."
                      className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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
                    className="px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center shadow-sm"
                  >
                    <Search className="h-5 w-5" />
                  </button>
                </div>
              </form>

              {/* Mobile Categories */}
              <div className="mb-8">
                <h3 className="font-semibold mb-4 text-slate-800">
                  Categories
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`py-2 px-4 rounded-full text-sm transition-colors ${
                        selectedCategory === category.name
                          ? "bg-blue-600 text-white"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      {category.name} ({category.count})
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Price Range */}
              <div>
                <h3 className="font-semibold mb-4 text-slate-800">
                  Price Range
                </h3>
                <input
                  type="range"
                  min="0"
                  max="8000"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full accent-blue-600"
                />
                <div className="flex justify-between text-sm text-slate-600 mt-3">
                  <span>GH₵0</span>
                  <span>GH₵{priceRange.toLocaleString()}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex gap-8 relative">
          {/* Desktop Sidebar */}
          <div className="hidden md:block w-80 flex-shrink-0">
            <div className="sticky top-24 w-80 bg-white p-6 rounded-xl shadow-lg border border-slate-100 overflow-y-auto max-h-[calc(100vh-8rem)]">
              <h2 className="text-xl font-semibold mb-6 text-slate-800">
                FILTER BY
              </h2>

              {/* Desktop Search */}
              <form onSubmit={handleSearch} className="relative mb-6">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="Search product..."
                      className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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
                    className="px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center shadow-sm"
                  >
                    <Search className="h-5 w-5" />
                  </button>
                </div>
              </form>

              {/* Desktop Categories */}
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
                            ? "bg-blue-50 text-blue-700 font-medium"
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

              {/* Desktop Price Range */}
              <div className="mb-6">
                <h3 className="font-semibold mb-4 text-slate-800">
                  Price Range
                </h3>
                <input
                  type="range"
                  min="0"
                  max="8000"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full accent-blue-600"
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
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6 bg-white p-4 rounded-lg shadow-sm">
              <div className="text-slate-600 font-medium">
                {filteredAndSortedProducts.length} Products found
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-slate-100 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === "grid"
                        ? "bg-white text-blue-600 shadow-sm"
                        : "text-slate-400 hover:text-slate-600"
                    }`}
                  >
                    <Grid size={20} />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === "list"
                        ? "bg-white text-blue-600 shadow-sm"
                        : "text-slate-400 hover:text-slate-600"
                    }`}
                  >
                    <List size={20} />
                  </button>
                </div>
                <select
                  value={sortType}
                  onChange={(e) => setSortType(e.target.value)}
                  className="p-2 border border-slate-200 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="priceAsc">Price (Lowest)</option>
                  <option value="priceDesc">Price (Highest)</option>
                  <option value="nameAsc">Name (A-Z)</option>
                  <option value="ratingDesc">Top Rated</option>
                </select>
              </div>
            </div>

            {/* Product Grid/List */}
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
                  className={`group bg-white rounded-xl shadow-sm overflow-hidden border border-slate-100 transition-all hover:shadow-md ${
                    viewMode === "list" ? "flex" : ""
                  }`}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={product.imageUrl}
                      alt={product.title}
                      className={`object-cover transition-transform group-hover:scale-105 ${
                        viewMode === "list" ? "w-48 h-full" : "w-full h-56"
                      }`}
                    />
                    <div className="absolute top-3 right-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          product.category === "Services"
                            ? "bg-purple-100 text-purple-700"
                            : product.category === "Hardware"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {product.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center mb-2">
                      <div className="flex mr-2">
                        {renderRating(product.rating)}
                      </div>
                      <span className="text-sm text-slate-500">
                        {product.rating}
                      </span>
                    </div>

                    <h2 className="text-xl font-semibold mb-2 text-slate-800 leading-tight">
                      {product.title}
                    </h2>

                    <p className="text-slate-600 text-sm mb-4 line-clamp-2 flex-grow">
                      {product.description}
                    </p>

                    <div className="flex justify-between items-center">
                      <div className="flex flex-col">
                        <span className="text-xs text-slate-500 uppercase">
                          Price
                        </span>
                        <span className="text-xl font-bold text-blue-600">
                          {product.price === "Free"
                            ? "Free"
                            : `GH₵${Number(product.price).toLocaleString()}`}
                        </span>
                      </div>

                      <Link
                        to={product.storefrontUrl}
                        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all flex items-center gap-2 shadow-sm"
                      >
                        <ShoppingCart size={16} />
                        Buy Now
                        <ChevronRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredAndSortedProducts.length === 0 && (
              <div className="text-center py-16 bg-white rounded-xl shadow-sm">
                <div className="mx-auto w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                  <Search className="h-8 w-8 text-slate-400" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  No products found
                </h3>
                <p className="text-slate-600 mb-4">
                  Try adjusting your search or filter criteria
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    setSearchQuery("");
                    setSearchInput("");
                    setPriceRange(8000);
                  }}
                  className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
                >
                  Reset filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCatalog;
