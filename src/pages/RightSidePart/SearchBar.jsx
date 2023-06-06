// import React from "react";
import searchBox from "./SearchBar.module.css";
import {BiSearch} from 'react-icons/bi'

export default function SearchBar() {
  return (
    <div className={searchBox.searchContainer}>
      <BiSearch className={searchBox.searchIcon}/>
      <input className={searchBox.input}
      type="search" placeholder="Search Twitter" />
    </div>
  );
}
