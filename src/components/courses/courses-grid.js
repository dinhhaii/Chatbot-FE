/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Link } from 'react-router-dom';
import { Rate } from 'antd';
import 'antd/dist/antd.css';
import { PATH } from '../../utils/constant';

const CoursesGrid = (props) => {
  const { data } = props;
  return (
    <div className="row">
      {data.map((value, index) => {
        const rateAverage = value.feedback.reduce((total, num) => total + num.rate, 0) / (value.feedback.length * 2);
        if (!value.isDelete) {
          return (
            <div className="col-md-6" key={index.toString()}>
              <div className="box_grid wow">
                <figure className="block-reveal">
                  <div className="block-horizzontal" />
                  <Link href="#0" class="wish_bt" />
                  <Link href="course-detail.html">
                    <img src={value.imageURL} className="img-fluid" alt="" />
                  </Link>
                  <div className="price">${value.price}</div>
                  <div className="preview">
                    <span>Preview course</span>
                  </div>
                </figure>
                <div className="wrapper">
                  <small>{value.subject.name}</small>
                  <h3>{value.name}</h3>{' '}
                  <Link
                    to={`${PATH.PROFILE_USER}/${value.lecturer._id}`}
                    className="mb-2 badge badge-success">
                    {`${value.lecturer.firstName.toUpperCase()} ${value.lecturer.lastName.toUpperCase()}`}
                  </Link>
                  <p>{value.description}</p>
                  <div className="rating">
                    <Rate
                      defaultValue={rateAverage}
                      style={{ padding: 0 }}
                      disabled
                    />
                  </div>
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
          );
        }
        return null;
      })}
    </div>
  );
};

export default CoursesGrid;
