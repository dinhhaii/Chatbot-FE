import React, { useState } from 'react';
import LecturerCourseDetailLessonForm from './lecturer-coursedetail-courseInfo-lessonsform';
import LecturerCourseDetailCourseForm from './lecturer-coursedetail-courseInfo-courseform';

const VIEW = {
  COURSE_EDIT: 1,
  LESSONS: 2,
};

const LecturerCourseDetailCourseInfo = ({ courseLecturerList, select }) => {
  const [view, setView] = useState(VIEW.COURSE_EDIT);
  const selectedCourseLecturerList = { ...courseLecturerList[select] };
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
                className={`btn ${view === VIEW.COURSE_EDIT ? 'btn-dark' : 'btn-light'}`}
                onClick={() => setView(VIEW.COURSE_EDIT)}>Course Edit
              </button>
              <button
                type="button" 
                className={`btn ${view === VIEW.LESSONS ? 'btn-dark' : 'btn-light'}`}
                onClick={() => setView(VIEW.LESSONS)}>
                Lessons
              </button>
            </div>
          </div>

          {view === VIEW.COURSE_EDIT ? <LecturerCourseDetailCourseForm selectedCourse={selectedCourseLecturerList} /> : null }
          {view === VIEW.LESSONS ? courseLecturerList[select].lessons.map((lesson, index) => {
            return <LecturerCourseDetailLessonForm key={index.toString()} lesson={lesson} index={index} />;
          }) : null}

          <div className="kt-portlet__foot">
            <div>
              <button type="submit" className="btn btn-brand w-25 mr-5">
                Save
              </button>
              <button type="reset" className="btn btn-secondary w-25">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default LecturerCourseDetailCourseInfo;
