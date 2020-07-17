import * as React from 'react';

function SvgExcel(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={39} height={39} {...props}>
      <defs>
        <linearGradient
          id="excel_svg__b"
          x1="82.617%"
          x2="13.975%"
          y1="15.111%"
          y2="84.102%"
        >
          <stop offset="0%" stopColor="#2DBD7B" />
          <stop offset="100%" stopColor="#09874A" />
        </linearGradient>
        <circle id="excel_svg__a" cx={19.5} cy={19.5} r={19.5} />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="excel_svg__c" fill="#fff">
          <use xlinkHref="#excel_svg__a" />
        </mask>
        <use fill="url(#excel_svg__b)" xlinkHref="#excel_svg__a" />
        <path
          fill="#FFF"
          fillRule="nonzero"
          d="M20.971 9.016l-.001 1.986h8.28a.75.75 0 01.743.652l.007.102v14.501a.751.751 0 01-.75.754h-8.285v2.005L9 26.84V11.157l11.971-2.141zm-.001 4.06h2.832v1.817h-2.833v.693h2.833v1.816h-2.834v.693h2.834v1.817h-2.835v.692h2.835v1.817h-2.836v.697h2.836v1.733h-2.837v1.468h8.343V11.69H20.97v1.385zm6.875 10.042v1.73H24.49v-1.73h3.355zM17.143 15.47l-1.476.068-1.061 2.506-.882-2.412-1.516.072 1.563 3.31-1.646 3.274 1.402.079 1.025-2.491 1.047 2.61 1.591.094-1.76-3.566 1.713-3.544zm10.702 5.135v1.816H24.49v-1.816h3.355zm0-2.51v1.817H24.49v-1.817h3.355zm0-2.51v1.817H24.49v-1.816h3.355zm0-2.509v1.817H24.49v-1.817h3.355z"
          mask="url(#excel_svg__c)"
        />
      </g>
    </svg>
  );
}

export default SvgExcel;
