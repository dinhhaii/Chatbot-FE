import React from 'react';
import { Spin } from 'antd';
import { Link } from 'react-router-dom';
import { PATH } from '../../utils/constant';
import 'antd/dist/antd.css';

const Subject = ({ subjectList, courseList }) => {
  if (subjectList && subjectList.length !== 0) {
    return (
      <div className="row">
        {subjectList.map((subject, index) => {
          const count = courseList.reduce((initVal, val) => (val._idSubject === subject._id ? initVal + 1 : initVal), 0);
          if (subject.isDelete) {
            return null;
          }
          return (
            <div className="col-lg-4 col-md-6 wow" data-wow-offset="150" key={index.toString()}>
              <Link to={`${PATH.COURSES}?subject=${subject.name}`} className="grid_item">
                <figure className="block-reveal">
                  <div className="block-horizzontal" />
                  <img
                    src={subject.imageURL}
                    className="img-fluid w-100"
                    style={{ height: 250 }}
                    alt=""
                  />
                  <div className="info">
                    <small>
                      <i className="ti-layers" />
                      {count} courses
                    </small>
                    <h3>{subject.name}</h3>
                  </div>
                </figure>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
  return <div className="text-center m-5"><Spin /></div>;
};

export default Subject;
