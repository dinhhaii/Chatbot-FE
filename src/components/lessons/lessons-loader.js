import React from 'react';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const LessonLoader = ({ isLoading }) => {
  return (
    <div
      style={{
        backgroundImage: 'url(/img/bg-black70.png)',
        display: `${isLoading ? 'block' : 'none'}`,
        position: 'fixed',
        zIndex: 1000,
        height: `${100}%`,
        width: `${100}%`,
      }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: `${80}px`,
        }}>
        <Loader
          visible="true"
          type="Oval"
          color="#00BFFF"
          height={100}
          width={100}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(LessonLoader);
