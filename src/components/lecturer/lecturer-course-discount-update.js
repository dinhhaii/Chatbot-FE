/* eslint-disable object-curly-newline */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateDiscount } from '../../actions/discount';
import 'antd/dist/antd.css';

const LecturerCourseDiscountUpdate = (props) => {
  const { visibleUpdateModal, setVisibleUpdateModal, courseLecturerList, selectedDiscount } = props;
  const { _id, _idCourse, percentage, status, code } = { ...selectedDiscount };
  const [discount, setDiscount] = useState({
    _idDiscount: _id, _idCourse, percentage, status, code,
  });

  useEffect(() => {
    setDiscount({
      _idDiscount: _id, _idCourse, percentage, status, code,
    });
  }, [visibleUpdateModal]);

  const handleSubmit = e => {
    e.preventDefault();
    props.updateDiscountAction(discount);
    setVisibleUpdateModal(false);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setDiscount({
      ...discount,
      [name]: value,
    });
  };
  
  const handleCancel = () => {
    setVisibleUpdateModal(false);
  };

  return (
    <Modal
      title="Create New Voucher"
      visible={visibleUpdateModal}
      onOk={handleSubmit}
      onCancel={handleCancel}
      >
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <label htmlFor="selectIdCourseDiscount" className="col-4 col-form-label">
            Course
          </label>
          <div className="col-8">
            <select
              className="form-control"
              id="selectIdCourseDiscount"
              name="_idCourse"
              value={discount._idCourse}
              onChange={handleChange}>
              <option value="" selected>None</option>
              {courseLecturerList.map((course, index) => {
                return <option value={course._id} key={index.toString()}>{course.name}</option>;
              })}
            </select>
          </div>
        </div>
        
        <div className="form-group row">
          <label htmlFor="codeDiscount" className="col-4 col-form-label">
            Code
          </label>
          <div className="col-8">
            <input
              className="form-control"
              type="text"
              id="codeDiscount"
              name="code"
              value={discount.code}
              onChange={handleChange}
              />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="percentageDiscount" className="col-4 col-form-label">
            Percentage
          </label>
          <div className="col-8">
            <input
              className="form-control"
              type="number"
              id="percentageDiscount"
              name="percentage"
              value={discount.percentage}
              onChange={handleChange}
              />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="selectStatusDiscount" className="col-4 col-form-label">
            Status
          </label>
          <div className="col-8">
            <select
              className="form-control"
              id="selectStatusDiscount"
              name="status"
              value={discount.status}
              onChange={handleChange}>
              <option value="" selected>None</option>
              <option value="coupon" selected>Coupon</option>
              <option value="expired" selected>Expired</option>
              <option value="available" selected>Available</option>
            </select>
          </div>
        </div>

      </form>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    discountState: state.discountState,
  };
};
  
const mapDispatchToProps = (dispatch) => {
  return {
    updateDiscountAction: bindActionCreators(updateDiscount, dispatch),
  };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(LecturerCourseDiscountUpdate);
