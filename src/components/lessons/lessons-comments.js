/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { capitalize, calculateTimeTilNow, formatDateToString2 } from '../../utils/helper';
import { createComment } from '../../actions/comment';
import { PATH, IMAGE_URL } from '../../utils/constant';

const LessonComment = (props) => {
  const { idLesson, comments, userState, history } = props;
  const revComments = comments.slice().reverse();
  const dataPerPage = 5;

  const [state, setState] = useState({
    content: '',
    _idUser: userState.user && userState.user._id,
    _idLesson: idLesson,
  });

  const [pagination, setPagination] = useState({
    indexLast: dataPerPage,
    currentPage: 1,
    totalPage: Math.ceil(revComments.length / dataPerPage),
    data: revComments.slice(0, dataPerPage),
  });

  const choosePage = (page) => {
    console.log(revComments);
    const indexLast = page * dataPerPage;
    const currentPage = page;
    const data = revComments.slice(0, indexLast);

    setPagination({
      ...pagination,
      indexLast,
      currentPage,
      data,
    });
  };

  const handleWriteComment = (e) => {
    if (state.content !== '' || !state.content) {
      props.createCommentAction(state);
      setState({ ...state, content: '' });
      history.push(`${PATH.LESSON_DETAIL}/${state._idLesson}`);
    }
  };

  const handleChange = e => {
    setState({ ...state, content: e.target.value });
  };

  if (comments) {
    return (
      <section id="reviews">
        <div className="form-group row mb-5">
          <img className="col-3 w-100" style={{ height: 50 }} src={userState.user ? userState.user.imageURL : IMAGE_URL.NO_AVATAR} alt="" />
          <textarea
            className="form-control col-9"
            name="content" 
            id="comment"
            rows="3"
            value={state.content}
            onKeyPress={e => {
              if (e.which === 13 && !e.shiftKey) {
                e.preventDefault();
                handleWriteComment();
              }
            }}
            onChange={handleChange}
            placeholder="Write a comment ..." />
        </div>
        <div className="reviews-container">
          {pagination.data.map((comment, index) => {
            if (comment.isDelete) {
              return null;
            }
            const time = calculateTimeTilNow(comment.createdAt);
            const createdDate = formatDateToString2(comment.createdAt);

            return (
              <div className="review-box clearfix" key={index.toString()}>
                <figure className="rev-thumb">
                  <img src={comment.user.imageURL} alt="" />
                </figure>
                <div className="rev-content">
                  <div className="rev-info">
                    {`${capitalize(comment.user.firstName)} ${capitalize(
                      comment.user.lastName,
                    )} - ${time.includes('d') ? createdDate : `${time} ago`}`}
                  </div>
                  <div className="rev-text">
                    <p>{comment.content}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button
          className="btn btn-primary w-100" 
          onClick={() => choosePage(pagination.currentPage + 1)}
          disabled={pagination.currentPage >= pagination.totalPage}>Load more
        </button>
      </section>
    );
  }
  return null;
};

const mapStateToProps = (state) => {
  return {
    userState: state.userState,
    commentState: state.commentState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createCommentAction: bindActionCreators(createComment, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LessonComment));
