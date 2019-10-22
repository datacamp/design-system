import Button from '@datacamp/waffles-button';
import {
  Input,
  Radio,
  RadioList,
  Select,
  SelectOption,
} from '@datacamp/waffles-form-elements';
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

      const [dateValue, setDateValue] = useState();
      const [dateTimeLocalValue, setDateTimeLocalValue] = useState();
      const [emailValue, setEmailValue] = useState('user@datacamp.com');
      const [monthValue, setMonthValue] = useState();
      const [numberValue, setNumberValue] = useState(567);
      const [passwordValue, setPasswordValue] = useState('abcde');
      const [searchValue, setSearchValue] = useState();
      const [telValue, setTelValue] = useState();
      const [timeValue, setTimeValue] = useState();
      const [urlValue, setURLValue] = useState();
      const [weekValue, setWeekValue] = useState();

      return (
        <div>
          <Input
            label="Input with label"
            name="story"
            onChange={() => {}}
            placeholder="placeholder text"
            value=""
          />
          <Input
            description="This is a description"
            label="Input with a description"
            name="story1"
            onChange={() => {}}
            placeholder="placeholder text"
            value=""
          />
          <Input
            errorMessage="This is an error message"
            label="Input with an error message"
            name="story2"
            onChange={() => {}}
            placeholder="placeholder text"
            value=""
          />
          <Input
            label="Required Input"
            name="story3"
            onChange={() => {}}
            placeholder="placeholder text"
            value=""
            required
          />
          <Input
            label="Optional input"
            name="story4"
            onChange={() => {}}
            placeholder="with error"
            required={false}
            value=""
          />
          <Input
            icon={<AddCircleIcon color="#3ac" />}
            label="Input with an icon"
            name="story5"
            onChange={() => {}}
            placeholder="with error"
            value=""
          />
          <Input
            description="This is a description"
            errorMessage="This is a error message"
            icon={<AddCircleIcon color="#3ac" />}
            label="Input with everything"
            name="story6"
            onChange={() => {}}
            placeholder="with error"
            value=""
            required
          />
          <Input
            label="type='date'"
            name="story7"
            onChange={setDateValue}
            type="date"
            value={dateValue}
          />
          <Input
            label="type='datetime-local'"
            name="story8"
            onChange={setDateTimeLocalValue}
            type="datetime-local"
            value={dateTimeLocalValue}
          />
          <Input
            label="type='email'"
            name="story9"
            onChange={setEmailValue}
            type="email"
            value={emailValue}
          />
          <Input
            label="type='month'"
            name="story10"
            onChange={setMonthValue}
            type="month"
            value={monthValue}
          />
          <Input
            label="type='number'"
            name="story11"
            onChange={setNumberValue}
            type="number"
            value={numberValue}
          />
          <Input
            label="type='password'"
            name="story12"
            onChange={setPasswordValue}
            type="password"
            value={passwordValue}
          />
          <Input
            label="type='search'"
            name="story13"
            onChange={setSearchValue}
            type="search"
            value={searchValue}
          />
          <Input
            label="type='tel'"
            name="story14"
            onChange={setTelValue}
            type="tel"
            value={telValue}
          />
          <Input
            label="type='time'"
            name="story15"
            onChange={setTimeValue}
            type="time"
            value={timeValue}
          />
          <Input
            label="type='url'"
            name="story16"
            onChange={setURLValue}
            type="url"
            value={urlValue}
          />
          <Input
            label="type='week'"
            name="story17"
            onChange={setWeekValue}
            type="week"
            value={weekValue}
          />
        </div>
      );
    });
  })
  .add('Select', () => {
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
          <div css={{ display: 'flex' }}>
            <Select name="story1" onChange={setValue} value={value}>
              <SelectOption value="opt1">opt1</SelectOption>
              <SelectOption value="opt2">opt2</SelectOption>
              <SelectOption value="opt3">opt3</SelectOption>
            </Select>

            <Select name="story2" onChange={() => {}} value="opt3">
              <SelectOption value="opt1">opt1</SelectOption>
              <SelectOption value="opt2">opt2</SelectOption>
              <SelectOption value="opt3">opt3</SelectOption>
            </Select>

            <Select
              name="story3"
              onChange={() => {}}
              value="disabled2"
              disabled
            >
              <SelectOption value="opt1">disabled</SelectOption>
              <SelectOption value="opt2">disabled2</SelectOption>
              <SelectOption value="opt3">disabled3</SelectOption>
            </Select>

            <Select name="story4" onChange={() => {}} value="opt2">
              <SelectOption value="opt1" disabled>
                disabled option
              </SelectOption>
              <SelectOption value="opt2">with disabled option</SelectOption>
              <SelectOption value="opt3">with disabled option</SelectOption>
            </Select>
          </div>
          <div>
            <Select name="story5" onChange={() => {}} size="large" value="opt2">
              <SelectOption value="opt1">large1</SelectOption>
              <SelectOption value="opt2">large2</SelectOption>
              <SelectOption value="opt3">large3</SelectOption>
            </Select>

            <Select name="story6" onChange={() => {}} size="small" value="opt2">
              <SelectOption value="opt1">small1</SelectOption>
              <SelectOption value="opt2">small2</SelectOption>
              <SelectOption value="opt3">small3</SelectOption>
            </Select>

            <Select
              label="This is a label"
              name="story7"
              onChange={() => {}}
              value="opt2"
            >
              <SelectOption value="opt1">opt1</SelectOption>
              <SelectOption value="opt2">opt2</SelectOption>
              <SelectOption value="opt3">opt3</SelectOption>
            </Select>

            <Select
              errorMessage="this is an error message"
              label="This is a label"
              name="story8"
              onChange={() => {}}
              value="opt2"
            >
              <SelectOption value="opt1">opt1</SelectOption>
              <SelectOption value="opt2">opt2</SelectOption>
              <SelectOption value="opt3">opt3</SelectOption>
            </Select>

            <Select
              label="This is a label"
              name="story9"
              onChange={() => {}}
              value="opt2"
              required
            >
              <SelectOption value="opt1">opt1</SelectOption>
              <SelectOption value="opt2">opt2</SelectOption>
              <SelectOption value="opt3">opt3</SelectOption>
            </Select>

            <Select
              label="This is a label"
              name="story10"
              onChange={() => {}}
              required={false}
              value="opt2"
            >
              <SelectOption value="opt1">opt1</SelectOption>
              <SelectOption value="opt2">opt2</SelectOption>
              <SelectOption value="opt3">opt3</SelectOption>
            </Select>
          </div>
        </div>
      );
    });
  })

  .add('RadioList', () => {
    return createElement(() => {
      const [value1, setValue1] = useState('');
      const [value2, setValue2] = useState('value4');
      const [value3, setValue3] = useState('');
      const [value4, setValue4] = useState('');
      const [value5, setValue5] = useState('');
      return (
        <div>
          <RadioList
            label="Normal RadioList"
            name="radio1"
            onChange={setValue1}
            value={value1}
          >
            <Radio value="value1">Item 1</Radio>
            <Radio value="value2">Item 2</Radio>
            <Radio value="disabled" disabled>
              Disabled item
            </Radio>
          </RadioList>
          <RadioList
            label="Disabled RadioList"
            name="radio2"
            onChange={setValue2}
            value={value2}
            disabled
          >
            <Radio value="value3">Item 1</Radio>
            <Radio value="value4">Item 2</Radio>
            <Radio value="disabled" disabled>
              Disabled item
            </Radio>
          </RadioList>
          <RadioList
            errorMessage="This is the error message"
            label="RadioList with error"
            name="radio3"
            onChange={setValue3}
            value={value3}
          >
            <Radio value="value5">Item 1</Radio>
            <Radio value="value6">Item 2</Radio>
            <Radio value="disabled" disabled>
              Disabled item
            </Radio>
          </RadioList>
          <RadioList
            label="Required RadioList"
            name="radio4"
            onChange={setValue4}
            value={value4}
            required
          >
            <Radio value="value7">Item 1</Radio>
            <Radio value="value8">Item 2</Radio>
            <Radio value="disabled" disabled>
              Disabled item
            </Radio>
          </RadioList>
          <RadioList
            label="Optional RadioList"
            name="radio5"
            onChange={setValue5}
            required={false}
            value={value5}
          >
            <Radio value="value9">Item 1</Radio>
            <Radio value="value10">Item 2</Radio>
            <Radio value="disabled" disabled>
              Disabled item
            </Radio>
          </RadioList>
        </div>
      );
    });
  });
