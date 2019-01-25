import React from 'react';
import { Page, HtmlSpecimen } from 'catalog';

const icons = ['add', 'apple', 'archive', 'arrow_2_down', 'arrow_2_left', 'arrow_2_right', 'arrow_2_up', 'arrow_down', 'arrow_left', 'arrow_right', 'arrow_up', 'assignment', 'attachment', 'attention', 'audio', 'bars', 'book', 'building', 'bullet', 'calendar', 'chat', 'checkmark', 'circle-stroke', 'circle', 'checkmark_circle', 'clock', 'close', 'code-brackets', 'command', 'company', 'compass', 'copy', 'course', 'custom_track', 'credit_card', 'currency', 'dashboard', 'database', 'datacamp', 'dc-icon-academic', 'dc-icon-datacamp-filled', 'dc-icon-enterprise', 'dc-icon-professional', 'download', 'education', 'error', 'exercise', 'expand', 'eye', 'facebook', 'facebook_square', 'filter', 'flagpole', 'github', 'globe', 'google_play', 'google_plus_square', 'group', 'hint', 'home', 'incorrect', 'info', 'info_2', 'lab', 'learn', 'library', 'lightbulb', 'link', 'linkedin', 'linkedin_square', 'location', 'lock', 'mail', 'markdown', 'math', 'micro', 'dc-icon-mobile-phone', 'more', 'multiple-choice', 'news', 'notification', 'paypal_logo', 'pdf', 'phone', 'play', 'project', 'python', 'r', 'redo', 'reply', 'reporting', 'rss', 'search', 'settings', 'slack', 'slide-final', 'slide-full', 'slide-title', 'slide-two-col', 'slide-two-row-two-col', 'slide-two-rows-wide', 'slide-two-rows', 'sparkles', 'spinner', 'star', 'stats', 'stopwatch', 'tab', 'tag', 'team', 'theme-toggle', 'trash', 'trophy', 'twitter', 'upload', 'user', 'user_2', 'video-slides', 'video', 'video-forward', 'video-next-slide', 'video-pause', 'video-play', 'video-prev-slide', 'video-reverse', 'video-trim-begin', 'video-trim-end', 'write', 'xp', 'youtube', 'youtube_logo']
const obj = Object.values(icons);

export default () => {
  return (
    <Page>

      <section>
        <header>
          <h2>SCSS Import</h2> 
          <code>@import @datacamp/waffles-core/scss/components/icon.scss;</code>

          <h2>HTML Usage</h2>
          <p>
            Icons need to be referenced from a <code>symbols.svg</code> file that is included in the package. Each app needs to have this SVG inserted into the HTML.
          </p>

          <h2>Sizes</h2>
          <p>
            There are multiple modifier classes that can be used for icons, but the size modifier is required to display an icon. There are currently 3 sizes available: <code>12, 18, 24</code>.
          </p>
        </header>

        <HtmlSpecimen showSource span={2}>
          Why does this fail?
        </HtmlSpecimen>
      </section>

      <section>
        <h2>All Icons</h2>

        <p>Icons are represented in the 3 sizes that are available <code>12, 18, 24</code>.</p>

        <ul className="dc-u-lst-none dc-u-m-none dc-u-p-none dc-u-fx dc-u-fx-fww">
          {obj.map(name => (
            <li className="dc-u-w-25pc">
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

                <p className="dc-u-mb-0 dc-u-mt-8"><code>{name}</code></p>
              </div>
            </li>
          ))}
        </ul>
      </section>

    </Page>
  );
}