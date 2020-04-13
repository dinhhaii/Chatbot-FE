/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import '../../utils/css/lecturer-coursedetail-lessonform.css';

const LecturerCourseDetailLessonForm = ({ lesson, index }) => {
  const [save, setSave] = useState(true);
  const [fileList, setFileList] = useState([]);
  const [videoData, setVideoData] = useState(null);

  const viewAttachment = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const attachment = {
        file,
        blobData: e.target.result,
      };
      if (file.type.includes('video')) {
        setVideoData(attachment);
      }
    };
    reader.readAsDataURL(file);
  };

  const propsUpload = {
    onRemove: file => {
      const key = fileList.indexOf(file);
      setFileList([...fileList].splice(key, 1));
    },
    beforeUpload: file => {
      setFileList([...fileList, file]);
      return false;
    },
    fileList,
  };

  return (
    <div className="kt-portlet" data-ktportlet="true">
      <div className="kt-portlet__head bg-dark">
        <div className="kt-portlet__head-label" style={{ color: 'white' }}>
          LESSON {index + 1}: {lesson.name}
        </div>
        <div className="kt-portlet__head-toolbar">
          <div className="kt-portlet__head-group">
            <button
              className={`btn ${
                save ? 'btn-success' : 'btn-info'
              } btn-icon btn-pill`}
              disabled={save}>
              {save ? (
                <i className="icon-ok-5" />
              ) : (
                <i className="icon-paper-plane" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="kt-portlet__body">
        <form className="kt-form kt-form--label-right">
          <div className="kt-portlet__body">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6">
                  <div>
                    <Upload
                      multiple={false}
                      beforeUpload={(e) => false}
                      showUploadList={false}
                      onChange={(info) => {
                        viewAttachment(info.file);
                      }}>
                      <Button>
                        <UploadOutlined /> Upload Video
                      </Button>
                    </Upload>
                    <Button onClick={() => setVideoData(null)}>Clear</Button>
                  </div>
                  <div>
                    {videoData && videoData.file && videoData.blobData && (
                      <video
                        width={400}
                        controls
                        style={{ position: 'static', opacity: 1, marginTop: 5 }}>
                        <source
                          src={videoData.blobData}
                          type={videoData.file.type}
                        />
                        Your browser does not support HTML5 video.
                      </video>
                    )}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="lessonName">Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lessonName"
                      placeholder="Enter name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lessonDescription">Description:</label>
                    <textarea
                      className="form-control"
                      id="lessonDescription"
                      placeholder="Enter description"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="attachments" className="mr-3">Attachments: </label>
                    <Upload {...propsUpload} name="files" id="attachments">
                      <Button>
                        <UploadOutlined /> Select File
                      </Button>
                    </Upload>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LecturerCourseDetailLessonForm;
