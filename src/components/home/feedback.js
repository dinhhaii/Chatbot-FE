import React from 'react';
import { Link } from 'react-router-dom';

const feedback = [
  {
    imageURL: 'https://d2r55xnwy6nx47.cloudfront.net/uploads/2019/06/Aaronson_1500x2000-1290x1720.jpg',
    name: 'Nimra Fernandez',
    title: '1st Prize MasterChef Junior Vietnam',
    content:
      'All courses here are extremely diverse with many genres. In addition, the integration of Chatbot to serve the customer support system is really good and convenient, as well.',
  },
  {
    imageURL: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/102516215/original/8fa2f06ee5c29c806bcb1cd28b8f5a6ac80e2a07/say-anything-you-want-to-random-people.jpeg',
    name: 'Kirby Noel',
    title: 'Developer',
    content:
      'The courses here are very rewarding and quality. I have signed up for a Java programming course, the instructors and the supporters are very enthusiastic. In the future I would continue to register for a few more courses and always support Hacademy.',
  },
  {
    imageURL: 'https://pbs.twimg.com/media/DZotU1hW0AEDN5F?format=jpg&name=medium',
    name: 'Courtney Clifford',
    title: 'IT Engineer',
    content:
      "As an employee, I dont have extra time to go to the teaching center/institution. Therefore I chose to study online on Hacademy and they didn't disappoint me. An interesting thing here is that we can get online advice about the learning paths from Chatbot.",
  },
  {
    imageURL: 'https://instagram.fsgn5-3.fna.fbcdn.net/v/t51.2885-15/e35/46763665_199432781005498_2907469645428710769_n.jpg?_nc_ht=instagram.fsgn5-3.fna.fbcdn.net&_nc_cat=110&_nc_ohc=sbZIbPULoFEAX-vRIWt&oh=3e4c7fdf96a1fcfe3811321183ea36f7&oe=5EDBBAE2',
    name: 'Ayman Holli',
    title: 'Professor of Linguistics',
    content:
      'I rate the courses here 9/10 with extremely enthusiastic and dedicated teachers and the lessons are also well-prepared. Integrated Chatbot system has saved a lot of costs. However, Chatbot still needs to be improved more.',
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
                    <img style={{ width: '100%', height: 200 }} src={data.imageURL} alt="" />
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
