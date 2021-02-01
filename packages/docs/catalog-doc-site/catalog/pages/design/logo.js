/* eslint-disable import/no-anonymous-default-export */
/* @jsx jsx */
import { DatacampLogo } from '@datacamp/waffles-asset-components';
import { DownloadIcon } from '@datacamp/waffles-icons';
import { css, jsx } from '@emotion/core';
import { Page } from 'catalog';
import React from 'react';

import CustomHeader from '../../components/CustomHeader';
import Favicons from '../../download/favicon.zip';
import Inverted from '../../download/inverted.zip';
import Logo from '../../download/logo.zip';
import MonochromeInverted from '../../download/monochrome-inverted.zip';
import Monochrome from '../../download/monochrome.zip';
import Regular from '../../download/regular.zip';

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
        <h4>Regular Logo</h4>
        <p>
          Our full, standard logo includes both the logomark (DC) and the
          wordmark (DataCamp). Unless you specifically need a square logo
          format, please use one of the four regular logos below.
        </p>
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
            <p>
              This is the preferred logo to use on a light background. When in
              doubt, this is usually the best logo to use.
            </p>
            <a className="dc-u-mt-8" download="regular.zip" href={Regular}>
              Download for print & web
              <DownloadIcon css={downloadIconCss} size={downloadIconSize} />
            </a>
          </div>

          <div
            className="dc-card"
            css={{ flex: '1 1 0', marginLeft: 16, padding: 24 }}
          >
            <h5 className="dc-u-m-none">Regular Monochrome</h5>
            <div className="dc-card dc-card--bordered dc-u-p-24 dc-u-mv-16">
              <img
                alt="DataCamp Logo – Monochrome"
                className="dc-u-d-b"
                css={{ margin: '0 auto' }}
                src="/logo/monochrome.svg"
              />
            </div>
            <p>
              If the green logomark (DC) doesn't contrast enough with the
              background or if you have been given specs that specifically call
              for a black and white logo, use the Regular Monochrome logo on a
              light background. This logo should only be used when absolutely
              necessary.
            </p>
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
            <h5 className="dc-u-m-none">Regular Inverted</h5>
            <div className="dc-u-bgc-navy dc-u-brad-all dc-u-p-24 dc-u-mv-16">
              <img
                alt="DataCamp Logo – Inverted"
                className="dc-u-d-b"
                css={{ margin: '0 auto' }}
                src="/logo/inverted.svg"
              />
            </div>
            <p>This is the preferred logo to use on a dark background.</p>
            <a className="dc-u-mt-8" download="inverted.zip" href={Inverted}>
              Download for print & web
              <DownloadIcon css={downloadIconCss} size={downloadIconSize} />
            </a>
          </div>

          <div
            className="dc-card"
            css={{ flex: '1 1 0', marginLeft: 16, padding: 24 }}
          >
            <h5 className="dc-u-m-none">Regular Monochrome Inverted</h5>
            <div className="dc-u-bgc-navy dc-u-brad-all dc-u-p-24 dc-u-mv-16">
              <img
                alt="DataCamp Logo – Monochrome Inverted"
                className="dc-u-d-b"
                css={{ margin: '0 auto' }}
                src="/logo/monochrome-inverted.svg"
              />
            </div>
            <p>
              If the green logomark (DC) doesn't contrast enough with the
              background or if you have been given specs that specifically call
              for a black and white logo, use the Regular Monochrome Inverted
              logo on a dark background. This logo should only be used when
              absolutely necessary.
            </p>
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

        <h4 className="dc-u-mt-32" css={{ width: '100%' }}>
          Logomark
        </h4>

        <p css={{ maxWidth: 745 }}>
          We only use our logomark (DC) in square formats. Use cases may include
          an avatar or social media profile images.
        </p>

        <section className="dc-u-fx dc-u-mb-16 dc-u-w-100pc">
          <div className="dc-card" css={{ flex: '1 1 0', padding: 24 }}>
            <div className="dc-card dc-card--bordered dc-u-mv-16">
              <img
                alt="DataCamp Logo – Logo"
                className="dc-u-d-b"
                src="/logo/Logomark.svg"
              />
            </div>
            <a className="dc-u-mt-8" download="logo.zip" href={Logo}>
              Download for print & web
              <DownloadIcon css={downloadIconCss} size={downloadIconSize} />
            </a>
          </div>
          <div css={{ flex: '1 1 0' }} />
        </section>

        <h4 className="dc-u-mt-32" css={{ width: '100%' }}>
          Favicon
        </h4>

        <p css={{ maxWidth: 745 }}>
          All DataCamp sites and applications should use the logomark (DC) as a
          favicon. The necessary collection of files can be downloaded below.
        </p>

        <section className="dc-u-fx dc-u-w-100pc">
          <div className="dc-card" css={{ flex: '1 1 0', padding: 24 }}>
            <div className="dc-card dc-card--bordered dc-u-mv-16">
              <img
                alt="DataCamp Logo – Logo"
                className="dc-u-d-b"
                src="/logo/Logomark.svg"
              />
            </div>
            <a className="dc-u-mt-8" download="favicons.zip" href={Favicons}>
              Download favicons
              <DownloadIcon css={downloadIconCss} size={downloadIconSize} />
            </a>
          </div>
          <div css={{ flex: '1 1 0' }} />
        </section>
      </Page>
    </main>
  );
};
