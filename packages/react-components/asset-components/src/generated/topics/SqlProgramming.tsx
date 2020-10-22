import * as React from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgSqlProgramming({
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
        <title id={titleId}>{'SQL Programming'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <defs>
        <path id="sql-programming_svg__a" d="M0 0h192v192H0z" />
        <path
          id="sql-programming_svg__d"
          d="M12.314 172.13l-10.202-5.734a3.6 3.6 0 01-1.8-3.118V62.225a9.6 9.6 0 014.802-8.315L99.117.797a3.6 3.6 0 013.6 0l9.205 5.386-99.43 57.407-.178 108.54z"
        />
        <path id="sql-programming_svg__g" d="M.959.323h127.319V115.2H.959z" />
        <path
          id="sql-programming_svg__j"
          d="M4.8 54.624L97.538 1.083a3.6 3.6 0 015.4 3.117v101.18a9.6 9.6 0 01-4.8 8.313L5.4 167.235a3.6 3.6 0 01-5.4-3.117V62.938a9.6 9.6 0 014.8-8.314z"
        />
        <path
          id="sql-programming_svg__m"
          d="M102.455 2.4a3.6 3.6 0 01.483 1.8v9.98L0 72.918v-9.98a9.6 9.6 0 014.8-8.314L97.538 1.083a3.6 3.6 0 014.917 1.317zM16.233 56.263c0-2.475-1.506-3.614-3.362-2.542-1.856 1.071-3.363 3.95-3.363 6.425 0 2.474 1.507 3.613 3.363 2.542 1.856-1.072 3.362-3.95 3.362-6.425zM26.64 50.14c0-2.474-1.507-3.614-3.363-2.542-1.856 1.071-3.363 3.95-3.363 6.425 0 2.474 1.507 3.613 3.363 2.542 1.856-1.072 3.363-3.95 3.363-6.425zm10.405-5.866c0-2.474-1.507-3.613-3.363-2.542-1.855 1.072-3.362 3.95-3.362 6.425 0 2.475 1.507 3.614 3.362 2.542 1.856-1.071 3.363-3.95 3.363-6.425z"
        />
        <path
          id="sql-programming_svg__o"
          d="M77.287 7.762a37.827 37.827 0 014.919 3.39h8.387v17.265h-.118c-.756 6.1-5.12 12.068-13.097 16.72-17.655 10.3-46.365 10.276-64.071-.053C5.34 40.437.95 34.491.138 28.417H0V11.153h8.238a37.388 37.388 0 014.977-3.444c17.656-10.3 46.365-10.276 64.072.053z"
        />
        <path
          id="sql-programming_svg__r"
          d="M13.565 8.084c17.655-10.3 46.365-10.276 64.071.053 17.707 10.329 17.748 27.076.092 37.375-17.656 10.3-46.366 10.275-64.072-.053C-4.05 35.13-4.09 18.383 13.565 8.084z"
        />
        <path
          id="sql-programming_svg__v"
          d="M77.287 7.762a37.827 37.827 0 014.919 3.39h8.387v17.204h-.11c-.735 6.12-5.102 12.113-13.105 16.781-17.655 10.3-46.365 10.276-64.071-.053C5.313 40.421.92 34.451.13 28.355H0V11.154h8.238a37.388 37.388 0 014.977-3.444c17.656-10.3 46.365-10.276 64.072.053z"
        />
        <path
          id="sql-programming_svg__x"
          d="M13.215 7.709c17.656-10.3 46.365-10.276 64.072.053 17.706 10.329 17.747 27.076.091 37.375-17.655 10.3-46.365 10.276-64.071-.053C-4.4 34.755-4.441 18.008 13.215 7.709z"
        />
        <path
          id="sql-programming_svg__B"
          d="M77.287 7.762a37.827 37.827 0 014.919 3.39h8.387v17.265h-.118c-.756 6.1-5.12 12.068-13.097 16.72-17.655 10.3-46.365 10.276-64.071-.053C5.34 40.437.95 34.491.138 28.417H0V11.153h8.238a37.388 37.388 0 014.977-3.444c17.656-10.3 46.365-10.276 64.072.053z"
        />
        <path
          id="sql-programming_svg__D"
          d="M13.565 8.084c17.655-10.3 46.365-10.276 64.071.053 17.707 10.329 17.748 27.076.092 37.375-17.656 10.3-46.366 10.275-64.072-.053C-4.05 35.13-4.09 18.383 13.565 8.084z"
        />
        <linearGradient
          id="sql-programming_svg__c"
          x1="54.991%"
          x2="45.208%"
          y1="55.461%"
          y2="46.11%"
        >
          <stop offset="0%" stopOpacity={0} />
          <stop offset="100%" />
        </linearGradient>
        <linearGradient
          id="sql-programming_svg__e"
          x1="50%"
          x2="50%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#D4E4F1" />
          <stop offset="100%" stopColor="#B5CFDD" />
        </linearGradient>
        <linearGradient
          id="sql-programming_svg__h"
          x1="5.317%"
          x2="5.317%"
          y1="94.951%"
          y2="62.033%"
        >
          <stop offset="0%" stopOpacity={0} />
          <stop offset="100%" />
        </linearGradient>
        <linearGradient
          id="sql-programming_svg__k"
          x1="50%"
          x2="50%"
          y1="4.721%"
          y2="97.676%"
        >
          <stop offset="0%" stopColor="#C7DBE8" />
          <stop offset="100%" stopColor="#96B5C7" />
        </linearGradient>
        <linearGradient
          id="sql-programming_svg__n"
          x1="57.362%"
          x2="31.946%"
          y1="64.24%"
          y2="39.058%"
        >
          <stop offset="0%" stopOpacity={0} />
          <stop offset="100%" />
        </linearGradient>
        <linearGradient
          id="sql-programming_svg__p"
          x1="50%"
          x2="50%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#F6AF32" />
          <stop offset="100%" stopColor="#DA8041" />
        </linearGradient>
        <linearGradient
          id="sql-programming_svg__s"
          x1="50%"
          x2="50%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#FBDE7B" />
          <stop offset="100%" stopColor="#F6AF67" />
        </linearGradient>
        <linearGradient
          id="sql-programming_svg__y"
          x1="50%"
          x2="50%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#D4E4F1" />
          <stop offset="100%" stopColor="#B5CFDD" />
        </linearGradient>
        <filter
          id="sql-programming_svg__u"
          width="219.4%"
          height="304.8%"
          x="-59.7%"
          y="-102.4%"
          filterUnits="objectBoundingBox"
        >
          <feGaussianBlur in="SourceGraphic" stdDeviation={10.888} />
        </filter>
        <filter
          id="sql-programming_svg__A"
          width="219.4%"
          height="304.8%"
          x="-59.7%"
          y="-102.4%"
          filterUnits="objectBoundingBox"
        >
          <feGaussianBlur in="SourceGraphic" stdDeviation={10.888} />
        </filter>
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="sql-programming_svg__b" fill="#fff">
          <use xlinkHref="#sql-programming_svg__a" />
        </mask>
        <path d="M0 0h192v192H0z" />
        <g mask="url(#sql-programming_svg__b)">
          <path
            fill="url(#sql-programming_svg__c)"
            opacity={0.118}
            d="M108.886 118L13.4 174.168 40.314 190l95.486-56.168z"
            transform="translate(10.6 4.4)"
          />
          <g transform="translate(10.6 4.4)">
            <mask id="sql-programming_svg__f" fill="#fff">
              <use xlinkHref="#sql-programming_svg__d" />
            </mask>
            <use fill="#C2D7E5" xlinkHref="#sql-programming_svg__d" />
            <g
              fill="url(#sql-programming_svg__e)"
              mask="url(#sql-programming_svg__f)"
            >
              <path d="M-5.887 52H20v120.131H-5.887z" />
            </g>
            <g mask="url(#sql-programming_svg__f)">
              <g transform="translate(-1 -6.8)">
                <mask id="sql-programming_svg__i" fill="#fff">
                  <use xlinkHref="#sql-programming_svg__g" />
                </mask>
                <use
                  fill="url(#sql-programming_svg__h)"
                  xlinkHref="#sql-programming_svg__g"
                />
                <g mask="url(#sql-programming_svg__i)">
                  <path fill="#E0F1FF" d="M.959 2.101h115.084v114.877H.959z" />
                </g>
              </g>
            </g>
          </g>
          <g transform="translate(21.6 9.6)">
            <mask id="sql-programming_svg__l" fill="#fff">
              <use xlinkHref="#sql-programming_svg__j" />
            </mask>
            <use fill="#8B8B8B" xlinkHref="#sql-programming_svg__j" />
            <g
              fill="url(#sql-programming_svg__k)"
              mask="url(#sql-programming_svg__l)"
            >
              <path d="M-56.45 84.143L103-7.915l54.227 93.923-159.45 92.059z" />
            </g>
            <use
              fill="#6D8695"
              opacity={0.264}
              xlinkHref="#sql-programming_svg__m"
            />
          </g>
          <path
            d="M32.674 83.149l30.928-17.856a2.583 2.583 0 013.874 2.237 7.748 7.748 0 01-3.874 6.71L32.674 92.096a2.583 2.583 0 01-3.874-2.237 7.748 7.748 0 013.874-6.71zm0 31.2l30.928-17.856a2.583 2.583 0 013.874 2.237 7.748 7.748 0 01-3.874 6.71l-30.928 17.856a2.583 2.583 0 01-3.874-2.237 7.748 7.748 0 013.874-6.71zm-.017-15.551l21.325-12.532a2.56 2.56 0 013.857 2.207 7.817 7.817 0 01-3.857 6.74l-21.325 12.532a2.56 2.56 0 01-3.857-2.207 7.818 7.818 0 013.857-6.74z"
            fill="#94ADBC"
          />
        </g>
        <path
          fill="url(#sql-programming_svg__n)"
          mask="url(#sql-programming_svg__b)"
          opacity={0.118}
          d="M153.83 134.306l49.721 30.847-49.721 29.859-49.72-29.859z"
        />
        <g mask="url(#sql-programming_svg__b)">
          <g transform="translate(85.97 117.931)">
            <mask id="sql-programming_svg__q" fill="#fff">
              <use xlinkHref="#sql-programming_svg__o" />
            </mask>
            <use fill="#969696" xlinkHref="#sql-programming_svg__o" />
            <g
              fill="url(#sql-programming_svg__p)"
              mask="url(#sql-programming_svg__q)"
            >
              <path d="M-3.775 8.39v45.297h97.913V8.39z" />
            </g>
          </g>
          <g transform="translate(85.62 101.945)">
            <mask id="sql-programming_svg__t" fill="#fff">
              <use xlinkHref="#sql-programming_svg__r" />
            </mask>
            <use fill="#FFC884" xlinkHref="#sql-programming_svg__r" />
            <g
              fill="url(#sql-programming_svg__s)"
              mask="url(#sql-programming_svg__t)"
            >
              <path d="M-26.88 29.007L47.855-45.73l69.68 69.68-74.736 74.735z" />
            </g>
            <path
              fill="#000"
              d="M26.277 10.893c10.66-6.218 27.993-6.204 38.683.032 10.691 6.236 10.716 16.348.056 22.566s-27.994 6.204-38.684-.032c-10.69-6.236-10.715-16.348-.055-22.566z"
              filter="url(#sql-programming_svg__u)"
              opacity={0.589}
              style={{
                mixBlendMode: 'multiply',
              }}
            />
          </g>
          <g transform="translate(85.97 88.13)">
            <mask id="sql-programming_svg__w" fill="#fff">
              <use xlinkHref="#sql-programming_svg__v" />
            </mask>
            <use fill="#94ADBC" xlinkHref="#sql-programming_svg__v" />
            <g fill="#A5C4D6" mask="url(#sql-programming_svg__w)">
              <path d="M-9.292 8.39v50.614h103.43V8.39z" />
            </g>
          </g>
          <g transform="translate(85.97 72.518)">
            <mask id="sql-programming_svg__z" fill="#fff">
              <use xlinkHref="#sql-programming_svg__x" />
            </mask>
            <use fill="#FFC884" xlinkHref="#sql-programming_svg__x" />
            <g
              fill="url(#sql-programming_svg__y)"
              mask="url(#sql-programming_svg__z)"
            >
              <path d="M-23.811 28.32L39.12-36.846l72.246 69.767-62.932 65.167z" />
            </g>
            <path
              fill="#000"
              d="M25.927 11.52c10.66-6.218 27.994-6.203 38.684.033 10.69 6.236 10.715 16.347.055 22.565-10.66 6.219-27.993 6.204-38.684-.032-10.69-6.236-10.715-16.347-.055-22.566z"
              filter="url(#sql-programming_svg__A)"
              opacity={0.589}
              style={{
                mixBlendMode: 'multiply',
              }}
            />
          </g>
          <g transform="translate(85.97 57.931)">
            <mask id="sql-programming_svg__C" fill="#fff">
              <use xlinkHref="#sql-programming_svg__B" />
            </mask>
            <use fill="#FFC884" xlinkHref="#sql-programming_svg__B" />
            <g
              fill="url(#sql-programming_svg__p)"
              mask="url(#sql-programming_svg__C)"
            >
              <path d="M-3.775 8.39v45.297h97.913V8.39z" />
            </g>
          </g>
          <g transform="translate(85.62 41.945)">
            <mask id="sql-programming_svg__E" fill="#fff">
              <use xlinkHref="#sql-programming_svg__D" />
            </mask>
            <use fill="#FFC884" xlinkHref="#sql-programming_svg__D" />
            <g
              fill="url(#sql-programming_svg__s)"
              mask="url(#sql-programming_svg__E)"
            >
              <path d="M-26.88 29.007L47.855-45.73l69.68 69.68-74.736 74.735z" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default SvgSqlProgramming;
