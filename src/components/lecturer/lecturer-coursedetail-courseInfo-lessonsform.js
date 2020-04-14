/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Upload, Button, Progress } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import ReactPlayer from 'react-player';
import 'antd/dist/antd.css';
import '../../utils/css/lecturer-coursedetail-lessonform.css';
import { toast } from 'react-toastify';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import firebase from '../../utils/firebase';
import { updateLesson } from '../../actions/lesson';

const LecturerCourseDetailLessonForm = (props) => {
  const { lesson, index } = props;
  const [state, setState] = useState({
    name: lesson.name,
    description: lesson.description,
    lectureURL: lesson.lectureURL,
    files: lesson.files,
  });

  const [save, setSave] = useState(true);
  const [fileList, setFileList] = useState([]);
  const [videoData, setVideoData] = useState(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setFileList([...lesson.files]);
  }, []);

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
      setSave(false);
      setFileList([...fileList, file]);
      return false;
    },
    fileList,
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSave(true);
    const newState = { ...state, _idLesson: lesson._id };
    const storage = firebase.storage();
    const { file } = videoData || null;
    if (file) {
      const task = storage.ref(`videos/${file.name}`).put(file);
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
            .ref('videos')
            .child(file.name)
            .getDownloadURL().then(lectureURL => {
              props.updateLessonAction({ ...newState, lectureURL });
            });
        },
      );
    } else {
      props.updateLesson(newState);
    }
  };

  const handleChange = e => {
    setSave(false);
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
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
              type="submit"
              form="lessonForm"
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
      <div className="kt-portlet__body position-relative">
        <Progress
          percent={progress}
          showInfo={false}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            marginTop: '-8px',
          }}
        />
        <form
          className="kt-form kt-form--label-right"
          id="lessonForm"
          onSubmit={handleSubmit}>
          <div className="kt-portlet__body">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6">
                  <div>
                    <Upload
                      className="mr-2"
                      name="video"
                      multiple={false}
                      beforeUpload={(e) => false}
                      showUploadList={false}
                      onChange={(info) => {
                        setSave(false);
                        viewAttachment(info.file);
                      }}>
                      <Button>
                        <UploadOutlined /> Upload Video
                      </Button>
                    </Upload>
                    <Button onClick={() => setVideoData(null)}>
                      <i className="icon-trash-1" />
                    </Button>
                  </div>
                  <div>
                    <ReactPlayer
                      url={videoData ? videoData.blobData : state.lectureURL}
                      controls
                      height="300"
                      width="100%"
                      className="react-player-custom"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="lessonName">Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lessonName"
                      name="name"
                      value={state.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lessonDescription">Description:</label>
                    <textarea
                      className="form-control"
                      id="lessonDescription"
                      name="description"
                      value={state.description}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="attachments" className="mr-3">
                      Attachments:{' '}
                    </label>
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

const mapStateToProps = (state) => {
  return {
    lessonState: state.lessonState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateLessonAction: bindActionCreators(updateLesson, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LecturerCourseDetailLessonForm));