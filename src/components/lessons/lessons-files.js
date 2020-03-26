import React from 'react';
import { Link } from 'react-router-dom';

const LessonFile = () => {
  return (
    <section id="lessons">
      <div className="intro_title">
        <h2>Documents</h2>
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
                <i className="indicator ti-minus" /> Year 1
              </Link>
            </h5>
          </div>

          <div
            id="collapseOne"
            className="collapse show"
            role="tabpanel"
            aria-labelledby="headingOne">
            <div className="card-body">
              <h6>Semester 1</h6>
              <div className="list_lessons_2">
                <ul>
                  <li>
                    Health Science
                    <span>
                      <Link href="#0">
                        <i className="icon_download" /> PDF
                      </Link>
                    </span>
                  </li>
                  <li>
                    Health and Social Care
                    <span>
                      <Link href="#0">
                        <i className="icon_download" /> PDF
                      </Link>
                    </span>
                  </li>
                  <li>
                    History
                    <span>
                      <Link href="#0">
                        <i className="icon_download" /> PDF
                      </Link>
                    </span>
                  </li>
                  <li>
                    Healthcare Science
                    <span>
                      <Link href="#0">
                        <i className="icon_download" /> PDF
                      </Link>
                    </span>
                  </li>
                  <li>
                    Audiology
                    <span>
                      <Link href="#0">
                        <i className="icon_download" /> PDF
                      </Link>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

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
                Year 2
              </Link>
            </h5>
          </div>
          <div
            id="collapseTwo"
            className="collapse"
            role="tabpanel"
            aria-labelledby="headingTwo">
            <div className="card-body">
              <p>
                Lorem ipsum dolor sit amet, pro ea{' '}
                <strong>mediocrem sapientem</strong>. Et his copiosae vivendum,
                corpora contentiones vel ei. Ne etiam graecis vis. Nec omnis
                alienum no, in quas corpora inimicus his, nec pertinacia
                disputando voluptatibus ei. In eam suas perpetua accusamus. Ad
                sit virtute rationibus efficiantur, sed hinc explicari ea.
              </p>
              <h6>Semester 1</h6>
              <div className="list_lessons_2">
                <ul>
                  <li>
                    Health Science
                    <span>
                      <Link href="#0">
                        <i className="icon_download" /> PDF
                      </Link>
                    </span>
                  </li>
                  <li>
                    Health and Social Care
                    <span>
                      <Link href="#0">
                        <i className="icon_download" /> PDF
                      </Link>
                    </span>
                  </li>
                  <li>
                    History
                    <span>
                      <Link href="#0">
                        <i className="icon_download" /> PDF
                      </Link>
                    </span>
                  </li>
                  <li>
                    Healthcare Science
                    <span>
                      <Link href="#0">
                        <i className="icon_download" /> PDF
                      </Link>
                    </span>
                  </li>
                  <li>
                    Audiology
                    <span>
                      <Link href="#0">
                        <i className="icon_download" /> PDF
                      </Link>
                    </span>
                  </li>
                </ul>
              </div>
              <h6>Semester 2</h6>
              <div className="list_lessons_2">
                <ul>
                  <li>
                    Health Science
                    <span>
                      <Link href="#0">
                        <i className="icon_download" /> PDF
                      </Link>
                    </span>
                  </li>
                  <li>
                    Health and Social Care
                    <span>
                      <Link href="#0">
                        <i className="icon_download" /> PDF
                      </Link>
                    </span>
                  </li>
                  <li>
                    History
                    <span>
                      <Link href="#0">
                        <i className="icon_download" /> PDF
                      </Link>
                    </span>
                  </li>
                  <li>
                    Healthcare Science
                    <span>
                      <Link href="#0">
                        <i className="icon_download" /> PDF
                      </Link>
                    </span>
                  </li>
                  <li>
                    Audiology
                    <span>
                      <Link href="#0">
                        <i className="icon_download" /> PDF
                      </Link>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

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
                Year 3
              </Link>
            </h5>
          </div>
          <div
            id="collapseThree"
            className="collapse"
            role="tabpanel"
            aria-labelledby="headingThree">
            <div className="card-body">
              <p>
                Lorem ipsum dolor sit amet, pro ea{' '}
                <strong>mediocrem sapientem</strong>. Et his copiosae vivendum,
                corpora contentiones vel ei. Ne etiam graecis vis. Nec omnis
                alienum no, in quas corpora inimicus his, nec pertinacia
                disputando voluptatibus ei. In eam suas perpetua accusamus. Ad
                sit virtute rationibus efficiantur, sed hinc explicari ea.
              </p>
              <h6>Semester 1</h6>
              <div className="list_lessons_2">
                <ul>
                  <li>
                    Health Science
                    <span>
                      <Link href="#0">
                        <i className="icon_download" /> PDF
                      </Link>
                    </span>
                  </li>
                  <li>
                    Health and Social Care
                    <span>
                      <Link href="#0">
                        <i className="icon_download" /> PDF
                      </Link>
                    </span>
                  </li>
                  <li>
                    History
                    <span>
                      <Link href="#0">
                        <i className="icon_download" /> PDF
                      </Link>
                    </span>
                  </li>
                  <li>
                    Healthcare Science
                    <span>
                      <Link href="#0">
                        <i className="icon_download" /> PDF
                      </Link>
                    </span>
                  </li>
                  <li>
                    Audiology
                    <span>
                      <Link href="#0">
                        <i className="icon_download" /> PDF
                      </Link>
                    </span>
                  </li>
                </ul>
              </div>
              <h6>Semester 2</h6>
              <div className="list_lessons_2">
                <ul>
                  <li>
                    Health Science
                    <span>
                      <Link href="#0">
                        <i className="icon_download" /> PDF
                      </Link>
                    </span>
                  </li>
                  <li>
                    Health and Social Care
                    <span>
                      <Link href="#0">
                        <i className="icon_download" /> PDF
                      </Link>
                    </span>
                  </li>
                  <li>
                    History
                    <span>
                      <Link href="#0">
                        <i className="icon_download" /> PDF
                      </Link>
                    </span>
                  </li>
                  <li>
                    Healthcare Science
                    <span>
                      <Link href="#0">
                        <i className="icon_download" /> PDF
                      </Link>
                    </span>
                  </li>
                  <li>
                    Audiology
                    <span>
                      <Link href="#0">
                        <i className="icon_download" /> PDF
                      </Link>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LessonFile;
