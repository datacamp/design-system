import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

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
  font-family: 'Source Code Pro', monospace;
  font-size: 14px;
  overflow: auto;
  white-space: no-wrap;

  * > textarea:focus {
    outline: none;
  }
`;

const StyledPreview = styled(LivePreview)`
  position: relative;
  padding: 0.5rem;
  background: white;
  color: black;
  height: auto;
  overflow: hidden;
`;

const StyledError = styled(LiveError)`
  display: block;
  padding: 8px;
  background: ${red};

  color: ${foreground};
  white-space: pre-wrap;
  text-align: left;
  font-size: 0.9em;
  font-family: 'Source Code Pro', monospace;
`;

const LiveEditCells = ({ noInline, code, scope }) => (
  <StyledProvider code={code} noInline={noInline} scope={scope}>
    <td>
      <StyledEditor>
        <LiveEditor />
      </StyledEditor>
      <StyledError />
    </td>
    <td>
      <StyledPreview />
    </td>
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
