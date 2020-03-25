import React from 'react';
import { Link } from 'react-router-dom';

const CoursePurchase = () => {
  return (
    <aside className="col-lg-4" id="sidebar">
      <div className="box_detail">
        <figure>
          <Link
            href="https://www.youtube.com/watch?v=LDgd_gUcqCw"
            class="video">
            <i className="arrow_triangle-right" />
            <img
              src="http://via.placeholder.com/800x533/ccc/fff/course_1.jpg"
              alt=""
              className="img-fluid"
            />
            <span>View course preview</span>
          </Link>
        </figure>
        <div className="price">
          $29
          <span className="original_price">
            <em>$49</em>60% discount price
          </span>
        </div>
        <Link href="cart-1.html" class="btn_1 full-width">
          Purchase
        </Link>
        <Link href="#0" class="btn_1 full-width outline">
          <i className="icon_heart" /> Add to wishlist
        </Link>
        <div id="list_feat">
          <h3>What&apos;s includes</h3>
          <ul>
            <li>
              <i className="icon_mobile" />
              Mobile support
            </li>
            <li>
              <i className="icon_archive_alt" />
              Lesson archive
            </li>
            <li>
              <i className="icon_mobile" />
              Mobile support
            </li>
            <li>
              <i className="icon_chat_alt" />
              Tutor chat
            </li>
            <li>
              <i className="icon_document_alt" />
              Course certificate
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default CoursePurchase;
