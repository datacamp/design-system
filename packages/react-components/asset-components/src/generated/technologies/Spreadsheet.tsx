import * as React from 'react';
interface SVGRProps {
  svgRef?: React.Ref<SVGSVGElement>;
}

function SvgSpreadsheet({
  svgRef,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={39} height={39} ref={svgRef} {...props}>
      <defs>
        <linearGradient
          id="spreadsheet_svg__a"
          x1="52.222%"
          x2="50%"
          y1="96.37%"
          y2="6.139%"
        >
          <stop offset="0%" stopColor="#2DA11E" />
          <stop offset="100%" stopColor="#A7EB8A" />
        </linearGradient>
        <circle id="spreadsheet_svg__b" cx={19.5} cy={19.5} r={19.5} />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="url(#spreadsheet_svg__a)" xlinkHref="#spreadsheet_svg__b" />
        <path
          d="M27.964 9.604a2.304 2.304 0 0 1 2.304 2.304v15.183a2.304 2.304 0 0 1-2.304 2.304H11.035a2.304 2.304 0 0 1-2.304-2.304V11.908a2.304 2.304 0 0 1 2.304-2.304h16.93zm-10.076 13.68h-5.962a.576.576 0 0 0-.576.575v1.881c0 .318.258.576.576.576h5.962a.576.576 0 0 0 .576-.576v-1.88a.576.576 0 0 0-.576-.577zm9.313 0H21.24a.576.576 0 0 0-.576.575v1.881c0 .318.258.576.576.576h5.96a.576.576 0 0 0 .576-.576v-1.88a.576.576 0 0 0-.576-.577zm-9.313-5.24h-5.962a.576.576 0 0 0-.576.576v1.881c0 .319.258.576.576.576h5.962a.576.576 0 0 0 .576-.576v-1.88a.576.576 0 0 0-.576-.577zm9.313 0H21.24a.576.576 0 0 0-.576.576v1.881c0 .319.258.576.576.576h5.96a.576.576 0 0 0 .576-.576v-1.88a.576.576 0 0 0-.576-.577zm-9.313-5.239h-5.962a.576.576 0 0 0-.576.576v1.882c0 .318.258.576.576.576h5.962a.576.576 0 0 0 .576-.576V13.38a.576.576 0 0 0-.576-.576zm9.313 0H21.24a.576.576 0 0 0-.576.576v1.882c0 .318.258.576.576.576h5.96a.576.576 0 0 0 .576-.576V13.38a.576.576 0 0 0-.576-.576z"
          fill="#FFF"
        />
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
  <SvgSpreadsheet svgRef={ref} {...props} />
));
export default ForwardRef;