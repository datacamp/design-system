import * as React from 'react';

function SvgScala(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 39 39" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={19.5} cy={19.5} r={19.5} fill="#05192D" />
        <path
          fill="#FFF"
          fillRule="nonzero"
          d="M26.292 7v5.317s0 2.215-13.292 3.545v-5.317S26.292 9.215 26.292 7M13 17.634s13.292-1.33 13.292-3.545v5.317s0 2.216-13.292 3.545v-5.317zm0 12.406v-5.317s13.292-1.33 13.292-3.545v5.317s0 2.216-13.292 3.545"
        />
      </g>
    </svg>
  );
}

export default SvgScala;
