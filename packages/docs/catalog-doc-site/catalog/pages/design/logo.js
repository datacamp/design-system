/* @jsx jsx */
import { jsx } from '@emotion/core';
import { Page } from 'catalog';
import React from 'react';

import CustomHeader from '../../components/CustomHeader';

export default () => {
  return (
    <main>
      <CustomHeader
        section="Design"
        subSection="Logo"
        description="Our logo is the heart of our brand, treat it with respect or talk to our lawyers."
      />

      <Page>
        <section className="dc-u-fx dc-u-mb-16 dc-u-w-100pc">
          <div className="dc-card" css={{ flex: '1 1 0', padding: 24 }}>
            <h5 className="dc-u-m-none">Regular</h5>
            <div className="dc-card dc-card--bordered dc-u-p-24 dc-u-mv-16">
              <img
                src="/logo/regular.svg"
                alt="DataCamp Logo – Regular"
                className="dc-u-d-b"
                css={{ margin: '0 auto' }}
              />
            </div>
            <p className="dc-u-m-none" css={{ minHeight: '96px' }}>
              To be used in any full display mockups where space allows. This is
              the preferable display.
            </p>
            <a
              className="dc-btn dc-btn--inline dc-u-mt-8"
              href="/logo/regular.zip"
            >
              Download EPS, SVG, PNG
              <span className="dc-icon dc-icon--size-12 dc-icon--flex dc-u-ml-8">
                <svg className="dc-icon__svg">
                  <use xlinkHref="#download" />
                </svg>
              </span>
            </a>
          </div>

          <div
            className="dc-card"
            css={{ flex: '1 1 0', marginLeft: 16, padding: 24 }}
          >
            <h5 className="dc-u-m-none">Inverted</h5>
            <div className="dc-u-bgc-primary-dark dc-u-brad-all dc-u-p-24 dc-u-mv-16">
              <img
                src="/logo/inverted.svg"
                alt="DataCamp Logo – Inverted"
                className="dc-u-d-b"
                css={{ margin: '0 auto' }}
              />
            </div>
            <p className="dc-u-m-none" css={{ minHeight: '96px' }}>
              To be used in any full display mockups where space allows. This is
              the preferable display if the background is too dark.
            </p>
            <a
              className="dc-btn dc-btn--inline dc-u-mt-8"
              href="/logo/inverted.zip"
            >
              Download EPS, SVG, PNG
              <span className="dc-icon dc-icon--size-12 dc-icon--flex dc-u-ml-8">
                <svg className="dc-icon__svg">
                  <use xlinkHref="#download" />
                </svg>
              </span>
            </a>
          </div>

          <div
            className="dc-card"
            css={{ flex: '1 1 0', marginLeft: 16, padding: 24 }}
          >
            <h5 className="dc-u-m-none">Monochrome</h5>
            <div className="dc-card dc-card--bordered dc-u-p-24 dc-u-mv-16">
              <img
                src="/logo/monochrome.svg"
                alt="DataCamp Logo – Monochrome"
                className="dc-u-d-b"
                css={{ margin: '0 auto' }}
              />
            </div>
            <p className="dc-u-m-none" css={{ minHeight: '96px' }}>
              Use this logo only when you have no other choice. Used as
              watermark.
            </p>
            <a
              className="dc-btn dc-btn--inline dc-u-mt-8"
              href="/logo/monochrome.zip"
            >
              Download EPS, SVG, PNG
              <span className="dc-icon dc-icon--size-12 dc-icon--flex dc-u-ml-8">
                <svg className="dc-icon__svg">
                  <use xlinkHref="#download" />
                </svg>
              </span>
            </a>
          </div>
        </section>

        <section className="dc-u-fx dc-u-w-100pc">
          <div className="dc-card" css={{ flex: '1 1 0', padding: 24 }}>
            <h5 className="dc-u-m-none">Icon</h5>
            <div className="dc-card dc-card--bordered dc-u-p-24 dc-u-mv-16">
              <img
                src="/logo/icon.svg"
                alt="DataCamp Logo – Icon"
                className="dc-u-d-b"
                css={{ margin: '0 auto' }}
              />
            </div>
            <p className="dc-u-m-none" css={{ minHeight: '48px' }}>
              To be used as an avatar or watermark, also used for Enterprise
              plans.
            </p>
            <a
              className="dc-btn dc-btn--inline dc-u-mt-8"
              href="/logo/icon.zip"
            >
              Download EPS, SVG, PNG
              <span className="dc-icon dc-icon--size-12 dc-icon--flex dc-u-ml-8">
                <svg className="dc-icon__svg">
                  <use xlinkHref="#download" />
                </svg>
              </span>
            </a>
          </div>

          <div
            className="dc-card"
            css={{ flex: '1 1 0', marginLeft: 16, padding: 24 }}
          >
            <h5 className="dc-u-m-none">Icon Monochrome</h5>
            <div className="dc-card dc-card--bordered dc-u-p-24 dc-u-mv-16">
              <img
                src="/logo/icon-monochrome.svg"
                alt="DataCamp Logo – Icon Monochrome"
                className="dc-u-d-b"
                css={{ margin: '0 auto' }}
              />
            </div>
            <p className="dc-u-m-none" css={{ minHeight: '48px' }}>
              To be used as an avatar or watermark.
            </p>
            <a
              className="dc-btn dc-btn--inline dc-u-mt-8"
              href="/logo/icon-monochrome.zip"
            >
              Download EPS, SVG, PNG
              <span className="dc-icon dc-icon--size-12 dc-icon--flex dc-u-ml-8">
                <svg className="dc-icon__svg">
                  <use xlinkHref="#download" />
                </svg>
              </span>
            </a>
          </div>
          <div
            className="dc-card"
            css={{
              flex: '1 1 0',
              marginLeft: 16,
              padding: 24,
              visibility: 'hidden',
            }}
          />
        </section>

        <h4 className="dc-u-mt-32 dc-u-mb-16">Business Logo&apos;s</h4>

        <section className="dc-u-fx dc-u-w-100pc">
          <div className="dc-card" css={{ flex: '1 1 0', padding: 24 }}>
            <h5 className="dc-u-m-none">Regular</h5>
            <div className="dc-card dc-card--bordered dc-u-p-24 dc-u-mv-16">
              <img
                src="/logo/business-regular.svg"
                alt="DataCamp Business Logo – Regular"
                className="dc-u-d-b"
                css={{ margin: '0 auto' }}
              />
            </div>
            <a
              className="dc-btn dc-btn--inline dc-u-mt-8"
              href="/logo/business-regular.zip"
            >
              Download EPS, SVG, PNG
              <span className="dc-icon dc-icon--size-12 dc-icon--flex dc-u-ml-8">
                <svg className="dc-icon__svg">
                  <use xlinkHref="#download" />
                </svg>
              </span>
            </a>
          </div>

          <div
            className="dc-card"
            css={{ flex: '1 1 0', marginLeft: 16, padding: 24 }}
          >
            <h5 className="dc-u-m-none">Inverted</h5>
            <div className="dc-u-bgc-primary-dark dc-u-brad-all dc-u-p-24 dc-u-mv-16">
              <img
                src="/logo/business-inverted.svg"
                alt="DataCamp Business Logo – Inverted"
                className="dc-u-d-b"
                css={{ margin: '0 auto' }}
              />
            </div>
            <a
              className="dc-btn dc-btn--inline dc-u-mt-8"
              href="/logo/business-inverted.zip"
            >
              Download EPS, SVG, PNG
              <span className="dc-icon dc-icon--size-12 dc-icon--flex dc-u-ml-8">
                <svg className="dc-icon__svg">
                  <use xlinkHref="#download" />
                </svg>
              </span>
            </a>
          </div>

          <div
            className="dc-card"
            css={{ flex: '1 1 0', marginLeft: 16, padding: 24 }}
          >
            <h5 className="dc-u-m-none">Monochrome</h5>
            <div className="dc-u-bgc-primary-dark dc-u-brad-all dc-u-p-24 dc-u-mv-16">
              <img
                src="/logo/business-monochrome.svg"
                alt="DataCamp Business Logo – Monochrome"
                className="dc-u-d-b"
                css={{ margin: '0 auto' }}
              />
            </div>
            <a
              className="dc-btn dc-btn--inline dc-u-mt-8"
              href="/logo/business-monochrome.zip"
            >
              Download EPS, SVG, PNG
              <span className="dc-icon dc-icon--size-12 dc-icon--flex dc-u-ml-8">
                <svg className="dc-icon__svg">
                  <use xlinkHref="#download" />
                </svg>
              </span>
            </a>
          </div>
        </section>
      </Page>
    </main>
  );
};
