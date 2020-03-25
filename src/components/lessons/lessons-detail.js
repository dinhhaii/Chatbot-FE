import React from 'react';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import PreLoader from '../home/preloader';
import LessonsList from './lessons-list';
import LessonComment from './lessons-comments';

const { TabPane } = Tabs;

const LessonDetail = () => {
  return (
    <div>
      <PreLoader />

      <main>
        <div className="bg-dark">
          <nav className="secondary_nav sticky_horizontal">
            <div className="container">
              {/* <ul className="clearfix">
                <li>
                  <Link href="#description" class="active">
                    Description
                  </Link>
                </li>
                <li>
                  <Link href="#lessons">Lessons</Link>
                </li>
                <li>
                  <Link href="#reviews">Reviews</Link>
                </li>
              </ul> */}
            </div>
          </nav>
          <div className="bg-white" style={{ marginTop: `${73}px` }}>
            <div className="container-fluid margin_60_35">
              <div className="row">
                <div className="col-lg-8">
                  <div>Video here</div>
                </div>
                <div className="col-lg-4">
                  <Tabs defaultActiveKey="2">
                    <TabPane tab={<span>Documents</span>} key="1">
                      <div>Files</div>
                    </TabPane>
                    <TabPane tab={<span>Lessons</span>} key="2">
                      <LessonsList />
                    </TabPane>
                    <TabPane tab={<span>Comments</span>} key="3">
                      <LessonComment />
                    </TabPane>
                  </Tabs>
                  ,
                </div>
              </div>
              {/* /row */}
            </div>
            {/* /container */}
          </div>
        </div>
        {/* /bg_color_1 */}
      </main>
    </div>
  );
};

export default LessonDetail;
