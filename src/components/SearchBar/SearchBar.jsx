import React from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.scss";

export const SearchBar = ({ handleForm, search, handleChange }) => {
  return (
    <form className="searchBar" onSubmit={handleForm}>
      <input
        type="text"
        placeholder="Enter name user..."
        value={search}
        onChange={handleChange}
      />
      <button>
        <FaSearch />
      </button>
    </form>
  );
};
