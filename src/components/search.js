/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { hideSearchBar } from '../actions/general';

const Search = (props) => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleChange = e => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.length !== 0) {
      props.history.push(`/courses?search=${searchQuery}`);
      props.hideSearchBarAction();
    }
  };

  return (
    <div
      className={`search-overlay-menu ${
        props.generalState.isSearching ? 'open' : ''
      }`}>
      <span className="search-overlay-close">
        <div className="closebt" onClick={props.hideSearchBarAction}>
          <i className="ti-close" />
        </div>
      </span>
      <form role="search" id="searchform" onSubmit={handleSubmit}>
        <input name="search" type="search" onChange={handleChange} placeholder="Search..." />
        <button type="submit">
          <i className="icon_search" />
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    generalState: state.generalState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hideSearchBarAction: bindActionCreators(hideSearchBar, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Search));
