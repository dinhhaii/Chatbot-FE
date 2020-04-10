import React from 'react';
import { Link } from 'react-router-dom';
import { Collapse } from 'antd';
import 'antd/dist/antd.css';

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
                  <Link to="/">
                    <strong>LESSON {index + 1}: </strong> {value.name}
                  </Link>
                )}>
                {value.fileURLs.length === 0 ? null : (
                  <div className="card-body p-0">
                    <div className="list_lessons">
                      <ul>
                        {value.files.map((file, i) => {
                          return (
                            <li key={i.toString()}>
                              <Link to="/" className="video">
                                {file.name}
                              </Link>
                              <span className="icon-download" />
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
