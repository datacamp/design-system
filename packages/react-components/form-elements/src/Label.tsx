import { Paragraph, Text } from '@datacamp/waffles-text';
import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { ssrSafeNotFirstChildSelector } from '@datacamp/waffles-utils';
import { css } from '@emotion/react';
import React from 'react';

import { requiredStyle } from './formStyles';

interface LabelProps {
  as?: 'label' | 'div' | 'fieldset';
  children: React.ReactNode;
  description?: string;
  errorMessage?: string;
  htmlFor?: string;
  label: string;
  required?: boolean;
}

const labelStyle = css({
  border: 0,
  display: 'block',
  margin: 0,
  marginTop: 0,
  minWidth: 0,
  padding: 0,
  [ssrSafeNotFirstChildSelector]: {
    marginTop: tokens.size.space[16].value,
  },
});

const textStyle = css({
  color: tokens.color.primary.navyText.value.hex,
  display: 'inline-block',
  flex: '0 1 auto',
  fontWeight: tokens.fontWeight.bold.value,
  marginRight: tokens.size.space[4].value,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

const errorMessageStyle = css({
  color: tokens.color.primary.redText.value.hex,
  display: 'block',
  fontSize: '14px',
  marginTop: tokens.size.space[8].value,
});

const Label = ({
  as: Element = 'label',
  children,
  description,
  errorMessage,
  htmlFor,
  label,
  required,
}: LabelProps): React.ReactElement => {
  const TitleElement = Element === 'fieldset' ? 'legend' : 'span';

  return (
    <Element css={labelStyle} htmlFor={htmlFor}>
      <TitleElement
        css={{
          display: 'block',
          marginBottom: tokens.size.space[12].value,
          padding: 0,
          width: '100%',
        }}
      >
        <span
          css={{
            alignItems: 'center',
            display: 'inline-flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Text css={textStyle}>{label}</Text>
          {required !== undefined && (
            <div css={{ flex: 'none', whiteSpace: 'nowrap' }}>
              {required ? (
                <>
                  <Text
                    css={{
                      color: tokens.color.primary.red.value.hex,
                      marginRight: tokens.size.space[4].value,
                    }}
                  >
                    •
                  </Text>
                  <Text css={requiredStyle}>Required</Text>
                </>
              ) : (
                <Text css={requiredStyle}>Optional</Text>
              )}
            </div>
          )}
        </span>
        {description && (
          <Paragraph
            css={{
              marginTop: tokens.size.space[8].value,
            }}
          >
            {description}
          </Paragraph>
        )}
      </TitleElement>
      {children}
      {errorMessage && <Text css={errorMessageStyle}>{errorMessage}</Text>}
    </Element>
  );
};

export default Label;
