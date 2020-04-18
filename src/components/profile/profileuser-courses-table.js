/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Rate } from 'antd';
import { PATH } from '../../utils/constant';
import { fetchCourseLecturerList } from '../../actions/course';

const LecturerCourseTable = ({ courseState, fetchCourseLecturerListAction, user }) => {
  useEffect(() => {
    fetchCourseLecturerListAction(user._id);
  }, []);

  const headers = [
    { name: 'Name', width: `${200}px` },
    { name: 'Price', width: `${80}px` },
    { name: 'Duration', width: `${80}px` },
    { name: 'Accessible Days', width: `${150}px` },
    { name: 'Rate', width: `${200}px` },
    { name: '', width: `${100}px` },
  ];
  const data = courseState.courseLecturerList;
  return (
    <div className="table-responsive" style={{ position: 'relative', height: 550 }}>
      <table
        className="table table-striped kt-datatable__table pb-5 shadow"
        style={{
          display: 'block',
          maxHeight: 500,
          overflow: 'auto',
          position: 'absolute',
          right: 0,
          left: 0,
        }}>
        {/* HEAD */}
        <thead className="kt-datatable__head bg-light">
          <tr className="kt-datatable__row" style={{ left: `${0}px` }}>
            {headers.map((value, index) => {
              const { name, width } = value;
              return (
                <th
                  key={index.toString()}
                  className="kt-datatable__cell kt-datatable__cell--sort text-center"
                  style={{ width }}>
                  <span>{name}</span>
                </th>
              );
            })}
          </tr>
        </thead>
        {/* BODY */}
        <tbody
          className="kt-datatable__body ps ps--active-y"
          style={{ maxHeight: `${447}px` }}>
          {data.map((element, index) => {
            const rateAverage = element.feedback.reduce((total, num) => total + num.rate, 0) / element.feedback.length;
            if (element.isDelete) {
              return null;
            }
            return (
              <tr
                className="kt-datatable__row"
                style={{ left: `${0}px` }}
                key={index.toString()}>
                <td
                  className="kt-datatable__cell"
                  style={{ width: headers[0].width }}>
                  <div className="kt-user-card-v2">
                    <div className="kt-user-card-v2__pic">
                      <img src={element.imageURL} alt="" />
                    </div>
                    <div className="kt-user-card-v2__details">
                      <Link
                        to={`${PATH.COURSE_DETAIL}/${element._id}`}
                        class="kt-user-card-v2__name">
                        {element.name}
                      </Link>
                    </div>
                  </div>
                </td>

                <td
                  className="kt-datatable__cell text-center"
                  style={{ width: headers[1].width }}>
                  <span className="kt-font-bold">${element.price}</span>
                </td>

                <td
                  className="kt-datatable__cell"
                  style={{ width: headers[2].width }}>
                  <span className="kt-font-bold">{element.duration}</span>
                </td>

                <td
                  className="kt-datatable__cell text-center"
                  style={{ width: headers[3].width }}>
                  <span className="kt-font-bold">{element.accessibleDays}</span>
                </td>

                <td
                  className="kt-datatable__cell text-nowrap"
                  style={{ width: headers[4].width }}>
                  <span style={{ width: `${100}px` }}>
                    <Rate
                      defaultValue={rateAverage}
                      disabled
                      style={{ fontSize: `${10}pt` }}
                    />
                  </span>
                </td>

                <td
                  className="kt-datatable__cell"
                  style={{ width: headers[5].width }}>
                  <button className="btn btn-outline-dark">
                    <i className="icon-cart" />
                    Enroll
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    courseState: state.courseState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCourseLecturerListAction: bindActionCreators(
      fetchCourseLecturerList,
      dispatch,
    ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LecturerCourseTable);
