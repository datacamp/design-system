import React from 'react';
import { Page } from 'catalog';

export default () => {
  return (
    <section className="dc-card dc-u-p-none dc-u-fx">

      <div className="dc-u-p-32">
        <h4>Content</h4>
        <p>Learn how to use language to design a more thoughtful product experience.</p>
        <a className="dc-btn dc-btn--inline" href="#">
          View content guidelines
            <span className="dc-icon dc-icon--size-12 dc-u-ml-8">
            <svg className="dc-icon__svg">
              <use xlinkHref="#arrow_2_right" />
            </svg>
          </span>
        </a>
      </div>

      <div className="dc-u-p-32">
        <h4>Design</h4>
        <p>Find out how we approach the visual elements of our interface with purpose.</p>
      </div>

      <div className="dc-u-p-32">
        <h4>Components</h4>
        <p>Use components as building blocks as you develop new products and features.</p>
      </div>

    </section>
  );
};