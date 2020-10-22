import * as React from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgAppliedFinance({
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
        <title id={titleId}>{'Applied Finance'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <defs>
        <linearGradient
          id="applied-finance_svg__b"
          x1="57.362%"
          x2="31.946%"
          y1="64.24%"
          y2="39.058%"
        >
          <stop offset="0%" stopOpacity={0} />
          <stop offset="100%" />
        </linearGradient>
        <linearGradient
          id="applied-finance_svg__d"
          x1="57.362%"
          x2="31.946%"
          y1="64.24%"
          y2="39.058%"
        >
          <stop offset="0%" stopOpacity={0} />
          <stop offset="100%" />
        </linearGradient>
        <linearGradient
          id="applied-finance_svg__f"
          x1="50%"
          x2="50%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#ECF7FF" />
          <stop offset="100%" stopColor="#CCE5F4" />
        </linearGradient>
        <linearGradient
          id="applied-finance_svg__g"
          x1="50%"
          x2="50%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#D4E4F1" />
          <stop offset="100%" stopColor="#B5CFDD" />
        </linearGradient>
        <linearGradient
          id="applied-finance_svg__i"
          x1="50%"
          x2="50%"
          y1="4.721%"
          y2="97.676%"
        >
          <stop offset="0%" stopColor="#C7DBE8" />
          <stop offset="100%" stopColor="#96B5C7" />
        </linearGradient>
        <linearGradient
          id="applied-finance_svg__q"
          x1="50%"
          x2="50%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#ECF7FF" />
          <stop offset="100%" stopColor="#CCE5F4" />
        </linearGradient>
        <linearGradient
          id="applied-finance_svg__r"
          x1="50%"
          x2="50%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#D4E4F1" />
          <stop offset="100%" stopColor="#B5CFDD" />
        </linearGradient>
        <linearGradient
          id="applied-finance_svg__t"
          x1="50%"
          x2="50%"
          y1="4.721%"
          y2="97.676%"
        >
          <stop offset="0%" stopColor="#C7DBE8" />
          <stop offset="100%" stopColor="#96B5C7" />
        </linearGradient>
        <linearGradient
          id="applied-finance_svg__x"
          x1="50%"
          x2="50%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#F6AF32" />
          <stop offset="100%" stopColor="#DA8041" />
        </linearGradient>
        <linearGradient
          id="applied-finance_svg__y"
          x1="50%"
          x2="50%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#F6AF32" />
          <stop offset="100%" stopColor="#DA8041" />
        </linearGradient>
        <linearGradient
          id="applied-finance_svg__B"
          x1="50%"
          x2="58.701%"
          y1="0%"
          y2="125.517%"
        >
          <stop offset="0%" stopColor="#FBDE7B" />
          <stop offset="100%" stopColor="#F6AF67" />
        </linearGradient>
        <linearGradient
          id="applied-finance_svg__C"
          x1="50%"
          x2="50%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#FBDE7B" />
          <stop offset="100%" stopColor="#F6AF67" />
        </linearGradient>
        <path id="applied-finance_svg__a" d="M0 0h192v192H0z" />
        <path
          id="applied-finance_svg__e"
          d="M21.261 14.894L0 2.126v92.126l21.261 13.117z"
        />
        <path
          id="applied-finance_svg__j"
          d="M21.247.043l21.275 12.745-21.261 12.768L0 12.788z"
        />
        <path
          id="applied-finance_svg__l"
          d="M21.261 14.894L0 2.126v92.126l21.261 13.117z"
        />
        <path
          id="applied-finance_svg__n"
          d="M21.247.043l21.275 12.745-21.261 12.768L0 12.788z"
        />
        <path
          id="applied-finance_svg__p"
          d="M21.261 14.894L0 2.126v41.549l21.261 13.117z"
        />
        <path
          id="applied-finance_svg__u"
          d="M21.247.043l21.275 12.745-21.261 12.768L0 12.788z"
        />
        <path
          id="applied-finance_svg__w"
          d="M32.848.053l15.707 9.068V24.92c7.027 4.792 14.052 12.707 19.427 20.586l-.029.06.002.002-.004.001-6.854 14.685.01.052-12.626 7.29-5.248-10.768 6.32-3.193c1.118-.956 2.13-1.742 3.037-2.36l-13.087-7.553 2.989-1.728a20.548 20.548 0 00-.137-.08c-5.925-3.42-10.885-3.343-10.885 3.822 0 6.43 3.168 11.564 10.61 18.983 13.64 13.57 27.004 26.798 27.004 50.496 0 12.697-3.668 19.514-9.343 21.893l-10.252 5.918-.935-.54v11.824l.08.046-.08.046v.029l-.025-.015-12.638 7.297-15.837-9.143 12.743-7.357.051.03v-11.825l-2.053-1.185 2.053-1.187v-1.85c-10.216-7.278-19.461-16.907-24.09-24.203l-1.323 1.147-5.169-11.026 12.627-7.29.015.045.028-.06c6.339 9.172 15.432 18.28 23.975 23.213 7.852 4.533 11.16 1.847 11.16-5.133 0-7.898-4.409-12.832-11.987-20.329C23.48 71.248 12.458 58.272 12.458 37.514c0-3.52.316-6.587.905-9.221l-6.32-3.65 12.626-7.29.185.107c3.505-2.318 8.014-2.573 12.994-1.06v-1.685L20.091 7.35 32.718.06l.13.075V.053z"
        />
        <path
          id="applied-finance_svg__A"
          d="M24.938 129.354C14.054 121.6 4.272 111.177 0 103.751l7.026-15.784c6.339 9.172 15.432 18.28 23.975 23.213 7.852 4.533 11.16 1.847 11.16-5.133 0-7.898-4.41-12.832-11.987-20.329C15.57 71.406 4.548 58.43 4.548 37.672c0-18.739 8.955-24.59 20.39-21.113V.211L40.645 9.28v15.799c7.026 4.791 14.052 12.707 19.427 20.585l-6.89 14.761c-5.924-7.646-13.364-15.25-18.738-18.352-5.924-3.42-10.884-3.344-10.884 3.823 0 6.429 3.168 11.563 10.61 18.982 13.64 13.57 27.004 26.797 27.004 50.495 0 19.84-8.956 25.324-20.53 21.95v17.266l-15.706-9.068v-16.166z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="applied-finance_svg__c" fill="#fff">
          <use xlinkHref="#applied-finance_svg__a" />
        </mask>
        <path d="M0 0h192v192H0z" />
        <path
          fill="url(#applied-finance_svg__b)"
          mask="url(#applied-finance_svg__c)"
          opacity={0.118}
          d="M173.926 163.935l21.226 13.169-21.226 12.747-21.226-12.747zm-38.7 5.313l21.226 13.169-21.226 12.747L114 182.417z"
        />
        <path
          fill="url(#applied-finance_svg__d)"
          mask="url(#applied-finance_svg__c)"
          opacity={0.118}
          d="M65.949 172.913l12.226 7.585-12.226 7.343-12.226-7.343z"
        />
        <g mask="url(#applied-finance_svg__c)">
          <g transform="translate(98.626 36.747)">
            <mask id="applied-finance_svg__h" fill="#fff">
              <use xlinkHref="#applied-finance_svg__e" />
            </mask>
            <use
              fill="url(#applied-finance_svg__f)"
              xlinkHref="#applied-finance_svg__e"
            />
            <g
              fill="url(#applied-finance_svg__g)"
              mask="url(#applied-finance_svg__h)"
            >
              <path d="M0 2.126h21.261V107.9H0z" />
            </g>
          </g>
          <path
            fill="url(#applied-finance_svg__i)"
            transform="matrix(-1 0 0 1 162.729 25.377)"
            d="M42.842 26.261L21.587 13.496v92.109l21.255 13.134z"
          />
          <g transform="translate(98.626 26.117)">
            <mask id="applied-finance_svg__k" fill="#fff">
              <use xlinkHref="#applied-finance_svg__j" />
            </mask>
            <use fill="#E9F6FE" xlinkHref="#applied-finance_svg__j" />
            <g fill="#E0F1FF" mask="url(#applied-finance_svg__k)">
              <path d="M0 0h42.522v26.576H0z" />
            </g>
          </g>
        </g>
        <g mask="url(#applied-finance_svg__c)">
          <g transform="translate(132.226 70.347)">
            <mask id="applied-finance_svg__m" fill="#fff">
              <use xlinkHref="#applied-finance_svg__l" />
            </mask>
            <use
              fill="url(#applied-finance_svg__f)"
              xlinkHref="#applied-finance_svg__l"
            />
            <g
              fill="url(#applied-finance_svg__g)"
              mask="url(#applied-finance_svg__m)"
            >
              <path d="M0 2.126h21.261V107.9H0z" />
            </g>
          </g>
          <path
            fill="url(#applied-finance_svg__i)"
            transform="matrix(-1 0 0 1 196.329 58.977)"
            d="M42.842 26.261L21.587 13.496v92.109l21.255 13.134z"
          />
          <g transform="translate(132.226 59.717)">
            <mask id="applied-finance_svg__o" fill="#fff">
              <use xlinkHref="#applied-finance_svg__n" />
            </mask>
            <use fill="#E9F6FE" xlinkHref="#applied-finance_svg__n" />
            <g fill="#E0F1FF" mask="url(#applied-finance_svg__o)">
              <path d="M0 0h42.522v26.576H0z" />
            </g>
          </g>
        </g>
        <g mask="url(#applied-finance_svg__c)">
          <g transform="translate(92.4 125.724)">
            <mask id="applied-finance_svg__s" fill="#fff">
              <use xlinkHref="#applied-finance_svg__p" />
            </mask>
            <use
              fill="url(#applied-finance_svg__q)"
              xlinkHref="#applied-finance_svg__p"
            />
            <g
              fill="url(#applied-finance_svg__r)"
              mask="url(#applied-finance_svg__s)"
            >
              <path d="M0-21.874h21.261v79.198H0z" />
            </g>
          </g>
          <path
            fill="url(#applied-finance_svg__t)"
            transform="matrix(-1 0 0 1 156.378 114.177)"
            d="M42.717 26.438L21.461 13.673v41.532l21.256 13.134z"
          />
          <g transform="translate(92.4 115.093)">
            <mask id="applied-finance_svg__v" fill="#fff">
              <use xlinkHref="#applied-finance_svg__u" />
            </mask>
            <use fill="#E9F6FE" xlinkHref="#applied-finance_svg__u" />
            <g fill="#E0F1FF" mask="url(#applied-finance_svg__v)">
              <path d="M0 0h42.522v26.576H0z" />
            </g>
          </g>
        </g>
        <g mask="url(#applied-finance_svg__c)">
          <g transform="translate(18.3 19.006)">
            <mask id="applied-finance_svg__z" fill="#fff">
              <use xlinkHref="#applied-finance_svg__w" />
            </mask>
            <use
              fill="url(#applied-finance_svg__x)"
              xlinkHref="#applied-finance_svg__w"
            />
            <g
              fill="url(#applied-finance_svg__y)"
              mask="url(#applied-finance_svg__z)"
            >
              <path d="M-12.502-.061H71.88v161.66h-84.382z" />
            </g>
          </g>
          <g transform="translate(13.5 26.206)">
            <mask id="applied-finance_svg__D" fill="#fff">
              <use xlinkHref="#applied-finance_svg__A" />
            </mask>
            <use
              fill="url(#applied-finance_svg__B)"
              xlinkHref="#applied-finance_svg__A"
            />
            <g
              fill="url(#applied-finance_svg__C)"
              mask="url(#applied-finance_svg__D)"
            >
              <path d="M-7.702-7.261H76.68v169.207H-7.702z" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default SvgAppliedFinance;
