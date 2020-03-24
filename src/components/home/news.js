import React from 'react';
import { Link } from 'react-router-dom';

const News = () => {
  return (
    <div className="bg_color_1">
      <div className="container margin_120_95">
        <div className="main_title_2">
          <span>
            <em />
          </span>
          <h2>News and Events</h2>
          <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <Link class="box_news" href="#0">
              <figure>
                <img
                  src="http://via.placeholder.com/500x333/ccc/fff/news_home_1.jpg"
                  alt=""
                />
                <figcaption>
                  <strong>28</strong>
                  Dec
                </figcaption>
              </figure>
              <ul>
                <li>Mark Twain</li>
                <li>20.11.2017</li>
              </ul>
              <h4>Pri oportere scribentur eu</h4>
              <p>
                Cu eum alia elit, usu in eius appareat, deleniti sapientem
                honestatis eos ex. In ius esse ullum vidisse....
              </p>
            </Link>
          </div>
          {/* <!-- /box_news --> */}
          <div className="col-lg-6">
            <Link class="box_news" href="#0">
              <figure>
                <img
                  src="http://via.placeholder.com/500x333/ccc/fff/news_home_2.jpg"
                  alt=""
                />
                <figcaption>
                  <strong>28</strong>
                  Dec
                </figcaption>
              </figure>
              <ul>
                <li>Jhon Doe</li>
                <li>20.11.2017</li>
              </ul>
              <h4>Duo eius postea suscipit ad</h4>
              <p>
                Cu eum alia elit, usu in eius appareat, deleniti sapientem
                honestatis eos ex. In ius esse ullum vidisse....
              </p>
            </Link>
          </div>
          {/* <!-- /box_news --> */}
          <div className="col-lg-6">
            <Link class="box_news" href="#0">
              <figure>
                <img
                  src="http://via.placeholder.com/500x333/ccc/fff/news_home_3.jpg"
                  alt=""
                />
                <figcaption>
                  <strong>28</strong>
                  Dec
                </figcaption>
              </figure>
              <ul>
                <li>Luca Robinson</li>
                <li>20.11.2017</li>
              </ul>
              <h4>Elitr mandamus cu has</h4>
              <p>
                Cu eum alia elit, usu in eius appareat, deleniti sapientem
                honestatis eos ex. In ius esse ullum vidisse....
              </p>
            </Link>
          </div>
          {/* <!-- /box_news --> */}
          <div className="col-lg-6">
            <Link class="box_news" href="#0">
              <figure>
                <img
                  src="http://via.placeholder.com/500x333/ccc/fff/news_home_4.jpg"
                  alt=""
                />
                <figcaption>
                  <strong>28</strong>
                  Dec
                </figcaption>
              </figure>
              <ul>
                <li>Paula Rodrigez</li>
                <li>20.11.2017</li>
              </ul>
              <h4>Id est adhuc ignota delenit</h4>
              <p>
                Cu eum alia elit, usu in eius appareat, deleniti sapientem
                honestatis eos ex. In ius esse ullum vidisse....
              </p>
            </Link>
          </div>
          {/* <!-- /box_news --> */}
        </div>
        {/* <!-- /row --> */}
        <p className="btn_home_align">
          <Link href="blog.html" class="btn_1 rounded">
            View all news
          </Link>
        </p>
      </div>
      {/* <!-- /container --> */}
    </div>
  );
};

export default News;
