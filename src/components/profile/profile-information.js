/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toast } from 'react-toastify';
import { Progress } from 'antd';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { requestVerificationEmail } from '../../api/user';
import { showLoading, hideLoading } from '../../actions/general';
import { updateUser } from '../../actions/user';
import firebase from '../../utils/firebase';
import 'antd/dist/antd.css';

const ProfileInformation = (props) => {
  const { userState, setShowAside } = props;
  const [isVerified, setIsVerified] = useState(false);
  const [state, setState] = useState({
    imageURL: userState.user.imageURL,
    _id: userState.user._id,
    firstName: userState.user.firstName,
    lastName: userState.user.lastName,
    bio: userState.user.bio,
  });
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const requestVerification = () => {
    props.showLoadingAction();
    requestVerificationEmail(userState.user._id, userState.user.email)
      .then((response) => {
        const { data } = response;
        if (data) {
          toast.success(data.message);
          setIsVerified(true);
        }
        props.hideLoadingAction();
      })
      .catch((error) => {
        toast.error(error.message);
        props.hideLoadingAction();
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storage = firebase.storage();

    if (image && image !== state.imageURL) {
      const task = storage.ref(`images/${image.name}`).put(image);
      task.on(
        'state_changed',
        (snapshot) => {
          setProgress(Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100));
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
              const newState = { ...state, imageURL };
              setState(newState);
              props.updateUserAction(newState);
            });
        },
      );
    } else {
      props.updateUserAction(state);
    }   
  };

  const handleChangle = (e) => {
    const { name, value } = e.target;
    if (name === 'image') {
      setImage(e.target.files[0]);
      setState({
        ...state,
        imageURL: URL.createObjectURL(e.target.files[0]),
      });
    } else {
      setState({
        ...state,
        [name]: value,
      });
    }
  };

  return (
    <div className="kt-grid__item kt-grid__item--fluid kt-app__content">
      {userState.user ? (
        <div className="row">
          <div className="col-xl-12">
            <div className="kt-portlet">
              <div className="kt-portlet__head">
                <div className="kt-portlet__head-label">
                  <Link
                    onClick={() => setShowAside(true)}
                    className="btn btn-clean btn-sm btn-icon btn-icon-md">
                    <i className="icon-th-list-3" />
                  </Link>
                  <h3 className="kt-portlet__head-title">
                    Personal Information
                    <small>update your personal informaiton</small>
                  </h3>
                </div>
              </div>
              <form
                className="kt-form kt-form--label-right"
                onSubmit={handleSubmit}>
                <div className="kt-portlet__body">
                  <div className="kt-section kt-section--first">
                    <div className="kt-section__body">
                      {userState.user.status === 'unverified' ? (
                        <div
                          className="alert alert-solid-danger alert-bold fade show kt-margin-t-20 kt-margin-b-40"
                          role="alert">
                          <div className="alert-icon">
                            <i className="icon-warning" />
                          </div>
                          <div className="alert-text">
                            Your account is not verified!
                          </div>
                          <div className="alert-close">
                            <button
                              type="button"
                              className={`btn btn-warning ${
                                isVerified ? 'disabled' : ''
                              }`}
                              onClick={requestVerification}>
                              VERIFY NOW{' '}
                              {isVerified ? (
                                <i className="icon-check-1" />
                              ) : null}
                            </button>
                          </div>
                        </div>
                      ) : null}

                      <div className="row">
                        <label className="col-xl-3" />
                        <div className="col-lg-9 col-xl-6">
                          <h3 className="kt-section__title kt-section__title-sm">
                            My Info:
                          </h3>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-xl-3 col-lg-3 col-form-label">
                          Avatar
                        </label>
                        <div className="col-lg-9 col-xl-6">
                          <div
                            className="kt-avatar kt-avatar--outline"
                            id="kt_user_avatar">
                            <img
                              className="kt-avatar__holder"
                              src={state.imageURL}
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
                                accept=".png, .jpg, .jpeg"
                                onChange={handleChangle}
                              />
                            </label>
                            <small>
                              <Progress percent={progress} showInfo={false} />
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-xl-3 col-lg-3 col-form-label">
                          ID
                        </label>
                        <div className="col-lg-9 col-xl-6">
                          <input
                            className="form-control disabled"
                            name="_id"
                            type="text"
                            value={state._id}
                            readOnly
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-xl-3 col-lg-3 col-form-label">
                          First Name
                        </label>
                        <div className="col-lg-9 col-xl-6">
                          <input
                            className="form-control"
                            type="text"
                            name="firstName"
                            value={state.firstName}
                            onChange={handleChangle}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-xl-3 col-lg-3 col-form-label">
                          Last Name
                        </label>
                        <div className="col-lg-9 col-xl-6">
                          <input
                            className="form-control"
                            type="text"
                            name="lastName"
                            value={state.lastName}
                            onChange={handleChangle}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-xl-3 col-lg-3 col-form-label">
                          Bio
                        </label>
                        <div className="col-lg-9 col-xl-6">
                          <CKEditor
                            editor={ClassicEditor}
                            data={state.bio}
                            onChange={(event, editor) => setState({ ...state, bio: editor.getData() })}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="kt-portlet__foot">
                  <div className="kt-form__actions">
                    <div className="row">
                      <div className="col-lg-3 col-xl-3" />
                      <div className="col-lg-9 col-xl-9">
                        <button
                          type="submit"
                          className="btn btn-success w-25 mr-5">
                          Save
                        </button>
                        <button
                          type="reset"
                          className="btn btn-secondary w-25"
                          onClick={() => setState({
                            imageURL: userState.user.imageURL,
                            _id: userState.user._id,
                            firstName: userState.user.firstName,
                            lastName: userState.user.lastName,
                            bio: userState.user.bio,
                          })}>
                          Reset
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userState: state.userState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showLoadingAction: bindActionCreators(showLoading, dispatch),
    hideLoadingAction: bindActionCreators(hideLoading, dispatch),
    updateUserAction: bindActionCreators(updateUser, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(ProfileInformation));
