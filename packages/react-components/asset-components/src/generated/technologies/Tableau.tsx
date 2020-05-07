import * as React from 'react';

function SvgTableau(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={39} height={39} {...props}>
      <defs>
        <linearGradient
          id="tableau_svg__a"
          x1="50%"
          x2="50%"
          y1="0%"
          y2="97.043%"
        >
          <stop offset="0%" stopColor="#E689D5" />
          <stop offset="100%" stopColor="#B4479F" />
        </linearGradient>
        <circle id="tableau_svg__b" cx={19.5} cy={19.5} r={19.5} />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="url(#tableau_svg__a)" xlinkHref="#tableau_svg__b" />
        <path
          fill="#FFF"
          d="M20.03 26.356v2.365h2.089v.913h-2.09V32h-.995v-2.366h-2.089v-.913h2.09v-2.365h.994zm-6.396-4.79v3.391h3.08v1.034h-3.08v3.393H12.47V25.99H9.39v-1.034h3.08v-3.39h1.165zm12.921 0v3.391h3.08v1.034h-3.08v3.393h-1.167V25.99H22.31v-1.034h3.08v-3.39h1.166zm-6.367-6.581v3.788h3.437v1.346h-3.437v3.787h-1.352V20.12H15.4v-1.346h3.437v-3.788h1.352zm9.723 1.64v2.364H32v.914h-2.09v2.365h-.994v-2.365h-2.09v-.914h2.09v-2.365h.995zm-20.107.18v2.275h2.074v.702l-2.074.013v2.293h-.73v-2.289L7 19.812v-.732h2.075v-2.275h.729zm16.751-7.387v3.408h3.08v1.033h-3.08v3.376h-1.167v-3.376H22.31v-1.033h3.08V9.418h1.166zm-12.957 0v3.407h3.116v1.003h-3.116v3.407h-1.092v-3.407H9.39v-1.003h3.116V9.418h1.092zM19.903 7v2.32h2.067v.703h-2.067v2.32h-.743v-2.32h-2.067v-.702h2.067V7h.743z"
        />
      </g>
    </svg>
  );
}

export default SvgTableau;
