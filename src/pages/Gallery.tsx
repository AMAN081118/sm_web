import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabase"; // Adjust this import to your supabase client path

// --- Data Types ---
interface GalleryItem {
  id: string;
  title: string;
  tagline: string;
  img_url: string;
  category: string;
  grid_class: string;
}

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const [galleryData, setGalleryData] = useState<GalleryItem[]>([]);
  const [categories, setCategories] = useState<string[]>(["All"]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch unique categories on mount
  useEffect(() => {
    const fetchCategories = async () => {
      const { data, error } = await supabase.rpc("get_gallery_categories");
      if (!error && data) {
        setCategories([
          "All",
          ...data.map((d: { category: string }) => d.category),
        ]);
      }
    };
    fetchCategories();
  }, []);

  // Fetch gallery items whenever category or search changes
  useEffect(() => {
    const fetchGallery = async () => {
      setLoading(true);
      const { data, error } = await supabase.rpc("search_gallery", {
        p_category: selectedCategory,
        p_search: searchQuery,
      });

      if (!error && data) {
        setGalleryData(data);
      }
      setLoading(false);
    };

    // Optional: Add a debounce here if you want to wait for the user to stop typing
    const delayDebounce = setTimeout(() => {
      fetchGallery();
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#f8f7f2] font-sans p-6 md:p-12 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl text-center mb-8 font-medium text-gray-900">
          Gallery
        </h1>

        {/* Controls: Filters and Search */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
          <div className="flex flex-wrap justify-center gap-2 bg-white/50 p-1 rounded-full border border-gray-200">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
                  ${
                    selectedCategory === category
                      ? "bg-indigo-500 text-white shadow-sm"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-full py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm transition-shadow"
            />
            <svg
              className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Gallery Grid */}
        {loading ? (
          <div className="text-center py-20 text-gray-500">
            Loading gallery...
          </div>
        ) : galleryData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
            {galleryData.map((item) => (
              <div
                key={item.id}
                className={`group relative overflow-hidden rounded-2xl shadow-sm bg-gray-200 ${item.grid_class}`}
              >
                <img
                  src={item.img_url}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                  <h3 className="text-white font-semibold text-lg drop-shadow-md">
                    {item.title}
                  </h3>
                  <p className="text-gray-200 text-sm mt-1 line-clamp-2 drop-shadow-sm">
                    {item.tagline}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500">
            No images found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
