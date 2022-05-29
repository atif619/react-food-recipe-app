import React from "react";

const SearchBox = ({ getSearchVal, search, onSubmit }) => {
  return (
    <>
      <div className="SearchBox">
        <form onSubmit={onSubmit}>
          <div className="inputContainer">
            <input
              className="input"
              type="text"
              placeholder="Search for your recipe"
              onChange={getSearchVal}
              value={search}
            />
            <button type="submit">Search</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchBox;
