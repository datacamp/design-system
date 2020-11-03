import { HintSpecimen, HtmlSpecimen, Page } from 'catalog';
import React from 'react';

import CustomHeader from '../../components/CustomHeader';

const icons = [
  'add',
  'apple',
  'archive',
  'arrow_2_down',
  'arrow_2_left',
  'arrow_2_right',
  'arrow_2_up',
  'arrow_down',
  'arrow_left',
  'arrow_right',
  'arrow_up',
  'assignment',
  'attachment',
  'attention',
  'audio',
  'bars',
  'book',
  'building',
  'bullet',
  'calendar',
  'chat',
  'checkmark',
  'circle-stroke',
  'circle',
  'checkmark_circle',
  'clock',
  'close',
  'code-brackets',
  'command',
  'company',
  'compass',
  'copy',
  'course',
  'custom_track',
  'credit_card',
  'currency',
  'dashboard',
  'database',
  'datacamp',
  'dc-icon-academic',
  'dc-icon-datacamp-filled',
  'dc-icon-enterprise',
  'dc-icon-prerequisite',
  'dc-icon-professional',
  'download',
  'education',
  'error',
  'exercise',
  'expand',
  'eye',
  'facebook',
  'facebook_square',
  'filter',
  'flagpole',
  'github',
  'globe',
  'google_play',
  'google_plus_square',
  'group',
  'hint',
  'home',
  'incorrect',
  'info',
  'info_2',
  'lab',
  'learn',
  'library',
  'lightbulb',
  'link',
  'linkedin',
  'linkedin_square',
  'location',
  'lock',
  'mail',
  'markdown',
  'math',
  'micro',
  'dc-icon-mobile-phone',
  'more',
  'multiple-choice',
  'news',
  'notification',
  'paypal_logo',
  'pdf',
  'phone',
  'play',
  'project',
  'python',
  'r',
  'redo',
  'reply',
  'reporting',
  'rss',
  'search',
  'settings',
  'slack',
  'slide-final',
  'slide-full',
  'slide-title',
  'slide-two-col',
  'slide-two-row-two-col',
  'slide-two-rows-wide',
  'slide-two-rows',
  'sparkles',
  'spinner',
  'star',
  'stats',
  'stopwatch',
  'tab',
  'tag',
  'team',
  'theme-toggle',
  'trash',
  'trophy',
  'twitter',
  'upload',
  'user',
  'user_2',
  'video-slides',
  'video',
  'video-forward',
  'video-next-slide',
  'video-pause',
  'video-play',
  'video-prev-slide',
  'video-reverse',
  'video-trim-begin',
  'video-trim-end',
  'write',
  'xp',
  'youtube',
  'youtube_logo',
];
const obj = Object.values(icons);

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <main>
      <CustomHeader
        description="Find out how we approach the visual elements of our interface with purpose."
        section="Design"
        subSection="Intro"
      />

      <Page>
        <HintSpecimen warning>
          These docs refer to using the icons from the waffles-core package. It
          is now preferred that the waffles-icons package is used. Documentation
          on this package can be found{' '}
          <a href="/component-library/icons">here</a>.
        </HintSpecimen>
        <div className="dc-u-fx dc-u-fx-aifs">
          <section className="dc-u-maxw-640 dc-u-pr-32">
            <header>
              <h2>SCSS Import</h2>
              <code>
                @import @datacamp/waffles-core/scss/components/icon.scss;
              </code>

              <h2 className="dc-u-mt-24">HTML Usage</h2>
              <p>
                Icons need to be referenced from a <code>symbols.svg</code> file
                that is included in the package. Each app needs to have this SVG
                inserted into the HTML.
              </p>

              <h2>Sizes</h2>
              <p>
                There are multiple modifier classes that can be used for icons,
                but the size modifier is required to display an icon. There are
                currently 3 sizes available: <code>12, 18, 24</code>.
              </p>
            </header>

            <div className="dc-u-fx">
              <HtmlSpecimen
                rawBody='
                <span class="dc-icon dc-icon--size-12">
                  <svg class="dc-icon__svg">
                    <use xlink:href="#add" />
                  </svg>
                </span>'
                showSource
                span={2}
              />

              <HtmlSpecimen
                rawBody='
                <span class="dc-icon dc-icon--size-18">
                  <svg class="dc-icon__svg">
                    <use xlink:href="#add" />
                  </svg>
                </span>'
                showSource
                span={2}
              />

              <HtmlSpecimen
                rawBody='
                <span class="dc-icon dc-icon--size-24">
                  <svg class="dc-icon__svg">
                    <use xlink:href="#add" />
                  </svg>
                </span>'
                showSource
                span={2}
              />
            </div>

            <header className="dc-u-mt-24">
              <h2>Colors</h2>
              <p>
                Any design system color can be used in a modifier class to set
                the <code>color</code> value of the icon. The <code>color</code>{' '}
                defaults to <code>dc-primary</code>
              </p>
            </header>

            <div className="dc-u-fx">
              <HtmlSpecimen
                rawBody='
                <span class="dc-icon dc-icon--size-18 dc-icon--primary">
                  <svg class="dc-icon__svg">
                    <use xlink:href="#add" />
                  </svg>
                </span>'
                showSource
                span={2}
              />

              <HtmlSpecimen
                rawBody='
              <span class="dc-icon dc-icon--size-18 dc-icon--secondary">
                  <svg class="dc-icon__svg">
                    <use xlink:href="#add" />
                  </svg>
                </span>'
                showSource
                span={2}
              />

              <HtmlSpecimen
                rawBody='
              <span class="dc-icon dc-icon--size-24 dc-icon--green">
                  <svg class="dc-icon__svg">
                    <use xlink:href="#add" />
                  </svg>
                </span>'
                showSource
                span={2}
              />
            </div>

            <header className="dc-u-mt-24">
              <h2>Active State</h2>
              <p>
                Icon color can be changed based on an active &quot;state&quot;
                by adding a an active modifier class and toggling an{' '}
                <code>is-active</code> class.
              </p>
            </header>

            <div className="dc-u-fx">
              <HtmlSpecimen
                rawBody='
              <span class="dc-icon dc-icon--size-18 dc-icon--primary dc-icon--active-secondary is-active">
                  <svg class="dc-icon__svg">
                    <use xlink:href="#add" />
                  </svg>
                </span>'
                showSource
                span={2}
              />

              <HtmlSpecimen
                rawBody='
              <span class="dc-icon dc-icon--size-18 dc-icon--secondary dc-icon--active-primary is-active">
                  <svg class="dc-icon__svg">
                    <use xlink:href="#add" />
                  </svg>
                </span>'
                showSource
                span={2}
              />

              <HtmlSpecimen
                rawBody='
              <span class="dc-icon dc-icon--size-24 dc-icon--green dc-icon--active-purple is-active">
                  <svg class="dc-icon__svg">
                    <use xlink:href="#add" />
                  </svg>
                </span>'
                showSource
                span={2}
              />
            </div>

            <section className="dc-u-mt-24">
              <h2>Modifiers</h2>

              <h4>Flex</h4>
              <p>
                To align with text, the <code>dc-icon</code> has a negative{' '}
                <code>top</code> value. As a flex child element, the icon will
                be misaligned. The <code>dc-icon--flex</code> modifier will
                vertically center the icon.
              </p>

              <div className="dc-u-fx">
                <HtmlSpecimen
                  rawBody='
                <p class="dc-u-fx dc-u-fx-aic">
                  <strike class="dc-u-mr-4 dc-u-color-red">Misaligned icon in a flex container</strike>
                  <span class="dc-icon dc-icon--size-18 dc-icon--red">
                    <svg class="dc-icon__svg">
                      <use xlink:href="#add" />
                    </svg>
                  </span>
                </p>'
                  showSource
                  span={3}
                />

                <HtmlSpecimen
                  rawBody='
                <p class="dc-u-fx dc-u-fx-aic">
                  <span class="dc-u-mr-4">Aligned icon in a flex container</span>
                  <span class="dc-icon dc-icon--size-18 dc-icon--flex dc-icon--green">
                    <svg class="dc-icon__svg">
                      <use xlink:href="#add" />
                    </svg>
                  </span>
                </p>'
                  showSource
                  span={3}
                />
              </div>
            </section>

            <section className="dc-u-mt-24">
              <h2>All Icons</h2>

              <p>
                Icons are represented in the 3 sizes that are available{' '}
                <code>12, 18, 24</code>.
              </p>

              <ul className="dc-u-lst-none dc-u-m-none dc-u-p-none dc-u-fx dc-u-fx-fww">
                {obj.map((name) => (
                  <li className="dc-u-w-50pc" key={name}>
                    <div className="dc-card dc-u-m-8 dc-u-ta-center">
                      <span className="dc-icon dc-icon--size-12">
                        <svg className="dc-icon__svg">
                          <use xlinkHref={`#${name}`} />
                        </svg>
                      </span>

                      <span className="dc-icon dc-icon--size-18 dc-u-ml-16">
                        <svg className="dc-icon__svg">
                          <use xlinkHref={`#${name}`} />
                        </svg>
                      </span>

                      <span className="dc-icon dc-icon--size-24 dc-u-ml-16">
                        <svg className="dc-icon__svg">
                          <use xlinkHref={`#${name}`} />
                        </svg>
                      </span>

                      <p className="dc-u-mb-0 dc-u-mt-8">
                        <code>{name}</code>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </section>

          <article className="dc-u-bl dc-u-fxi-fs-0 dc-u-maxw-320 dc-u-pl-24 dc-u-pv-32">
            <h4>Download Icon Set</h4>
            <p>
              If you intend to use the icons within an application, make sure to
              use the Waffles package. For other purposes, you can download it
              below.
            </p>
            <button
              className="dc-btn dc-btn--sm dc-btn--secondary"
              disabled
              type="button"
            >
              <span className="dc-icon dc-icon--size-18 dc-icon--grey-dark dc-icon--flex dc-u-mr-8">
                <svg className="dc-icon__svg">
                  <use xlinkHref="#download" />
                </svg>
              </span>
              Download Icon Set
            </button>
          </article>
        </div>
      </Page>
    </main>
  );
};
