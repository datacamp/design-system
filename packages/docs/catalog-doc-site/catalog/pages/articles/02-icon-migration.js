import { Page } from 'catalog';
import React from 'react';

import CustomHeader from '../../components/CustomHeader';

export default () => {
  return (
    <main>
      <CustomHeader
        description="Kristof Houben - 21 November 2019"
        section="Articles"
        subSection="Migrating Icons"
      />

      <Page>
        <section className="dc-u-maxw-100pc">
          <div className="dc-card dc-u-p-24 dc-u-mt-8">
            <p>
              All our icons have been drawn from scratch to match our brand. Up
              until now our icons were a mess of different styles &amp; weights.
              Our new set of icons can be used by including the react icon
              component or by directly including the SVG sprite if you’re using
              a technology other than react.
            </p>

            <h3>What changes?</h3>

            <ul>
              <li>Our icons are divided in three categories</li>

              <li>Regular – Outlined icons that are meant for regular usage</li>

              <li>
                Inverted icons – Filled icons that are meant for usage on low
                contrast background or to indicate state changes. For example:
                An outlined star is not-active, a filled star is active. Not all
                icons have a filled variant.
              </li>

              <li>
                Brand icons – These icons don’t match our guidelines but honour
                the guidelines of the brand it represents.
              </li>

              <li>
                All icons have been redrawn and the metaphor for some icons have
                changed. A list of changes can be found below.
              </li>

              <ul>
                <li>
                  The <code>arrow_2</code> variations have been renamed to
                  <code>ArrowIcon</code>
                </li>

                <li>
                  The <code>arrow</code> variations have been renamed to
                  <code>ChevronIcon</code>
                </li>

                <li>
                  <code>Notification</code> has been renamed to be more
                  descriptive and is now <code>Bell</code>
                </li>

                <li>
                  The <code>redo</code> icon has been renamed to
                  <code>UndoIcon</code> because of an error in the old style
                  guide. A correct <code>RedoIcon</code> has been added
                </li>

                <li>
                  The <code>reporting</code> icon has been renamed to
                  <code>LineChartIcon</code>
                </li>

                <li>
                  We’ve renamed the slide icons to be more generic so they can
                  be used in a wider range of applications.
                  <ul>
                    <li>
                      <code>slide-title</code> has been renamed to
                      <code>IntroductionIcon</code>
                    </li>

                    <li>
                      <code>slide-full</code> has been renamed to
                      <code>FullScreenIcon</code>
                    </li>

                    <li>
                      <code>slide-two-col</code> has been renamed to
                      <code>ColumnsIcon</code>
                    </li>

                    <li>
                      <code>slide-two-rows</code> has been renamed to
                      <code>RowsIcon</code>
                    </li>

                    <li>
                      <code>slide-two-row-two-col</code> has been renamed to
                      <code>MatrixIcon</code>
                    </li>

                    <li>
                      <code>slide-two-rows-wide-bottom</code> has been renamed
                      to
                      <code>FooterIcon</code>
                    </li>

                    <li>
                      <code>slide-two-rows-wide-bottom</code> has been renamed
                      to
                      <code>HeaderIcon</code>
                    </li>
                  </ul>
                </li>

                <li>
                  The <code>theme-toggle</code> icon has been renamed to
                  <code>SunIcon</code>
                </li>

                <li>
                  The <code>user_2</code> icon has been added as the inverted
                  variant of
                  <code>UserIcon</code>
                </li>

                <li>
                  <code>video</code> has been renamed to <code>CameraIcon</code>{' '}
                  and
                  <code>camera</code> has been renamed to <code>VideoIcon</code>
                  . Still with me?
                </li>

                <li>
                  <code>Video-Trim-Begin</code> has been renamed to
                  <code>TrimBeginIcon</code>
                </li>

                <li>
                  <code>Video-Trim-End</code> has been renamed to
                  <code>TrimEndIcon</code>
                </li>

                <li>
                  <code>XP</code> has been renamed to <code>DatabaseIcon</code>
                  because it looks like a database
                </li>

                <li>
                  Some new icons have also been added to give more freedom to
                  designers.
                </li>
              </ul>
            </ul>

            <h4>Migration Guide</h4>

            <p>
              While every icon has been redrawn from scratch you can migrate
              applications at your own pace. We encourage you to change all the
              icons at once since we want to avoid a mix of icons. This is not
              realistic for larger applications, in this case we encourage you
              to tackle this on a component basis or flow basis. Every
              application has dark corners that can be tackled last.
            </p>

            <h4>Resources</h4>

            <ul>
              <li>
                <a href="/design/icons">Icon usage guidelines</a>
              </li>

              <li>
                <a href="/component-library/icons">
                  React icon component documentation
                </a>
              </li>

              <li>
                If there’s an icon missing or you want to request a new one –
                <a href="https://datacamp.atlassian.net/servicedesk/customer/portals">
                  Service Desk
                </a>
              </li>
            </ul>
          </div>
        </section>
      </Page>
    </main>
  );
};
