/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hideSearchBar } from '../../actions/general';

const Search = (props) => {
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
      <form role="search" id="searchform" method="get">
        <input name="search" type="search" placeholder="Search..." />
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

export default connect(mapStateToProps, mapDispatchToProps)(Search);
