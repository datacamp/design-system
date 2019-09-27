import Button from '@datacamp/waffles-button';
import { Input, Radio, RadioList } from '@datacamp/waffles-form-elements';
import { AddCircleIcon } from '@datacamp/waffles-icons';
import { storiesOf } from '@storybook/react';
import React, { createElement, useEffect, useRef, useState } from 'react';

storiesOf('waffles-form-elements', module)
  .add('Input', () => {
    return createElement(() => {
      const [value, setValue] = useState('');
      const focusRef = useRef();
      useEffect(() => {
        if (focusRef && focusRef.current) {
          focusRef.current.focus();
        }
      }, [focusRef]);

      return (
        <div>
          <table>
            <tbody>
              <tr>
                <td>
                  <Input
                    name="story"
                    onChange={() => {}}
                    placeholder="placeholder text"
                    value=""
                  />
                </td>
                <td>
                  <Input
                    name="story1"
                    onChange={() => {}}
                    value="with a value"
                  />
                </td>
                <td>
                  <Input
                    ref={focusRef}
                    name="story2"
                    onChange={() => {}}
                    value="initial focus"
                  />
                </td>
                <td>
                  <Input
                    name="story3"
                    onChange={setValue}
                    placeholder="editable"
                    value={value}
                  />
                </td>
                <td>
                  <Input
                    name="story4"
                    onChange={() => {}}
                    placeholder="disabled"
                    value=""
                    disabled
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div>
            <Button size="small">Small</Button>
            <Input
              name="story5"
              onChange={() => {}}
              placeholder="small input"
              size="small"
              value=""
            />
          </div>
          <div>
            <Button>medium</Button>
            <Input
              name="story5"
              onChange={() => {}}
              placeholder="medium input"
              value=""
            />
          </div>
          <div>
            <Button size="large">large</Button>
            <Input
              name="story5"
              onChange={() => {}}
              placeholder="large input"
              size="large"
              value=""
            />
          </div>
        </div>
      );
    });
  })
  .add('Input with label', () => {
    return createElement(() => {
      const focusRef = useRef();
      useEffect(() => {
        if (focusRef && focusRef.current) {
          focusRef.current.focus();
        }
      }, [focusRef]);

      return (
        <div>
          <Input
            label="Test label"
            name="story"
            onChange={() => {}}
            placeholder="with label"
            value=""
          />
          <Input
            label="Another test label"
            name="story1"
            onChange={() => {}}
            placeholder="with label"
            value=""
          />
          <Input
            label="Another test label"
            name="story2"
            onChange={() => {}}
            placeholder="with label"
            value=""
          />
          <Input
            label="Another test label"
            name="story3"
            onChange={() => {}}
            placeholder="with label"
            value=""
          />
          <Input
            errorMessage="This is not right"
            label="Another test label"
            name="story4"
            onChange={() => {}}
            placeholder="with error"
            value=""
          />
          <Input
            label="Another test label"
            name="story4"
            onChange={() => {}}
            placeholder="Required"
            value=""
            required
          />
          <Input
            label="Another test label"
            name="story5"
            onChange={() => {}}
            placeholder="Not required"
            required={false}
            value=""
          />
          <Input
            errorMessage="This is not right"
            label="Another test label"
            name="story5"
            onChange={() => {}}
            placeholder="with label"
            value=""
          />
        </div>
      );
    });
  })
  .add('Input with icon', () => {
    return createElement(() => {
      const focusRef = useRef();
      useEffect(() => {
        if (focusRef && focusRef.current) {
          focusRef.current.focus();
        }
      }, [focusRef]);

      return (
        <div>
          <Input
            icon={<AddCircleIcon />}
            label="Test label"
            name="story8"
            onChange={() => {}}
            placeholder="with icon and label"
            value=""
          />

          <Input
            icon={<AddCircleIcon />}
            label="Test label"
            name="story9"
            onChange={() => {}}
            placeholder="with icon and label"
            value=""
          />

          <Input
            icon={<AddCircleIcon />}
            name="story5"
            onChange={() => {}}
            placeholder="with icon"
            value=""
          />
          <Input
            icon={<AddCircleIcon />}
            name="story6"
            onChange={() => {}}
            placeholder="with icon"
            size="large"
            value=""
          />

          <Input
            icon={<AddCircleIcon />}
            name="story7"
            onChange={() => {}}
            placeholder="with icon"
            size="small"
            value=""
          />
        </div>
      );
    });
  })

  .add('RadioList', () => {
    const [value, setValue] = useState('value1');

    return createElement(() => {
      const focusRef = useRef();
      useEffect(() => {
        if (focusRef && focusRef.current) {
          focusRef.current.focus();
        }
      }, [focusRef]);

      return (
        <div>
          <RadioList
            label="test label"
            name="testName"
            onChange={setValue}
            value={value}
          >
            <Radio value="value1" />
            <Radio value="value2" />
            <Radio value="disabled" disabled />
          </RadioList>

          <RadioList
            label="label 2"
            name="testName"
            onChange={() => {}}
            value=""
            required
          >
            <Radio value="value3" />
            <Radio value="value4" />
          </RadioList>

          <RadioList
            label="label 3"
            name="testName"
            onChange={() => {}}
            required={false}
            value=""
          >
            <Radio value="value5" />
            <Radio value="value6" />
          </RadioList>
        </div>
      );
    });
  });
