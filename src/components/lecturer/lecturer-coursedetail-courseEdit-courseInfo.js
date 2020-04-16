import React, { useState } from 'react';
import LecturerCourseDetailLessonForm from './lecturer-coursedetail-courseInfo-lessonsform';
import LecturerCourseDetailCourseForm from './lecturer-coursedetail-courseInfo-courseform';
import LecturerCourseDetailLessonFormCreate from './lecturer-coursedetail-courseInfo-lessonsformcreate';

const VIEW = {
  COURSE_EDIT: 1,
  LESSONS: 2,
};

const LecturerCourseDetailCourseInfo = ({ courseLecturerList, select, setReload }) => {
  const [view, setView] = useState(VIEW.COURSE_EDIT);
  const [lessonFormCreateList, setLessonFormCreateList] = useState([]);
  // const selectedCourseLecturerList = { ...courseLecturerList[select] };
  if (courseLecturerList[select]) {
    return (
      <div className="col-lg-8">
        <div className="kt-portlet">
          <div className="kt-portlet__head">
            <div className="kt-portlet__head-label">
              <h2 className="kt-portlet__head-title">
                {courseLecturerList[select].name}
              </h2>
            </div>
            <div className="kt-portlet__head-toolbar">
              <button
                type="button"
                className={`btn ${
                  view === VIEW.COURSE_EDIT ? 'btn-dark' : 'btn-light'
                }`}
                onClick={() => setView(VIEW.COURSE_EDIT)}>
                Course Edit
              </button>
              <button
                type="button"
                className={`btn ${
                  view === VIEW.LESSONS ? 'btn-dark' : 'btn-light'
                }`}
                onClick={() => setView(VIEW.LESSONS)}>
                Lessons
              </button>
            </div>
          </div>

          {view === VIEW.COURSE_EDIT && (
            <LecturerCourseDetailCourseForm selectedCourse={courseLecturerList[select]} />
          )}
          {view === VIEW.LESSONS && (
            <>
              {courseLecturerList[select].lessons.map((lesson, index) => {
                return (
                  <LecturerCourseDetailLessonForm
                    key={index.toString()}
                    lesson={lesson}
                    index={index}
                  />
                );
              })}
              {lessonFormCreateList.map((value, index) => {
                return (
                  <LecturerCourseDetailLessonFormCreate
                    key={index.toString()}
                    index={courseLecturerList[select].lessons.length + index}
                    pos={index}
                    selectedCourse={courseLecturerList[select]}
                    setLessonFormCreateList={setLessonFormCreateList}
                    lessonFormCreateList={lessonFormCreateList}
                  />
                );
              })}
              <div className="kt-portlet__foot" style={{ textAlign: 'center' }}>
                <button
                  className="btn btn-brand"
                  onClick={() => {
                    setLessonFormCreateList([...lessonFormCreateList, 1]);
                  }}>
                  <i className="icon-list-add" /> Add new lesson
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
  return null;
};

export default LecturerCourseDetailCourseInfo;
