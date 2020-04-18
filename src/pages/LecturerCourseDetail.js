/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import LecturerCourseDetailCourseEdit from '../components/lecturer/lecturer-coursedetail-courseEdit';
import LecturerCourseDetailCourseCreateForm from '../components/lecturer/lecturer-coursedetail-courseCreate';

const { TabPane } = Tabs;

const LecturerCourseDetail = (props) => {
  const { userState, history } = props;

  useEffect(() => { 
    if (!userState.isLogin || userState.user.role !== 'lecturer') {
      toast.warn("You don't have permission to access this site.");
      history.push('/');
    }
  }, []);

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
                <LecturerCourseDetailCourseCreateForm />
              </TabPane>
              <TabPane tab={<span>Course Detail</span>} key="2">
                <LecturerCourseDetailCourseEdit />
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    userState: state.userState,
  };
};

export default connect(mapStateToProps, null)(withRouter(LecturerCourseDetail));
