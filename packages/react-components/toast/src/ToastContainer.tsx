import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { ClassNames, keyframes } from '@emotion/react';
import React from 'react';
import {
  cssTransition,
  ToastContainer as ToastifyContainer,
  ToastContainerProps,
} from 'react-toastify';
// needed for invisible progress bar timing
const linearProgress = keyframes({
  '0%': {
    transform: 'scaleX(1)',
  },
  '100%': {
    transform: 'scaleX(0)',
  },
});

const toastEnter = keyframes({
  '50%': {
    opacity: 1,
  },
  from: {
    opacity: 0,
    transform: 'scale3d(0.3, 0.3, 0.3)',
  },
});

const toastExit = keyframes({
  '50%': {
    opacity: 0,
    transform: 'scale3d(0.3, 0.3, 0.3)',
  },
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
});

const ToastContainer = (props: ToastContainerProps): React.ReactElement => (
  <ClassNames>
    {({ css }) => {
      const transition = cssTransition({
        duration: [500, 500],
        enter: css({
          animationName: toastEnter,
          animationTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
        }),
        exit: css({
          animationName: toastExit,
          animationTimingFunction: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
        }),
      });
      return (
        <ToastifyContainer
          autoClose={5000}
          className={css({
            '.Toastify__progress-bar': {
              animation: `${linearProgress} linear 1`,
            },
            left: '50%',
            position: 'fixed',
            top: 0,
            transform: 'translateX(-50%)',
            zIndex: parseInt(tokens.zIndex[999].value, 10),
          })}
          closeButton={false}
          closeOnClick={false}
          draggable={false}
          hideProgressBar
          position="top-center"
          toastClassName={css({ marginTop: 16 })}
          transition={transition}
          {...props}
        />
      );
    }}
  </ClassNames>
);

export default ToastContainer;
