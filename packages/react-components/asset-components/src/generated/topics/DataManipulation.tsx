import * as React from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgDataManipulation({
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
        <title id={titleId}>{'Data Manipulation'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <defs>
        <path id="data-manipulation_svg__a" d="M0 0h192v192H0z" />
        <path
          id="data-manipulation_svg__d"
          d="M7.514 169.73l-5.418-3.127a3.6 3.6 0 01-1.8-3.118V62.432a9.6 9.6 0 014.802-8.315L97.927.553a3.6 3.6 0 013.6 0l5.595 3.23L7.692 61.19l-.178 108.54z"
        />
        <path id="data-manipulation_svg__g" d="M0 .151h111.243V112.8H0z" />
        <path
          id="data-manipulation_svg__j"
          d="M4.8 54.024L97.538.483a3.6 3.6 0 015.4 3.117v101.18a9.6 9.6 0 01-4.8 8.313L5.4 166.635a3.6 3.6 0 01-5.4-3.117V62.338a9.6 9.6 0 014.8-8.314z"
        />
        <path
          id="data-manipulation_svg__m"
          d="M7.514 169.73l-5.418-3.127a3.6 3.6 0 01-1.8-3.118V62.432a9.6 9.6 0 014.802-8.315L97.927.553a3.6 3.6 0 013.6 0l5.595 3.23L7.692 61.19l-.178 108.54z"
        />
        <path id="data-manipulation_svg__o" d="M0 .151h111.243V112.8H0z" />
        <path
          id="data-manipulation_svg__q"
          d="M4.8 54.024L97.538.483a3.6 3.6 0 015.4 3.117v101.18a9.6 9.6 0 01-4.8 8.313L5.4 166.635a3.6 3.6 0 01-5.4-3.117V62.338a9.6 9.6 0 014.8-8.314z"
        />
        <path
          id="data-manipulation_svg__s"
          d="M7.514 169.73l-5.418-3.127a3.6 3.6 0 01-1.8-3.118V62.432a9.6 9.6 0 014.802-8.315L97.927.553a3.6 3.6 0 013.6 0l5.595 3.23-94.63 59.807.07 100.853-5.048 5.288z"
        />
        <path id="data-manipulation_svg__u" d="M0 .151h111.243V112.8H0z" />
        <path
          id="data-manipulation_svg__w"
          d="M4.8 54.624L97.538 1.083a3.6 3.6 0 015.4 3.117v101.18a9.6 9.6 0 01-4.8 8.313L5.4 167.235a3.6 3.6 0 01-5.4-3.117V62.938a9.6 9.6 0 014.8-8.314z"
        />
        <path
          id="data-manipulation_svg__y"
          d="M4.183 5.676l4.834-2.79a2.4 2.4 0 013.6 2.078v88.193a4.8 4.8 0 01-2.4 4.156l-4.834 2.791a2.4 2.4 0 01-3.6-2.079V9.833a4.8 4.8 0 012.4-4.157z"
        />
        <path
          id="data-manipulation_svg__A"
          d="M4.183 5.676l4.834-2.79a2.4 2.4 0 013.6 2.078v88.193a4.8 4.8 0 01-2.4 4.156l-4.834 2.791a2.4 2.4 0 01-3.6-2.079V9.833a4.8 4.8 0 012.4-4.157z"
        />
        <path
          id="data-manipulation_svg__C"
          d="M4.183 5.676l4.834-2.79a2.4 2.4 0 013.6 2.078v88.193a4.8 4.8 0 01-2.4 4.156l-4.834 2.791a2.4 2.4 0 01-3.6-2.079V9.833a4.8 4.8 0 012.4-4.157z"
        />
        <path
          id="data-manipulation_svg__H"
          d="M21.908 3.549a3.6 3.6 0 01.102.85v4.769a9.6 9.6 0 01-4.8 8.314L5.733 24.108c-.045.026-.09.05-.136.074L5.647 26l-3.02-1.655A3.6 3.6 0 01.334 20.99v-4.769a9.6 9.6 0 014.8-8.314L16.61 1.281c.067-.038.134-.074.202-.108L17.51.77a3.6 3.6 0 013.6 0l2.806 1.62-2.008 1.159z"
        />
        <path
          id="data-manipulation_svg__L"
          d="M5.349 7.757L17.287.864a3.6 3.6 0 015.4 3.117v5.122a9.6 9.6 0 01-4.8 8.314L5.948 24.31a3.6 3.6 0 01-5.4-3.118V16.07a9.6 9.6 0 014.8-8.313z"
        />
        <path
          id="data-manipulation_svg__Q"
          d="M21.908 3.549a3.6 3.6 0 01.102.85v4.769a9.6 9.6 0 01-4.8 8.314L5.733 24.108c-.045.026-.09.05-.136.074L5.647 26l-3.02-1.655A3.6 3.6 0 01.334 20.99v-4.769a9.6 9.6 0 014.8-8.314L16.61 1.281c.067-.038.134-.074.202-.108L17.51.77a3.6 3.6 0 013.6 0l2.806 1.62-2.008 1.159z"
        />
        <path
          id="data-manipulation_svg__T"
          d="M5.349 7.757L17.287.864a3.6 3.6 0 015.4 3.117v5.122a9.6 9.6 0 01-4.8 8.314L5.948 24.31a3.6 3.6 0 01-5.4-3.118V16.07a9.6 9.6 0 014.8-8.313z"
        />
        <path
          id="data-manipulation_svg__X"
          d="M21.908 3.549a3.6 3.6 0 01.102.85v4.769a9.6 9.6 0 01-4.8 8.314L5.733 24.108c-.045.026-.09.05-.136.074L5.647 26l-3.02-1.655A3.6 3.6 0 01.334 20.99v-4.769a9.6 9.6 0 014.8-8.314L16.61 1.281c.067-.038.134-.074.202-.108L17.51.77a3.6 3.6 0 013.6 0l2.806 1.62-2.008 1.159z"
        />
        <path
          id="data-manipulation_svg__aa"
          d="M5.349 7.757L17.287.864a3.6 3.6 0 015.4 3.117v5.122a9.6 9.6 0 01-4.8 8.314L5.948 24.31a3.6 3.6 0 01-5.4-3.118V16.07a9.6 9.6 0 014.8-8.313z"
        />
        <filter
          id="data-manipulation_svg__F"
          width="100%"
          height="100%"
          x="0%"
          y="0%"
          filterUnits="objectBoundingBox"
        >
          <feGaussianBlur in="SourceGraphic" />
        </filter>
        <filter
          id="data-manipulation_svg__G"
          width="193.8%"
          height="185.5%"
          x="-46.9%"
          y="-42.7%"
          filterUnits="objectBoundingBox"
        >
          <feGaussianBlur in="SourceGraphic" stdDeviation={3.489} />
        </filter>
        <filter
          id="data-manipulation_svg__I"
          width="100%"
          height="100%"
          x="0%"
          y="0%"
          filterUnits="objectBoundingBox"
        >
          <feGaussianBlur in="SourceGraphic" />
        </filter>
        <filter
          id="data-manipulation_svg__O"
          width="100%"
          height="100%"
          x="0%"
          y="0%"
          filterUnits="objectBoundingBox"
        >
          <feGaussianBlur in="SourceGraphic" />
        </filter>
        <filter
          id="data-manipulation_svg__P"
          width="193.8%"
          height="185.5%"
          x="-46.9%"
          y="-42.7%"
          filterUnits="objectBoundingBox"
        >
          <feGaussianBlur in="SourceGraphic" stdDeviation={3.489} />
        </filter>
        <filter
          id="data-manipulation_svg__R"
          width="100%"
          height="100%"
          x="0%"
          y="0%"
          filterUnits="objectBoundingBox"
        >
          <feGaussianBlur in="SourceGraphic" />
        </filter>
        <filter
          id="data-manipulation_svg__V"
          width="100%"
          height="100%"
          x="0%"
          y="0%"
          filterUnits="objectBoundingBox"
        >
          <feGaussianBlur in="SourceGraphic" />
        </filter>
        <filter
          id="data-manipulation_svg__W"
          width="193.8%"
          height="185.5%"
          x="-46.9%"
          y="-42.7%"
          filterUnits="objectBoundingBox"
        >
          <feGaussianBlur in="SourceGraphic" stdDeviation={3.489} />
        </filter>
        <filter
          id="data-manipulation_svg__Y"
          width="100%"
          height="100%"
          x="0%"
          y="0%"
          filterUnits="objectBoundingBox"
        >
          <feGaussianBlur in="SourceGraphic" />
        </filter>
        <linearGradient
          id="data-manipulation_svg__b"
          x1="51.761%"
          x2="45.208%"
          y1="53.903%"
          y2="46.917%"
        >
          <stop offset="0%" stopOpacity={0} />
          <stop offset="100%" />
        </linearGradient>
        <linearGradient
          id="data-manipulation_svg__e"
          x1="50%"
          x2="50%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#D4E4F1" />
          <stop offset="100%" stopColor="#B5CFDD" />
        </linearGradient>
        <linearGradient
          id="data-manipulation_svg__h"
          x1="5.317%"
          x2="5.317%"
          y1="94.951%"
          y2="62.033%"
        >
          <stop offset="0%" stopOpacity={0} />
          <stop offset="100%" />
        </linearGradient>
        <linearGradient
          id="data-manipulation_svg__k"
          x1="50%"
          x2="50%"
          y1="4.721%"
          y2="97.676%"
        >
          <stop offset="0%" stopColor="#C7DBE8" />
          <stop offset="100%" stopColor="#96B5C7" />
        </linearGradient>
        <linearGradient
          id="data-manipulation_svg__E"
          x1="50%"
          x2="56.01%"
          y1="50%"
          y2="76.359%"
        >
          <stop offset="0%" stopOpacity={0.491} />
          <stop offset="100%" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="data-manipulation_svg__J"
          x1="50%"
          x2="50%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#FBDE7B" />
          <stop offset="100%" stopColor="#F6AF67" />
        </linearGradient>
        <linearGradient
          id="data-manipulation_svg__M"
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
        <mask id="data-manipulation_svg__c" fill="#fff">
          <use xlinkHref="#data-manipulation_svg__a" />
        </mask>
        <path d="M0 0h192v192H0z" />
        <g
          fill="url(#data-manipulation_svg__b)"
          mask="url(#data-manipulation_svg__c)"
          opacity={0.118}
        >
          <path d="M159.47 127.887l-96.663 58.409 11.744 6.104L186 137.131z" />
        </g>
        <g mask="url(#data-manipulation_svg__c)" opacity={0.5}>
          <g transform="translate(23.8 2)">
            <mask id="data-manipulation_svg__f" fill="#fff">
              <use xlinkHref="#data-manipulation_svg__d" />
            </mask>
            <use fill="#C5D9E7" xlinkHref="#data-manipulation_svg__d" />
            <g
              fill="url(#data-manipulation_svg__e)"
              mask="url(#data-manipulation_svg__f)"
            >
              <path d="M-4.841 59.013H15.2v110.718H-4.841z" />
            </g>
            <g mask="url(#data-manipulation_svg__f)">
              <g transform="translate(-1 -6.8)">
                <mask id="data-manipulation_svg__i" fill="#fff">
                  <use xlinkHref="#data-manipulation_svg__g" />
                </mask>
                <use
                  fill="url(#data-manipulation_svg__h)"
                  xlinkHref="#data-manipulation_svg__g"
                />
                <g mask="url(#data-manipulation_svg__i)">
                  <path
                    fill="#E0F1FF"
                    d="M-3.841 6.87h115.084v107.707H-3.841z"
                  />
                </g>
              </g>
            </g>
          </g>
          <g transform="translate(30 5.4)">
            <mask id="data-manipulation_svg__l" fill="#fff">
              <use xlinkHref="#data-manipulation_svg__j" />
            </mask>
            <use fill="#DDE8EF" xlinkHref="#data-manipulation_svg__j" />
            <g
              fill="url(#data-manipulation_svg__k)"
              mask="url(#data-manipulation_svg__l)"
            >
              <path d="M-56.45 83.543L103-8.516l54.227 93.924-159.45 92.059z" />
            </g>
          </g>
        </g>
        <g mask="url(#data-manipulation_svg__c)" opacity={0.5}>
          <g transform="translate(38.2 9.2)">
            <mask id="data-manipulation_svg__n" fill="#fff">
              <use xlinkHref="#data-manipulation_svg__m" />
            </mask>
            <use fill="#C5D9E7" xlinkHref="#data-manipulation_svg__m" />
            <g
              fill="url(#data-manipulation_svg__e)"
              mask="url(#data-manipulation_svg__n)"
            >
              <path d="M-4.841 59.013H15.2v110.718H-4.841z" />
            </g>
            <g mask="url(#data-manipulation_svg__n)">
              <g transform="translate(-1 -6.8)">
                <mask id="data-manipulation_svg__p" fill="#fff">
                  <use xlinkHref="#data-manipulation_svg__o" />
                </mask>
                <use
                  fill="url(#data-manipulation_svg__h)"
                  xlinkHref="#data-manipulation_svg__o"
                />
                <g mask="url(#data-manipulation_svg__p)">
                  <path
                    fill="#E0F1FF"
                    d="M-3.841 6.87h115.084v107.707H-3.841z"
                  />
                </g>
              </g>
            </g>
          </g>
          <g transform="translate(44.4 12.6)">
            <mask id="data-manipulation_svg__r" fill="#fff">
              <use xlinkHref="#data-manipulation_svg__q" />
            </mask>
            <use fill="#C2D7E5" xlinkHref="#data-manipulation_svg__q" />
            <g
              fill="url(#data-manipulation_svg__k)"
              mask="url(#data-manipulation_svg__r)"
            >
              <path d="M-56.45 83.543L103-8.516l54.227 93.924-159.45 92.059z" />
            </g>
          </g>
        </g>
        <g mask="url(#data-manipulation_svg__c)">
          <g transform="translate(55 16.4)">
            <mask id="data-manipulation_svg__t" fill="#fff">
              <use xlinkHref="#data-manipulation_svg__s" />
            </mask>
            <use fill="#C5D9E7" xlinkHref="#data-manipulation_svg__s" />
            <g
              fill="url(#data-manipulation_svg__e)"
              mask="url(#data-manipulation_svg__t)"
            >
              <path d="M-4.841 59.013H15.2v110.718H-4.841z" />
            </g>
            <g mask="url(#data-manipulation_svg__t)">
              <g transform="translate(-1 -6.8)">
                <mask id="data-manipulation_svg__v" fill="#fff">
                  <use xlinkHref="#data-manipulation_svg__u" />
                </mask>
                <use
                  fill="url(#data-manipulation_svg__h)"
                  xlinkHref="#data-manipulation_svg__u"
                />
                <g mask="url(#data-manipulation_svg__v)">
                  <path
                    fill="#E0F1FF"
                    d="M-3.841 6.87h115.084v107.707H-3.841z"
                  />
                </g>
              </g>
            </g>
          </g>
          <g transform="translate(61.2 19.2)">
            <mask id="data-manipulation_svg__x" fill="#fff">
              <use xlinkHref="#data-manipulation_svg__w" />
            </mask>
            <g
              fill="url(#data-manipulation_svg__k)"
              mask="url(#data-manipulation_svg__x)"
            >
              <path d="M-56.45 84.143L103-7.915l54.227 93.923-159.45 92.059z" />
            </g>
          </g>
          <g transform="translate(108 51.6)">
            <mask id="data-manipulation_svg__z" fill="#fff">
              <use xlinkHref="#data-manipulation_svg__y" />
            </mask>
            <use fill="#C0D6E3" xlinkHref="#data-manipulation_svg__y" />
            <path
              fill="#8AA7B8"
              d="M2.727 4.74l4.834-2.79a2.4 2.4 0 013.6 2.078V92.22a4.8 4.8 0 01-2.4 4.157l-4.834 2.79a2.4 2.4 0 01-3.6-2.078V8.897a4.8 4.8 0 012.4-4.157z"
              mask="url(#data-manipulation_svg__z)"
            />
          </g>
          <g transform="translate(137.783 35.962)">
            <mask id="data-manipulation_svg__B" fill="#fff">
              <use xlinkHref="#data-manipulation_svg__A" />
            </mask>
            <use fill="#C0D6E3" xlinkHref="#data-manipulation_svg__A" />
            <path
              fill="#8AA7B8"
              d="M2.727 4.74l4.834-2.79a2.4 2.4 0 013.6 2.078V92.22a4.8 4.8 0 01-2.4 4.157l-4.834 2.79a2.4 2.4 0 01-3.6-2.078V8.897a4.8 4.8 0 012.4-4.157z"
              mask="url(#data-manipulation_svg__B)"
            />
          </g>
          <g transform="translate(75.6 69.6)">
            <mask id="data-manipulation_svg__D" fill="#fff">
              <use xlinkHref="#data-manipulation_svg__C" />
            </mask>
            <use fill="#C0D6E3" xlinkHref="#data-manipulation_svg__C" />
            <path
              fill="#8AA7B8"
              d="M2.727 4.74l4.834-2.79a2.4 2.4 0 013.6 2.078V92.22a4.8 4.8 0 01-2.4 4.157l-4.834 2.79a2.4 2.4 0 01-3.6-2.078V8.897a4.8 4.8 0 012.4-4.157z"
              mask="url(#data-manipulation_svg__D)"
            />
          </g>
          <g transform="translate(103 107.388)">
            <path
              fill="url(#data-manipulation_svg__E)"
              d="M5.257 13.659l11.477-6.626a3.6 3.6 0 015.4 3.118V24.52a9.6 9.6 0 01-4.8 8.313L5.857 39.46a3.6 3.6 0 01-5.4-3.117v-14.37a9.6 9.6 0 014.8-8.313z"
              filter="url(#data-manipulation_svg__F)"
              opacity={0.221}
            />
            <path
              fill="#000"
              d="M5.398 13.168l11.815-6.821a3.706 3.706 0 015.559 3.21v4.909a9.883 9.883 0 01-4.942 8.558L6.016 29.845a3.706 3.706 0 01-5.559-3.21v-4.908a9.883 9.883 0 014.941-8.559z"
              filter="url(#data-manipulation_svg__G)"
              opacity={0.429}
            />
            <mask id="data-manipulation_svg__K" fill="#fff">
              <use xlinkHref="#data-manipulation_svg__H" />
            </mask>
            <use
              fill="#FFC844"
              filter="url(#data-manipulation_svg__I)"
              xlinkHref="#data-manipulation_svg__H"
            />
            <g
              fill="url(#data-manipulation_svg__J)"
              mask="url(#data-manipulation_svg__K)"
            >
              <path d="M12.572-10.04l22.88 22.88-24.486 24.486-22.88-22.88z" />
            </g>
          </g>
          <g transform="translate(106.146 108.984)">
            <mask id="data-manipulation_svg__N" fill="#fff">
              <use xlinkHref="#data-manipulation_svg__L" />
            </mask>
            <use fill="#FFC844" xlinkHref="#data-manipulation_svg__L" />
            <g
              fill="url(#data-manipulation_svg__M)"
              mask="url(#data-manipulation_svg__N)"
            >
              <path d="M-6.805 13.545l28.62-16.524 8.793 15.229-28.62 16.524z" />
            </g>
          </g>
          <g transform="translate(71.8 88.189)">
            <path
              fill="url(#data-manipulation_svg__E)"
              d="M5.257 13.659l11.477-6.626a3.6 3.6 0 015.4 3.118V24.52a9.6 9.6 0 01-4.8 8.313L5.857 39.46a3.6 3.6 0 01-5.4-3.117v-14.37a9.6 9.6 0 014.8-8.313z"
              filter="url(#data-manipulation_svg__O)"
              opacity={0.221}
            />
            <path
              fill="#000"
              d="M5.398 13.168l11.815-6.821a3.706 3.706 0 015.559 3.21v4.909a9.883 9.883 0 01-4.942 8.558L6.016 29.845a3.706 3.706 0 01-5.559-3.21v-4.908a9.883 9.883 0 014.941-8.559z"
              filter="url(#data-manipulation_svg__P)"
              opacity={0.429}
            />
            <mask id="data-manipulation_svg__S" fill="#fff">
              <use xlinkHref="#data-manipulation_svg__Q" />
            </mask>
            <use
              fill="#FFC844"
              filter="url(#data-manipulation_svg__R)"
              xlinkHref="#data-manipulation_svg__Q"
            />
            <g
              fill="url(#data-manipulation_svg__J)"
              mask="url(#data-manipulation_svg__S)"
            >
              <path d="M12.572-10.04l22.88 22.88-24.486 24.486-22.88-22.88z" />
            </g>
          </g>
          <g transform="translate(74.946 89.785)">
            <mask id="data-manipulation_svg__U" fill="#fff">
              <use xlinkHref="#data-manipulation_svg__T" />
            </mask>
            <use fill="#FFC844" xlinkHref="#data-manipulation_svg__T" />
            <g
              fill="url(#data-manipulation_svg__M)"
              mask="url(#data-manipulation_svg__U)"
            >
              <path d="M-6.805 13.545l28.62-16.524 8.793 15.229-28.62 16.524z" />
            </g>
          </g>
          <g transform="translate(134.2 47.388)">
            <path
              fill="url(#data-manipulation_svg__E)"
              d="M5.257 13.659l11.477-6.626a3.6 3.6 0 015.4 3.118V24.52a9.6 9.6 0 01-4.8 8.313L5.857 39.46a3.6 3.6 0 01-5.4-3.117v-14.37a9.6 9.6 0 014.8-8.313z"
              filter="url(#data-manipulation_svg__V)"
              opacity={0.221}
            />
            <path
              fill="#000"
              d="M5.398 13.168l11.815-6.821a3.706 3.706 0 015.559 3.21v4.909a9.883 9.883 0 01-4.942 8.558L6.016 29.845a3.706 3.706 0 01-5.559-3.21v-4.908a9.883 9.883 0 014.941-8.559z"
              filter="url(#data-manipulation_svg__W)"
              opacity={0.429}
            />
            <mask id="data-manipulation_svg__Z" fill="#fff">
              <use xlinkHref="#data-manipulation_svg__X" />
            </mask>
            <use
              fill="#FFC844"
              filter="url(#data-manipulation_svg__Y)"
              xlinkHref="#data-manipulation_svg__X"
            />
            <g
              fill="url(#data-manipulation_svg__J)"
              mask="url(#data-manipulation_svg__Z)"
            >
              <path d="M12.572-10.04l22.88 22.88-24.486 24.486-22.88-22.88z" />
            </g>
          </g>
          <g transform="translate(137.346 48.984)">
            <mask id="data-manipulation_svg__ab" fill="#fff">
              <use xlinkHref="#data-manipulation_svg__aa" />
            </mask>
            <use fill="#FFC844" xlinkHref="#data-manipulation_svg__aa" />
            <g
              fill="url(#data-manipulation_svg__M)"
              mask="url(#data-manipulation_svg__ab)"
            >
              <path d="M-6.805 13.545l28.62-16.524 8.793 15.229-28.62 16.524z" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default SvgDataManipulation;
