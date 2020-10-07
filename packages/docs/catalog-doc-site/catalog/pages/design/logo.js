/* @jsx jsx */
import { DatacampLogo } from '@datacamp/waffles-asset-components';
import { DownloadIcon } from '@datacamp/waffles-icons';
import { css, jsx } from '@emotion/core';
import { Page } from 'catalog';
import React from 'react';

import CustomHeader from '../../components/CustomHeader';
import Favicons from '../../download/favicon.zip';
import InvertedTagline from '../../download/inverted-tagline.zip';
import Inverted from '../../download/inverted.zip';
import LogoInverted from '../../download/logo-inverted.zip';
import LogoMonochrome from '../../download/logo-monochrome.zip';
import LogoTaglineInverted from '../../download/logo-tagline-inverted.zip';
import LogoTagline from '../../download/logo-tagline.zip';
import Logo from '../../download/logo.zip';
import MonochromeInverted from '../../download/monochrome-inverted.zip';
import Monochrome from '../../download/monochrome.zip';
import RegularTagline from '../../download/regular-tagline.zip';
import Regular from '../../download/regular.zip';
import WordmarkInverted from '../../download/wordmark-inverted.zip';
import Wordmark from '../../download/wordmark.zip';

const downloadIconCss = css({ marginLeft: 8 });
const downloadIconSize = 12;

