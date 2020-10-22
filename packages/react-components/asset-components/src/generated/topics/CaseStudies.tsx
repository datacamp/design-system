import * as React from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgCaseStudies({
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
        <title id={titleId}>{'Case Studies'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <defs>
        <linearGradient
          id="case-studies_svg__b"
          x1="57.362%"
          x2="31.946%"
          y1="64.24%"
          y2="39.058%"
        >
          <stop offset="0%" stopOpacity={0} />
          <stop offset="100%" />
        </linearGradient>
        <linearGradient
          id="case-studies_svg__e"
          x1="50%"
          x2="50%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#FBDE7B" />
          <stop offset="100%" stopColor="#F6AF67" />
        </linearGradient>
        <linearGradient
          id="case-studies_svg__g"
          x1="50%"
          x2="50%"
          y1="3.41%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#767676" stopOpacity={0} />
          <stop offset="100%" stopColor="#585858" />
        </linearGradient>
        <linearGradient
          id="case-studies_svg__i"
          x1="50%"
          x2="50%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#F6AF32" />
          <stop offset="100%" stopColor="#DA8041" />
        </linearGradient>
        <linearGradient
          id="case-studies_svg__n"
          x1="50%"
          x2="50%"
          y1="4.721%"
          y2="97.676%"
        >
          <stop offset="0%" stopColor="#C7DBE8" />
          <stop offset="100%" stopColor="#96B5C7" />
        </linearGradient>
        <linearGradient
          id="case-studies_svg__q"
          x1="50%"
          x2="50%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#D4E4F1" />
          <stop offset="100%" stopColor="#B5CFDD" />
        </linearGradient>
        <linearGradient
          id="case-studies_svg__t"
          x1="50%"
          x2="50%"
          y1="4.721%"
          y2="97.676%"
        >
          <stop offset="0%" stopColor="#C7DBE8" />
          <stop offset="100%" stopColor="#96B5C7" />
        </linearGradient>
        <path id="case-studies_svg__a" d="M0 0h192v192H0z" />
        <path
          id="case-studies_svg__d"
          d="M106.568 171.043L94.82 181.435 3.024 111.609a4.8 4.8 0 01-1.894-3.82V7.113a4.8 4.8 0 017.2-4.157l35.594 20.55a9.6 9.6 0 014.8 8.314v11.553a4.8 4.8 0 002.4 4.157l50.644 29.24a9.6 9.6 0 014.8 8.314v85.958z"
        />
        <path
          id="case-studies_svg__h"
          d="M7.608 119.634a9.6 9.6 0 01-4.8-8.314V29.896c0-.178.01-.355.029-.53L.47 28.55l5.135-3.018a4.794 4.794 0 014.402.207l93.62 54.052a9.6 9.6 0 014.8 8.314v86.713c.45 4.695 2.688 5.888 6.089 3.924 4.855-2.802 9.2-10.259 10.251-17.305V85.485a9.6 9.6 0 00-4.8-8.314l-50.644-29.24a4.8 4.8 0 01-2.4-4.157V32.221a9.6 9.6 0 00-4.8-8.314L26.53 3.357a4.8 4.8 0 00-4.711-.05l-.256-.148L26.267.442l.3.173a4.8 4.8 0 014.562.13l35.593 20.55a9.6 9.6 0 014.8 8.314v11.554a4.8 4.8 0 002.4 4.156l50.644 29.24a9.6 9.6 0 014.8 8.314v75.513l-.037.127c-.082 9.264-5.72 19.968-12.652 23.97-6.334 3.657-11.587.472-12.51-7.1l-96.56-55.749z"
        />
        <path
          id="case-studies_svg__k"
          d="M103.94 156.818H.407v-156H147.8v156h-43.86zm-2.172-4.435L5.208 96.634a9.6 9.6 0 01-4.8-8.314V6.896c0-.178.01-.355.029-.53C4.285 3.409 6.675 2.2 7.607 2.739l93.621 54.052a9.6 9.6 0 014.8 8.314v86.713c.26 2.709-.891 5-2.089 5-.878 0-1.781-1.232-2.171-4.435z"
        />
        <path
          id="case-studies_svg__m"
          d="M6.086.634C6.597.436 7.226.508 7.903.9l51.539 29.756c1.713.99 3.103 3.646 3.103 5.93v89.211c0 .983-.257 1.738-.688 2.2l.04.022-.154.09a1.57 1.57 0 01-.571.33l-3.183 1.837-10.527-6.078 2.572-1.486-42.13-24.324c-1.652-.954-3.004-3.459-3.099-5.684l-.005-.246V4.406L2.163 2.884 5.781.794c.06-.04.121-.076.185-.107l.107-.06z"
        />
        <path
          id="case-studies_svg__p"
          d="M57.745 36.585c0-2.284-1.39-4.94-3.103-5.93L3.103.899C1.391-.089 0 .962 0 3.246v89.21c0 2.285 1.39 4.942 3.103 5.93l51.539 29.756c1.713.99 3.103-.062 3.103-2.346V36.585z"
        />
        <path
          id="case-studies_svg__s"
          d="M110.807 155.643l-3.394-1.96L6.592 95.5a9.6 9.6 0 01-4.8-8.313V5.76a4.8 4.8 0 017.2-4.157l93.62 54.052a9.6 9.6 0 014.8 8.314v58.197l.012 23.951c.428 4.322 1.593 7.887 3.692 9.687l-.309-.162z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="case-studies_svg__c" fill="#fff">
          <use xlinkHref="#case-studies_svg__a" />
        </mask>
        <path d="M0 0h192v192H0z" />
        <path
          fill="url(#case-studies_svg__b)"
          mask="url(#case-studies_svg__c)"
          opacity={0.118}
          d="M159.922 173.034l21.226 13.168-21.226 12.748-21.226-12.748z"
        />
        <g mask="url(#case-studies_svg__c)">
          <g transform="translate(50.4 4.8)">
            <mask id="case-studies_svg__f" fill="#fff">
              <use xlinkHref="#case-studies_svg__d" />
            </mask>
            <use fill="#C5C5C5" xlinkHref="#case-studies_svg__d" />
            <g
              fill="url(#case-studies_svg__e)"
              mask="url(#case-studies_svg__f)"
            >
              <path d="M-73.106 69.15L18.27-22.225l144.847 144.847-91.376 91.376z" />
            </g>
            <path
              fill="url(#case-studies_svg__g)"
              mask="url(#case-studies_svg__f)"
              opacity={0.355}
              style={{
                mixBlendMode: 'multiply',
              }}
              d="M78.042 145.266h28.526v36.169H78.042z"
            />
          </g>
          <g transform="translate(32.2 4.4)">
            <mask id="case-studies_svg__j" fill="#fff">
              <use xlinkHref="#case-studies_svg__h" />
            </mask>
            <use fill="#F0A636" xlinkHref="#case-studies_svg__h" />
            <g
              fill="url(#case-studies_svg__i)"
              mask="url(#case-studies_svg__j)"
            >
              <path d="M-54.906 69.55L36.47-21.825l144.848 144.847-91.376 91.376z" />
            </g>
          </g>
          <g transform="translate(34.6 27.4)">
            <mask id="case-studies_svg__l" fill="#fff">
              <use xlinkHref="#case-studies_svg__k" />
            </mask>
            <g mask="url(#case-studies_svg__l)">
              <g transform="translate(75.836 .517)">
                <mask id="case-studies_svg__o" fill="#fff">
                  <use xlinkHref="#case-studies_svg__m" />
                </mask>
                <use fill="#C5C5C5" xlinkHref="#case-studies_svg__m" />
                <g
                  fill="url(#case-studies_svg__n)"
                  mask="url(#case-studies_svg__o)"
                >
                  <path d="M-6.188-17.549h74.174v147.824H-6.188z" />
                </g>
              </g>
              <g transform="translate(77 2.6)">
                <mask id="case-studies_svg__r" fill="#fff">
                  <use xlinkHref="#case-studies_svg__p" />
                </mask>
                <use fill="#C5C5C5" xlinkHref="#case-studies_svg__p" />
                <g
                  fill="url(#case-studies_svg__q)"
                  mask="url(#case-studies_svg__r)"
                >
                  <path d="M0 .528h57.745v161.599H0z" />
                </g>
                <path
                  fill="#A5C4D6"
                  d="M7.523 65.018c0-2.183 1.326-3.186 2.96-2.24l30.431 17.647c.778.451 1.41 1.662 1.41 2.701v2.26c0 2.08-1.264 3.035-2.82 2.133L9.214 69.954c-.933-.541-1.691-1.993-1.691-3.241zm0-16.8c0-2.183 1.326-3.186 2.96-2.24l30.431 17.647c.778.451 1.41 1.662 1.41 2.701v2.26c0 2.08-1.264 3.035-2.82 2.133L9.214 53.154c-.933-.541-1.691-1.993-1.691-3.241zm0-14.4c0-2.183 1.326-3.186 2.96-2.24l30.431 17.647c.778.451 1.41 1.662 1.41 2.701v2.26c0 2.08-1.264 3.035-2.82 2.133L9.214 38.754c-.933-.541-1.691-1.993-1.691-3.241zm0-14.42c0-2.184 1.326-3.187 2.96-2.24l24.279 14.079c.778.451 1.41 1.662 1.41 2.701v2.26c0 2.08-1.264 3.036-2.82 2.133L9.215 24.334c-.934-.541-1.692-1.994-1.692-3.241z"
                  mask="url(#case-studies_svg__r)"
                />
                <image
                  width={50.4}
                  height={105.6}
                  x={-3.556}
                  y={19.3}
                  mask="url(#case-studies_svg__r)"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAsCAYAAACKYvPzAAAABGdBTUEAALGOfPtRkwAAA/5JREFUSA3tl79vHEUUx997M7t7e7vx+mz8AxNLxCIRkjsjxR1cQUHS35WU1xAKCgoaMIpEhaCAKn+CrwfSEJcIZIQU5RokZEGwAyaxfdzd/pqZx+zaMUb2Yc6mSOGR9mZvtPOZ73znjeYNADACwNPHvp6/ELMFNhpkUchcDFAOci4yNhoN0ZudlfNpanZ2dky73bZsS8dCPPBZ6LJWe51q1Z1K7AkVzPV1q1bT2GyaI8CRwTKb2xIhTAbUS1QCURaPBfkNz1O/t2pmoVS+agfAkcBi6foNX3owayqOIxil52qqVJGewxru+gtw+eZXsDE1hdDpFH7bCXx4qiPkkZFMIhLM40A6IqiO5RCGfoj+SwDe1N6e0wAQ9fqKXUy0C3sYLUPhUlccITRFBlAJNImWxpsgPVCZcNNLOh6L59PuYpS9CKBa11q62WwWMCu5UH2yLVQFoQxRAISXCCmqKh5nyGvSE1EWysjOIYwyJwCIKvHYVbeIlFdaLQHQLMKweI4V8c3a3eTl197oBg7MgMGAia0dJJVWjlUipGGB7IkqBYRuit14GmcqE7A4H8H0dB02NtaOQctgLFtXmG7Rp4ss3MXivzImk5oTFDTIWMcuiEGGPKBAJWI7SWItsiD2s/uTT/TaygNr9aqxsV1Gyd/Qg/Ea73ziT9acJRRwxQGTGUNJBpx4DLECHnhoBjnqQXeX4z9CL5mBJ9mG1bC28sHT0Bu+Jd9676NJDP3rht1xbU2WFmwdjJWGAUPWEybtM8heNjDxVvwwCx89Uqur+2qPKT0QfFjduv3ZFYWwJBAdO7sk09YCxr4E6DJh989+t1d5nMXrsJmv37mjbUdjV/Hfy7f3vtwNzfKPEwvSRabnrWmWCeBKMikmuoJhnk2zCn7ydWdxiu0m4VOhxZB2hc3613c3l+s3QQh8wYYfmNwYZpkb7ueDHit/Tuur29um03lwcpwN0/75+2/fB5CPDZB0QEgClkYJUbNT6O/tHVp5YvAOgxbtJk9+k0pRQlogMDlSlrDLMH/QDUdTWvRyBaR2c1iQBGEItfUj91zs97slvAjUkZX2wC07kTGYW4DWNjaOFnuUjAw92n/Y+wV0mDNnb7/w9OzeDet54ekwZ87e/mx4GkJ26hSeDaWFTLZnns2/ymxECFnWR+WPrDQFNEgOOxZKJI4BC/jIUJSO1qRzJ8+1toqF1uykGQfB2P4A9q4wMnT7++2fUdGvCUEuHFKWVNwP4CH8UlTl3ek/JRPl1wc/nc6a/u7eF5vXll/tRr4nTZLnu8akfijzfD+ZGJ6gHQUNey9S9Tff/bjq0ARtxT+USVq7XVw8/odSwOv1ugSb41rcP4/s8/IPLhnwF0tcyY1e5ozSAAAAAElFTkSuQmCC"
                />
              </g>
            </g>
          </g>
          <g transform="translate(28.595 31.2)">
            <mask id="case-studies_svg__u" fill="#fff">
              <use xlinkHref="#case-studies_svg__s" />
            </mask>
            <use fill="#D8D8D8" xlinkHref="#case-studies_svg__s" />
            <g
              fill="url(#case-studies_svg__t)"
              mask="url(#case-studies_svg__u)"
            >
              <path d="M-48.106 52.07l77.085-77.085 136.03 136.029-77.086 77.085z" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default SvgCaseStudies;
