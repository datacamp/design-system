import * as React from 'react';
interface SVGRProps {
  svgRef?: React.Ref<SVGSVGElement>;
}

function SvgSpreadsheet({
  svgRef,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={192} height={192} ref={svgRef} {...props}>
      <defs>
        <linearGradient
          id="spreadsheet_svg__a"
          x1="51.713%"
          x2="46.084%"
          y1="52.55%"
          y2="47.151%"
        >
          <stop offset="0%" stopOpacity={0} />
          <stop offset="100%" />
        </linearGradient>
        <linearGradient
          id="spreadsheet_svg__b"
          x1="57.342%"
          x2="42.385%"
          y1="56.953%"
          y2="42.328%"
        >
          <stop offset="0%" stopOpacity={0} />
          <stop offset="100%" />
        </linearGradient>
        <linearGradient
          id="spreadsheet_svg__d"
          x1="50%"
          x2="50%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#D4E4F1" />
          <stop offset="100%" stopColor="#B5CFDD" />
        </linearGradient>
        <linearGradient
          id="spreadsheet_svg__g"
          x1="5.317%"
          x2="5.317%"
          y1="94.951%"
          y2="62.033%"
        >
          <stop offset="0%" stopOpacity={0} />
          <stop offset="100%" />
        </linearGradient>
        <linearGradient
          id="spreadsheet_svg__j"
          x1="50%"
          x2="50%"
          y1="4.721%"
          y2="97.676%"
        >
          <stop offset="0%" stopColor="#C7DBE8" />
          <stop offset="100%" stopColor="#96B5C7" />
        </linearGradient>
        <linearGradient
          id="spreadsheet_svg__n"
          x1="50%"
          x2="50%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#F6AF32" />
          <stop offset="100%" stopColor="#DA8041" />
        </linearGradient>
        <linearGradient
          id="spreadsheet_svg__q"
          x1="50%"
          x2="50%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#FBDE7B" />
          <stop offset="100%" stopColor="#F6AF67" />
        </linearGradient>
        <path
          id="spreadsheet_svg__c"
          d="M12.114 171.93l-10.202-5.734a3.6 3.6 0 0 1-1.8-3.118V62.025a9.6 9.6 0 0 1 4.802-8.315L98.917.597a3.6 3.6 0 0 1 3.6 0l9.205 5.386-99.43 57.407-.178 108.54z"
        />
        <path id="spreadsheet_svg__f" d="M.959.323h127.319V115.2H.959z" />
        <path
          id="spreadsheet_svg__i"
          d="M4.8 54.624L97.538 1.083a3.6 3.6 0 0 1 5.4 3.117v101.18a9.6 9.6 0 0 1-4.8 8.313L5.4 167.235a3.6 3.6 0 0 1-5.4-3.117V62.938a9.6 9.6 0 0 1 4.8-8.314z"
        />
        <path
          id="spreadsheet_svg__l"
          d="M102.455 2.4a3.6 3.6 0 0 1 .483 1.8v9.98L0 72.918v-9.98a9.6 9.6 0 0 1 4.8-8.314L97.538 1.083a3.6 3.6 0 0 1 4.917 1.317zM16.233 56.263c0-2.475-1.506-3.614-3.362-2.542-1.856 1.071-3.363 3.95-3.363 6.425 0 2.474 1.507 3.613 3.363 2.542 1.856-1.072 3.362-3.95 3.362-6.425zM26.64 50.14c0-2.474-1.507-3.614-3.363-2.542-1.856 1.071-3.363 3.95-3.363 6.425 0 2.474 1.507 3.613 3.363 2.542 1.856-1.072 3.363-3.95 3.363-6.425zm10.405-5.866c0-2.474-1.507-3.613-3.363-2.542-1.855 1.072-3.362 3.95-3.362 6.425 0 2.475 1.507 3.614 3.362 2.542 1.856-1.071 3.363-3.95 3.363-6.425z"
        />
        <path
          id="spreadsheet_svg__m"
          d="M68.142.517l.005-.002.03.02c.218.105.421.24.606.406L83.16 10.6l-2.582 81.435-64.066 40.278-14.287-9.61C.873 122.145 0 120.495 0 118.047V45.883c0-4.155 2.517-9.036 5.621-10.902L63.494 1.225c1.582-.917 3.362-1.31 4.648-.708z"
        />
        <path
          id="spreadsheet_svg__p"
          d="M5.621 35.981L64.29.726c3.104-1.866 5.62-.01 5.62 4.144v71.163c0 4.155-2.517 9.036-5.621 10.902L5.62 122.192c-3.104 1.865-5.621.01-5.621-4.146V46.883c0-4.155 2.517-9.036 5.621-10.902zm4.287 11.37c-.776.467-1.405 1.687-1.405 2.726v9.45c0 1.039.629 1.503 1.405 1.037l20.28-12.187c.776-.467 1.405-1.687 1.405-2.726v-9.45c0-1.039-.63-1.503-1.405-1.036L9.908 47.35zm0 22.82c-.776.467-1.405 1.687-1.405 2.726v9.45c0 1.04.629 1.503 1.405 1.037l20.28-12.187c.776-.466 1.405-1.686 1.405-2.725v-9.45c0-1.04-.63-1.503-1.405-1.037L9.908 70.172zm0 22.82c-.776.467-1.405 1.688-1.405 2.726v9.45c0 1.04.629 1.504 1.405 1.037l20.28-12.186c.776-.467 1.405-1.687 1.405-2.726v-9.45c0-1.04-.63-1.503-1.405-1.037L9.908 92.992zM40.14 29.185c-.776.466-1.405 1.687-1.405 2.725v9.45c0 1.04.629 1.504 1.405 1.037L60.42 30.21c.776-.467 1.405-1.687 1.405-2.726v-9.45c0-1.04-.63-1.503-1.406-1.037L40.14 29.184zm0 22.82c-.776.467-1.405 1.687-1.405 2.726v9.45c0 1.039.629 1.503 1.405 1.037L60.42 53.03c.776-.467 1.405-1.687 1.405-2.726v-9.45c0-1.039-.63-1.503-1.406-1.036L40.14 52.004zm0 22.82c-.776.467-1.405 1.687-1.405 2.726V87c0 1.04.629 1.503 1.405 1.037L60.42 75.85c.776-.466 1.405-1.686 1.405-2.725v-9.45c0-1.04-.63-1.503-1.406-1.037L40.14 74.825z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h192v192H0z" />
        <path
          fill="url(#spreadsheet_svg__a)"
          opacity={0.118}
          d="M119.404 126.521l-95.679 55.241 20.623 10.687 98.044-57.581z"
        />
        <path
          fill="url(#spreadsheet_svg__b)"
          opacity={0.15}
          d="M159.223 132.737l-62.521 40.176 20.771 11.45 61.127-39.914z"
        />
        <g transform="translate(9.6 9.4)">
          <mask id="spreadsheet_svg__e" fill="#fff">
            <use xlinkHref="#spreadsheet_svg__c" />
          </mask>
          <use fill="#D2E4F1" xlinkHref="#spreadsheet_svg__c" />
          <g fill="url(#spreadsheet_svg__d)" mask="url(#spreadsheet_svg__e)">
            <path d="M-6.087 51.8H19.8v120.131H-6.087z" />
          </g>
          <g mask="url(#spreadsheet_svg__e)">
            <g transform="translate(-1.2 -7)">
              <mask id="spreadsheet_svg__h" fill="#fff">
                <use xlinkHref="#spreadsheet_svg__f" />
              </mask>
              <use
                fill="url(#spreadsheet_svg__g)"
                xlinkHref="#spreadsheet_svg__f"
              />
              <g mask="url(#spreadsheet_svg__h)">
                <path fill="#E0F1FF" d="M.959 2.101h115.084v114.877H.959z" />
              </g>
            </g>
          </g>
        </g>
        <g transform="translate(20.4 14.4)">
          <mask id="spreadsheet_svg__k" fill="#fff">
            <use xlinkHref="#spreadsheet_svg__i" />
          </mask>
          <use fill="#8B8B8B" xlinkHref="#spreadsheet_svg__i" />
          <g fill="url(#spreadsheet_svg__j)" mask="url(#spreadsheet_svg__k)">
            <path d="M-56.45 84.143L103-7.915l54.227 93.923-159.45 92.059z" />
          </g>
          <use fill="#6D8695" opacity={0.264} xlinkHref="#spreadsheet_svg__l" />
        </g>
        <path
          d="M32.134 88.96l30.928-17.856a2.583 2.583 0 0 1 3.874 2.237 7.748 7.748 0 0 1-3.874 6.71L32.134 97.907a2.583 2.583 0 0 1-3.874-2.237 7.748 7.748 0 0 1 3.874-6.71zm0 31.2l30.928-17.856a2.583 2.583 0 0 1 3.874 2.237 7.748 7.748 0 0 1-3.874 6.71l-30.928 17.856a2.583 2.583 0 0 1-3.874-2.237 7.748 7.748 0 0 1 3.874-6.71zm-.017-15.551l21.325-12.532a2.56 2.56 0 0 1 3.857 2.207 7.817 7.817 0 0 1-3.857 6.74l-21.325 12.532a2.56 2.56 0 0 1-3.857-2.207 7.818 7.818 0 0 1 3.857-6.74z"
          fill="#94ADBC"
        />
        <g transform="translate(82 42)">
          <mask id="spreadsheet_svg__o" fill="#fff">
            <use xlinkHref="#spreadsheet_svg__m" />
          </mask>
          <use fill="#DF883E" xlinkHref="#spreadsheet_svg__m" />
          <g fill="url(#spreadsheet_svg__n)" mask="url(#spreadsheet_svg__o)">
            <path d="M-.335-1H85v133.328H-.335z" />
          </g>
        </g>
        <g transform="translate(97.089 52.083)">
          <mask id="spreadsheet_svg__r" fill="#fff">
            <use xlinkHref="#spreadsheet_svg__p" />
          </mask>
          <use fill="#F7B76B" xlinkHref="#spreadsheet_svg__p" />
          <g fill="url(#spreadsheet_svg__q)" mask="url(#spreadsheet_svg__r)">
            <path d="M-2.012 0h76.617v122.917H-2.012z" />
          </g>
        </g>
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
  <SvgSpreadsheet svgRef={ref} {...props} />
));
export default ForwardRef;
