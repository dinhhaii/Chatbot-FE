import React from 'react';
import { Link } from 'react-router-dom';

const LecturerCourseBestSeller = () => {
  return (
    <div className="col-xl-12 col-lg-12 order-lg-1 order-xl-1">
      <div className="kt-portlet kt-portlet--height-fluid">
        <div className="kt-portlet__head">
          <div className="kt-portlet__head-label">
            <h3 className="kt-portlet__head-title">Best Sellers</h3>
          </div>
          <div className="kt-portlet__head-toolbar">
            <ul
              className="nav nav-pills nav-pills-sm nav-pills-label nav-pills-bold"
              role="tablist">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  data-toggle="tab"
                  href="#kt_widget5_tab1_content"
                  role="tab">
                  Latest
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  data-toggle="tab"
                  href="#kt_widget5_tab2_content"
                  role="tab">
                  Month
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  data-toggle="tab"
                  href="#kt_widget5_tab3_content"
                  role="tab">
                  All time
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="kt-portlet__body">
          <div className="tab-content">
            <div
              className="tab-pane active"
              id="kt_widget5_tab1_content"
              aria-expanded="true">
              <div className="kt-widget5">
                <div className="kt-widget5__item">
                  <div className="kt-widget5__content">
                    <div className="kt-widget5__pic">
                      <img
                        className="kt-widget7__img"
                        src="assets/media/products/product27.jpg"
                        alt=""
                      />
                    </div>
                    <div className="kt-widget5__section">
                      <Link to="/" className="kt-widget5__title">
                        Great Logo Designn
                      </Link>
                      <p className="kt-widget5__desc">Metronic admin themes.</p>
                      <div className="kt-widget5__info">
                        <span>Author:</span>
                        <span className="kt-font-info">Keenthemes</span>
                        <span>Released:</span>
                        <span className="kt-font-info">23.08.17</span>
                      </div>
                    </div>
                  </div>
                  <div className="kt-widget5__content">
                    <div className="kt-widget5__stats">
                      <span className="kt-widget5__number">19,200</span>
                      <span className="kt-widget5__sales">sales</span>
                    </div>
                    <div className="kt-widget5__stats">
                      <span className="kt-widget5__number">1046</span>
                      <span className="kt-widget5__votes">votes</span>
                    </div>
                  </div>
                </div>
                <div className="kt-widget5__item">
                  <div className="kt-widget5__content">
                    <div className="kt-widget5__pic">
                      <img
                        className="kt-widget7__img"
                        src="assets/media/products/product22.jpg"
                        alt=""
                      />
                    </div>
                    <div className="kt-widget5__section">
                      <Link to="/" className="kt-widget5__title">
                        Branding Mockup
                      </Link>
                      <p className="kt-widget5__desc">
                        Metronic bootstrap themes.
                      </p>
                      <div className="kt-widget5__info">
                        <span>Author:</span>
                        <span className="kt-font-info">Fly themes</span>
                        <span>Released:</span>
                        <span className="kt-font-info">23.08.17</span>
                      </div>
                    </div>
                  </div>
                  <div className="kt-widget5__content">
                    <div className="kt-widget5__stats">
                      <span className="kt-widget5__number">24,583</span>
                      <span className="kt-widget5__sales">sales</span>
                    </div>
                    <div className="kt-widget5__stats">
                      <span className="kt-widget5__number">3809</span>
                      <span className="kt-widget5__votes">votes</span>
                    </div>
                  </div>
                </div>
                <div className="kt-widget5__item">
                  <div className="kt-widget5__content">
                    <div className="kt-widget5__pic">
                      <img
                        className="kt-widget7__img"
                        src="assets/media/products/product15.jpg"
                        alt=""
                      />
                    </div>
                    <div className="kt-widget5__section">
                      <Link to="/" className="kt-widget5__title">
                        Awesome Mobile App
                      </Link>
                      <p className="kt-widget5__desc">
                        Metronic admin themes.Lorem Ipsum Amet
                      </p>
                      <div className="kt-widget5__info">
                        <span>Author:</span>
                        <span className="kt-font-info">Fly themes</span>
                        <span>Released:</span>
                        <span className="kt-font-info">23.08.17</span>
                      </div>
                    </div>
                  </div>
                  <div className="kt-widget5__content">
                    <div className="kt-widget5__stats">
                      <span className="kt-widget5__number">210,054</span>
                      <span className="kt-widget5__sales">sales</span>
                    </div>
                    <div className="kt-widget5__stats">
                      <span className="kt-widget5__number">1103</span>
                      <span className="kt-widget5__votes">votes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane" id="kt_widget5_tab2_content">
              <div className="kt-widget5">
                <div className="kt-widget5__item">
                  <div className="kt-widget5__content">
                    <div className="kt-widget5__pic">
                      <img
                        className="kt-widget7__img"
                        src="assets/media/products/product10.jpg"
                        alt=""
                      />
                    </div>
                    <div className="kt-widget5__section">
                      <Link to="/" className="kt-widget5__title">
                        Branding Mockup
                      </Link>
                      <p className="kt-widget5__desc">
                        Metronic bootstrap themes.
                      </p>
                      <div className="kt-widget5__info">
                        <span>Author:</span>
                        <span className="kt-font-info">Fly themes</span>
                        <span>Released:</span>
                        <span className="kt-font-info">23.08.17</span>
                      </div>
                    </div>
                  </div>
                  <div className="kt-widget5__content">
                    <div className="kt-widget5__stats">
                      <span className="kt-widget5__number">24,583</span>
                      <span className="kt-widget5__sales">sales</span>
                    </div>
                    <div className="kt-widget5__stats">
                      <span className="kt-widget5__number">3809</span>
                      <span className="kt-widget5__votes">votes</span>
                    </div>
                  </div>
                </div>
                <div className="kt-widget5__item">
                  <div className="kt-widget5__content">
                    <div className="kt-widget5__pic">
                      <img
                        className="kt-widget7__img"
                        src="assets/media/products/product11.jpg"
                        alt=""
                      />
                    </div>
                    <div className="kt-widget5__section">
                      <Link to="/" className="kt-widget5__title">
                        Awesome Mobile App
                      </Link>
                      <p className="kt-widget5__desc">
                        Metronic admin themes.Lorem Ipsum Amet
                      </p>
                      <div className="kt-widget5__info">
                        <span>Author:</span>
                        <span className="kt-font-info">Fly themes</span>
                        <span>Released:</span>
                        <span className="kt-font-info">23.08.17</span>
                      </div>
                    </div>
                  </div>
                  <div className="kt-widget5__content">
                    <div className="kt-widget5__stats">
                      <span className="kt-widget5__number">210,054</span>
                      <span className="kt-widget5__sales">sales</span>
                    </div>
                    <div className="kt-widget5__stats">
                      <span className="kt-widget5__number">1103</span>
                      <span className="kt-widget5__votes">votes</span>
                    </div>
                  </div>
                </div>
                <div className="kt-widget5__item">
                  <div className="kt-widget5__content">
                    <div className="kt-widget5__pic">
                      <img
                        className="kt-widget7__img"
                        src="assets/media/products/product6.jpg"
                        alt=""
                      />
                    </div>
                    <div className="kt-widget5__section">
                      <Link to="/" className="kt-widget5__title">
                        Great Logo Designn
                      </Link>
                      <p className="kt-widget5__desc">Metronic admin themes.</p>
                      <div className="kt-widget5__info">
                        <span>Author:</span>
                        <span className="kt-font-info">Keenthemes</span>
                        <span>Released:</span>
                        <span className="kt-font-info">23.08.17</span>
                      </div>
                    </div>
                  </div>
                  <div className="kt-widget5__content">
                    <div className="kt-widget5__stats">
                      <span className="kt-widget5__number">19,200</span>
                      <span className="kt-widget5__sales">sales</span>
                    </div>
                    <div className="kt-widget5__stats">
                      <span className="kt-widget5__number">1046</span>
                      <span className="kt-widget5__votes">votes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane" id="kt_widget5_tab3_content">
              <div className="kt-widget5">
                <div className="kt-widget5__item">
                  <div className="kt-widget5__content">
                    <div className="kt-widget5__pic">
                      <img
                        className="kt-widget7__img"
                        src="assets/media/products/product11.jpg"
                        alt=""
                      />
                    </div>
                    <div className="kt-widget5__section">
                      <Link to="/" className="kt-widget5__title">
                        Awesome Mobile App
                      </Link>
                      <p className="kt-widget5__desc">
                        Metronic admin themes.Lorem Ipsum Amet
                      </p>
                      <div className="kt-widget5__info">
                        <span>Author:</span>
                        <span className="kt-font-info">Fly themes</span>
                        <span>Released:</span>
                        <span className="kt-font-info">23.08.17</span>
                      </div>
                    </div>
                  </div>
                  <div className="kt-widget5__content">
                    <div className="kt-widget5__stats">
                      <span className="kt-widget5__number">210,054</span>
                      <span className="kt-widget5__sales">sales</span>
                    </div>
                    <div className="kt-widget5__stats">
                      <span className="kt-widget5__number">1103</span>
                      <span className="kt-widget5__votes">votes</span>
                    </div>
                  </div>
                </div>
                <div className="kt-widget5__item">
                  <div className="kt-widget5__content">
                    <div className="kt-widget5__pic">
                      <img
                        className="kt-widget7__img"
                        src="assets/media/products/product6.jpg"
                        alt=""
                      />
                    </div>
                    <div className="kt-widget5__section">
                      <Link to="/" className="kt-widget5__title">
                        Great Logo Designn
                      </Link>
                      <p className="kt-widget5__desc">Metronic admin themes.</p>
                      <div className="kt-widget5__info">
                        <span>Author:</span>
                        <span className="kt-font-info">Keenthemes</span>
                        <span>Released:</span>
                        <span className="kt-font-info">23.08.17</span>
                      </div>
                    </div>
                  </div>
                  <div className="kt-widget5__content">
                    <div className="kt-widget5__stats">
                      <span className="kt-widget5__number">19,200</span>
                      <span className="kt-widget5__sales">sales</span>
                    </div>
                    <div className="kt-widget5__stats">
                      <span className="kt-widget5__number">1046</span>
                      <span className="kt-widget5__votes">votes</span>
                    </div>
                  </div>
                </div>
                <div className="kt-widget5__item">
                  <div className="kt-widget5__content">
                    <div className="kt-widget5__pic">
                      <img
                        className="kt-widget7__img"
                        src="assets/media/products/product10.jpg"
                        alt=""
                      />
                    </div>
                    <div className="kt-widget5__section">
                      <Link to="/" className="kt-widget5__title">
                        Branding Mockup
                      </Link>
                      <p className="kt-widget5__desc">
                        Metronic bootstrap themes.
                      </p>
                      <div className="kt-widget5__info">
                        <span>Author:</span>
                        <span className="kt-font-info">Fly themes</span>
                        <span>Released:</span>
                        <span className="kt-font-info">23.08.17</span>
                      </div>
                    </div>
                  </div>
                  <div className="kt-widget5__content">
                    <div className="kt-widget5__stats">
                      <span className="kt-widget5__number">24,583</span>
                      <span className="kt-widget5__sales">sales</span>
                    </div>
                    <div className="kt-widget5__stats">
                      <span className="kt-widget5__number">3809</span>
                      <span className="kt-widget5__votes">votes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LecturerCourseBestSeller;
