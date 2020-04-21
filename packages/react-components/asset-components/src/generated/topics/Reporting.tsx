import * as React from 'react';
interface SVGRProps {
  svgRef?: React.Ref<SVGSVGElement>;
}

function SvgReporting({
  svgRef,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={192} height={192} ref={svgRef} {...props}>
      <defs>
        <path id="reporting_svg__a" d="M0 0h192v192H0z" />
        <path
          id="reporting_svg__d"
          d="M6.025.798c.82-.576 1.933-.579 3.158.128l75.763 43.742c2.518 1.455 4.562 5.36 4.562 8.718v108.342c0 1.762-.563 3.025-1.462 3.617v.001l-.03.019a2.29 2.29 0 0 1-.187.107l-5.614 3.241-15.706-9.068 4.427-2.556-61.753-35.654c-2.446-1.412-4.445-5.139-4.558-8.428l-.005-.289V6.576L.32 4.093z"
        />
        <path
          id="reporting_svg__g"
          d="M85.598 53.722c0-3.358-2.044-7.264-4.562-8.718L5.272 1.262C2.754-.192.71 1.354.71 4.712v108.341c0 3.358 2.044 7.264 4.562 8.718l75.764 43.742c2.518 1.453 4.562-.092 4.562-3.45V53.723z"
        />
        <path
          id="reporting_svg__j"
          d="M6.025.798c.82-.576 1.933-.579 3.158.128l75.763 43.742c2.518 1.455 4.562 5.36 4.562 8.718v108.342c0 1.762-.563 3.025-1.462 3.617v.001l-.03.019a2.29 2.29 0 0 1-.187.107l-5.614 3.241-15.706-9.068 4.427-2.556-61.753-35.654c-2.446-1.412-4.445-5.139-4.558-8.428l-.005-.289V6.576L.32 4.093z"
        />
        <path
          id="reporting_svg__l"
          d="M86.598 54.722c0-3.358-2.044-7.264-4.562-8.718L6.272 2.262C3.754.808 1.71 2.354 1.71 5.712v108.341c0 3.358 2.044 7.264 4.562 8.718l75.764 43.742c2.518 1.453 4.562-.092 4.562-3.45V54.723z"
        />
        <path
          id="reporting_svg__n"
          d="M7.025.798c.82-.576 1.933-.579 3.158.128l75.763 43.742c2.518 1.455 4.562 5.36 4.562 8.718v108.342c0 1.762-.563 3.025-1.462 3.617v.001l-.03.019a2.29 2.29 0 0 1-.187.107l-5.614 3.241-15.706-9.068 4.427-2.556-61.753-35.654c-2.446-1.412-4.445-5.139-4.558-8.428l-.005-.289V6.576l-4.3-2.483z"
        />
        <path
          id="reporting_svg__q"
          d="M86.598 54.722c0-3.358-2.044-7.264-4.562-8.718L6.272 2.262C3.754.808 1.71 2.354 1.71 5.712v108.341c0 3.358 2.044 7.264 4.562 8.718l75.764 43.742c2.518 1.453 4.562-.092 4.562-3.45V54.723z"
        />
        <linearGradient
          id="reporting_svg__c"
          x1="57.881%"
          x2="36.925%"
          y1="55.595%"
          y2="43.031%"
        >
          <stop offset="0%" stopOpacity={0} />
          <stop offset="100%" />
        </linearGradient>
        <linearGradient
          id="reporting_svg__e"
          x1="50%"
          x2="50%"
          y1="4.721%"
          y2="97.676%"
        >
          <stop offset="0%" stopColor="#C7DBE8" />
          <stop offset="100%" stopColor="#96B5C7" />
        </linearGradient>
        <linearGradient
          id="reporting_svg__h"
          x1="50%"
          x2="50%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#D4E4F1" />
          <stop offset="100%" stopColor="#B5CFDD" />
        </linearGradient>
        <linearGradient
          id="reporting_svg__o"
          x1="50%"
          x2="50%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#F6AF32" />
          <stop offset="100%" stopColor="#DA8041" />
        </linearGradient>
        <linearGradient
          id="reporting_svg__r"
          x1="50%"
          x2="50%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#FBDE7B" />
          <stop offset="100%" stopColor="#F6AF67" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="reporting_svg__b" fill="#fff">
          <use xlinkHref="#reporting_svg__a" />
        </mask>
        <path d="M0 0h192v192H0z" />
        <g mask="url(#reporting_svg__b)">
          <path
            fill="url(#reporting_svg__c)"
            d="M66.46 160.736l31.584 18.235c1.3.752 2.476.702 3.307.015l.036.021 5.622-3.245a2.29 2.29 0 0 0 .18-.103l.03-.019c.899-.593 1.462-1.856 1.462-3.618v-4.824l3.763 2.173c1.3.752 2.476.702 3.307.015l.036.021 5.622-3.245a2.29 2.29 0 0 0 .18-.103l.03-.019c.49-.324.88-.846 1.134-1.54l31.87 18.738-38.729 23.259-63.887-36.795 14.452-8.966z"
            opacity={0.27}
            transform="translate(37.522 1)"
          />
          <g opacity={0.5}>
            <g transform="translate(71.095 1.694)">
              <mask id="reporting_svg__f" fill="#fff">
                <use xlinkHref="#reporting_svg__d" />
              </mask>
              <use fill="#C9DCE6" xlinkHref="#reporting_svg__d" />
              <g fill="url(#reporting_svg__e)" mask="url(#reporting_svg__f)">
                <path d="M-14.832.38h118.928v168.333H-14.832z" />
              </g>
            </g>
            <g transform="translate(68.93 4.859)">
              <mask id="reporting_svg__i" fill="#fff">
                <use xlinkHref="#reporting_svg__g" />
              </mask>
              <use fill="#C5C5C5" xlinkHref="#reporting_svg__g" />
              <g fill="url(#reporting_svg__h)" mask="url(#reporting_svg__i)">
                <path d="M-56.58 22.233L46.416-37.231l103.27 178.867L46.69 201.1z" />
              </g>
            </g>
          </g>
          <g opacity={0.5}>
            <g transform="translate(56.695 11.294)">
              <mask id="reporting_svg__k" fill="#fff">
                <use xlinkHref="#reporting_svg__j" />
              </mask>
              <use fill="#CADCE7" xlinkHref="#reporting_svg__j" />
              <g fill="url(#reporting_svg__e)" mask="url(#reporting_svg__k)">
                <path d="M-14.832.38h118.928v168.333H-14.832z" />
              </g>
            </g>
            <g transform="translate(53.53 13.459)">
              <mask id="reporting_svg__m" fill="#fff">
                <use xlinkHref="#reporting_svg__l" />
              </mask>
              <use fill="#C5C5C5" xlinkHref="#reporting_svg__l" />
              <g fill="url(#reporting_svg__h)" mask="url(#reporting_svg__m)">
                <path d="M-55.58 23.233L47.416-36.231l103.27 178.867L47.69 202.1z" />
              </g>
            </g>
          </g>
          <g transform="translate(40.307 20.188)">
            <mask id="reporting_svg__p" fill="#fff">
              <use xlinkHref="#reporting_svg__n" />
            </mask>
            <use fill="#5E5E5E" xlinkHref="#reporting_svg__n" />
            <g fill="url(#reporting_svg__o)" mask="url(#reporting_svg__p)">
              <path d="M-13.832.38h118.928v168.333H-13.832z" />
            </g>
          </g>
          <g transform="translate(38.142 22.353)">
            <mask id="reporting_svg__s" fill="#fff">
              <use xlinkHref="#reporting_svg__q" />
            </mask>
            <use fill="#C5C5C5" xlinkHref="#reporting_svg__q" />
            <g fill="url(#reporting_svg__r)" mask="url(#reporting_svg__s)">
              <path d="M-55.58 23.233L47.416-36.231l103.27 178.867L47.69 202.1z" />
            </g>
          </g>
          <path
            fill="#FFF"
            fillOpacity={0.389}
            d="M80.176 59.771c0-1.535-.932-3.323-2.082-3.99L53.52 41.531c-2.413-1.4-4.372.082-4.372 3.307v2.504c0 1.843 1.12 3.988 2.499 4.787l24.366 14.13c2.299 1.333 4.164-.079 4.164-3.15v-3.338zm31.154 46.172c0-1.487-.903-3.217-2.015-3.862L69.208 78.824c-2.336-1.354-4.232.08-4.232 3.201v2.424c0 1.783 1.083 3.86 2.418 4.633l39.905 23.14c2.225 1.29 4.03-.076 4.03-3.048v-3.231z"
          />
          <path
            fill="#FFF"
            d="M53.443 83.903c-.453-.262-.882-.782-1.168-1.417l-4.054-9.016c-.522-1.164-.422-2.367.222-2.69.646-.326 1.593.355 2.115 1.516l2.824 6.28 6.247-7.823c.49-.613 1.43-.267 2.1.773.671 1.038.819 2.378.33 2.99l-7.401 9.264c-.275.346-.71.397-1.176.145l-.039-.022zm0 26.656c-.453-.262-.882-.782-1.168-1.417l-4.054-9.016c-.522-1.163-.422-2.367.222-2.691.646-.325 1.593.356 2.115 1.517l2.824 6.279 6.247-7.822c.49-.613 1.43-.267 2.1.773.671 1.038.819 2.378.33 2.989l-7.401 9.265c-.275.346-.71.397-1.176.145l-.039-.022zm0 25.471c-.453-.26-.882-.781-1.168-1.415l-4.054-9.017c-.522-1.163-.422-2.367.222-2.69.646-.326 1.593.355 2.115 1.516l2.824 6.28 6.247-7.823c.49-.613 1.43-.267 2.1.773.671 1.038.819 2.378.33 2.99l-7.401 9.264c-.275.346-.71.397-1.176.145l-.039-.022z"
          />
          <path
            fill="#FFF"
            fillOpacity={0.389}
            d="M111.33 131.455c0-1.486-.903-3.216-2.015-3.861l-40.107-23.258c-2.336-1.354-4.232.08-4.232 3.201v2.424c0 1.783 1.083 3.86 2.418 4.633l39.905 23.14c2.225 1.29 4.03-.075 4.03-3.048v-3.23zm0 25.512c0-1.486-.903-3.216-2.015-3.86l-40.107-23.258c-2.336-1.355-4.232.08-4.232 3.2v2.424c0 1.784 1.083 3.86 2.418 4.634l39.905 23.14c2.225 1.29 4.03-.076 4.03-3.048v-3.232z"
          />
        </g>
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
  <SvgReporting svgRef={ref} {...props} />
));
export default ForwardRef;
