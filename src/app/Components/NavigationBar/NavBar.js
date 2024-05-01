"use client";
import React, { useState } from "react";
import { usePathname } from 'next/navigation'

import LogoLink from "@Components/NavigationBar/LogoLink";
import DesktopNavLinks from "@Components/NavigationBar/DesktopNavLinks";
import MobileMenuButton from "@Components/NavigationBar/MobileMenuButton";
import MobileMenuSearch from "@Components/NavigationBar/MobileMenuSearch";
import MobileDrawer from "@Components/NavigationBar/MobileDrawer";
import SearchBar from "@Components/NavigationBar/SearchBar";
import HorizontalTextScroller from "@Components/HorizontalScroll/HTextScroller";

import {
  loginUserOption,
  moreOptions,
  categoriesNameData,
} from "@Data/NavbarData";

import styles from "@app/(shopping)/HomePageStyles.module.scss";

function NavBar({ isNavigationShow = true }) {
  const pathname = usePathname()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(true);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  console.log("pathname",pathname)
  return (
    <nav className={styles.navigation_bar}>
      <div className="hidden relative py-4 md:flex flex-row items-center px-10 justify-between ">
        <LogoLink />
        {isNavigationShow && (
          <div className="flex justify-end items-center w-[100%] space-x-5" >
            <div className="xl:hidden">
              {isSearchOpen ? (
                <MobileMenuSearch onClick={handleSearchToggle} />
              ) : (
                <MobileMenuSearch
                  icon={"search"}
                  onClick={handleSearchToggle}
                />
              )}
            </div>
            <div className="hidden xl:block w-[50%]">
              <SearchBar />
            </div>
            <DesktopNavLinks
              loginUserOption={loginUserOption}
              moreOptions={moreOptions}
            />
          </div>
        )}
      </div>

      <div
        className={`md:hidden relative flex flex-row items-center justify-between py-2 px-5 `}
      >
        <LogoLink />
        <div>
          {isSearchOpen ? (
            <MobileMenuSearch onClick={handleSearchToggle} />
          ) : (
            <MobileMenuSearch icon={"search"} onClick={handleSearchToggle} />
          )}
          <MobileMenuButton onClick={handleDrawerToggle} />
        </div>
        <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} />
      </div>

      {isSearchOpen && (
        <div className="p-2 xl:hidden">
          <SearchBar />
        </div>
      )}

      {isNavigationShow && pathname !="/cart" && (
        <HorizontalTextScroller
          data={categoriesNameData}
          classes="justify-between"
        />
      )}
    </nav>
  );
}

export default NavBar;
