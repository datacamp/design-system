import Button from '@datacamp/waffles-button';
import { Input } from '@datacamp/waffles-form-elements';
import { storiesOf } from '@storybook/react';
import React, { createElement, useEffect, useRef, useState } from 'react';

storiesOf('waffles-form-elements', module).add('Input', () => {
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
              <Input name="story" onChange={() => {}} placeholder="" value="" />
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
          <tr>
            <td>
              <Button size="small">a small button for comparison</Button>
            </td>
            <td>
              <Input
                name="story"
                onChange={() => {}}
                placeholder="small"
                size="small"
                value=""
              />
            </td>
          </tr>
          <tr>
            <td>
              <Button>medium button for comparison</Button>
            </td>
            <td>
              <Input
                name="story"
                onChange={() => {}}
                placeholder="medium"
                size="medium"
                value=""
              />
            </td>
          </tr>

          <tr>
            <td>
              <Button size="large">here&apos;s a large button</Button>
            </td>
            <td>
              <Input
                name="story"
                onChange={setValue}
                placeholder="editable"
                size="large"
                value={value}
              />
            </td>
          </tr>
        </tbody>
      </table>
    );
  });
});
