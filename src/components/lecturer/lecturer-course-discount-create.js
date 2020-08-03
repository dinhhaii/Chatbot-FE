import React, { useState } from 'react';
import { Modal } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createDiscount } from '../../actions/discount';
import 'antd/dist/antd.css';

const LecturerCourseDiscountCreate = (props) => {
  const { visibleCreateModal, setVisibleCreateModal, courseLecturerList } = props;
  const [discount, setDiscount] = useState({
    _idCourse: '',
    percentage: 10,
    status: '',
    code: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    props.createDiscountAction(discount);
    setVisibleCreateModal(false);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setDiscount({
      ...discount,
      [name]: value,
    });
  };
  
  const handleCancel = () => {
    setVisibleCreateModal(false);
  };

  return (
    <Modal
      title="Create New Voucher"
      visible={visibleCreateModal}
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
              style={{ padding: 5, height: 35 }}
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
              style={{ padding: 5, height: 35 }}
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
    createDiscountAction: bindActionCreators(createDiscount, dispatch),
  };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(LecturerCourseDiscountCreate);
