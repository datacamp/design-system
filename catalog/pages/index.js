import React from 'react';
import { Page } from 'catalog';

const BarStyle = {
  margin: '-173px 0 0 0'
};

const ContainerStyle = {
  margin: '0 30px 0 40px',
  maxWidth: '1024px'
}

export default () => {
  return (
    <main>
      <header className="dc-u-bgg-chambray-cloudburst dc-u-pt-96 dc-u-pb-128">
        <div style={ContainerStyle}>
          <h1 className="dc-u-color-white dc-u-mt-0">Meet Waffles, our Design System.</h1>
          <p className="dc-u-color-white dc-u-mb-64">Our design system helps us work together to build a great experience for all students & instructors. Our design system contains guidelines and components to create a unified experience.</p>
        </div>
      </header>

      <Page>
        
        <section className="dc-card dc-u-p-none dc-u-fx" style={BarStyle}>

          <div className="dc-u-p-32">     
            <img src='illustration-content.svg' />
            <h4>Content</h4>
            <p>Learn how to use language to design a more thoughtful product experience.</p>
            <a className="dc-btn dc-btn--inline" href="/content">
              View content guidelines
                <span className="dc-icon dc-icon--size-12 dc-icon--flex dc-u-ml-8">
                  <svg className="dc-icon__svg">
                    <use xlinkHref="#arrow_2_right" />
                  </svg>
                </span>
            </a>
          </div>

          <div className="dc-u-bl dc-u-p-32">
            <img src='illustration-design.svg' />
            <h4>Design</h4>
            <p>Find out how we approach the visual elements of our interface with purpose.</p>
            <a className="dc-btn dc-btn--inline" href="/design">
              View design guidelines
                <span className="dc-icon dc-icon--size-12 dc-icon--flex dc-u-ml-8">
                  <svg className="dc-icon__svg">
                    <use xlinkHref="#arrow_2_right" />
                  </svg>
                </span>
            </a>
          </div>

          <div className="dc-u-bl dc-u-p-32">
            <img src='illustration-component.svg' />
            <h4>Components</h4>
            <p>Use components as building blocks as you develop new products and features.</p>
            <a className="dc-btn dc-btn--inline" href="/components">
              View components
                <span className="dc-icon dc-icon--size-12 dc-icon--flex dc-u-ml-8">
                  <svg className="dc-icon__svg">
                    <use xlinkHref="#arrow_2_right" />
                  </svg>
                </span>
            </a>
          </div>

        </section>

        <article className="dc-card dc-u-mt-24 dc-u-p-32">

          <h5 className="dc-chapeau-title dc-u-color-grey">What's New</h5>

          <h3>Waffles Alpha Pre-release</h3>
          <p className="dc-u-mt-8">New Design and Component sections, with documentation in a WIP state.</p>
        
        </article>

      </Page>
    </main>
  );
};