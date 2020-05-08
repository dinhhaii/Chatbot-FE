/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createDiscount } from '../../actions/discount';
import { capitalize } from '../../utils/helper';
import LecturerCourseDiscountCreate from './lecturer-course-discount-create';
import LecturerCourseDiscountUpdate from './lecturer-course-discount-update';


const LecturerCourseDiscount = (props) => {
  const { courseLecturerList } = props;
  const [visibleCreateModal, setVisibleCreateModal] = useState(false);
  const [visibleUpdateModal, setVisibleUpdateModal] = useState(false);
  const [selectedDiscount, setSelectedDiscount] = useState(null);

  const showAllVoucher = () => {
    const result = [];

    courseLecturerList.forEach(course => {
      course.discount.forEach(discount => {
        result.push(
          <div
            className="kt-widget4__item"
            style={{ cursor: 'pointer' }}
            onClick={() => {
              setSelectedDiscount(discount);
              setVisibleUpdateModal(true);
            }}>
            <div className="kt-widget4__info">
              <Link className="kt-widget4__username">
                {course.name}
              </Link>
              <p className="kt-widget4__text">
                Discount: {discount.percentage}% ({capitalize(discount.status)})
              </p>
            </div>
            <button
              className={`btn btn-sm btn-bold w-25 ${
                discount.status === 'available' && 'btn-warning'
              } ${discount.status === 'coupon' && 'btn-success'} ${
                discount.status === 'expired' && 'btn-danger'
              }`}>
              {discount.code}
            </button>
          </div>,
        );
      });
    });

    return result;
  };
  return (
    <div className="col-xl-6 col-lg-6 col-sm-12 order-lg-2 order-xl-1">
      {/* begin:: Widgets/New Users */}
      <div className="kt-portlet kt-portlet--tabs kt-portlet--height-fluid">
        <div className="kt-portlet__head">
          <div className="kt-portlet__head-label">
            <h3 className="kt-portlet__head-title">Voucher</h3>
          </div>
          <div className="kt-portlet__head-toolbar">
            <button
              onClick={() => {
                setVisibleCreateModal(true);
              }}
              className="btn btn-dark mt-3 mb-3">
              Add New Voucher
            </button>
          </div>
        </div>
        <div className="kt-portlet__body" style={{ maxHeight: 300, overflow: 'auto' }}>
          <div className="tab-content">
            <div className="tab-pane active" id="kt_widget4_tab1_content">
              <div className="kt-widget4">
                {showAllVoucher()}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <LecturerCourseDiscountCreate courseLecturerList={courseLecturerList} visibleCreateModal={visibleCreateModal} setVisibleCreateModal={setVisibleCreateModal} />
      <LecturerCourseDiscountUpdate selectedDiscount={selectedDiscount} courseLecturerList={courseLecturerList} visibleUpdateModal={visibleUpdateModal} setVisibleUpdateModal={setVisibleUpdateModal} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    discountState: state.discountState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createDiscountAction: bindActionCreators(createDiscount, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LecturerCourseDiscount);
