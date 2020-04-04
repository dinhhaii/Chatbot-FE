import React from 'react';

const Introduction = () => {
  return (
    <section className="hero_single version_2">
      <div className="wrapper">
        <div className="container">
          <h3>What would you learn?</h3>
          <p className="mt-3 mb-5">
            Study any topic, anytime. Choose from thousands of expert-led
            courses now.
          </p>
          <form style={{ margin: `${0}px ${50}px` }}>
            <div id="custom-search-input">
              <div className="input-group">
                <input
                  style={{ height: `${50}px` }}
                  type="text"
                  className="search-query"
                  placeholder="Search course's name, teacher'name, ..."
                />
                <input
                  style={{ height: `${50}px` }}
                  type="submit"
                  className="btn_search"
                  value="Search"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
