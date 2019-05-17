import React from 'react';
/* @jsx jsx */
import { jsx } from '@emotion/core'; // eslint-disable-line no-unused-vars
import { Page } from 'catalog';

const BarStyle = {
  margin: '-173px 0 0 0',
};

const ContainerStyle = {
  margin: '0 30px 0 40px',
  maxWidth: '1024px',
};

export default () => {
  return (
    <main>
      <header className="dc-u-bgg-chambray-cloudburst dc-u-pt-96 dc-u-pb-128">
        <div style={ContainerStyle}>
          <h1 className="dc-u-color-white dc-u-mt-0">
            Waffles is DataCamp&apos;s Design System
          </h1>
          <p className="dc-u-color-white dc-u-mb-64 dc-u-maxw-640">
            Waffles provides all the tools you need to build wonderful
            experiences that look, feel, sound and smell like DataCamp. They are
            also our favourite snack.
          </p>
        </div>
      </header>

      <Page>
        <section className="dc-card dc-u-p-none dc-u-fx" style={BarStyle}>
          <div className="dc-u-p-32">
            <img src="/illustration-content.svg" alt="" className="dc-u-mb-8" />
            <h4>Content</h4>
            <p className="dc-u-mt-0">
              Learn about how we use language to create a thoughtful experience.
            </p>
            <a className="dc-btn dc-btn--inline" href="/content">
              View Content Guidelines
              <span className="dc-icon dc-icon--size-12 dc-icon--flex dc-u-ml-8">
                <svg className="dc-icon__svg">
                  <use xlinkHref="#arrow_2_right" />
                </svg>
              </span>
            </a>
          </div>

          <div className="dc-u-bl dc-u-p-32">
            <img src="/illustration-design.svg" alt="" className="dc-u-mb-8" />
            <h4>Design</h4>
            <p className="dc-u-mt-0">
              Explore the visual elements we use to identify ourselves as a
              company.
            </p>
            <a className="dc-btn dc-btn--inline" href="/design/logo">
              View Design Guidelines
              <span className="dc-icon dc-icon--size-12 dc-icon--flex dc-u-ml-8">
                <svg className="dc-icon__svg">
                  <use xlinkHref="#arrow_2_right" />
                </svg>
              </span>
            </a>
          </div>

          <div className="dc-u-bl dc-u-p-32">
            <img
              src="/illustration-component.svg"
              alt=""
              className="dc-u-mb-8"
            />
            <h4>Component Library</h4>
            <p className="dc-u-mt-0">
              Use components as building blocks as you develop new products and
              features.
            </p>
            <a className="dc-btn dc-btn--inline" href="/components">
              Explore Component Library
              <span className="dc-icon dc-icon--size-12 dc-icon--flex dc-u-ml-8">
                <svg className="dc-icon__svg">
                  <use xlinkHref="#arrow_2_right" />
                </svg>
              </span>
            </a>
          </div>
        </section>

        <article
          className="dc-card"
          css={{ width: '65%', padding: '32px', marginTop: '24px' }}
        >
          <h5 className="dc-chapeau-title dc-u-color-grey">What&apos;s New</h5>
          <h3 className="dc-u-mt-16 dc-u-mb-0">The Future of Tokens</h3>
          <p>
            A new article on design tokens has been published.{' '}
            <a href="/articles/01-tokens">The future of tokens</a> talks about
            how design tokens are used within Waffles, and what the future
            vision is for the <code>@datacamp/waffles-tokens</code> package.
          </p>
          <a className="dc-btn dc-btn--inline" href="/articles/01-tokens">
            Read Full Article
            <span className="dc-icon dc-icon--size-12 dc-icon--flex dc-u-ml-8">
              <svg className="dc-icon__svg">
                <use xlinkHref="#arrow_2_right" />
              </svg>
            </span>
          </a>
        </article>
      </Page>
    </main>
  );
};
