"use client";

import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

function Navbar() {
  const [searchInput, setSearchInput] = useState(null);
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e) => {
    e.preventDefault();

    // get searchInput from search field and set search input
    const searchTerm = e.target.value.trim().toLowerCase();
    setSearchInput(searchTerm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // path to search input results
    const newPath = `${pathname}/search-results/${searchInput || "search"}`;

    // make sure base and new path are different
    // send to searchBarResults page
    if (newPath !== pathname) {
      router.push(`/search-results/${searchInput}`);
    }
  };

  // make search input visible and invisible when clicked
  const handleClick = () => {
    setIsSearchBarVisible((current) => !current);
  };

  return (
    <header>
      <div className="nav-group">
        <div className="logo">
          <a href="/">
            <img src={"/movie-logo-white.png"} alt="movie site logo" />
          </a>
        </div>
        <nav className="nav">
          <a href="/popular-movies">Popular</a>
          {/* <a href="/tv-series">TV-Series</a> */}
          <a href="/top-rated-movies">Top Rated</a>
          <a href="/upcoming-movies">Upcoming</a>
        </nav>
      </div>
      <div className="search-bar-group">
        <div className="search-bar">
          <form className="search-form" onSubmit={handleSubmit}>
            <input
              className={`search-bar-input${
                isSearchBarVisible ? " search-visible" : " search-exit"
              }`}
              type="search"
              onChange={handleChange}
              placeholder="Search..."
            />
            <button
              className="search-bar-button"
              type="button"
              onClick={handleClick}
            >
              <img src={"/search-icon.png"} alt="magnifying glass" />
            </button>
          </form>
        </div>
      </div>
      <div className="menu-wrapper">
        <input type="checkbox" className="checkbox-toggle" />
        <div className="hamburger">
          <div></div>
        </div>
        <nav className="menu">
          <div className="menu1">
            <div className="menu2">
              <ul>
                <li>
                  <a href="/popular-movies">Popular</a>
                </li>
                {/* <li><a href="/tv-series">TV-Series</a></li> */}
                <li>
                  <a href="/top-rated-movies">Top Rated</a>
                </li>
                <li>
                  <a href="/upcoming-movies">Upcoming</a>
                </li>
                <li>
                  <form className="search-form" onSubmit={handleSubmit}>
                    <input
                      className={`search-bar-input${
                        isSearchBarVisible ? " search-visible" : " search-exit"
                      }`}
                      type="search"
                      onChange={handleChange}
                      placeholder="Search..."
                    />
                    <button
                      className="search-menu-button"
                      type="button"
                      onClick={handleClick}
                    >
                      Search
                    </button>
                  </form>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
