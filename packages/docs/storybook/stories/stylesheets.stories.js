import { storiesOf } from '@storybook/react';
import React from 'react';

import styles from './stylesheet.lazy.scss';

const useStylesheet = () => {
  React.useLayoutEffect(() => {
    styles.use();
    return () => styles.unuse();
  }, []);
};

storiesOf('stylesheets', module)
  .add('button', () => {
    useStylesheet();
    return (
      <table>
        <tbody>
          <tr>
            <td>
              <button className="dc-btn dc-btn--primary dc-btn--sm">
                primary small
              </button>
            </td>
            <td>
              <button className="dc-btn dc-btn--primary">primary</button>
            </td>
            <td>
              <button className="dc-btn dc-btn--primary dc-btn--lg">
                primary large
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button className="dc-btn dc-btn--primary-light dc-btn--sm">
                primary-light small
              </button>
            </td>
            <td>
              <button className="dc-btn dc-btn--primary-light">
                primary-light
              </button>
            </td>
            <td>
              <button className="dc-btn dc-btn--primary-light dc-btn--lg">
                primary-light large
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button className="dc-btn dc-btn--secondary dc-btn--sm">
                secondary small
              </button>
            </td>
            <td>
              <button className="dc-btn dc-btn--secondary">secondary</button>
            </td>
            <td>
              <button className="dc-btn dc-btn--secondary dc-btn--lg">
                secondary large
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button className="dc-btn dc-btn--tertiary dc-btn--sm">
                tertiary small
              </button>
            </td>
            <td>
              <button className="dc-btn dc-btn--tertiary">tertiary</button>
            </td>
            <td>
              <button className="dc-btn dc-btn--tertiary dc-btn--lg">
                tertiary large
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button className="dc-btn dc-btn--green dc-btn--sm">
                green small
              </button>
            </td>
            <td>
              <button className="dc-btn dc-btn--green">green</button>
            </td>
            <td>
              <button className="dc-btn dc-btn--green dc-btn--lg">
                green large
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button className="dc-btn dc-btn--grey dc-btn--sm">
                grey small
              </button>
            </td>
            <td>
              <button className="dc-btn dc-btn--grey">grey</button>
            </td>
            <td>
              <button className="dc-btn dc-btn--grey dc-btn--lg">
                grey large
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button className="dc-btn dc-btn--red dc-btn--sm">
                red small
              </button>
            </td>
            <td>
              <button className="dc-btn dc-btn--red">red</button>
            </td>
            <td>
              <button className="dc-btn dc-btn--red dc-btn--lg">
                red large
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button className="dc-btn dc-btn--purple dc-btn--sm">
                purple small
              </button>
            </td>
            <td>
              <button className="dc-btn dc-btn--purple">purple</button>
            </td>
            <td>
              <button className="dc-btn dc-btn--purple dc-btn--lg">
                purple large
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button className="dc-btn dc-btn--shadowed dc-btn--sm">
                shadowed small
              </button>
            </td>
            <td>
              <button className="dc-btn dc-btn--shadowed">shadowed</button>
            </td>
            <td>
              <button className="dc-btn dc-btn--shadowed dc-btn--lg">
                shadowed large
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button className="dc-btn dc-btn--shadowed dc-btn--white dc-btn--sm">
                shadowed white small
              </button>
            </td>
            <td>
              <button className="dc-btn dc-btn--shadowed dc-btn--white">
                shadowed white
              </button>
            </td>
            <td>
              <button className="dc-btn dc-btn--shadowed dc-btn--white dc-btn--lg">
                shadowed white large
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button className="dc-btn dc-btn--shadowed dc-btn--white-green dc-btn--white dc-btn--sm">
                shadowed white-green small
              </button>
            </td>
            <td>
              <button className="dc-btn dc-btn--shadowed dc-btn--white-green dc-btn--white">
                shadowed white-green
              </button>
            </td>
            <td>
              <button className="dc-btn dc-btn--shadowed dc-btn--white-green dc-btn--white dc-btn--lg">
                shadowed white-green large
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button className="dc-btn dc-btn--shadowed dc-btn--white-red dc-btn--white dc-btn--sm">
                shadowed white-red small
              </button>
            </td>
            <td>
              <button className="dc-btn dc-btn--shadowed dc-btn--white-red dc-btn--white">
                shadowed white-red
              </button>
            </td>
            <td>
              <button className="dc-btn dc-btn--shadowed dc-btn--white-red dc-btn--white dc-btn--lg">
                shadowed white-red large
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button className="dc-btn dc-btn--white dc-btn--sm">
                white small
              </button>
            </td>
            <td>
              <button className="dc-btn dc-btn--white">white</button>
            </td>
            <td>
              <button className="dc-btn dc-btn--white dc-btn--lg">
                white large
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  })
  .add('card', () => {
    useStylesheet();
    return (
      <>
        <div className="dc-card dc-u-m-24">Card</div>
        <div className="dc-card dc-card--bordered dc-u-m-24">
          Card with border
        </div>
        <div className="dc-card dc-card--shadowed-sm dc-u-m-24">
          Card with small shadow
        </div>
        <div className="dc-card dc-card--shadowed-lg dc-u-m-24">
          Card with large shadow
        </div>
        <div className="dc-card dc-card--shadowed-xl dc-u-m-24">
          Card with extra large shadow
        </div>
        <div className="dc-card dc-card--sectioned dc-u-m-24">
          <div className="dc-card__header">Header</div>
          <div className="dc-card__body">Body</div>
          <div className="dc-card__footer">Footer</div>
        </div>
      </>
    );
  })
  .add('tag', () => {
    useStylesheet();
    return (
      <>
        <span className="dc-tag">This is a span tag</span>
        <a className="dc-tag dc-tag--link" href="#">
          This is a link tag
        </a>
        <span className="dc-tag dc-tag--hue dc-tag--primary-light">
          This is a primary-light tag
        </span>
        <span className="dc-tag dc-tag--hue dc-tag--green">
          This is a green tag
        </span>
        <span className="dc-tag dc-tag--hue dc-tag--secondary">
          This is a secondary tag
        </span>
        <span className="dc-tag dc-tag--hue dc-tag--red">
          This is a red tag
        </span>
      </>
    );
  })
  .add('count-indicator', () => {
    useStylesheet();
    return (
      <>
        <div className="dc-count-indicator dc-count-indicator--red">5</div>
      </>
    );
  })
  .add('dropdown', () => {
    useStylesheet();
    return (
      <>
        <div className="dc-dropdown dc-is-open dc-u-w-100pc">
          <div className="dc-dropdown__content">
            <ul className="dc-dropdown__list dc-dropdown__list--bordered">
              <li className="dc-dropdown__item">
                <a className="dc-dropdown__link" href="#">
                  Action
                </a>
              </li>
              <li className="dc-dropdown__item dc-is-active">
                <a className="dc-dropdown__link" href="#">
                  Another Action
                </a>
              </li>
              <li className="dc-dropdown__item" href="#">
                <a className="dc-dropdown__link" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  })
  .add('flash-banner', () => {
    useStylesheet();
    return (
      <>
        <div className="dc-flash-wrapper">
          <div className="dc-flash dc-flash--notice">
            <div className="dc-flash__content">Flash notice</div>
          </div>
          <div className="dc-flash dc-flash--success">
            <div className="dc-flash__content">Flash Success</div>
          </div>
          <div className="dc-flash dc-flash--error">
            <div className="dc-flash__content">Flash error</div>
          </div>
        </div>
      </>
    );
  })
  .add('pagination', () => {
    useStylesheet();
    return (
      <div className="dc-pagination">
        <ul className="dc-pagination__list">
          <li>
            <button className="dc-pagination__page">1</button>
          </li>
          <li>
            <button className="dc-pagination__page dc-is-active">2</button>
          </li>
          <li>
            <button className="dc-pagination__page">3</button>
          </li>
        </ul>
      </div>
    );
  })
  .add('progress-bar', () => {
    useStylesheet();
    return (
      <>
        <div className="dc-progress-bar">
          <div className="dc-progress-bar__bar">
            <span
              className="dc-progress-bar__fill"
              style={{ width: '75%' }}
            ></span>
          </div>
        </div>
        <div className="dc-progress-bar dc-progress-bar--completed">
          <div className="dc-progress-bar__bar">
            <span className="dc-progress-bar__fill" style={{ width: '100%' }}>
              100%
            </span>
          </div>
        </div>
        <div className="dc-progress-bar dc-progress-bar--small">
          <div className="dc-progress-bar__bar">
            <span
              className="dc-progress-bar__fill"
              style={{ width: '75%' }}
            ></span>
          </div>
        </div>
        <div className="dc-progress-bar dc-progress-bar--small">
          <span className="dc-progress-bar__text">75%</span>
          <div className="dc-progress-bar__bar">
            <span
              className="dc-progress-bar__fill"
              style={{ width: '75%' }}
            ></span>
          </div>
        </div>
        <div className="dc-progress-bar dc-progress-bar--small dc-progress-bar--green">
          <span className="dc-progress-bar__text">75%</span>
          <div className="dc-progress-bar__bar">
            <span
              className="dc-progress-bar__fill"
              style={{ width: '75%' }}
            ></span>
          </div>
        </div>
        <div className="dc-progress-bar dc-progress-bar--small dc-progress-bar--orange">
          <span className="dc-progress-bar__text">75%</span>
          <div className="dc-progress-bar__bar">
            <span
              className="dc-progress-bar__fill"
              style={{ width: '75%' }}
            ></span>
          </div>
        </div>
        <div className="dc-progress-bar dc-progress-bar--small dc-progress-bar--red">
          <span className="dc-progress-bar__text">75%</span>
          <div className="dc-progress-bar__bar">
            <span
              className="dc-progress-bar__fill"
              style={{ width: '75%' }}
            ></span>
          </div>
        </div>
      </>
    );
  })
  .add('tabbed-nav', () => {
    useStylesheet();
    return (
      <ul className="dc-tabbed-nav">
        <li className="dc-tabbed-nav__item">
          <a className="dc-tabbed-nav__link" href="#">
            Admin
          </a>
        </li>
        <li className="dc-tabbed-nav__item">
          <a className="dc-tabbed-nav__link is-active" href="#">
            Billing
          </a>
        </li>
        <li className="dc-tabbed-nav__item">
          <a className="dc-tabbed-nav__link" href="#">
            Invoice settings
          </a>
        </li>
        <li className="dc-tabbed-nav__item">
          <a className="dc-tabbed-nav__link" href="#">
            Integrations
          </a>
        </li>
        <li className="dc-tabbed-nav__item">
          <a className="dc-tabbed-nav__link" href="#">
            Invite links
          </a>
        </li>
        <li className="dc-tabbed-nav__item">
          <a className="dc-tabbed-nav__link" href="#">
            Remove members
          </a>
        </li>
        <li className="dc-tabbed-nav__item">
          <a className="dc-tabbed-nav__link" href="#">
            Privacy
          </a>
        </li>
      </ul>
    );
  })
  .add('table', () => {
    useStylesheet();
    return (
      <>
        <div className="dc-table-wrapper dc-table-wrapper--bordered">
          <table className="dc-table">
            <thead className="dc-table__thead">
              <tr>
                <th className="dc-table__th">dc-table__th</th>
                <th className="dc-table__th">dc-table__th</th>
                <th className="dc-table__th">dc-table__th</th>
              </tr>
            </thead>
            <tbody className="dc-table__tbody">
              <tr>
                <td className="dc-table__td">dc-table__td</td>
                <td className="dc-table__td">dc-table__td</td>
                <td className="dc-table__td">dc-table__td</td>
              </tr>
              <tr>
                <td className="dc-table__td">dc-table__td</td>
                <td className="dc-table__td">dc-table__td</td>
                <td className="dc-table__td">dc-table__td</td>
              </tr>
              <tr>
                <td className="dc-table__td">dc-table__td</td>
                <td className="dc-table__td">dc-table__td</td>
                <td className="dc-table__td">dc-table__td</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="dc-table-wrapper dc-table-wrapper--bordered">
          <table className="dc-table dc-table--white dc-table--bordered">
            <thead className="dc-table__thead">
              <tr>
                <th className="dc-table__th">dc-table__th</th>
                <th className="dc-table__th">dc-table__th</th>
                <th className="dc-table__th">dc-table__th</th>
              </tr>
            </thead>
            <tbody className="dc-table__tbody">
              <tr className="dc-table__tr">
                <td className="dc-table__td">dc-table__td</td>
                <td className="dc-table__td">dc-table__td</td>
                <td className="dc-table__td">dc-table__td</td>
              </tr>
              <tr className="dc-table__tr">
                <td className="dc-table__td">dc-table__td</td>
                <td className="dc-table__td">dc-table__td</td>
                <td className="dc-table__td">dc-table__td</td>
              </tr>
              <tr className="dc-table__tr">
                <td className="dc-table__td">dc-table__td</td>
                <td className="dc-table__td">dc-table__td</td>
                <td className="dc-table__td">dc-table__td</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  })
  .add('tabs', () => {
    useStylesheet();
    return (
      <div className="minimal-tabs-bar">
        <ul className="minimal-tabs list-unstyled" role="tablist">
          <li className="minimal-tab active">
            <a
              aria-controls="in-progress"
              className="minimal-tab__link"
              data-text="Courses in Progress (2)"
              data-toggle="tab"
              href="#in-progress"
              role="tab"
            >
              Courses in Progress (2)
            </a>
          </li>
          <li className="minimal-tab">
            <a
              aria-controls="completed"
              className="minimal-tab__link"
              data-text="Completed (4)"
              data-toggle="tab"
              href="#completed"
              role="tab"
            >
              Completed (4)
            </a>
          </li>
        </ul>
        <a className="minimal-tabs__action" href="#">
          Explore Course Library
        </a>
      </div>
    );
  });
