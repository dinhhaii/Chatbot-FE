import React from 'react';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import LecturerCourseDetailCourseForm from '../components/lecturer/lecturer-coursedetail-courseform';
import LecturerCourseDetailLesson from '../components/lecturer/lecturer-coursedetail-lessons';

const { TabPane } = Tabs;

const LecturerCourseDetail = () => {
  return (
    <main>
      <section id="hero_in" className="contacts">
        <div className="wrapper">
          <div className="container">
            <h1 className="fadeInUp">
              <span />
              Course Management
            </h1>
          </div>
        </div>
      </section>

      <div className="kt-container  kt-grid__item kt-grid__item--fluid mt-4">
        <div className="row">
          <div className="col-lg-12">
            <Tabs defaultActiveKey="1">
              <TabPane tab={<span>Add New Course</span>} key="1">
                <LecturerCourseDetailCourseForm />
              </TabPane>
              <TabPane tab={<span>Lessons Detail</span>} key="2">
                <LecturerCourseDetailLesson />
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LecturerCourseDetail;
