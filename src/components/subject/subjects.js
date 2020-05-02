import React from 'react';
import { Link } from 'react-router-dom';
import { PATH} from '../../utils/constant';

const Subject = ({ subjectList }) => {
  return (
    <div className="row">
      {subjectList.map((subject, index) => {
        return subject.isDelete ? null : (
          <div className="col-lg-4 col-md-6 wow" data-wow-offset="150" key={index.toString()}>
            <Link to={`${PATH.COURSES}?subject=${subject.name}`} className="grid_item">
              <figure className="block-reveal">
                <div className="block-horizzontal" />
                <img
                  src={subject.imageURL}
                  className="img-fluid"
                  alt=""
                />
                <div className="info">
                  <small>
                    <i className="ti-layers" />
                    15 Programmes
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
};

export default Subject;
