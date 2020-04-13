import React from 'react';
import { Link } from 'react-router-dom';
import { PATH } from '../../utils/constant';
import { getRandom } from '../../utils/helper';

const CoursePurchase = (props) => {
  const { course } = props;
  return (
    <aside className="col-lg-4" id="sidebar">
      <div className="box_detail">
        <figure>
          <Link to={PATH.LESSON_DETAIL} className="video" >
            <i className="arrow_triangle-right" />
            <img src={course.imageURL} className="img-fluid" alt="" />
            <span>View course preview</span>
          </Link>
        </figure>
        <div className="price">
          <h4 className="d-inline">Price: </h4>${course.price}
        </div>
        <div className="price">
          <h4>Coupon</h4>
          {course.discount.map((value, index) => {
            if (value.isDelete || value.status === 'expired') {
              return null;
            }
            return (
              <div key={index.toString()}>
                <span
                  className={`badge ${getRandom([
                    'badge-danger',
                    'badge-success',
                    'badge-primary',
                    'badge-warning',
                  ])}`}
                  style={{ fontSize: `${10}pt` }}>
                  {value.code}
                </span>
                <span className="original_price ml-2">
                  {value.percentage}% discount price
                </span>
              </div>
            );
          })}
        </div>
        <Link to={PATH.CART} class="btn_1 full-width">
          Purchase
        </Link>
        <Link href={PATH.CHAT} class="btn_1 full-width outline">
          <i className="icon-chat-empty" /> Contact to Lecturer
        </Link>
        <div id="list_feat">
          <h3>What&apos;s includes</h3>
          <ul>
            <li>
              <i className="icon_mobile" />
              Mobile support
            </li>
            <li>
              <i className="icon_archive_alt" />
              Lesson archive
            </li>
            <li>
              <i className="icon_chat_alt" />
              Tutor chat
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default CoursePurchase;
