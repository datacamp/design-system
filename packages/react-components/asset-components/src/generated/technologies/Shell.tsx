import * as React from 'react';
interface SVGRProps {
  svgRef?: React.Ref<SVGSVGElement>;
}

function SvgShell({
  svgRef,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={39} height={39} ref={svgRef} {...props}>
      <defs>
        <linearGradient
          id="shell_svg__b"
          x1="50%"
          x2="50%"
          y1="98.012%"
          y2="5.507%"
        >
          <stop offset="0%" stopColor="#405F8F" />
          <stop offset="100%" stopColor="#86A9DF" />
        </linearGradient>
        <circle id="shell_svg__a" cx={19.5} cy={19.5} r={19.5} />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="shell_svg__c" fill="#fff">
          <use xlinkHref="#shell_svg__a" />
        </mask>
        <use fill="url(#shell_svg__b)" xlinkHref="#shell_svg__a" />
        <path
          fill="#FFF"
          d="M30.269 21.537v3.202h-11.06v-3.202h11.06zM9.022 12.806l9.72 4.041v2.534l-9.72 4.05v-3.022l5.908-2.286-5.908-2.278v-3.039z"
          mask="url(#shell_svg__c)"
        />
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
  <SvgShell svgRef={ref} {...props} />
));
export default ForwardRef;
