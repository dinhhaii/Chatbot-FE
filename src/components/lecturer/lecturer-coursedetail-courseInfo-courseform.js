/* eslint-disable react/destructuring-assignment */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { Progress } from 'antd';
import firebase from 'firebase';
import { toast } from 'react-toastify';
import { fetchSubjectList } from '../../actions/subject';
import { updateCourse } from '../../actions/course';
import 'antd/dist/antd.css';
import { usePrevious } from '../../utils/helper';

const LecturerCourseDetailCourseForm = (props) => {
  const { selectedCourse } = props;
  const prevProps = usePrevious(props);

  const [course, setCourse] = useState({
    startDate: selectedCourse.startDate,
    _idLecturer: selectedCourse._idLecturer,
    name: selectedCourse.name,
    description: selectedCourse.description,
    price: selectedCourse.price,
    accessibleDays: selectedCourse.accessibleDays,
    duration: selectedCourse.duration,
    _idSubject: selectedCourse._idSubject,
    imageURL: selectedCourse.imageURL,
  });

  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    props.fetchSubjectListAction();
  }, []);

  useEffect(() => {
    if (prevProps && prevProps.selectedCourse !== props.selectedCourse) {
      setCourse({
        startDate: selectedCourse.startDate,
        _idLecturer: selectedCourse._idLecturer,
        name: selectedCourse.name,
        description: selectedCourse.description,
        price: selectedCourse.price,
        accessibleDays: selectedCourse.accessibleDays,
        duration: selectedCourse.duration,
        _idSubject: selectedCourse._idSubject,
        imageURL: selectedCourse.imageURL,
      });
    }
  });

  const subjects = props.subjectState.subjectList.filter((e) => !e.isDelete);
  const handleSubmit = (e) => {
    e.preventDefault();
    setProgress(1);
    const storage = firebase.storage();
    const newCourse = { ...course, _idCourse: selectedCourse._id };
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
              props.updateCourseAction({ ...newCourse, imageURL });
              setProgress(0);
            });
        },
      );
    } else {
      props.updateCourseAction(newCourse);
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
                      None
                    </option>
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
                <button type="submit" className="btn btn-info w-25 mr-5" disabled={progress !== 0}>
                  Update
                </button>
                <button
                  type="reset"
                  className="btn btn-secondary w-25"
                  onClick={() => {
                    setCourse({
                      startDate: selectedCourse.startDate,
                      _idLecturer: selectedCourse._idLecturer,
                      name: selectedCourse.name,
                      description: selectedCourse.description,
                      price: selectedCourse.price,
                      accessibleDays: selectedCourse.accessibleDays,
                      duration: selectedCourse.duration,
                      _idSubject: selectedCourse._idSubject,
                      imageURL: selectedCourse.imageURL,
                    });
                  }}
                  disabled={progress !== 0}>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCourseAction: bindActionCreators(updateCourse, dispatch),
    fetchSubjectListAction: bindActionCreators(fetchSubjectList, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(LecturerCourseDetailCourseForm));
