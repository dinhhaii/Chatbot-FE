/* eslint-disable react/destructuring-assignment */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { Progress } from 'antd';
import firebase from 'firebase';
import { toast } from 'react-toastify';
import { SERVER_URL } from '../../utils/constant';
import { fetchSubjectList } from '../../actions/subject';
import 'antd/dist/antd.css';
import { createCourse } from '../../actions/course';

const LecturerCourseDetailCourseCreateForm = (props) => {
  const { userState } = props;
  const [course, setCourse] = useState({
    startDate: new Date(),
    _idLecturer: '',
    name: '',
    description: '',
    price: '',
    accessibleDays: '',
    duration: '',
    _idSubject: '',
    imageURL: `${SERVER_URL}/images/no-avatar.png`,
  });

  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    props.fetchSubjectListAction();
  }, []);

  const subjects = props.subjectState.subjectList.filter((e) => !e.isDelete);

  const handleSubmit = (e) => {
    e.preventDefault();
    const storage = firebase.storage();
    const newCourse = { ...course, _idLecturer: userState.user._id };

    if (image !== course.imageURL) {
      const task = storage.ref(`images/${image.name}`).put(image);
      task.on(
        'state_changed',
        (snapshot) => {
          setProgress(
            Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100),
          );
        },
        (error) => {
          toast.error(error.message);
        },
        () => {
          storage
            .ref('images')
            .child(image.name)
            .getDownloadURL()
            .then((imageURL) => {
              props.createCourseAction({ ...newCourse, imageURL });
            });
        },
      );
    } else {
      props.createCourseAction(newCourse);
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    if (name === 'image') {
      setImage(e.target.files[0]);
      setCourse({
        ...course,
        imageURL: URL.createObjectURL(e.target.files[0]),
      });
    } else {
      setCourse({
        ...course,
        [name]: value,
      });
    }
  };
  return (
    <div className="kt-portlet">
      <div className="kt-portlet__head">
        <div className="kt-portlet__head-label">
          <h3 className="kt-portlet__head-title">Create New Course</h3>
        </div>
      </div>

      <form className="kt-form kt-form--label-right" onSubmit={handleSubmit}>
        <div className="kt-portlet__body">
          {/* IMAGE */}
          <div className="form-group row">
            <label className="col-lg-2">Course&apos;s Image</label>
            <div className="col-lg-2">
              <div
                className="kt-avatar"
                style={{ marginLeft: `${20}px` }}
                id="kt_user_avatar_2">
                <img
                  className="kt-avatar__holder"
                  src={course.imageURL}
                  alt=""
                />
                <label
                  className="kt-avatar__upload"
                  data-toggle="kt-tooltip"
                  title=""
                  data-original-title="Change avatar">
                  <i className="icon-pen" />
                  <input
                    type="file"
                    name="image"
                    onChange={handleChange}
                    accept=".png, .jpg, .jpeg"
                  />
                </label>
                <small>
                  <Progress percent={progress} showInfo={false} />
                </small>
              </div>
            </div>

            <div className="col-lg-8">
              {/* NAME */}
              <div className="form-group row">
                <label htmlFor="nameCourse" className="col-2 col-form-label">
                  Name
                </label>
                <div className="col-10">
                  <input
                    className="form-control"
                    type="text"
                    id="nameCourse"
                    name="name"
                    value={course.name}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* SUBJECT */}
              <div className="form-group row">
                <label htmlFor="selectSubject" className="col-2 col-form-label">
                  Subject
                </label>
                <div className="col-10">
                  <select
                    className="custom-select form-control"
                    id="selectSubject"
                    name="_idSubject"
                    value={course._idSubject}
                    onChange={handleChange}>
                    <option value="" selected>
                      {' '}
                      None{' '}
                    </option>
                    ;
                    {subjects.map((subject, index) => {
                      return (
                        <option key={index.toString()} value={subject._id}>
                          {subject.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* DURATION */}
          <div className="form-group row">
            <label htmlFor="durationCourse" className="col-2 col-form-label">
              Duration
            </label>
            <div className="col-10">
              <input
                className="form-control"
                type="text"
                id="durationCourse"
                name="duration"
                value={course.duration}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* PRICE */}
          <div className="form-group row">
            <label htmlFor="priceCourse" className="col-2 col-form-label">
              Price ($)
            </label>
            <div className="col-4">
              <input
                className="form-control"
                type="number"
                id="priceCourse"
                name="price"
                value={course.price}
                onChange={handleChange}
              />
            </div>
            {/* ACCESSIBLE DAYS */}
            <label
              htmlFor="accessibleDaysCourse"
              className="col-2 col-form-label">
              Accessible Days (days)
            </label>
            <div className="col-4">
              <input
                className="form-control"
                type="number"
                id="accessibleDaysCourse"
                name="accessibleDays"
                value={course.accessibleDays}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="form-group row">
            <label htmlFor="descriptionCourse" className="col-2 col-form-label">
              Description
            </label>
            <div className="col-10">
              <textarea
                style={{ height: 300 }}
                className="form-control"
                id="descriptionCourse"
                name="description"
                value={course.description}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="kt-portlet__foot">
          <div className="kt-form__actions">
            <div className="row">
              <div className="col-2" />
              <div className="col-10">
                <button type="submit" className="btn btn-success w-25 mr-5">
                  Create
                </button>
                <button
                  type="reset"
                  className="btn btn-secondary w-25"
                  onClick={() => {
                    setCourse({
                      startDate: new Date(),
                      _idLecturer: '',
                      name: '',
                      description: '',
                      price: '',
                      accessibleDays: '',
                      duration: '',
                      _idSubject: '',
                      imageURL: `${SERVER_URL}/images/no-avatar.png`,
                    });
                  }}>
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    subjectState: state.subjectState,
    userState: state.userState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createCourseAction: bindActionCreators(createCourse, dispatch),
    fetchSubjectListAction: bindActionCreators(fetchSubjectList, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(LecturerCourseDetailCourseCreateForm));
