/* eslint-disable no-plusplus */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo } from 'react';
import { Rate } from 'antd';
import 'antd/dist/antd.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import { fetchUserList } from '../../actions/user';
import { IMAGE_URL } from '../../utils/constant';

const CourseReview = (props) => {
  const { feedback } = props;
  const rateAverage = useMemo(() => {
    if (feedback) {
      return feedback
        .filter((e) => !e.isDelete)
        .reduce((total, num) => total + num.rate, 0) / feedback.length.toFixed(1);
    }
    return null;
  }, [feedback]);

  useEffect(() => {
    props.fetchUserListAction();
  }, []);

  const rates = () => {
    const result = [];
    for (let i = 5; i >= 1; i--) {
      const totalRate = feedback && feedback.filter((e) => e.rate === i).length;
      const percentRate = totalRate && feedback && (totalRate * 100) / feedback.length;
      result.push(
        <div className="row">
          <div className="col-lg-10 col-9">
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${percentRate}%` }}
              />
            </div>
          </div>
          <div className="col-lg-2 col-3">
            <small>
              <strong>{i} stars</strong>
            </small>
          </div>
        </div>,
      );
    }
    return result;
  };

  return (
    <section id="reviews">
      <h2>Reviews</h2>
      <div className="reviews-container">
        <div className="row">
          <div className="col-lg-3">
            <div id="review_summary">
              <h2 style={{ color: 'white', fontSize: `${30}pt` }}>{rateAverage || 0 }</h2>
              <div>
                <Rate
                  defaultValue={rateAverage}
                  style={{ paddingLeft: 5, marginBottom: 0, whiteSpace: 'nowrap' }}
                  disabled
                />
              </div>
              <small>Based on {feedback && feedback.length} reviews</small>
            </div>
          </div>
          <div className="col-lg-9">{rates().map((value) => value)}</div>
        </div>
      </div>

      <hr />

      <div className="reviews-container">
        {feedback && feedback.map((value, index) => {
          const user = props.userState.userList.find((e) => e._id === value._idUser);
          return (
            <div className="review-box clearfix" key={index.toString()}>
              <figure className="rev-thumb">
                <img
                  src={user ? user.imageURL : IMAGE_URL.BACKGROUND_1}
                  alt=""
                />
              </figure>
              <div className="rev-content">
                <Rate
                  defaultValue={value.rate}
                  style={{ paddingBottom: 5, fontSize: `${11}pt` }}
                  disabled
                />
                <div className="rev-info">
                  {user
                    ? `${user.firstName.toUpperCase()} ${user.lastName.toUpperCase()} - ${moment(
                      value.createdAt,
                    ).format('LLLL')}`
                    : ''}
                </div>
                <div className="rev-text">
                  <p>{value.content}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    userState: state.userState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserListAction: bindActionCreators(fetchUserList, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(CourseReview));
