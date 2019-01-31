import React from 'react';
import { Page } from 'catalog';

import CustomHeader from '../../components/CustomHeader';

import { breakpoints } from '../../../packages/core/tokens.json';
import dashify from '../../helpers/dashify';
import whitelist from '../../helpers/whitelist.js';

const blacklist = ['ws', '4K', '5K', 'belowWs', 'below4K', 'below5K'];

export default () => {
  
  return (
    <main>
      <CustomHeader
        section="Design Utilities"
        subSection="Flex Containers"
        description="Create and modify flex containers."
      >
      </CustomHeader>  
      <Page>

        <header>
          <h2>Display</h2>
          <p>These classes add <code>display</code> to an element, so they can be used for building or customizing an element. The <code>display</code> property creates a flex container.</p>
        </header>

        <table className="table dc-u-w-auto">
          <thead>
            <tr>
              <th className="dc-u-w-1pc">Class Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-fx</code>
              </td>
              <td>
                <code>display: flex;</code>
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-ifx</code>
              </td>
              <td>
                <code>display: inline-flex;</code>
              </td>
            </tr>
          </tbody>
        </table>

        <header>
          <h3>Responsive Modifiers</h3>
          <p>Display utilities can be applied to individual common breakpoints using @[size] appended to the end of the class.</p>
        </header>

        <section class="dc-u-fx dc-u-w-100pc">

          <article className="dc-u-mh-4">
            <h4>Flex</h4>
            <table className="table dc-u-w-auto">
              <thead>
                <tr>
                  <th className="dc-u-w-1pc">Class Name</th>
                  <th>Pixel Value</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(whitelist(blacklist, breakpoints)).map(([name, value]) => (
                  <tr key={name}>
                    <td>
                      <code className="dc-u-ws-nowrap">{`.dc-u-fx@${dashify(name)}`}</code>
                    </td>
                    <td>
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </article>

          <article className="dc-u-mh-4">
            <h4>Inline Flex</h4>
            <table className="table dc-u-w-auto">
              <thead>
                <tr>
                  <th className="dc-u-w-1pc">Class Name</th>
                  <th>Pixel Value</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(whitelist(blacklist, breakpoints)).map(([name, value]) => (
                  <tr key={name}>
                    <td>
                      <code className="dc-u-ws-nowrap">{`.dc-u-ifx@${dashify(name)}`}</code>
                    </td>
                    <td>
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </article>
                
        </section>

        <header>
          <h2>Direction</h2>
          <p>These classes add <code>flex-direction</code> to an element, so they can be used for building or customizing an element.</p>
        </header>

        <table className="table dc-u-w-auto">
          <thead>
            <tr>
              <th className="dc-u-w-1pc">Class Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-fx-fdc</code>
              </td>
              <td>
                <code>flex-direction: column;</code>
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-fx-fdcr</code>
              </td>
              <td>
                <code>flex-direction: column-reverse;</code>
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-fx-fdr</code>
              </td>
              <td>
                <code>flex-direction: row;</code>
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-fx-fdrr</code>
              </td>
              <td>
                <code>flex-direction: row-reverse;</code>
              </td>
            </tr>
          </tbody>
        </table>

        <header>
          <h3>Responsive Modifiers</h3>
          <p>Display utilities can be applied to individual common breakpoints using @[size] appended to the end of the class.</p>
        </header>

        <section class="dc-u-fx dc-u-fx-fww dc-u-w-100pc">

          <article className="dc-u-mh-4">
            <h4>Column</h4>
            <table className="table dc-u-w-auto">
              <thead>
                <tr>
                  <th className="dc-u-w-1pc">Class Name</th>
                  <th>Pixel Value</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(whitelist(blacklist, breakpoints)).map(([name, value]) => (
                  <tr key={name}>
                    <td>
                      <code className="dc-u-ws-nowrap">{`.dc-u-fx-fdc@${dashify(name)}`}</code>
                    </td>
                    <td>
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </article>

          <article className="dc-u-mh-4">
            <h4>Column Reverse</h4>
            <table className="table dc-u-w-auto">
              <thead>
                <tr>
                  <th className="dc-u-w-1pc">Class Name</th>
                  <th>Pixel Value</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(whitelist(blacklist, breakpoints)).map(([name, value]) => (
                  <tr key={name}>
                    <td>
                      <code className="dc-u-ws-nowrap">{`.dc-u-fx-fdcr@${dashify(name)}`}</code>
                    </td>
                    <td>
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </article>

          <article className="dc-u-mh-4">
            <h4>Row</h4>
            <table className="table dc-u-w-auto">
              <thead>
                <tr>
                  <th className="dc-u-w-1pc">Class Name</th>
                  <th>Pixel Value</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(whitelist(blacklist, breakpoints)).map(([name, value]) => (
                  <tr key={name}>
                    <td>
                      <code className="dc-u-ws-nowrap">{`.dc-u-fx-fdr@${dashify(name)}`}</code>
                    </td>
                    <td>
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </article>

          <article className="dc-u-mh-4">
            <h4>Row Reverse</h4>
            <table className="table dc-u-w-auto">
              <thead>
                <tr>
                  <th className="dc-u-w-1pc">Class Name</th>
                  <th>Pixel Value</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(whitelist(blacklist, breakpoints)).map(([name, value]) => (
                  <tr key={name}>
                    <td>
                      <code className="dc-u-ws-nowrap">{`.dc-u-fx-fdrr@${dashify(name)}`}</code>
                    </td>
                    <td>
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </article>

        </section>

        <header>
          <h2>Wrap</h2>
          <p>These classes add <code>flex-wrap</code> to an element, so they can be used for building or customizing an element.</p>
        </header>

        <table className="table dc-u-w-auto">
          <thead>
            <tr>
              <th className="dc-u-w-1pc">Class Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-fx-fwnw</code>
              </td>
              <td>
                <code>flex-wrap: nowrap;</code>
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-fx-fww</code>
              </td>
              <td>
                <code>flex-wrap: wrap;</code>
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-fx-fwwr</code>
              </td>
              <td>
                <code>flex-wrap: wrap-reverse;</code>
              </td>
            </tr>
          </tbody>
        </table>

        <header>
          <h2>Align Items</h2>
          <p>These classes add <code>align-items</code> to an element, so they can be used for building or customizing an element.</p>
        </header>

        <table className="table dc-u-w-auto">
          <thead>
            <tr>
              <th className="dc-u-w-1pc">Class Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-fx-aib</code>
              </td>
              <td>
                <code>align-items: baseline;</code>
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-fx-aic</code>
              </td>
              <td>
                <code>align-items: center;</code>
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-fx-aife</code>
              </td>
              <td>
                <code>align-items: flex-end;</code>
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-fx-aifs</code>
              </td>
              <td>
                <code>align-items: flex-start;</code>
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-fx-ais</code>
              </td>
              <td>
                <code>align-items: stretch;</code>
              </td>
            </tr>
          </tbody>
        </table>

        <header>
          <h3>Responsive Modifiers</h3>
          <p>Display utilities can be applied to individual common breakpoints using @[size] appended to the end of the class.</p>
        </header>

        <section class="dc-u-fx dc-u-fx-fww dc-u-w-100pc">

          <article className="dc-u-mh-4">
            <h4>Baseline</h4>
            <table className="table dc-u-w-auto">
              <thead>
                <tr>
                  <th className="dc-u-w-1pc">Class Name</th>
                  <th>Pixel Value</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(whitelist(blacklist, breakpoints)).map(([name, value]) => (
                  <tr key={name}>
                    <td>
                      <code className="dc-u-ws-nowrap">{`.dc-u-fx-aib@${dashify(name)}`}</code>
                    </td>
                    <td>
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </article>

          <article className="dc-u-mh-4">
            <h4>Center</h4>
            <table className="table dc-u-w-auto">
              <thead>
                <tr>
                  <th className="dc-u-w-1pc">Class Name</th>
                  <th>Pixel Value</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(whitelist(blacklist, breakpoints)).map(([name, value]) => (
                  <tr key={name}>
                    <td>
                      <code className="dc-u-ws-nowrap">{`.dc-u-fx-aic@${dashify(name)}`}</code>
                    </td>
                    <td>
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </article>

          <article className="dc-u-mh-4">
            <h4>Flex-end</h4>
            <table className="table dc-u-w-auto">
              <thead>
                <tr>
                  <th className="dc-u-w-1pc">Class Name</th>
                  <th>Pixel Value</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(whitelist(blacklist, breakpoints)).map(([name, value]) => (
                  <tr key={name}>
                    <td>
                      <code className="dc-u-ws-nowrap">{`.dc-u-fx-aife@${dashify(name)}`}</code>
                    </td>
                    <td>
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </article>

          <article className="dc-u-mh-4">
            <h4>Flex-start</h4>
            <table className="table dc-u-w-auto">
              <thead>
                <tr>
                  <th className="dc-u-w-1pc">Class Name</th>
                  <th>Pixel Value</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(whitelist(blacklist, breakpoints)).map(([name, value]) => (
                  <tr key={name}>
                    <td>
                      <code className="dc-u-ws-nowrap">{`.dc-u-fx-aifs@${dashify(name)}`}</code>
                    </td>
                    <td>
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </article>

          <article className="dc-u-mh-4">
            <h4>Stretch</h4>
            <table className="table dc-u-w-auto">
              <thead>
                <tr>
                  <th className="dc-u-w-1pc">Class Name</th>
                  <th>Pixel Value</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(whitelist(blacklist, breakpoints)).map(([name, value]) => (
                  <tr key={name}>
                    <td>
                      <code className="dc-u-ws-nowrap">{`.dc-u-fx-ais@${dashify(name)}`}</code>
                    </td>
                    <td>
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </article>

        </section>

        <header>
          <h2>Align Content</h2>
          <p>These classes add <code>align-items</code> to an element, so they can be used for building or customizing an element. They are used for controlling how lines are positioned in multi-line flex containers.</p>
        </header>

        <table className="table dc-u-w-auto">
          <thead>
            <tr>
              <th className="dc-u-w-1pc">Class Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-fx-aib</code>
              </td>
              <td>
                <code>align-items: baseline;</code>
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-fx-aic</code>
              </td>
              <td>
                <code>align-items: center;</code>
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-fx-aife</code>
              </td>
              <td>
                <code>align-items: flex-end;</code>
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-fx-aifs</code>
              </td>
              <td>
                <code>align-items: flex-start;</code>
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-fx-ais</code>
              </td>
              <td>
                <code>align-items: stretch;</code>
              </td>
            </tr>
          </tbody>
        </table>  

        <header>
          <h3>Responsive Modifiers</h3>
          <p>Display utilities can be applied to individual common breakpoints using @[size] appended to the end of the class.</p>
        </header>

        <section class="dc-u-fx dc-u-fx-fww dc-u-w-100pc">

          <article className="dc-u-mh-4">
            <h4>Center</h4>
            <table className="table dc-u-w-auto">
              <thead>
                <tr>
                  <th className="dc-u-w-1pc">Class Name</th>
                  <th>Pixel Value</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(whitelist(blacklist, breakpoints)).map(([name, value]) => (
                  <tr key={name}>
                    <td>
                      <code className="dc-u-ws-nowrap">{`.dc-u-fx-acc@${dashify(name)}`}</code>
                    </td>
                    <td>
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </article>

          <article className="dc-u-mh-4">
            <h4>Flex-end</h4>
            <table className="table dc-u-w-auto">
              <thead>
                <tr>
                  <th className="dc-u-w-1pc">Class Name</th>
                  <th>Pixel Value</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(whitelist(blacklist, breakpoints)).map(([name, value]) => (
                  <tr key={name}>
                    <td>
                      <code className="dc-u-ws-nowrap">{`.dc-u-fx-acfe@${dashify(name)}`}</code>
                    </td>
                    <td>
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </article>

          <article className="dc-u-mh-4">
            <h4>Flex-start</h4>
            <table className="table dc-u-w-auto">
              <thead>
                <tr>
                  <th className="dc-u-w-1pc">Class Name</th>
                  <th>Pixel Value</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(whitelist(blacklist, breakpoints)).map(([name, value]) => (
                  <tr key={name}>
                    <td>
                      <code className="dc-u-ws-nowrap">{`.dc-u-fx-acfs@${dashify(name)}`}</code>
                    </td>
                    <td>
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </article>

          <article className="dc-u-mh-4">
            <h4>Space Around</h4>
            <table className="table dc-u-w-auto">
              <thead>
                <tr>
                  <th className="dc-u-w-1pc">Class Name</th>
                  <th>Pixel Value</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(whitelist(blacklist, breakpoints)).map(([name, value]) => (
                  <tr key={name}>
                    <td>
                      <code className="dc-u-ws-nowrap">{`.dc-u-fx-acsa@${dashify(name)}`}</code>
                    </td>
                    <td>
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </article>

          <article className="dc-u-mh-4">
            <h4>Space Between</h4>
            <table className="table dc-u-w-auto">
              <thead>
                <tr>
                  <th className="dc-u-w-1pc">Class Name</th>
                  <th>Pixel Value</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(whitelist(blacklist, breakpoints)).map(([name, value]) => (
                  <tr key={name}>
                    <td>
                      <code className="dc-u-ws-nowrap">{`.dc-u-fx-acsb@${dashify(name)}`}</code>
                    </td>
                    <td>
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </article>

          <article className="dc-u-mh-4">
            <h4>Stretch</h4>
            <table className="table dc-u-w-auto">
              <thead>
                <tr>
                  <th className="dc-u-w-1pc">Class Name</th>
                  <th>Pixel Value</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(whitelist(blacklist, breakpoints)).map(([name, value]) => (
                  <tr key={name}>
                    <td>
                      <code className="dc-u-ws-nowrap">{`.dc-u-fx-acs@${dashify(name)}`}</code>
                    </td>
                    <td>
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </article>

        </section>

        <header>
          <h2>Justify Content</h2>
          <p>These classes add <code>align-items</code> to an element, so they can be used for building or customizing an element.</p>
        </header>

        <table className="table dc-u-w-auto">
          <thead>
            <tr>
              <th className="dc-u-w-1pc">Class Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-fx-jcc</code>
              </td>
              <td>
                <code>justify-content: center;</code>
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-fx-jcfe</code>
              </td>
              <td>
                <code>justify-content: flex-end;</code>
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-fx-jcfs</code>
              </td>
              <td>
                <code>justify-content: flex-start;</code>
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-fx-jcsa</code>
              </td>
              <td>
                <code>justify-content: space-around;</code>
              </td>
            </tr>
            <tr>
              <td>
                <code className="dc-u-ws-nowrap">.dc-u-fx-ais</code>
              </td>
              <td>
                <code>justify-content: stretch;</code>
              </td>
            </tr>
          </tbody>
        </table>

        <header>
          <h3>Responsive Modifiers</h3>
          <p>Display utilities can be applied to individual common breakpoints using @[size] appended to the end of the class.</p>
        </header>

        <section class="dc-u-fx dc-u-fx-fww dc-u-w-100pc">

          <article className="dc-u-mh-4">
            <h4>Center</h4>
            <table className="table dc-u-w-auto">
              <thead>
                <tr>
                  <th className="dc-u-w-1pc">Class Name</th>
                  <th>Pixel Value</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(whitelist(blacklist, breakpoints)).map(([name, value]) => (
                  <tr key={name}>
                    <td>
                      <code className="dc-u-ws-nowrap">{`.dc-u-fx-jcc@${dashify(name)}`}</code>
                    </td>
                    <td>
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </article>

          <article className="dc-u-mh-4">
            <h4>Flex-end</h4>
            <table className="table dc-u-w-auto">
              <thead>
                <tr>
                  <th className="dc-u-w-1pc">Class Name</th>
                  <th>Pixel Value</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(whitelist(blacklist, breakpoints)).map(([name, value]) => (
                  <tr key={name}>
                    <td>
                      <code className="dc-u-ws-nowrap">{`.dc-u-fx-jcfe@${dashify(name)}`}</code>
                    </td>
                    <td>
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </article>

          <article className="dc-u-mh-4">
            <h4>Flex-start</h4>
            <table className="table dc-u-w-auto">
              <thead>
                <tr>
                  <th className="dc-u-w-1pc">Class Name</th>
                  <th>Pixel Value</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(whitelist(blacklist, breakpoints)).map(([name, value]) => (
                  <tr key={name}>
                    <td>
                      <code className="dc-u-ws-nowrap">{`.dc-u-fx-jcfs@${dashify(name)}`}</code>
                    </td>
                    <td>
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </article>

          <article className="dc-u-mh-4">
            <h4>Space Around</h4>
            <table className="table dc-u-w-auto">
              <thead>
                <tr>
                  <th className="dc-u-w-1pc">Class Name</th>
                  <th>Pixel Value</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(whitelist(blacklist, breakpoints)).map(([name, value]) => (
                  <tr key={name}>
                    <td>
                      <code className="dc-u-ws-nowrap">{`.dc-u-fx-jcsa@${dashify(name)}`}</code>
                    </td>
                    <td>
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </article>

          <article className="dc-u-mh-4">
            <h4>Space Between</h4>
            <table className="table dc-u-w-auto">
              <thead>
                <tr>
                  <th className="dc-u-w-1pc">Class Name</th>
                  <th>Pixel Value</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(whitelist(blacklist, breakpoints)).map(([name, value]) => (
                  <tr key={name}>
                    <td>
                      <code className="dc-u-ws-nowrap">{`.dc-u-fx-jcsb@${dashify(name)}`}</code>
                    </td>
                    <td>
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </article>

        </section>

      </Page>
    </main>
  );
};