import * as React from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgProbabilityAndStatistics({
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
        <title id={titleId}>{'Probability and Statistics'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <defs>
        <path
          id="probability-and-statistics_svg__b"
          d="M19.2 13.45L0 1.92v83.195L19.2 96.96z"
        />
        <path
          id="probability-and-statistics_svg__g"
          d="M19.195 12.448L0 .92v83.179L19.195 95.96z"
        />
        <path
          id="probability-and-statistics_svg__h"
          d="M19.187.039L38.4 11.548 19.2 23.079 0 11.548z"
        />
        <path
          id="probability-and-statistics_svg__j"
          d="M19.2 13.45L0 1.92v59.195L19.2 72.96z"
        />
        <path
          id="probability-and-statistics_svg__o"
          d="M19.195 12.448L0 .92v59.179L19.195 71.96z"
        />
        <path
          id="probability-and-statistics_svg__p"
          d="M19.187.039L38.4 11.548 19.2 23.079 0 11.548z"
        />
        <path
          id="probability-and-statistics_svg__r"
          d="M19.2 13.45L0 1.92v59.195L19.2 72.96z"
        />
        <path
          id="probability-and-statistics_svg__t"
          d="M19.195 12.448L0 .92v59.179L19.195 71.96z"
        />
        <path
          id="probability-and-statistics_svg__u"
          d="M19.187.039L38.4 11.548 19.2 23.079 0 11.548z"
        />
        <path
          id="probability-and-statistics_svg__v"
          d="M57.6 45.6a9.6 9.6 0 110 19.2 9.6 9.6 0 010-19.2zm96-2.4a9.6 9.6 0 110 19.2 9.6 9.6 0 010-19.2zM9.6 21.6a9.6 9.6 0 110 19.2 9.6 9.6 0 010-19.2zm96-21.6a9.6 9.6 0 110 19.2 9.6 9.6 0 010-19.2z"
        />
        <path
          id="probability-and-statistics_svg__x"
          d="M52.8 45.6a4.8 4.8 0 110 9.6 4.8 4.8 0 010-9.6zm96-2.4a4.8 4.8 0 110 9.6 4.8 4.8 0 010-9.6zM4.8 21.6a4.8 4.8 0 110 9.6 4.8 4.8 0 010-9.6zm96-21.6a4.8 4.8 0 110 9.6 4.8 4.8 0 010-9.6z"
        />
        <path
          id="probability-and-statistics_svg__z"
          d="M19.2 13.45L0 1.92v107.195l19.2 11.845z"
        />
        <path
          id="probability-and-statistics_svg__D"
          d="M19.195 12.448L0 .92v107.179l19.195 11.861z"
        />
        <path
          id="probability-and-statistics_svg__E"
          d="M19.187.039L38.4 11.548 19.2 23.079 0 11.548z"
        />
        <linearGradient
          id="probability-and-statistics_svg__a"
          x1="57.362%"
          x2="31.946%"
          y1="64.24%"
          y2="39.058%"
        >
          <stop offset="0%" stopOpacity={0} />
          <stop offset="100%" />
        </linearGradient>
        <linearGradient
          id="probability-and-statistics_svg__c"
          x1="50%"
          x2="50%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#ECF7FF" />
          <stop offset="100%" stopColor="#CCE5F4" />
        </linearGradient>
        <linearGradient
          id="probability-and-statistics_svg__d"
          x1="50%"
          x2="50%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#D4E4F1" />
          <stop offset="100%" stopColor="#B5CFDD" />
        </linearGradient>
        <linearGradient
          id="probability-and-statistics_svg__f"
          x1="50%"
          x2="50%"
          y1="4.721%"
          y2="97.676%"
        >
          <stop offset="0%" stopColor="#C7DBE8" />
          <stop offset="100%" stopColor="#96B5C7" />
        </linearGradient>
        <linearGradient
          id="probability-and-statistics_svg__k"
          x1="50%"
          x2="50%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#ECF7FF" />
          <stop offset="100%" stopColor="#CCE5F4" />
        </linearGradient>
        <linearGradient
          id="probability-and-statistics_svg__l"
          x1="50%"
          x2="50%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#D4E4F1" />
          <stop offset="100%" stopColor="#B5CFDD" />
        </linearGradient>
        <linearGradient
          id="probability-and-statistics_svg__n"
          x1="50%"
          x2="50%"
          y1="4.721%"
          y2="97.676%"
        >
          <stop offset="0%" stopColor="#C7DBE8" />
          <stop offset="100%" stopColor="#96B5C7" />
        </linearGradient>
        <linearGradient
          id="probability-and-statistics_svg__A"
          x1="50%"
          x2="50%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#FBDE7B" />
          <stop offset="100%" stopColor="#F6AF67" />
        </linearGradient>
        <linearGradient
          id="probability-and-statistics_svg__C"
          x1="50%"
          x2="50%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#F6AF32" />
          <stop offset="100%" stopColor="#DA8041" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path
          d="M19.2 1.038L38.4 12.95 19.2 24.48 0 12.95zm48 0L86.4 12.95 67.2 24.48 48 12.95zm48 0l19.2 11.912-19.2 11.53L96 12.95zm48 0l19.2 11.912-19.2 11.53L144 12.95z"
          fill="url(#probability-and-statistics_svg__a)"
          opacity={0.118}
          transform="translate(20 160)"
        />
        <g transform="translate(.8 76)">
          <mask id="probability-and-statistics_svg__e" fill="#fff">
            <use xlinkHref="#probability-and-statistics_svg__b" />
          </mask>
          <use
            fill="url(#probability-and-statistics_svg__c)"
            xlinkHref="#probability-and-statistics_svg__b"
          />
          <g
            fill="url(#probability-and-statistics_svg__d)"
            mask="url(#probability-and-statistics_svg__e)"
          >
            <path d="M0 1.92h19.2v95.52H0z" />
          </g>
        </g>
        <use
          fill="url(#probability-and-statistics_svg__f)"
          transform="matrix(-1 0 0 1 39.195 77)"
          xlinkHref="#probability-and-statistics_svg__g"
        />
        <g transform="translate(.8 66.4)">
          <mask id="probability-and-statistics_svg__i" fill="#fff">
            <use xlinkHref="#probability-and-statistics_svg__h" />
          </mask>
          <use fill="#E9F6FE" xlinkHref="#probability-and-statistics_svg__h" />
          <g fill="#E0F1FF" mask="url(#probability-and-statistics_svg__i)">
            <path d="M0 0h38.4v24H0z" />
          </g>
        </g>
        <g transform="translate(48.8 100)">
          <mask id="probability-and-statistics_svg__m" fill="#fff">
            <use xlinkHref="#probability-and-statistics_svg__j" />
          </mask>
          <use
            fill="url(#probability-and-statistics_svg__k)"
            xlinkHref="#probability-and-statistics_svg__j"
          />
          <g
            fill="url(#probability-and-statistics_svg__l)"
            mask="url(#probability-and-statistics_svg__m)"
          >
            <path d="M0 1.92h19.2v71.52H0z" />
          </g>
        </g>
        <use
          fill="url(#probability-and-statistics_svg__n)"
          transform="matrix(-1 0 0 1 87.195 101)"
          xlinkHref="#probability-and-statistics_svg__o"
        />
        <g transform="translate(48.8 90.4)">
          <mask id="probability-and-statistics_svg__q" fill="#fff">
            <use xlinkHref="#probability-and-statistics_svg__p" />
          </mask>
          <use fill="#E9F6FE" xlinkHref="#probability-and-statistics_svg__p" />
          <g fill="#E0F1FF" mask="url(#probability-and-statistics_svg__q)">
            <path d="M0 0h38.4v24H0z" />
          </g>
        </g>
        <g transform="translate(144.8 100)">
          <mask id="probability-and-statistics_svg__s" fill="#fff">
            <use xlinkHref="#probability-and-statistics_svg__r" />
          </mask>
          <use
            fill="url(#probability-and-statistics_svg__k)"
            xlinkHref="#probability-and-statistics_svg__r"
          />
          <g
            fill="url(#probability-and-statistics_svg__l)"
            mask="url(#probability-and-statistics_svg__s)"
          >
            <path d="M0 1.92h19.2v71.52H0z" />
          </g>
        </g>
        <use
          fill="url(#probability-and-statistics_svg__n)"
          transform="matrix(-1 0 0 1 183.195 101)"
          xlinkHref="#probability-and-statistics_svg__t"
        />
        <use
          fill="#E9F6FE"
          xlinkHref="#probability-and-statistics_svg__u"
          transform="translate(144.8 90.4)"
        />
        <path
          fill="#A5C4D6"
          fillRule="nonzero"
          d="M164.075 62.796l1.685-1.71-49.456-48.751L68.21 60.48 20.976 36.807l-1.075 2.146 48.782 24.449 47.634-47.684z"
        />
        <g opacity={0.376} transform="translate(10.4 6.4)">
          <mask id="probability-and-statistics_svg__w" fill="#fff">
            <use xlinkHref="#probability-and-statistics_svg__v" />
          </mask>
          <use fill="#7099D7" xlinkHref="#probability-and-statistics_svg__v" />
          <g fill="#FFE797" mask="url(#probability-and-statistics_svg__w)">
            <path d="M-7.2-4.8h180V72h-180z" />
          </g>
        </g>
        <g transform="translate(15.2 11.2)">
          <mask id="probability-and-statistics_svg__y" fill="#fff">
            <use xlinkHref="#probability-and-statistics_svg__x" />
          </mask>
          <use fill="#7099D7" xlinkHref="#probability-and-statistics_svg__x" />
          <g fill="#F5AE66" mask="url(#probability-and-statistics_svg__y)">
            <path d="M-12-9.6h180v76.8H-12z" />
          </g>
        </g>
        <g>
          <g transform="translate(96.8 52)">
            <mask id="probability-and-statistics_svg__B" fill="#fff">
              <use xlinkHref="#probability-and-statistics_svg__z" />
            </mask>
            <g
              fill="url(#probability-and-statistics_svg__A)"
              mask="url(#probability-and-statistics_svg__B)"
            >
              <path d="M0 1.92h19.2v119.04H0z" />
            </g>
          </g>
          <use
            fill="url(#probability-and-statistics_svg__C)"
            transform="matrix(-1 0 0 1 135.195 53)"
            xlinkHref="#probability-and-statistics_svg__D"
          />
          <g transform="translate(96.8 42.4)">
            <mask id="probability-and-statistics_svg__F" fill="#fff">
              <use xlinkHref="#probability-and-statistics_svg__E" />
            </mask>
            <g fill="#FFE797" mask="url(#probability-and-statistics_svg__F)">
              <path d="M0 0h38.4v24H0z" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default SvgProbabilityAndStatistics;
