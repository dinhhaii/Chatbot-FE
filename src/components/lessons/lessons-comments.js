import React from 'react';
import moment from 'moment';
import { capitalize } from '../../utils/helper';

const LessonComment = (props) => {
  const { comments } = props;
  if (comments) {
    return (
      <section id="reviews">
        <div className="reviews-container">
          {comments.map((comment, index) => {
            if (comment.isDelete) {
              return false;
            }
            return (
              <div className="review-box clearfix" key={index.toString()}>
                <figure className="rev-thumb">
                  <img src={comment.user.imageURL} alt="" />
                </figure>
                <div className="rev-content">
                  <div className="rev-info">
                    {`${capitalize(comment.user.firstName)} ${capitalize(
                      comment.user.lastName,
                    )} - ${moment(comment.createdAt).format('LLLL')}`}
                  </div>
                  <div className="rev-text">
                    <p>{comment.content}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
};

export default LessonComment;
