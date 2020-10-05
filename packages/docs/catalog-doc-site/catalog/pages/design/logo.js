/* @jsx jsx */
import { DatacampLogo } from '@datacamp/waffles-asset-components';
import { DownloadIcon } from '@datacamp/waffles-icons';
import { css, jsx } from '@emotion/core';
import { Page } from 'catalog';
import React from 'react';

import CustomHeader from '../../components/CustomHeader';
import businessInverted from '../../download/business-inverted.zip';
import businessMonochrome from '../../download/business-monochrome.zip';
import businessRegular from '../../download/business-regular.zip';
import favicons from '../../download/favicon.zip';
import iconMonochrome from '../../download/icon-monochrome.zip';
import icon from '../../download/icon.zip';
import Inverted from '../../download/Inverted.zip';
import Monochrome from '../../download/Monochrome.zip';
import Regular from '../../download/Regular.zip';

const downloadIconCss = css({ marginLeft: 8 });
const downloadIconSize = 12;

export default () => {
  return (
    <main>
      <CustomHeader
        description="Our logo is the heart of our brand, treat it with respect or talk to our lawyers."
        section="Design"
        subSection="Logo"
      />

      <Page>
        <section className="dc-u-fx dc-u-mb-16 dc-u-w-100pc">
          <div className="dc-card" css={{ flex: '1 1 0', padding: 24 }}>
            <h5 className="dc-u-m-none">Regular</h5>
            <div className="dc-card dc-card--bordered dc-u-p-24 dc-u-mv-16">
              <img
                alt="DataCamp Logo – Regular"
                className="dc-u-d-b"
                css={{ margin: '0 auto' }}
                src="/logo/regular.svg"
              />
            </div>
            <p className="dc-u-m-none" css={{ minHeight: '96px' }}>
              To be used in any full display mockups where space allows. This is
              the preferable display.
            </p>
            <a className="dc-u-mt-8" download="Regular.zip" href={Regular}>
              Download for print & web
              <DownloadIcon css={downloadIconCss} size={downloadIconSize} />
            </a>
          </div>

          <div
            className="dc-card"
            css={{ flex: '1 1 0', marginLeft: 16, padding: 24 }}
          >
            <h5 className="dc-u-m-none">Inverted</h5>
            <div className="dc-u-bgc-primary-dark dc-u-brad-all dc-u-p-24 dc-u-mv-16">
              <img
                alt="DataCamp Logo – Inverted"
                className="dc-u-d-b"
                css={{ margin: '0 auto' }}
                src="/logo/inverted.svg"
              />
            </div>
            <p className="dc-u-m-none" css={{ minHeight: '96px' }}>
              To be used in any full display mockups where space allows. This is
              the preferable display if the background is too dark.
            </p>
            <a className="dc-u-mt-8" download="Inverted.zip" href={Inverted}>
              Download for print & web
              <DownloadIcon css={downloadIconCss} size={downloadIconSize} />
            </a>
          </div>

          <div
            className="dc-card"
            css={{ flex: '1 1 0', marginLeft: 16, padding: 24 }}
          >
            <h5 className="dc-u-m-none">Monochrome</h5>
            <div className="dc-card dc-card--bordered dc-u-p-24 dc-u-mv-16">
              <img
                alt="DataCamp Logo – Monochrome"
                className="dc-u-d-b"
                css={{ margin: '0 auto' }}
                src="/logo/monochrome.svg"
              />
            </div>
            <p className="dc-u-m-none" css={{ minHeight: '96px' }}>
              Use this logo only when you have no other choice. Used as
              watermark.
            </p>
            <a
              className="dc-u-mt-8"
              download="Monochrome.zip"
              href={Monochrome}
            >
              Download for print & web
              <DownloadIcon css={downloadIconCss} size={downloadIconSize} />
            </a>
          </div>
        </section>

        <section className="dc-u-fx dc-u-w-100pc">
          <div className="dc-card" css={{ flex: '1 1 0', padding: 24 }}>
            <h5 className="dc-u-m-none">Icon</h5>
            <div className="dc-card dc-card--bordered dc-u-p-24 dc-u-mv-16">
              <img
                alt="DataCamp Logo – Icon"
                className="dc-u-d-b"
                css={{ margin: '0 auto' }}
                src="/logo/icon.svg"
              />
            </div>
            <p className="dc-u-m-none" css={{ minHeight: '48px' }}>
              To be used as an avatar or watermark, also used for Enterprise
              plans.
            </p>
            <a className="dc-u-mt-8" download="icon.zip" href={icon}>
              Download for web
              <DownloadIcon css={downloadIconCss} size={downloadIconSize} />
            </a>
          </div>

          <div
            className="dc-card"
            css={{ flex: '1 1 0', marginLeft: 16, padding: 24 }}
          >
            <h5 className="dc-u-m-none">Icon Monochrome</h5>
            <div className="dc-card dc-card--bordered dc-u-p-24 dc-u-mv-16">
              <img
                alt="DataCamp Logo – Icon Monochrome"
                className="dc-u-d-b"
                css={{ margin: '0 auto' }}
                src="/logo/icon-monochrome.svg"
              />
            </div>
            <p className="dc-u-m-none" css={{ minHeight: '48px' }}>
              To be used as an avatar or watermark.
            </p>
            <a
              className="dc-u-mt-8"
              download="icon-monochrome.zip"
              href={iconMonochrome}
            >
              Download for web
              <DownloadIcon css={downloadIconCss} size={downloadIconSize} />
            </a>
          </div>
          <div
            className="dc-card"
            css={{ flex: '1 1 0', marginLeft: 16, padding: 24 }}
          >
            <h5 className="dc-u-m-none">Favicon</h5>
            <div className="dc-card dc-card--bordered dc-u-p-24 dc-u-mv-16 dc-u-ta-center">
              <DatacampLogo />
            </div>
            <p className="dc-u-m-none" css={{ minHeight: '48px' }}>
              To be used in applications.
            </p>
            <a
              className="dc-u-mt-8"
              download="icon-monochrome.zip"
              href={favicons}
            >
              Download favicons
              <DownloadIcon css={downloadIconCss} size={downloadIconSize} />
            </a>
          </div>
        </section>

        <h4 className="dc-u-mt-32 dc-u-mb-16">Business Logo&apos;s</h4>

        <section className="dc-u-fx dc-u-w-100pc">
          <div className="dc-card" css={{ flex: '1 1 0', padding: 24 }}>
            <h5 className="dc-u-m-none">Regular</h5>
            <div className="dc-card dc-card--bordered dc-u-p-24 dc-u-mv-16">
              <img
                alt="DataCamp Business Logo – Regular"
                className="dc-u-d-b"
                css={{ margin: '0 auto' }}
                src="/logo/business-regular.svg"
              />
            </div>
            <a
              className="dc-u-mt-8"
              download="business-regular.zip"
              href={businessRegular}
            >
              Download for print & web
              <DownloadIcon css={downloadIconCss} size={downloadIconSize} />
            </a>
          </div>

          <div
            className="dc-card"
            css={{ flex: '1 1 0', marginLeft: 16, padding: 24 }}
          >
            <h5 className="dc-u-m-none">Inverted</h5>
            <div className="dc-u-bgc-primary-dark dc-u-brad-all dc-u-p-24 dc-u-mv-16">
              <img
                alt="DataCamp Business Logo – Inverted"
                className="dc-u-d-b"
                css={{ margin: '0 auto' }}
                src="/logo/business-inverted.svg"
              />
            </div>
            <a
              className="dc-u-mt-8"
              download="business-inverted.zip"
              href={businessInverted}
            >
              Download for print & web
              <DownloadIcon css={downloadIconCss} size={downloadIconSize} />
            </a>
          </div>

          <div
            className="dc-card"
            css={{ flex: '1 1 0', marginLeft: 16, padding: 24 }}
          >
            <h5 className="dc-u-m-none">Monochrome</h5>
            <div className="dc-u-bgc-primary-dark dc-u-brad-all dc-u-p-24 dc-u-mv-16">
              <img
                alt="DataCamp Business Logo – Monochrome"
                className="dc-u-d-b"
                css={{ margin: '0 auto' }}
                src="/logo/business-monochrome.svg"
              />
            </div>
            <a
              className="dc-u-mt-8"
              download="business-monochrome.zip"
              href={businessMonochrome}
            >
              Download for print & web
              <DownloadIcon css={downloadIconCss} size={downloadIconSize} />
            </a>
          </div>
        </section>
      </Page>
    </main>
  );
};
