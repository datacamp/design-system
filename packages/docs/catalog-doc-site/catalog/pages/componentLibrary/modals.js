import Button from '@datacamp/waffles-button';
import { AlertDialog, Dialog } from '@datacamp/waffles-modals';
import { Code, CodeBlock, Heading, Paragraph } from '@datacamp/waffles-text';
import { Page } from 'catalog';
import React from 'react';

import CustomHeader from '../../components/CustomHeader';
import LazyLiveEditCells from '../../components/LazyLiveEditCells';

export default () => {
  return (
    <main>
      <CustomHeader
        description="The modals package"
        section="Component Library"
        subSection="Modals"
      />

      <Page>
        <section className="dc-u-maxw-100pc">
          <div className="dc-card dc-u-p-24 dc-u-mt-8">
            <Heading as="h3" size={500}>
              About
            </Heading>
            <Paragraph>
              The <Code>@datacamp/waffles-modals</Code> package contains
              multiple modals that can be used for different purposes. Before
              using any of the exposed modals, <Code>setAppElement</Code> should
              be called with the root element of the application. This will
              normally be the same as the element used for rendering react.
            </Paragraph>
            <CodeBlock>
              {
                "import { setAppElement } from '@datacamp/waffles-modals';\n\nsetAppElement('#root');"
              }
            </CodeBlock>
          </div>
          <div className="dc-card dc-u-p-24 dc-u-mt-8">
            <Heading as="h3" size={500}>
              Alert Dialog
            </Heading>
            <Paragraph>
              The alert dialog should be used whenever user confirmation is
              required before performing an action. It takes no children as its
              behaviour is controlled entirely by the properties set on the
              component. Below there is a simple example of how this can be
              used, feel free to change some of the values and see how it
              impacts the Modal.
            </Paragraph>
            <table className="dc-table dc-table--bordered">
              <tbody>
                <tr>
                  <LazyLiveEditCells
                    code={`() => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>open alert</Button>
      <AlertDialog
        confirmButtonText="Delete"
        cancelButtonText="Cancel"
        intent="danger"
        isOpen={isOpen}
        title="You are about to delete an exercise"
        description="Are you sure you want to proceed with this action, this can not be undone."
        onClose={(origin) => setIsOpen(false)}
        onConfirm={() => setIsOpen(false)}
      />
    </>
  );
};`}
                    scope={{ AlertDialog, Button }}
                  />
                </tr>
              </tbody>
            </table>
            <table className="dc-table dc-table--bordered">
              <thead className="dc-table__thead">
                <tr className="dc-table__tr">
                  <th>Property</th>
                  <th>Type</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="dc-table__tr">
                  <th>cancelButtonText</th>
                  <td>string - optional</td>
                  <td>
                    By default the cancel button will say &quot;Cancel&quot;.
                    This can be overriden by this prop.
                  </td>
                </tr>
                <tr className="dc-table__tr">
                  <th>confirmButtonText</th>
                  <td>string - optional</td>
                  <td>
                    By default the confirm button will say &quot;Confirm&quot;.
                    This can be overriden by this prop.
                  </td>
                </tr>
                <tr className="dc-table__tr">
                  <th>dataAttributes</th>
                  <td>object - optional</td>
                  <td>
                    As with all the other waffles components, dataAttributes can
                    be used to set data- html attributes on the element
                  </td>
                </tr>
                <tr className="dc-table__tr">
                  <th>description</th>
                  <td>string - required</td>
                  <td>The body text to render in the modal</td>
                </tr>
                <tr className="dc-table__tr">
                  <th>intent</th>
                  <td>neutral | success | warning | danger - optional</td>
                  <td>
                    The main intention of the modal. This is used to set the
                    button colours and to provide a default focus when the modal
                    opens.
                  </td>
                </tr>
                <tr className="dc-table__tr">
                  <th>isLoading</th>
                  <td>boolean - optional</td>
                  <td>
                    When this is set to true the Modal will show a spinner in
                    the confirmation button.The user will not be able to close
                    the dialog while it&apos;s loading
                  </td>
                </tr>
                <tr className="dc-table__tr">
                  <th>isOpen</th>
                  <td>boolean - required</td>
                  <td>
                    When this is set to true the Modal will show. It is
                    preferred to use this to control when to display the dialog
                    rather than simply mounting and unmounting as setting this
                    to false allows the close animation to play fully.
                  </td>
                </tr>
                <tr className="dc-table__tr">
                  <th>onClose</th>
                  <td>
                    <Code>
                      (origin: cancelButton | overlayClick | escKey |
                      closeButton) =&gt; void
                    </Code>{' '}
                    - required
                  </td>
                  <td>
                    This function is called whenever the user requests to close
                    the dialog. It is the responsibility of the application to
                    handle this correctly and set isOpen to false. This function
                    will be called with an origin string that specifies how the
                    user requested to close the modal.
                  </td>
                </tr>
                <tr className="dc-table__tr">
                  <th>onConfirm</th>
                  <td>
                    <Code>() =&gt; void</Code> - required
                  </td>
                  <td>
                    This function is called whenever the user clicks the confirm
                    button.
                  </td>
                </tr>
                <tr className="dc-table__tr">
                  <th>title</th>
                  <td>string - required</td>
                  <td>The main heading for the modal.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="dc-card dc-u-p-24 dc-u-mt-8">
            <Heading as="h3" size={500}>
              Dialog
            </Heading>
            <Paragraph>
              The dialog should be used to block interaction with the rest of
              the page while open. It provides the frame within which to supply
              custom dialog content.
            </Paragraph>
            <table className="dc-table dc-table--bordered">
              <tbody>
                <tr>
                  <LazyLiveEditCells
                    code={`() => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>open dialog</Button>
      <Dialog isOpen={isOpen} onClose={origin => setIsOpen(false)}>
        <Dialog.Header>This is the Title</Dialog.Header>
        <Dialog.Body>
          <Paragraph>
            Some Content for the modal. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Paragraph>
        </Dialog.Body>
        <Dialog.Footer>
          <Button appearance="primary" onClick={() => {}}>
            A single button can be placed in the footer
          </Button>
        </Dialog.Footer>
      </Dialog>
    </>
  );
};`}
                    scope={{ Button, Dialog, Paragraph }}
                  />
                </tr>
              </tbody>
            </table>
            <table className="dc-table dc-table--bordered">
              <thead className="dc-table__thead">
                <tr className="dc-table__tr">
                  <th>Property</th>
                  <th>Type</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="dc-table__tr">
                  <th>children</th>
                  <td>ReactNode</td>
                  <td>
                    The content to render in the modal. This can be any valid
                    React. Use the Dialog.Header, Dialog.Body, & Dialog.Footer
                    components to add some formatting to your content. The
                    Footer can take a single button as a child.
                  </td>
                </tr>
                <tr className="dc-table__tr">
                  <th>dataAttributes</th>
                  <td>object - optional</td>
                  <td>
                    As with all the other waffles components, dataAttributes can
                    be used to set data- html attributes on the element
                  </td>
                </tr>
                <tr className="dc-table__tr">
                  <th>hideCloseButton</th>
                  <td>boolean - optional</td>
                  <td>
                    When this is set to true, the closeButton will not be shown
                    in the top right corner. Alternative ways to exit the dialog
                    should be provided in the content.
                  </td>
                </tr>
                <tr className="dc-table__tr">
                  <th>isOpen</th>
                  <td>boolean - required</td>
                  <td>
                    When this is set to true the Modal will show. It is
                    preferred to use this to control when to display the dialog
                    rather than simply mounting and unmounting as setting this
                    to false allows the close animation to play fully.
                  </td>
                </tr>
                <tr className="dc-table__tr">
                  <th>onClose</th>
                  <td>
                    <Code>
                      (origin: overlayClick | escKey | closeButton) =&gt; void
                    </Code>{' '}
                    - required
                  </td>
                  <td>
                    This function is called whenever the user requests to close
                    the dialog. It is the responsibility of the application to
                    handle this correctly and set isOpen to false. This function
                    will be called with an origin string that specifies how the
                    user requested to close the modal.
                  </td>
                </tr>
                <tr className="dc-table__tr">
                  <th>shouldCloseOnEsc</th>
                  <td>boolean - optional</td>
                  <td>
                    By default the dialog will close when the user presses the
                    escape key. When this is false, this behaviour is disabled.
                  </td>
                </tr>
                <tr className="dc-table__tr">
                  <th>shouldCloseOnOverlayClick</th>
                  <td>boolean - optional</td>
                  <td>
                    By default the dialog will close when the user clicks on the
                    backdrop. When this is false, this behaviour is disabled.
                  </td>
                </tr>
                <tr className="dc-table__tr">
                  <th>width</th>
                  <td>string - optional</td>
                  <td>
                    By default the dialog will size to the content provided,
                    however it can be useful to provide a fixed width.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </Page>
    </main>
  );
};
