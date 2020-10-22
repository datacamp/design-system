import * as React from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgTimeSeries({
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
        <title id={titleId}>{'Time Series'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <defs>
        <path id="time-series_svg__a" d="M0 0h192v192H0z" />
        <path
          id="time-series_svg__d"
          d="M7.514 169.73l-5.418-3.127a3.6 3.6 0 01-1.8-3.118V62.432a9.6 9.6 0 014.802-8.315L97.927.553a3.6 3.6 0 013.6 0l5.595 3.23L7.692 61.19l-.178 108.54z"
        />
        <path id="time-series_svg__g" d="M0 .151h111.243V112.8H0z" />
        <path
          id="time-series_svg__j"
          d="M4.8 54.024L97.538.483a3.6 3.6 0 015.4 3.117v101.18a9.6 9.6 0 01-4.8 8.313L5.4 166.635a3.6 3.6 0 01-5.4-3.117V62.338a9.6 9.6 0 014.8-8.314z"
        />
        <path
          id="time-series_svg__m"
          d="M7.514 169.73l-5.418-3.127a3.6 3.6 0 01-1.8-3.118V62.432a9.6 9.6 0 014.802-8.315L97.927.553a3.6 3.6 0 013.6 0l5.595 3.23L7.692 61.19l-.178 108.54z"
        />
        <path id="time-series_svg__o" d="M0 .151h111.243V112.8H0z" />
        <path
          id="time-series_svg__q"
          d="M4.8 54.024L97.538.483a3.6 3.6 0 015.4 3.117v101.18a9.6 9.6 0 01-4.8 8.313L5.4 166.635a3.6 3.6 0 01-5.4-3.117V62.338a9.6 9.6 0 014.8-8.314z"
        />
        <path
          id="time-series_svg__s"
          d="M7.514 169.73l-5.418-3.127a3.6 3.6 0 01-1.8-3.118V62.432a9.6 9.6 0 014.802-8.315L97.927.553a3.6 3.6 0 013.6 0l5.595 3.23L7.692 61.19l-.178 108.54z"
        />
        <path id="time-series_svg__u" d="M0 .151h111.243V112.8H0z" />
        <path
          id="time-series_svg__w"
          d="M4.8 54.024L97.538.483a3.6 3.6 0 015.4 3.117v101.18a9.6 9.6 0 01-4.8 8.313L5.4 166.635a3.6 3.6 0 01-5.4-3.117V62.338a9.6 9.6 0 014.8-8.314z"
        />
        <path
          id="time-series_svg__y"
          d="M41.947 68.473L61.229 2.075 56.619.737 39.525 59.601 20.317 41.519.581 88.964l4.432 1.844 17.07-41.035z"
        />
        <path
          id="time-series_svg__D"
          d="M11.985 5.12l-.124-.071-.01.005c-.845-.39-1.908-.3-3.061.367-2.754 1.59-4.99 5.862-4.99 9.534 0 2.268.853 3.78 2.154 4.23l2.8 1.617 2.716-1.567-1.858-1.072c2.364-1.888 4.168-5.671 4.168-8.97a7.44 7.44 0 00-.157-1.57l1.348-.779L12.122 5.2a2.506 2.506 0 00-.137-.079z"
        />
        <path
          id="time-series_svg__G"
          d="M5.743 1.396c2.754-1.59 4.99.1 4.99 3.772 0 3.672-2.236 7.944-4.99 9.535-2.754 1.59-4.99-.1-4.99-3.773 0-3.672 2.236-7.944 4.99-9.534z"
        />
        <path
          id="time-series_svg__J"
          d="M11.985 5.12l-.124-.071-.01.005c-.845-.39-1.908-.3-3.061.367-2.754 1.59-4.99 5.862-4.99 9.534 0 2.268.853 3.78 2.154 4.23l2.8 1.617 2.716-1.567-1.858-1.072c2.364-1.888 4.168-5.671 4.168-8.97a7.44 7.44 0 00-.157-1.57l1.348-.779L12.122 5.2a2.506 2.506 0 00-.137-.079z"
        />
        <path
          id="time-series_svg__L"
          d="M5.743 1.396c2.754-1.59 4.99.1 4.99 3.772 0 3.672-2.236 7.944-4.99 9.535-2.754 1.59-4.99-.1-4.99-3.773 0-3.672 2.236-7.944 4.99-9.534z"
        />
        <path
          id="time-series_svg__N"
          d="M11.985 5.12l-.124-.071-.01.005c-.845-.39-1.908-.3-3.061.367-2.754 1.59-4.99 5.862-4.99 9.534 0 2.268.853 3.78 2.154 4.23l2.8 1.617 2.716-1.567-1.858-1.072c2.364-1.888 4.168-5.671 4.168-8.97a7.44 7.44 0 00-.157-1.57l1.348-.779L12.122 5.2a2.506 2.506 0 00-.137-.079z"
        />
        <path
          id="time-series_svg__P"
          d="M5.743 1.396c2.754-1.59 4.99.1 4.99 3.772 0 3.672-2.236 7.944-4.99 9.535-2.754 1.59-4.99-.1-4.99-3.773 0-3.672 2.236-7.944 4.99-9.534z"
        />
        <path
          id="time-series_svg__R"
          d="M12.985 5.12l-.124-.071-.01.005c-.845-.39-1.908-.3-3.061.367-2.754 1.59-4.99 5.862-4.99 9.534 0 2.268.853 3.78 2.154 4.23l2.8 1.617 2.716-1.567-1.858-1.072c2.364-1.888 4.168-5.671 4.168-8.97a7.44 7.44 0 00-.157-1.57l1.348-.779L13.122 5.2a2.506 2.506 0 00-.137-.079z"
        />
        <path
          id="time-series_svg__T"
          d="M5.743 1.396c2.754-1.59 4.99.1 4.99 3.772 0 3.672-2.236 7.944-4.99 9.535-2.754 1.59-4.99-.1-4.99-3.773 0-3.672 2.236-7.944 4.99-9.534z"
        />
        <linearGradient
          id="time-series_svg__b"
          x1="51.624%"
          x2="45.853%"
          y1="54.484%"
          y2="48.517%"
        >
          <stop offset="0%" stopOpacity={0} />
          <stop offset="100%" />
        </linearGradient>
        <linearGradient
          id="time-series_svg__e"
          x1="50%"
          x2="50%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#D4E4F1" />
          <stop offset="100%" stopColor="#B5CFDD" />
        </linearGradient>
        <linearGradient
          id="time-series_svg__h"
          x1="5.317%"
          x2="5.317%"
          y1="94.951%"
          y2="62.033%"
        >
          <stop offset="0%" stopOpacity={0} />
          <stop offset="100%" />
        </linearGradient>
        <linearGradient
          id="time-series_svg__k"
          x1="50%"
          x2="50%"
          y1="4.721%"
          y2="97.676%"
        >
          <stop offset="0%" stopColor="#C7DBE8" />
          <stop offset="100%" stopColor="#96B5C7" />
        </linearGradient>
        <linearGradient
          id="time-series_svg__z"
          x1="72.669%"
          x2="30.73%"
          y1="-2.561%"
          y2="93.895%"
        >
          <stop offset="0%" stopColor="#FBDE7B" />
          <stop offset="100%" stopColor="#F6AF67" />
        </linearGradient>
        <linearGradient
          id="time-series_svg__A"
          x1="50%"
          x2="50%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#FBDE7B" />
          <stop offset="100%" stopColor="#F6AF67" />
        </linearGradient>
        <linearGradient
          id="time-series_svg__C"
          x1="56.289%"
          x2="45.438%"
          y1="54.477%"
          y2="-40.259%"
        >
          <stop offset="0%" stopOpacity={0} />
          <stop offset="100%" />
        </linearGradient>
        <linearGradient
          id="time-series_svg__E"
          x1="50%"
          x2="50%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#FBDE7B" />
          <stop offset="100%" stopColor="#F6AF67" />
        </linearGradient>
        <linearGradient
          id="time-series_svg__H"
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
        <mask id="time-series_svg__c" fill="#fff">
          <use xlinkHref="#time-series_svg__a" />
        </mask>
        <path d="M0 0h192v192H0z" />
        <g
          fill="url(#time-series_svg__b)"
          mask="url(#time-series_svg__c)"
          opacity={0.118}
        >
          <path d="M160.204 131.321l-95.679 55.241 15.864 6.038 96.011-55.545z" />
        </g>
        <g mask="url(#time-series_svg__c)" opacity={0.5}>
          <g transform="translate(23.8 2)">
            <mask id="time-series_svg__f" fill="#fff">
              <use xlinkHref="#time-series_svg__d" />
            </mask>
            <use fill="#CBDDEB" xlinkHref="#time-series_svg__d" />
            <g fill="url(#time-series_svg__e)" mask="url(#time-series_svg__f)">
              <path d="M-4.841 59.013H15.2v110.718H-4.841z" />
            </g>
            <g mask="url(#time-series_svg__f)">
              <g transform="translate(-1 -6.8)">
                <mask id="time-series_svg__i" fill="#fff">
                  <use xlinkHref="#time-series_svg__g" />
                </mask>
                <use
                  fill="url(#time-series_svg__h)"
                  xlinkHref="#time-series_svg__g"
                />
                <g mask="url(#time-series_svg__i)">
                  <path
                    fill="#E0F1FF"
                    d="M-3.841 6.87h115.084v107.707H-3.841z"
                  />
                </g>
              </g>
            </g>
          </g>
          <g transform="translate(30 5.4)">
            <mask id="time-series_svg__l" fill="#fff">
              <use xlinkHref="#time-series_svg__j" />
            </mask>
            <use fill="#BFD5E3" xlinkHref="#time-series_svg__j" />
            <g fill="url(#time-series_svg__k)" mask="url(#time-series_svg__l)">
              <path d="M-56.45 83.543L103-8.516l54.227 93.924-159.45 92.059z" />
            </g>
          </g>
        </g>
        <g mask="url(#time-series_svg__c)" opacity={0.5}>
          <g transform="translate(38.2 9.2)">
            <mask id="time-series_svg__n" fill="#fff">
              <use xlinkHref="#time-series_svg__m" />
            </mask>
            <use fill="#CBDDEB" xlinkHref="#time-series_svg__m" />
            <g fill="url(#time-series_svg__e)" mask="url(#time-series_svg__n)">
              <path d="M-4.841 59.013H15.2v110.718H-4.841z" />
            </g>
            <g mask="url(#time-series_svg__n)">
              <g transform="translate(-1 -6.8)">
                <mask id="time-series_svg__p" fill="#fff">
                  <use xlinkHref="#time-series_svg__o" />
                </mask>
                <use
                  fill="url(#time-series_svg__h)"
                  xlinkHref="#time-series_svg__o"
                />
                <g mask="url(#time-series_svg__p)">
                  <path
                    fill="#E0F1FF"
                    d="M-3.841 6.87h115.084v107.707H-3.841z"
                  />
                </g>
              </g>
            </g>
          </g>
          <g transform="translate(44.4 12.6)">
            <mask id="time-series_svg__r" fill="#fff">
              <use xlinkHref="#time-series_svg__q" />
            </mask>
            <use fill="#BFD5E3" xlinkHref="#time-series_svg__q" />
            <g fill="url(#time-series_svg__k)" mask="url(#time-series_svg__r)">
              <path d="M-56.45 83.543L103-8.516l54.227 93.924-159.45 92.059z" />
            </g>
          </g>
        </g>
        <g mask="url(#time-series_svg__c)">
          <g transform="translate(55 16.4)">
            <mask id="time-series_svg__t" fill="#fff">
              <use xlinkHref="#time-series_svg__s" />
            </mask>
            <use fill="#CBDDEB" xlinkHref="#time-series_svg__s" />
            <g fill="url(#time-series_svg__e)" mask="url(#time-series_svg__t)">
              <path d="M-4.841 59.013H15.2v110.718H-4.841z" />
            </g>
            <g mask="url(#time-series_svg__t)">
              <g transform="translate(-1 -6.8)">
                <mask id="time-series_svg__v" fill="#fff">
                  <use xlinkHref="#time-series_svg__u" />
                </mask>
                <use
                  fill="url(#time-series_svg__h)"
                  xlinkHref="#time-series_svg__u"
                />
                <g mask="url(#time-series_svg__v)">
                  <path
                    fill="#E0F1FF"
                    d="M-3.841 6.87h115.084v107.707H-3.841z"
                  />
                </g>
              </g>
            </g>
          </g>
          <g transform="translate(61.2 19.8)">
            <mask id="time-series_svg__x" fill="#fff">
              <use xlinkHref="#time-series_svg__w" />
            </mask>
            <use fill="#BFD5E3" xlinkHref="#time-series_svg__w" />
            <g fill="url(#time-series_svg__k)" mask="url(#time-series_svg__x)">
              <path d="M-56.45 83.543L103-8.516l54.227 93.924-159.45 92.059z" />
            </g>
          </g>
          <g fill="#8AA7B8" fillRule="nonzero">
            <path d="M71.896 171.747V81.51a1.2 1.2 0 10-2.4 0v92.321a1.2 1.2 0 001.802 1.038l86.36-50.076a1.2 1.2 0 10-1.204-2.076l-84.558 49.031z" />
            <path d="M74.86 145.95l-4.766 2.842a1.2 1.2 0 101.203 2.076l4.766-2.84a1.2 1.2 0 00-1.204-2.077zm0-24l-4.766 2.842a1.2 1.2 0 101.203 2.076l4.766-2.84a1.2 1.2 0 00-1.204-2.077zm0-24l-4.766 2.842a1.2 1.2 0 101.203 2.076l4.766-2.84a1.2 1.2 0 00-1.204-2.077zm16.236 64.324v-5.922a1.2 1.2 0 10-2.4 0v5.922a1.2 1.2 0 102.4 0zm19.2-10.978v-5.922a1.2 1.2 0 10-2.4 0v5.922a1.2 1.2 0 102.4 0zm19.2-11.28v-5.921a1.2 1.2 0 10-2.4 0v5.921a1.2 1.2 0 102.4 0zm19.2-11.124v-5.922a1.2 1.2 0 10-2.4 0v5.922a1.2 1.2 0 102.4 0z" />
          </g>
          <g
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#6D8695"
            strokeWidth={2.4}
          >
            <path
              opacity={0.149}
              d="M70.8 150l86.4-50.647M70.8 126l86.4-50.647M70.8 102l86.4-50.647"
            />
            <path
              opacity={0.15}
              d="M89.977 68.782v93.631m19.2-105.631v93.631m19.2-103.231v93.631m19.2-105.631v93.631"
            />
          </g>
          <g transform="translate(88 52.6)">
            <mask id="time-series_svg__B" fill="#fff">
              <use xlinkHref="#time-series_svg__y" />
            </mask>
            <use
              fill="url(#time-series_svg__z)"
              fillRule="nonzero"
              xlinkHref="#time-series_svg__y"
            />
            <g fill="url(#time-series_svg__A)" mask="url(#time-series_svg__B)">
              <path d="M-9.276.737h70.504v105.394H-9.276z" />
            </g>
          </g>
          <path
            fill="url(#time-series_svg__C)"
            opacity={0.487}
            d="M28.164 129H37.4v19.2h-9.236zm19.2-43.2H56.6V105h-9.236zm19.2 14.4H75.8v19.2h-9.236zm19.2-62.4H95V57h-9.236z"
            transform="translate(55 16.2)"
          />
          <g transform="translate(79.06 128.763)">
            <path
              fill="#000"
              d="M8.597 1.316c4.719-2.724 8.55.172 8.55 6.464 0 6.292-3.831 13.612-8.55 16.336-4.719 2.725-8.55-.172-8.55-6.463 0-6.292 3.831-13.612 8.55-16.337z"
              opacity={0.047}
            />
            <mask id="time-series_svg__F" fill="#fff">
              <use xlinkHref="#time-series_svg__D" />
            </mask>
            <use fill="#FFC844" xlinkHref="#time-series_svg__D" />
            <g fill="url(#time-series_svg__E)" mask="url(#time-series_svg__F)">
              <path d="M3.8 3.18h13.347v19.071H3.8z" />
            </g>
          </g>
          <g transform="translate(85.26 134.563)">
            <mask id="time-series_svg__I" fill="#fff">
              <use xlinkHref="#time-series_svg__G" />
            </mask>
            <use fill="#FFC844" xlinkHref="#time-series_svg__G" />
            <g fill="url(#time-series_svg__H)" mask="url(#time-series_svg__I)">
              <path d="M-6.274 10.855l8.31-14.393 16.058 9.27-8.31 14.394z" />
            </g>
          </g>
          <g transform="translate(98.2 85.468)">
            <path
              fill="#FFC844"
              d="M8.597 1.316c4.719-2.724 8.55.172 8.55 6.464 0 6.292-3.831 13.612-8.55 16.336-4.719 2.725-8.55-.172-8.55-6.463 0-6.292 3.831-13.612 8.55-16.337z"
              opacity={0.047}
            />
            <mask id="time-series_svg__K" fill="#fff">
              <use xlinkHref="#time-series_svg__J" />
            </mask>
            <use fill="#FFC844" xlinkHref="#time-series_svg__J" />
            <g fill="url(#time-series_svg__E)" mask="url(#time-series_svg__K)">
              <path d="M3.8 3.18h13.347v19.071H3.8z" />
            </g>
          </g>
          <g transform="translate(104.4 91.268)">
            <mask id="time-series_svg__M" fill="#fff">
              <use xlinkHref="#time-series_svg__L" />
            </mask>
            <use fill="#FFC844" xlinkHref="#time-series_svg__L" />
            <g fill="url(#time-series_svg__H)" mask="url(#time-series_svg__M)">
              <path d="M-6.274 10.855l8.31-14.393 16.058 9.27-8.31 14.394z" />
            </g>
          </g>
          <g transform="translate(117.4 102)">
            <path
              fill="#000"
              d="M8.597 1.316c4.719-2.724 8.55.172 8.55 6.464 0 6.292-3.831 13.612-8.55 16.336-4.719 2.725-8.55-.172-8.55-6.463 0-6.292 3.831-13.612 8.55-16.337z"
              opacity={0.047}
            />
            <mask id="time-series_svg__O" fill="#fff">
              <use xlinkHref="#time-series_svg__N" />
            </mask>
            <use fill="#FFC844" xlinkHref="#time-series_svg__N" />
            <g fill="url(#time-series_svg__E)" mask="url(#time-series_svg__O)">
              <path d="M3.8 3.18h13.347v19.071H3.8z" />
            </g>
          </g>
          <g transform="translate(123.6 107.8)">
            <mask id="time-series_svg__Q" fill="#fff">
              <use xlinkHref="#time-series_svg__P" />
            </mask>
            <use fill="#FFC844" xlinkHref="#time-series_svg__P" />
            <g fill="url(#time-series_svg__H)" mask="url(#time-series_svg__Q)">
              <path d="M-6.274 10.855l8.31-14.393 16.058 9.27-8.31 14.394z" />
            </g>
          </g>
          <g>
            <g transform="translate(135.6 39.383)">
              <path
                fill="#FFC844"
                d="M9.597 1.316c4.719-2.724 8.55.172 8.55 6.464 0 6.292-3.831 13.612-8.55 16.336-4.719 2.725-8.55-.172-8.55-6.463 0-6.292 3.831-13.612 8.55-16.337z"
                opacity={0.047}
              />
              <mask id="time-series_svg__S" fill="#fff">
                <use xlinkHref="#time-series_svg__R" />
              </mask>
              <use fill="#FFC844" xlinkHref="#time-series_svg__R" />
              <g
                fill="url(#time-series_svg__E)"
                mask="url(#time-series_svg__S)"
              >
                <path d="M4.8 3.18h13.347v19.071H4.8z" />
              </g>
            </g>
            <g transform="translate(142.8 45.183)">
              <mask id="time-series_svg__U" fill="#fff">
                <use xlinkHref="#time-series_svg__T" />
              </mask>
              <use fill="#FFC844" xlinkHref="#time-series_svg__T" />
              <g
                fill="url(#time-series_svg__H)"
                mask="url(#time-series_svg__U)"
              >
                <path d="M-6.274 10.855l8.31-14.393 16.058 9.27-8.31 14.394z" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default SvgTimeSeries;
