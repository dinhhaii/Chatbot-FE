/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Link } from 'react-router-dom';
import { Rate } from 'antd';
import 'antd/dist/antd.css';
import { getRandom } from '../../utils/helper';
import { PATH } from '../../utils/constant';

const CoursesList = (props) => {
  const { data } = props;
  return (
    <div>
      {data.map((value, index) => {
        const rateAverage = value.feedback.reduce((total, num) => {
          return total.rate + num.rate;
        }) / (2 * value.feedback.length);

        if (!value.isDelete) {
          return (
            <div className="box_list wow" key={index.toString()}>
              <div className="row no-gutters">
                <div className="col-lg-5">
                  <figure className="block-reveal">
                    <div className="block-horizzontal" />
                    <Link href="course-detail.html">
                      <img src={value.imageURL} alt="" />
                    </Link>
                    <div className="preview">
                      <span>Preview course</span>
                    </div>
                  </figure>
                </div>
                <div className="col-lg-7">
                  <div className="wrapper">
                    <Link href="#0" class="wish_bt" />
                    <div className="price">${value.price}</div>
                    <small>{value.subject.name}</small>
                    <h3>{value.name}</h3>
                    <Link
                      to={`${PATH.PROFILE_USER}/${value.lecturer._id}`}
                      className={`mb-2 badge ${getRandom([
                        'badge-success',
                        'badge-danger',
                        'badge-warning',
                        'badge-info',
                      ])}`}>
                      {`${value.lecturer.firstName.toUpperCase()} ${value.lecturer.lastName.toUpperCase()}`}
                    </Link>
                    <p>{value.description}</p>
                    <Rate
                      defaultValue={rateAverage}
                      style={{ padding: 0 }}
                      disabled
                    />
                  </div>
                  <ul>
                    <li>
                      <i className="icon_clock_alt" /> {value.duration}
                    </li>
                    <li>
                      <Link href="course-detail.html">Enroll now</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default CoursesList;
