import React, { useState, useEffect, useRef } from "react";
import RecentSearch from "@Components/NavigationBar/RecentSearch";
import Recommended from "@Components/NavigationBar/Recommended";

function SearchBar() {
  const SearchFormRef = useRef();

  const [showSearch, setShowSearch] = useState(false);
  const [showRecentSearch, setShowRecentSearch] = useState(false);
  const [showSearchResult, setShowSearchResult] = useState(false);

  const handleChange = (e) => {
    setShowRecentSearch(false);
    setShowSearchResult(true);
    // if(e.target.value === "")
    // {

    // }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        SearchFormRef.current &&
        !SearchFormRef.current.contains(event.target)
      ) {
        setShowSearch(false);
        setShowSearchResult(false);
        document.getElementsByTagName('main')[0].className = '';
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [SearchFormRef]);

  return (
    <div className="xl:w-[100%] relative" ref={SearchFormRef}>
      <form>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative max-w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            onChange={(e) => {
              handleChange(e);
            }}
            onFocus={() => {
              setShowRecentSearch(true);
              setShowSearch(true);
              document.getElementsByTagName('main')[0].className = 'blur-sm';
            }}
            className="block w-full px-4 py-3 ps-10 text-sm text-black border border-yellow-Tint-7 focus:border-none rounded-t-lg bg-white focus:outline-none"
            placeholder="Search Mockups, Logos..."
            required
          />
        </div>

        {showSearch && (
          <>
            {showRecentSearch && (
              <div
                className="max-h-screen py-6 px-6 w-full bg-white absolute"
                style={{ overflowY: "auto" }}
              >
                <RecentSearch />
                <Recommended />
              </div>
            )}
            {showSearchResult && (
              <div
                className="max-h-72 py-6 px-6 w-full bg-white absolute"
                style={{ overflowY: "hidden" }}
              >
                <p className="text-base py-1">Philips</p>
                <p className="text-base py-1">Philips</p>
                <p className="text-base py-1">Philips</p>
                <p className="text-base py-1">Philips</p>
                <p className="text-base py-1">Philips</p>
                <p className="text-base py-1">Philips</p>
                <p className="text-base py-1">Philips</p>
                <p className="text-base py-1">Philips</p>
                <p className="text-base py-1">Philips</p>
                <p className="text-base py-1">Philips</p>
                <p className="text-base py-1">Philips</p>
                <p>Philips</p>
                <p>Philips</p>
                <p>Philips</p>
                <p>Philips</p>
                <p>Philips</p>
                <p>Philips</p>
                <p>Philips</p>
                <p>Philips</p>
                <p>Philips</p>
                <p>Philips</p>
              </div>
            )}
          </>
        )}
      </form>
    </div>
  );
}

export default SearchBar;
