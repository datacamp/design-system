import * as React from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgDataVisualization({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      width={192}
      height={192}
      role="img"
      aria-labelledby={titleId}
      {...props}
    >
      {title === undefined ? (
        <title id={titleId}>{'Data Visualization'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <defs>
        <linearGradient
          id="data-visualization_svg__a"
          x1="51.761%"
          x2="45.208%"
          y1="53.798%"
          y2="47%"
        >
          <stop offset="0%" stopOpacity={0} />
          <stop offset="100%" />
        </linearGradient>
        <linearGradient
          id="data-visualization_svg__c"
          x1="50%"
          x2="50%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#FBDE7B" />
          <stop offset="100%" stopColor="#F6AF67" />
        </linearGradient>
        <linearGradient
          id="data-visualization_svg__d"
          x1="50%"
          x2="50%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#D4E4F1" />
          <stop offset="100%" stopColor="#B5CFDD" />
        </linearGradient>
        <linearGradient
          id="data-visualization_svg__g"
          x1="50%"
          x2="50%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#F6AF32" />
          <stop offset="100%" stopColor="#DA8041" />
        </linearGradient>
        <linearGradient
          id="data-visualization_svg__h"
          x1="50%"
          x2="50%"
          y1="4.721%"
          y2="97.676%"
        >
          <stop offset="0%" stopColor="#C7DBE8" />
          <stop offset="100%" stopColor="#96B5C7" />
        </linearGradient>
        <linearGradient
          id="data-visualization_svg__k"
          x1="50%"
          x2="50%"
          y1="9.951%"
          y2="90.257%"
        >
          <stop offset="0%" stopColor="#FBDE7B" />
          <stop offset="100%" stopColor="#F6AF67" />
        </linearGradient>
        <linearGradient
          id="data-visualization_svg__l"
          x1="50%"
          x2="50%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#FBDE7B" />
          <stop offset="100%" stopColor="#F6AF67" />
        </linearGradient>
        <linearGradient
          id="data-visualization_svg__o"
          x1="50%"
          x2="50%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#F6AF32" />
          <stop offset="100%" stopColor="#DA8041" />
        </linearGradient>
        <linearGradient
          id="data-visualization_svg__p"
          x1="50%"
          x2="50%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#F6AF32" />
          <stop offset="100%" stopColor="#DA8041" />
        </linearGradient>
        <linearGradient
          id="data-visualization_svg__s"
          x1="50%"
          x2="50%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#ECF7FF" />
          <stop offset="100%" stopColor="#CCE5F4" />
        </linearGradient>
        <linearGradient
          id="data-visualization_svg__t"
          x1="50%"
          x2="50%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#D4E4F1" />
          <stop offset="100%" stopColor="#B5CFDD" />
        </linearGradient>
        <linearGradient
          id="data-visualization_svg__w"
          x1="50%"
          x2="50%"
          y1="0%"
          y2="97.676%"
        >
          <stop offset="0%" stopColor="#DBF0FF" />
          <stop offset="100%" stopColor="#A8C8DA" />
        </linearGradient>
        <linearGradient
          id="data-visualization_svg__x"
          x1="50%"
          x2="50%"
          y1="4.721%"
          y2="97.676%"
        >
          <stop offset="0%" stopColor="#C7DBE8" />
          <stop offset="100%" stopColor="#96B5C7" />
        </linearGradient>
        <path
          id="data-visualization_svg__b"
          d="M9.819 164.838L.3 159.342l14.212-39.245 9.539-9.96L39.32 73.592l13.151-7.811L101.379 0l9.734 5.62.143 100.104L10.79 164.245z"
        />
        <path
          id="data-visualization_svg__f"
          d="M.187 160.025l101.469-59.101V.868L52.512 66.375l-13.151 7.811-15.269 36.545-9.539 9.96z"
        />
        <path
          id="data-visualization_svg__j"
          d="M38.395 111.963l9.539-23.982 15.269-2.794 13.151-30.386 49.069-52.628 9.713 5.624-.022 73.446L34.143 140.26l-.422.244-9.524-5.644z"
        />
        <path
          id="data-visualization_svg__n"
          d="M.121 133.304l101.468-59.1V.681L52.446 53.148 39.295 83.534l-15.27 2.794-9.538 23.981z"
        />
        <path
          id="data-visualization_svg__r"
          d="M14.443 105.686l.902.661 8.849 5.108.423.352 14.634-19.958 13.151-2.616L101.546.321l9.684 5.491v85.87l-101.469 59.1L0 145.052z"
        />
        <path
          id="data-visualization_svg__v"
          d="M.161 144.982l101.469-59.1V.012L52.487 89.195l-13.151 2.616-15.27 20.825-9.538-6.988z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path
          d="M102.139.72L.793 59.232 12.652 65.4 126 9.051z"
          fill="url(#data-visualization_svg__a)"
          opacity={0.118}
          transform="translate(56.4 125.6)"
        />
        <g transform="translate(16.183 2.766)">
          <mask id="data-visualization_svg__e" fill="#fff">
            <use xlinkHref="#data-visualization_svg__b" />
          </mask>
          <use
            fill="url(#data-visualization_svg__c)"
            xlinkHref="#data-visualization_svg__b"
          />
          <g
            fill="url(#data-visualization_svg__d)"
            mask="url(#data-visualization_svg__e)"
          >
            <path d="M-9.491-8.135h164.475v172.973H-9.491z" />
          </g>
        </g>
        <g transform="translate(25.783 7.566)">
          <mask id="data-visualization_svg__i" fill="#fff">
            <use xlinkHref="#data-visualization_svg__f" />
          </mask>
          <use
            fill="url(#data-visualization_svg__g)"
            xlinkHref="#data-visualization_svg__f"
          />
          <g
            fill="url(#data-visualization_svg__h)"
            mask="url(#data-visualization_svg__i)"
          >
            <path d="M-12.175-7.005h123.537v175.784H-12.175z" />
          </g>
        </g>
        <g transform="translate(8.519 36.266)">
          <mask id="data-visualization_svg__m" fill="#fff">
            <use xlinkHref="#data-visualization_svg__j" />
          </mask>
          <use
            fill="url(#data-visualization_svg__k)"
            xlinkHref="#data-visualization_svg__j"
          />
          <g
            fill="url(#data-visualization_svg__l)"
            mask="url(#data-visualization_svg__m)"
          >
            <path d="M1.689.686h144.159v146.63H1.689z" />
          </g>
        </g>
        <g transform="translate(42.119 43.466)">
          <mask id="data-visualization_svg__q" fill="#fff">
            <use xlinkHref="#data-visualization_svg__n" />
          </mask>
          <use
            fill="url(#data-visualization_svg__o)"
            xlinkHref="#data-visualization_svg__n"
          />
          <g
            fill="url(#data-visualization_svg__p)"
            mask="url(#data-visualization_svg__q)"
          >
            <path d="M-31.911-6.514h144.159v146.63H-31.911z" />
          </g>
        </g>
        <g transform="translate(50.15 35.305)">
          <mask id="data-visualization_svg__u" fill="#fff">
            <use xlinkHref="#data-visualization_svg__r" />
          </mask>
          <use
            fill="url(#data-visualization_svg__s)"
            xlinkHref="#data-visualization_svg__r"
          />
          <g
            fill="url(#data-visualization_svg__t)"
            mask="url(#data-visualization_svg__u)"
          >
            <path d="M-6.342.32h144.159v259.871H-6.342z" />
          </g>
        </g>
        <g transform="translate(59.75 41.105)">
          <mask id="data-visualization_svg__y" fill="#fff">
            <use xlinkHref="#data-visualization_svg__v" />
          </mask>
          <use
            fill="url(#data-visualization_svg__w)"
            xlinkHref="#data-visualization_svg__v"
          />
          <g
            fill="url(#data-visualization_svg__x)"
            mask="url(#data-visualization_svg__y)"
          >
            <path d="M-15.942.012h144.159v160.144H-15.942z" />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default SvgDataVisualization;
