import { Input } from '@datacamp/waffles-form-elements';
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
                <Input name="story" onChange={() => {}} value="with a value" />
              </td>
              <td>
                <Input
                  ref={focusRef}
                  name="story"
                  onChange={() => {}}
                  value="initial focus"
                />
              </td>
              <td>
                <Input
                  name="story"
                  onChange={setValue}
                  placeholder="editable"
                  value={value}
                />
              </td>
              <td>
                <Input
                  name="story"
                  onChange={() => {}}
                  placeholder="disabled"
                  value=""
                  disabled
                />
              </td>
            </tr>
          </tbody>
        </table>
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
            label="Another test label"
            name="story4"
            onChange={() => {}}
            placeholder="with label"
            value=""
          />
        </div>
      );
    });
  });
