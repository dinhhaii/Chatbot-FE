import React from 'react';

const Search = () => {
  return (
    <div className="search-overlay-menu">
      <span className="search-overlay-close">
        <span className="closebt">
          <i className="ti-close" />
        </span>
      </span>
      <form role="search" id="searchform" method="get">
        <input name="search" type="search" placeholder="Search..." />
        <button type="submit">
          <i className="icon_search" />
        </button>
      </form>
    </div>
  );
};

export default Search;
