/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'nuka-carousel';

const About = () => {
  return (
    <main>
      <section id="hero_in" className="general">
        <div className="wrapper">
          <div className="container">
            <h1 className="fadeInUp">
              <span />About Hacademy
            </h1>
          </div>
        </div>
      </section>

      <div className="container margin_120_95">
        <div className="main_title_2">
          <span>
            <em />
          </span>
          <h2>Why choose Hacademy</h2>
          <p>Here we have all the facilities that you need for your learning path.</p>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <Link className="box_feat" href="#">
              <i className="pe-7s-diamond" />
              <h3>Qualified teachers</h3>
              <p>
                There are more than 100 lecturers from the highest ranked
                universities all around the world are ready to share their knowledge.
              </p>
            </Link>
          </div>
          <div className="col-lg-4 col-md-6">
            <Link className="box_feat" href="#">
              <i className="pe-7s-display2" />
              <h3>Equiped courses</h3>
              <p>
                Individual course video quality&apos;s up to 4K Full HD,
                relevant files to each lecture and there is comment section
                for you to raise questions while studying.{' '}
              </p>
            </Link>
          </div>
          <div className="col-lg-4 col-md-6">
            <Link className="box_feat" href="#">
              <i className="pe-7s-science" />
              <h3>Advanced teaching</h3>
              <p>
                Lecturers are from the highest ranked
                universities therefore, they will guide
                you how to pace your learning path in the most efficient way.
              </p>
            </Link>
          </div>
          <div className="col-lg-4 col-md-6">
            <Link className="box_feat" href="#">
              <i className="pe-7s-rocket" />
              <h3>Adavanced study plans</h3>
              <p>
                All the lessons in each course is organized properly therefore,
                you can ackownledge where to begin and to take step by step to
                the end.{' '}
              </p>
            </Link>
          </div>
          <div className="col-lg-4 col-md-6">
            <Link class="box_feat" href="#">
              <i className="pe-7s-target" />
              <h3>Focus on target</h3>
              <p>
                Hacademy helps you concentrate on what you&apos;re studying, there
                will not be any non-related information to your course blocks
                your race to the goal.
              </p>
            </Link>
          </div>
          <div className="col-lg-4 col-md-6">
            <Link class="box_feat" href="#">
              <i className="pe-7s-graph1" />
              <h3>Amazing support team</h3>
              <p>
                We have the amazing and hard-working support team, if you have any
                problem during you session of using our site, please don&apos;t hesitate
                to contact us.
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg_color_1">
        <div className="container margin_120_95">
          <div className="main_title_2">
            <span>
              <em />
            </span>
            <h2>Our Origins and Story</h2>
            <p>Hacademy is more than a online courses website.</p>
          </div>
          <div className="row justify-content-between">
            <div className="col-lg-6 wow" data-wow-offset="150">
              <figure className="block-reveal">
                <div className="block-horizzontal" />
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/cafocc.appspot.com/o/images%2FSTEMvSTEAM.png?alt=media&token=924d8589-3838-4f14-8ab9-ddce6b64c831"
                  className="img-fluid"
                  alt=""
                />
              </figure>
            </div>
            <div className="col-lg-5">
              <p>
                It was all started in 2020, with eager to increase the educational
                quality for people and also we ackownledge that not everybody has
                time to go to learning institutions. Therefore, we decided to create
                a site which supports all types and ages of learners to have the ability
                to study at home or anywhere.{' '}
              </p>
              <p>
                Nevertheless, we have been integrating an AI Chatbot system that
                helps user to have a best and memorable experiences on our site.
              </p>
              <p>
                <em>CEO Vu Dinh Hai</em>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container margin_120_95">
        <div className="main_title_2">
          <span>
            <em />
          </span>
          <h2>Our founders</h2>
          <p>When two brilliant minds collaborate.</p>
        </div>
        <Carousel style={{ textAlign: 'center' }} slideIndex={0}>
          <div>
            <a href="#0">
              <div className="title">
                <h4><em>CEO</em></h4>
                <h5><em>Vu Dinh Hai</em></h5>
              </div><img src="https://firebasestorage.googleapis.com/v0/b/cafocc.appspot.com/o/images%2Fphineas-ceo.jpg?alt=media&token=f4badae3-3cf4-4094-ace1-c156e1257386" alt="" />
            </a>
          </div>
          <div>
            <a href="#0">
              <div className="title">
                <h4><em>Co-Founder</em></h4>
                <h5><em>Cao Thien Hoang</em></h5>
              </div><img src="https://firebasestorage.googleapis.com/v0/b/cafocc.appspot.com/o/images%2Fferb-cofounder.jpg?alt=media&token=49da2d3e-712f-439b-8785-9272def6d6aa" alt="" />
            </a>
          </div>
        </Carousel>
      </div>
    </main>
  );
};

export default About;
