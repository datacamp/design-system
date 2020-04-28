import * as React from 'react';
interface SVGRProps {
  svgRef?: React.Ref<SVGSVGElement>;
}

function SvgGit({
  svgRef,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={39} height={39} ref={svgRef} {...props}>
      <defs>
        <linearGradient
          id="git_svg__b"
          x1="50%"
          x2="50%"
          y1="98.012%"
          y2="5.507%"
        >
          <stop offset="0%" stopColor="#EC7739" />
          <stop offset="100%" stopColor="#F8A477" />
        </linearGradient>
        <circle id="git_svg__a" cx={19.5} cy={19.5} r={19.5} />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="git_svg__c" fill="#fff">
          <use xlinkHref="#git_svg__a" />
        </mask>
        <use fill="url(#git_svg__b)" xlinkHref="#git_svg__a" />
        <path
          fill="#FFF"
          d="M22.11 8.538l8.643 8.643a3.279 3.279 0 0 1 0 4.638l-8.643 8.643a3.279 3.279 0 0 1-4.637 0l-8.644-8.643a3.279 3.279 0 0 1 0-4.638l6.086-6.086 2.997 3.097a2.002 2.002 0 0 0 1.109 2.537v6.157a2.002 2.002 0 1 0 1.54 0v-5.954l2.316 2.395a2.001 2.001 0 1 0 1.103-1.073l-2.4-2.474a2.001 2.001 0 0 0-2.633-2.713l-2.955-3.05 1.48-1.479a3.279 3.279 0 0 1 4.638 0z"
          mask="url(#git_svg__c)"
        />
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
  <SvgGit svgRef={ref} {...props} />
));
export default ForwardRef;