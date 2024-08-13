
import React from 'react';
// import { FaSearch } from "react-icons/fa";

const SearchBox = ({ searchValue, setSearchValue }) => {
  return (
    <div className="searchBox">
      <input
        className="form-control"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder="Type to search..."
      />
      {/* <FaSearch /> */}
    </div>
  );
};

export default SearchBox;