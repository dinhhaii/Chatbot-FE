import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGE_URL } from '../../utils/constant';

const feedback = [
  {
    imageURL: '',
    name: 'Tran Vi Hung',
    title: '1st Prize MasterChef Junior Vietnam',
    content:
      'All courses here are extremely diverse with many genres. In addition, the integration of Chatbot to serve the customer support system is also really good and convenient.',
  },
  {
    imageURL: '',
    name: 'Nguyen Duy Hau',
    title: 'Developer',
    content:
      'The courses here are very rewarding and quality. I have signed up for a Java programming course, the instructors and supporters are very enthusiastic. In the future I will continue to register a few more courses and always support Udema.',
  },
  {
    imageURL: '',
    name: 'Ngo Minh Hoa',
    title: 'IT Engineer',
    content:
      "As an office worker, the time to go to the teaching center is unavailable. So I chose to study online at Udema and the course here didn't disappoint me. An interesting thing here is that we can get online advice about the learning route from Chatbot.",
  },
  {
    imageURL: '',
    name: 'Lam Tae Hoon',
    title: 'Professor of Linguistics',
    content:
      'I rate the courses here 9/10 with extremely enthusiastic and dedicated teachers, the lessons are invested a lot. Integrated Chatbot system will save a lot of costs. However, Chatbot still needs to be improved more.',
  },
];

const Feedback = () => {
  return (
    <div className="bg_color_1">
      <div className="container margin_120_95">
        <div className="main_title_2">
          <span>
            <em />
          </span>
          <h2>Feedback from learners</h2>
        </div>
        <div className="row">
          {feedback.map((data, index) => {
            return (
              <div className="col-lg-6" key={index.toString()}>
                <Link className="box_news" to="/">
                  <figure>
                    <img src={IMAGE_URL.BACKGROUND_2} alt="" />
                  </figure>
                  <ul>
                    <li>{data.title}</li>
                  </ul>
                  <h4>{data.name}</h4>
                  <p>{data.content}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