export default () => {
  return (
    <main>
      <CustomHeader
        description="Our logo is the heart of our brand."
        section="Design"
        subSection="Logo"
      />

      <Page>
        <h4 className="dc-u-mb-16">Full Logo</h4>

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
            <a className="dc-u-mt-8" download="regular.zip" href={Regular}>
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
            <a
              className="dc-u-mt-8"
              download="monochrome.zip"
              href={Monochrome}
            >
              Download for print & web
              <DownloadIcon css={downloadIconCss} size={downloadIconSize} />
            </a>
          </div>
        </section>

        <h4 className="dc-u-mt-32 dc-u-mb-16">Inverted Logo</h4>

        <section className="dc-u-fx dc-u-mb-16 dc-u-w-100pc">
          <div className="dc-card" css={{ flex: '1 1 0', padding: 24 }}>
            <h5 className="dc-u-m-none">Inverted</h5>
            <div className="dc-u-bgc-navy dc-u-brad-all dc-u-p-24 dc-u-mv-16">
              <img
                alt="DataCamp Logo – Inverted"
                className="dc-u-d-b"
                css={{ margin: '0 auto' }}
                src="/logo/inverted.svg"
              />
            </div>
            <a className="dc-u-mt-8" download="inverted.zip" href={Inverted}>
              Download for print & web
              <DownloadIcon css={downloadIconCss} size={downloadIconSize} />
            </a>
          </div>

          <div
            className="dc-card"
            css={{ flex: '1 1 0', marginLeft: 16, padding: 24 }}
          >
            <h5 className="dc-u-m-none">Monochrome Inverted</h5>
            <div className="dc-u-bgc-navy dc-u-brad-all dc-u-p-24 dc-u-mv-16">
              <img
                alt="DataCamp Logo – Monochrome Inverted"
                className="dc-u-d-b"
                css={{ margin: '0 auto' }}
                src="/logo/monochrome-inverted.svg"
              />
            </div>
            <a
              className="dc-u-mt-8"
              download="monochrome-inverted.zip"
              href={MonochromeInverted}
            >
              Download for print & web
              <DownloadIcon css={downloadIconCss} size={downloadIconSize} />
            </a>
          </div>
        </section>

        <h4 className="dc-u-mt-32 dc-u-mb-16">Logo</h4>

        <section className="dc-u-fx dc-u-mb-16 dc-u-w-100pc">
          <div className="dc-card" css={{ flex: '1 1 0', padding: 24 }}>
            <h5 className="dc-u-m-none">Logo</h5>
            <div className="dc-card dc-card--bordered dc-u-p-24 dc-u-mv-16">
              <img
                alt="DataCamp Logo – Logo"
                className="dc-u-d-b"
                css={{ margin: '0 auto' }}
                src="/logo/logo.svg"
              />
            </div>
            <a className="dc-u-mt-8" download="logo.zip" href={Logo}>
              Download for print & web
              <DownloadIcon css={downloadIconCss} size={downloadIconSize} />
            </a>
          </div>

          <div
            className="dc-card"
            css={{ flex: '1 1 0', marginLeft: 16, padding: 24 }}
          >
            <h5 className="dc-u-m-none">Logo Inverted</h5>
            <div className="dc-u-bgc-navy dc-u-brad-all dc-card--bordered dc-u-p-24 dc-u-mv-16">
              <img
                alt="DataCamp Logo – Logo Inverted"
                className="dc-u-d-b"
                css={{ margin: '0 auto' }}
                src="/logo/logo-inverted.svg"
              />
            </div>
            <a
              className="dc-u-mt-8"
              download="logo-inverted.zip"
              href={LogoInverted}
            >
              Download for print & web
              <DownloadIcon css={downloadIconCss} size={downloadIconSize} />
            </a>
          </div>

          <div
            className="dc-card"
            css={{ flex: '1 1 0', marginLeft: 16, padding: 24 }}
          >
            <h5 className="dc-u-m-none">Logo Monochrome</h5>
            <div className="dc-card dc-card--bordered dc-u-p-24 dc-u-mv-16">
              <img
                alt="DataCamp Logo – Logo Monochrome"
                className="dc-u-d-b"
                css={{ margin: '0 auto' }}
                src="/logo/logo-monochrome.svg"
              />
            </div>
            <a
              className="dc-u-mt-8"
              download="logo-monochrome.zip"
              href={LogoMonochrome}
            >
              Download for print & web
              <DownloadIcon css={downloadIconCss} size={downloadIconSize} />
            </a>
          </div>
        </section>

        <h4 className="dc-u-mt-32 dc-u-mb-16">Wordmark</h4>

        <section className="dc-u-fx dc-u-mb-16 dc-u-w-100pc">
          <div className="dc-card" css={{ flex: '1 1 0', padding: 24 }}>
            <h5 className="dc-u-m-none">Wordmark</h5>
            <div className="dc-card dc-card--bordered dc-u-p-24 dc-u-mv-16">
              <img
                alt="DataCamp Logo – Wordmark"
                className="dc-u-d-b"
                css={{ margin: '0 auto' }}
                src="/logo/wordmark.svg"
              />
            </div>
            <a className="dc-u-mt-8" download="wordmark.zip" href={Wordmark}>
              Download for print & web
              <DownloadIcon css={downloadIconCss} size={downloadIconSize} />
            </a>
          </div>

          <div
            className="dc-card"
            css={{ flex: '1 1 0', marginLeft: 16, padding: 24 }}
          >
            <h5 className="dc-u-m-none">Wordmark Inverted</h5>
            <div className="dc-u-bgc-navy dc-u-brad-all dc-card--bordered dc-u-p-24 dc-u-mv-16">
              <img
                alt="DataCamp Logo – Wordmark Inverted"
                className="dc-u-d-b"
                css={{ margin: '0 auto' }}
                src="/logo/wordmark-inverted.svg"
              />
            </div>
            <a
              className="dc-u-mt-8"
              download="wordmark-inverted.zip"
              href={WordmarkInverted}
            >
              Download for print & web
              <DownloadIcon css={downloadIconCss} size={downloadIconSize} />
            </a>
          </div>
        </section>

        <h4 className="dc-u-mt-32 dc-u-mb-16">Including Tagline</h4>

        <section className="dc-u-fx dc-u-mb-16 dc-u-w-100pc">
          <div className="dc-card" css={{ flex: '1 1 0', padding: 24 }}>
            <h5 className="dc-u-m-none">Full Logo + Tagline</h5>
            <div className="dc-card dc-card--bordered dc-u-p-24 dc-u-mv-16">
              <img
                alt="DataCamp Logo – Full Logo + Tagline"
                className="dc-u-d-b"
                css={{ margin: '0 auto' }}
                src="/logo/regular-tagline.svg"
              />
            </div>
            <a
              className="dc-u-mt-8"
              download="regular-tagline.zip"
              href={RegularTagline}
            >
              Download for print & web
              <DownloadIcon css={downloadIconCss} size={downloadIconSize} />
            </a>
          </div>

          <div
            className="dc-card"
            css={{ flex: '1 1 0', marginLeft: 16, padding: 24 }}
          >
            <h5 className="dc-u-m-none">Full Logo + Tagline Inverted</h5>
            <div className="dc-u-bgc-navy dc-u-brad-all dc-card--bordered dc-u-p-24 dc-u-mv-16">
              <img
                alt="DataCamp Logo – Full Logo + Tagline Inverted"
                className="dc-u-d-b"
                css={{ margin: '0 auto' }}
                src="/logo/inverted-tagline.svg"
              />
            </div>
            <a
              className="dc-u-mt-8"
              download="inverted-tagline.zip"
              href={InvertedTagline}
            >
              Download for print & web
              <DownloadIcon css={downloadIconCss} size={downloadIconSize} />
            </a>
          </div>
        </section>

        <section className="dc-u-fx dc-u-mb-16 dc-u-w-100pc">
          <div className="dc-card" css={{ flex: '1 1 0', padding: 24 }}>
            <h5 className="dc-u-m-none">Logo + Tagline</h5>
            <div className="dc-card dc-card--bordered dc-u-p-24 dc-u-mv-16">
              <img
                alt="DataCamp Logo – Logo + Tagline"
                className="dc-u-d-b"
                css={{ margin: '0 auto' }}
                src="/logo/logo-tagline.svg"
              />
            </div>
            <a
              className="dc-u-mt-8"
              download="logo-tagline.zip"
              href={LogoTagline}
            >
              Download for print & web
              <DownloadIcon css={downloadIconCss} size={downloadIconSize} />
            </a>
          </div>

          <div
            className="dc-card"
            css={{ flex: '1 1 0', marginLeft: 16, padding: 24 }}
          >
            <h5 className="dc-u-m-none">Logo + Tagline Inverted</h5>
            <div className="dc-u-bgc-navy dc-u-brad-all dc-card--bordered dc-u-p-24 dc-u-mv-16">
              <img
                alt="DataCamp Logo – Logo + Tagline Inverted"
                className="dc-u-d-b"
                css={{ margin: '0 auto' }}
                src="/logo/logo-tagline-inverted.svg"
              />
            </div>
            <a
              className="dc-u-mt-8"
              download="logo-tagline-inverted.zip"
              href={LogoTaglineInverted}
            >
              Download for print & web
              <DownloadIcon css={downloadIconCss} size={downloadIconSize} />
            </a>
          </div>
        </section>

        <h4 className="dc-u-mt-32 dc-u-mb-16">Favicon</h4>

        <section className="dc-u-fx dc-u-w-100pc">
          <div className="dc-card" css={{ flex: '1 1 0', padding: 24 }}>
            <h5 className="dc-u-m-none">Favicon</h5>
            <div className="dc-u-bgc-green dc-u-brad-all dc-u-p-24 dc-u-mv-16 dc-u-ta-center">
              <DatacampLogo logomarkColor="#05192D" />
            </div>
            <a
              className="dc-u-mt-8"
              download="icon-monochrome.zip"
              href={Favicons}
            >
              Download favicons
              <DownloadIcon css={downloadIconCss} size={downloadIconSize} />
            </a>
          </div>
        </section>
      </Page>
    </main>
  );
};
