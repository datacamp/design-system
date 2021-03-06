import * as React from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgPython({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg viewBox="0 0 39 39" role="img" aria-labelledby={titleId} {...props}>
      {title === undefined ? (
        <title id={titleId}>{'Python'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <g fill="none" fillRule="evenodd">
        <circle cx={19.5} cy={19.5} r={19.5} fill="#05192D" />
        <path
          fill="#FFF"
          fillRule="nonzero"
          d="M26.849 14.552c1.432 0 2.107 1.055 2.46 2.457.492 1.948.514 3.408 0 4.926-.497 1.474-1.03 2.457-2.46 2.457h-7.376v.615h4.915v1.847c0 1.399-1.221 2.11-2.46 2.463-1.864.533-3.358.451-4.915 0-1.301-.377-2.46-1.15-2.46-2.463V22.24c0-1.328 1.113-2.463 2.46-2.463h4.915c1.638 0 3.074-1.404 3.074-3.073v-2.152zm-5.166 11.351a1.018 1.018 0 101.018 1.015c0-.561-.455-1.015-1.018-1.015zm-2.27-16.59a15.51 15.51 0 012.57.2c1.337.22 2.465 1.215 2.465 2.538v4.65a2.472 2.472 0 01-2.466 2.482h-4.925c-1.672 0-3.08 1.422-3.08 3.033v2.232H12.28c-1.433 0-2.27-1.03-2.62-2.476-.473-1.942-.453-3.103 0-4.963.392-1.623 1.647-2.476 3.08-2.476h6.782v-.62h-4.931V12.05c0-1.409.378-2.173 2.465-2.538a14.217 14.217 0 012.356-.2zm-2.678 1.747a1.02 1.02 0 00-1.019 1.021c0 .562.456 1.016 1.02 1.016a1.018 1.018 0 100-2.037z"
        />
      </g>
    </svg>
  );
}

export default SvgPython;
