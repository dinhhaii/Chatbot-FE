/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const CourseLectureDetail = () => {
  return ( 
    <main>
      <section id="hero_in" className="general">
        <div className="wrapper">
          <div className="container">
            <h1 className="fadeInUp"><span />Teacher detail</h1>
          </div>
        </div>
      </section>
      <div className="container margin_60_35">
        <div className="row">
          <aside className="col-lg-3" id="sidebar">
            <div className="profile">
              <figure><img src="http://via.placeholder.com/150x150/ccc/fff/teacher_2_small.jpg" alt="Teacher" className="rounded-circle" /></figure>
              <ul className="social_teacher">
                <li><Link href="#"><i className="icon-facebook" /></Link></li>
                <li><Link href="#"><i className="icon-twitter" /></Link></li>
                <li><Link href="#"><i className="icon-linkedin" /></Link></li>
                <li><Link href="#"><i className="icon-email" /></Link></li>
              </ul>
              <ul>
                <li>Name <span className="float-right">Silvia Doe</span> </li>
                <li>Students <span className="float-right">42</span></li>
                <li>Lessons <span className="float-right">12</span></li>
                <li>Courses <span className="float-right">15</span></li>
              </ul>
            </div>
          </aside>
 
          <div className="col-lg-9">
            <div className="box_teacher">
              <div className="indent_title_in">
                <i className="pe-7s-user" />
                <h3>Profile</h3>
                <p>Mussum ipsum cacilds, vidis litro abertis.</p>
              </div>
              <div className="wrapper_indent">
                <p>Lorem ipsum dolor sit amet, dicta oportere ad est, ea eos partem neglegentur theophrastus. Esse voluptatum duo ne, expetenda corrumpit no per, at mei nobis lucilius. No eos semper aperiri neglegentur, vis noluisse quaestio no. Vix an nostro inimicus, qui ut animal fabellas reprehendunt. In quando repudiare intellegebat sed, nam suas dicta melius ea.</p>
                <p>Mei ut decore accusam consequat, alii dignissim no usu. Phaedrum intellegat sit ut, no pri mutat eirmod. In eum iriure perpetua adolescens, pri dicunt prodesset et. Vis dicta postulant ad.</p>
                <h5>Credentials</h5>
                <p>Lorem ipsum dolor sit amet, dicta oportere ad est, ea eos partem neglegentur theophrastus. Esse voluptatum duo ne, expetenda corrumpit no per, at mei nobis lucilius. No eos semper aperiri neglegentur, vis noluisse quaestio no. Vix an nostro inimicus, qui ut animal fabellas reprehendunt. In quando repudiare intellegebat sed, nam suas dicta melius ea.</p>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="list_3">
                      <li><strong>September 2009 - Bachelor Degree in Economics</strong>
                        <p>University of Cambrige - United Kingdom</p>
                      </li>
                      <li><strong>December 2012 - Master course in Economics</strong>
                        <p>University of Cambrige - United Kingdom</p>
                      </li>
                      <li><strong>October 2013 - Master&apos;s Degree in Statistic</strong>
                        <p>University of Oxford - United Kingdom</p>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="list_3">
                      <li><strong>September 2009 - Bachelor Degree in Economics</strong>
                        <p>University of Cambrige - United Kingdom</p>
                      </li>
                      <li><strong>December 2012 - Master course in Economics</strong>
                        <p>University of Cambrige - United Kingdom</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <hr className="styled_2" />
              <div className="indent_title_in">
                <i className="pe-7s-display1" />
                <h3>My courses</h3>
                <p>Mussum ipsum cacilds, vidis litro abertis.</p>
              </div>
              <div className="wrapper_indent">
                <p>Mei ut decore accusam consequat, alii dignissim no usu. Phaedrum intellegat sit ut, no pri mutat eirmod. In eum iriure perpetua adolescens, pri dicunt prodesset et. Vis dicta postulant ad.</p>
                <table className="table table-responsive table-striped add_bottom_30">
                  <thead>
                    <tr>
                      <th>Category</th>
                      <th>Course name</th>
                      <th>Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Business</td>
                      <td><Link href="#">Business Plan</Link></td>
                      <td className="rating"><i className="icon-star voted" /><i className="icon-star voted" /><i className="icon-star voted" /><i className="icon-star voted" /> <i className="icon-star voted" /></td>
                    </tr>
                    <tr>
                      <td>Business</td>
                      <td><Link href="#">Economy pinciples</Link></td>
                      <td className="rating"><i className="icon-star voted" /><i className="icon-star voted" /><i className="icon-star voted" /><i className="icon-star" /> <i className="icon-star" /></td>
                    </tr>
                    <tr>
                      <td>Business</td>
                      <td><Link href="#">Understand diagrams</Link></td>
                      <td className="rating"><i className="icon-star voted" /><i className="icon-star voted" /><i className="icon-star voted" /><i className="icon-star voted" /> <i className="icon-star" /></td>
                    </tr>
                    <tr>
                      <td>Business</td>
                      <td><Link href="#">Marketing strategies</Link></td>
                      <td className="rating"><i className="icon-star voted" /><i className="icon-star voted" /><i className="icon-star voted" /><i className="icon-star voted" /> <i className="icon-star" /></td>
                    </tr>
                    <tr>
                      <td>Business</td>
                      <td><Link href="#">Marketing</Link></td>
                      <td className="rating"><i className="icon-star voted" /><i className="icon-star voted" /><i className="icon-star voted" /><i className="icon-star voted" /> <i className="icon-star voted" /></td>
                    </tr>
                    <tr>
                      <td>Business</td>
                      <td><Link href="#">Business Plan</Link></td>
                      <td className="rating"><i className="icon-star voted" /><i className="icon-star voted" /><i className="icon-star voted" /><i className="icon-star" /> <i className="icon-star" /></td>
                    </tr>
                    <tr>
                      <td>Business</td>
                      <td><Link href="#">Economy pinciples</Link></td>
                      <td className="rating"><i className="icon-star voted" /><i className="icon-star voted" /><i className="icon-star voted" /><i className="icon-star voted" /> <i className="icon-star" /></td>
                    </tr>
                    <tr>
                      <td>Business</td>
                      <td><Link href="#">Understand diagrams</Link></td>
                      <td className="rating"><i className="icon-star voted" /><i className="icon-star voted" /><i className="icon-star voted" /><i className="icon-star voted" /> <i className="icon-star" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CourseLectureDetail;
