/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import { Collapse } from 'antd';
import 'antd/dist/antd.css';
import { PATH } from '../../utils/constant';

const { Panel } = Collapse;

const LessonsList = (props) => {
  const { lessons } = props;

  return (
    <section id="lessons">
      <div className="intro_title">
        <h2>Lessons</h2>
        <ul>
          <li>{lessons.length} lessons</li>
        </ul>
      </div>
      <div id="accordion_lessons" role="tablist" className="add_bottom_45">
        <Collapse defaultActiveKey={[]}>
          {lessons.map((value, index) => {
            return (
              <Panel
                key={index.toString()}
                header={(
                  <Link to={`${PATH.LESSON_DETAIL}/${value._id}`}>
                    <strong>LESSON {index + 1}: </strong> {value.name}
                  </Link>
                )}>
                {value.files.length === 0 ? null : (
                  <div className="card-body p-0">
                    <div className="list_lessons">
                      <ul>
                        {value.files.map((file, i) => {
                          return (
                            <li key={i.toString()}>
                              <Link className="video">
                                {file.name}
                              </Link>
                              <span
                                className="icon-download"
                                style={{ cursor: 'pointer' }}
                                onClick={() => {
                                  window.open(file.fileURL, '_blank');
                                }} />
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                )}
              </Panel>
            );
          })}
        </Collapse>
      </div>
    </section>
  );
};

export default LessonsList;
