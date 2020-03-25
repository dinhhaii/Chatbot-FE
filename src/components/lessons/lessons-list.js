import React from 'react';
import { Link } from 'react-router-dom';

const LessonsList = () => {
  return (
    <section id="lessons">
      <div className="intro_title">
        <h2>Lessons</h2>
        <ul>
          <li>18 lessons</li>
          <li>01:02:10</li>
        </ul>
      </div>
      <div id="accordion_lessons" role="tablist" className="add_bottom_45">
        <div className="card">
          <div className="card-header" role="tab" id="headingOne">
            <h5 className="mb-0">
              <Link
                data-toggle="collapse"
                href="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne">
                <i className="indicator ti-minus" /> Introdocution
              </Link>
            </h5>
          </div>

          <div
            id="collapseOne"
            className="collapse show"
            role="tabpanel"
            aria-labelledby="headingOne"
            data-parent="#accordion_lessons">
            <div className="card-body">
              <div className="list_lessons">
                <ul>
                  <li>
                    <Link
                      href="https://www.youtube.com/watch?v=LDgd_gUcqCw"
                      class="video">
                      Health Science
                    </Link>
                    <span>00:59</span>
                  </li>
                  <li>
                    <Link
                      href="https://www.youtube.com/watch?v=LDgd_gUcqCw"
                      class="video">
                      Health and Social Care
                    </Link>
                    <span>00:59</span>
                  </li>
                  <li>
                    <Link href="#0" class="txt_doc">
                      Audiology
                    </Link>
                    <span>00:59</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* /card */}
        <div className="card">
          <div className="card-header" role="tab" id="headingTwo">
            <h5 className="mb-0">
              <Link
                class="collapsed"
                data-toggle="collapse"
                href="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo">
                <i className="indicator ti-plus" />
                Generative Modeling Review
              </Link>
            </h5>
          </div>
          <div
            id="collapseTwo"
            className="collapse"
            role="tabpanel"
            aria-labelledby="headingTwo"
            data-parent="#accordion_lessons">
            <div className="card-body">
              <div className="list_lessons">
                <ul>
                  <li>
                    <Link
                      href="https://www.youtube.com/watch?v=LDgd_gUcqCw"
                      class="video">
                      Health Science
                    </Link>
                    <span>00:59</span>
                  </li>
                  <li>
                    <Link
                      href="https://www.youtube.com/watch?v=LDgd_gUcqCw"
                      class="video">
                      Health and Social Care
                    </Link>
                    <span>00:59</span>
                  </li>
                  <li>
                    <Link
                      href="https://www.youtube.com/watch?v=LDgd_gUcqCw"
                      class="video">
                      History
                    </Link>
                    <span>00:59</span>
                  </li>
                  <li>
                    <Link
                      href="https://www.youtube.com/watch?v=LDgd_gUcqCw"
                      class="video">
                      Healthcare Science
                    </Link>
                    <span>00:59</span>
                  </li>
                  <li>
                    <Link href="#0" class="txt_doc">
                      Audiology
                    </Link>
                    <span>00:59</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* /card */}
        <div className="card">
          <div className="card-header" role="tab" id="headingThree">
            <h5 className="mb-0">
              <Link
                class="collapsed"
                data-toggle="collapse"
                href="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree">
                <i className="indicator ti-plus" />
                Variational Autoencoders
              </Link>
            </h5>
          </div>
          <div
            id="collapseThree"
            className="collapse"
            role="tabpanel"
            aria-labelledby="headingThree"
            data-parent="#accordion_lessons">
            <div className="card-body">
              <div className="list_lessons">
                <ul>
                  <li>
                    <Link
                      href="https://www.youtube.com/watch?v=LDgd_gUcqCw"
                      class="video">
                      Health Science
                    </Link>
                    <span>00:59</span>
                  </li>
                  <li>
                    <Link
                      href="https://www.youtube.com/watch?v=LDgd_gUcqCw"
                      class="video">
                      Health and Social Care
                    </Link>
                    <span>00:59</span>
                  </li>
                  <li>
                    <Link
                      href="https://www.youtube.com/watch?v=LDgd_gUcqCw"
                      class="video">
                      History
                    </Link>
                    <span>00:59</span>
                  </li>
                  <li>
                    <Link
                      href="https://www.youtube.com/watch?v=LDgd_gUcqCw"
                      class="video">
                      Healthcare Science
                    </Link>
                    <span>00:59</span>
                  </li>
                  <li>
                    <Link href="#0" class="txt_doc">
                      Audiology
                    </Link>
                    <span>00:59</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* /card */}

        <div className="card">
          <div className="card-header" role="tab" id="headingFourth">
            <h5 className="mb-0">
              <Link
                class="collapsed"
                data-toggle="collapse"
                href="#collapseFourth"
                aria-expanded="false"
                aria-controls="collapseFourth">
                <i className="indicator ti-plus" />
                Gaussian Mixture Model Review
              </Link>
            </h5>
          </div>
          <div
            id="collapseFourth"
            className="collapse"
            role="tabpanel"
            aria-labelledby="headingFourth"
            data-parent="#accordion_lessons">
            <div className="card-body">
              <div className="list_lessons">
                <ul>
                  <li>
                    <Link
                      href="https://www.youtube.com/watch?v=LDgd_gUcqCw"
                      class="video">
                      Health Science
                    </Link>
                    <span>00:59</span>
                  </li>
                  <li>
                    <Link
                      href="https://www.youtube.com/watch?v=LDgd_gUcqCw"
                      class="video">
                      Health and Social Care
                    </Link>
                    <span>00:59</span>
                  </li>
                  <li>
                    <Link
                      href="https://www.youtube.com/watch?v=LDgd_gUcqCw"
                      class="video">
                      History
                    </Link>
                    <span>00:59</span>
                  </li>
                  <li>
                    <Link
                      href="https://www.youtube.com/watch?v=LDgd_gUcqCw"
                      class="video">
                      Healthcare Science
                    </Link>
                    <span>00:59</span>
                  </li>
                  <li>
                    <Link href="#0" class="txt_doc">
                      Audiology
                    </Link>
                    <span>00:59</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* /card */}
      </div>
      {/* /accordion */}
    </section>
  );
};

export default LessonsList;
