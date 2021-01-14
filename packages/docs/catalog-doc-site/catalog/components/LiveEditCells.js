/* @jsx jsx */
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';

const background = '#282a36';
const foreground = '#f8f8f2';
const red = '#ff5555';

const StyledProvider = styled(LiveProvider)`
  border-radius: 3;
  box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);
  overflow: hidden;
  margin-bottom: 100;
`;

const StyledEditor = styled.div`
  background: ${background};
  font-size: 14px;
  flex: auto;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  caret-color: 'white';

  * > textarea:focus {
    outline: none;
  }
`;

const StyledPreview = styled(LivePreview)`
  position: relative;
  padding: 16px;
  background: white;
  color: black;
  height: auto;
  overflow: hidden;
  flex: auto;
  border: 1px solid #e6eaeb;
  border-left: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  max-width: 50%;
`;

const StyledError = styled(LiveError)`
  display: block;
  padding: 8px;
  background: ${red};
  width: '100%';
  color: ${foreground};
  white-space: pre-wrap;
  text-align: left;
  font-size: 0.9em;
  font-family: 'Source Code Pro', monospace;
`;

const LiveEditCells = ({ code, noInline, scope }) => (
  <StyledProvider code={code} noInline={noInline} scope={scope}>
    <div css={{ marginTop: 16, width: '100%' }}>
      <div css={{ display: 'flex', width: '100%' }}>
        <StyledEditor>
          <LiveEditor />
        </StyledEditor>
        <StyledPreview />
      </div>
      <StyledError />
    </div>
  </StyledProvider>
);

LiveEditCells.propTypes = {
  code: PropTypes.string.isRequired,
  noInline: PropTypes.bool,
  scope: PropTypes.shape(),
};

LiveEditCells.defaultProps = {
  noInline: false,
  scope: {},
};

export default LiveEditCells;
