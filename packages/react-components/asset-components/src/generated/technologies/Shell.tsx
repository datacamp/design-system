import * as React from 'react';

function SvgShell(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 39 39" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={19.5} cy={19.5} r={19.5} fill="#05192D" />
        <path
          fill="#FFF"
          d="M30.269 21.537v3.202h-11.06v-3.202h11.06zM9.022 12.806l9.72 4.041v2.534l-9.72 4.05v-3.022l5.908-2.286-5.908-2.278v-3.039z"
        />
      </g>
    </svg>
  );
}

export default SvgShell;
