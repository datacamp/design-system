/* @jsx jsx */
import * as Icons from '@datacamp/waffles-icons';
import iconsZip from '@datacamp/waffles-icons/zip/icons.zip';
import { border, colors } from '@datacamp/waffles-tokens';
import { css, jsx } from '@emotion/core';
import { Page } from 'catalog';
import _ from 'lodash';
import React from 'react';

import CustomHeader from '../../components/CustomHeader';

const BrandIcons = _.filter(Object.entries(Icons), ([name]) => {
  return /BrandIcon$/.test(name);
}).map(iconData => iconData[1]);

const InvertedIcons = _.filter(Object.entries(Icons), ([name]) => {
  return /InvertedIcon$/.test(name);
}).map(iconData => iconData[1]);

const RegularIcons = _.difference(Object.values(Icons), [
  ...InvertedIcons,
  ...BrandIcons,
]);

const iconStyle = css({
  display: 'inline-block',
  margin: '8px',
});

export default () => {
  return (
    <main>
      <CustomHeader
        description="Our icons are designed to fit within the visual language of our design system."
        section="Design"
        subSection="Icons"
      />

      <Page>
        <div className="dc-u-fx dc-u-fx-aifs">
          <section className="dc-u-maxw-640 dc-u-pr-32">
            <h5 css={{ margin: '0 0 12px 0' }}>Regular Icons</h5>
            <div className="dc-card dc-u-p-16" css={{ marginBottom: 24 }}>
              {RegularIcons.map(Component => (
                <Component color={colors.primary} css={iconStyle} />
              ))}
            </div>

            <h5 css={{ margin: '0 0 12px 0' }}>Inverted Icons</h5>
            <div
              css={{
                backgroundColor: colors.primaryDark,
                borderRadius: border.radius,
                marginBottom: 24,
                padding: 16,
              }}
            >
              {InvertedIcons.map(Component => (
                <Component color={colors.white} css={iconStyle} />
              ))}
            </div>

            <h5 css={{ margin: '0 0 12px 0' }}>Brand Icons</h5>
            <div className="dc-card dc-u-p-16" css={{ marginBottom: 24 }}>
              {BrandIcons.map(Component => (
                <Component color={colors.primary} css={iconStyle} />
              ))}
            </div>

            <h5 css={{ margin: '0 0 12px 0' }}>Icon Sizes</h5>
            <div
              className="dc-card"
              css={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: 32,
                padding: 16,
                width: 'auto',
              }}
            >
              <div css={{ textAlign: 'center', width: '32%' }}>
                <div
                  css={{
                    display: 'block',
                    height: 24,
                    margin: '0 auto 8px auto',
                  }}
                >
                  <Icons.DownloadIcon
                    color={colors.primary}
                    css={{ margin: '6px 0' }}
                    size={12}
                  />
                </div>
                <span
                  css={{
                    color: colors.greyOslo,
                    display: 'block',
                    fontSize: 12,
                  }}
                >
                  12px
                </span>
              </div>
              <div css={{ textAlign: 'center', width: '32%' }}>
                <div
                  css={{
                    display: 'block',
                    height: 24,
                    margin: '0 auto 8px auto',
                  }}
                >
                  <Icons.DownloadIcon
                    color={colors.primary}
                    css={{ margin: '3px 0' }}
                    size={18}
                  />
                </div>
                <span
                  css={{
                    color: colors.greyOslo,
                    display: 'block',
                    fontSize: 12,
                  }}
                >
                  18px
                </span>
              </div>
              <div css={{ textAlign: 'center', width: '32%' }}>
                <div
                  css={{
                    display: 'block',
                    height: 24,
                    margin: '0 auto 8px auto',
                  }}
                >
                  <Icons.DownloadIcon color={colors.primary} size={24} />
                </div>
                <span
                  css={{
                    color: colors.greyOslo,
                    display: 'block',
                    fontSize: 12,
                  }}
                >
                  24px
                </span>
              </div>
            </div>

            <h3 css={{ margin: '0 0 12px 0' }}>Icon Guidelines</h3>
            <h5 css={{ margin: '0 0 12px 0' }}>Icon Usage</h5>
            <p css={{ margin: '0 0 24px 0' }}>
              Our icons are built with purpose and should be used to emphasise
              context and content. Icons should not be used as ornaments to
              decorate the page and should not be used at any other size than
              documented.
            </p>

            <h5 css={{ margin: '0 0 12px 0' }}>Convention over innovation</h5>
            <p css={{ margin: '0 0 24px 0' }}>
              Some icons are globally accepted as a standard. We should prefer
              conventions over innovation, for example a cog for settings.
            </p>

            <h5 css={{ margin: '0 0 12px 0' }}>Pair icons with text</h5>
            <p css={{ margin: 0 }}>
              The purpose of an icon is to be a visual cue in the interface.
              There are rare exceptions where icons are universally understood
              actions, for example the trash icon for deletions.
            </p>
          </section>

          <aside className="dc-u-bl dc-u-fxi-fs-0 dc-u-maxw-320 dc-u-pl-24 dc-u-pv-32">
            <h4 css={{ marginBottom: 8 }}>Download Icon Set</h4>
            <p css={{ marginTop: 0 }}>
              If you intend to use the icons within an application, make sure to
              use the{' '}
              <a href="/component-library/icons">Waffles Icons package</a>. For
              other purposes, you can download it below.
            </p>
            <a
              className="dc-btn dc-btn--sm dc-btn--secondary"
              download="icons.zip"
              href={iconsZip}
            >
              <Icons.DownloadIcon />
              <span css={{ marginLeft: 8 }}>Download Icons</span>
            </a>
          </aside>
        </div>
      </Page>
    </main>
  );
};
