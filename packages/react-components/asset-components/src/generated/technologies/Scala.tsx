import * as React from 'react';

function SvgScala(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={39} height={39} {...props}>
      <defs>
        <linearGradient
          id="scala_svg__a"
          x1="50%"
          x2="50%"
          y1="17.738%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#FF7876" />
          <stop offset="100%" stopColor="#C5354B" />
        </linearGradient>
        <circle id="scala_svg__b" cx={19.5} cy={19.5} r={19.5} />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="url(#scala_svg__a)" xlinkHref="#scala_svg__b" />
        <path
          d="M26.292 7v5.317s0 2.215-13.292 3.545v-5.317S26.292 9.215 26.292 7M13 17.634s13.292-1.33 13.292-3.545v5.317s0 2.216-13.292 3.545v-5.317zm0 12.406v-5.317s13.292-1.33 13.292-3.545v5.317s0 2.216-13.292 3.545"
          fill="#FFF"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgScala;
