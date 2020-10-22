import * as React from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgSpreadsheet({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg viewBox="0 0 39 39" role="img" aria-labelledby={titleId} {...props}>
      {title === undefined ? (
        <title id={titleId}>{'Spreadsheet'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <g fill="none" fillRule="evenodd">
        <circle cx={19.5} cy={19.5} r={19.5} fill="#05192D" />
        <path
          fill="#FFF"
          d="M27.964 9.604a2.304 2.304 0 012.304 2.304v15.183a2.304 2.304 0 01-2.304 2.304H11.035a2.304 2.304 0 01-2.304-2.304V11.908a2.304 2.304 0 012.304-2.304h16.93zm-10.076 13.68h-5.962a.576.576 0 00-.576.575v1.881c0 .318.258.576.576.576h5.962a.576.576 0 00.576-.576v-1.88a.576.576 0 00-.576-.577zm9.313 0H21.24a.576.576 0 00-.576.575v1.881c0 .318.258.576.576.576H27.2a.576.576 0 00.576-.576v-1.88a.576.576 0 00-.576-.577zm-9.313-5.24h-5.962a.576.576 0 00-.576.576v1.881c0 .319.258.576.576.576h5.962a.576.576 0 00.576-.576v-1.88a.576.576 0 00-.576-.577zm9.313 0H21.24a.576.576 0 00-.576.576v1.881c0 .319.258.576.576.576H27.2a.576.576 0 00.576-.576v-1.88a.576.576 0 00-.576-.577zm-9.313-5.239h-5.962a.576.576 0 00-.576.576v1.882c0 .318.258.576.576.576h5.962a.576.576 0 00.576-.576V13.38a.576.576 0 00-.576-.576zm9.313 0H21.24a.576.576 0 00-.576.576v1.882c0 .318.258.576.576.576H27.2a.576.576 0 00.576-.576V13.38a.576.576 0 00-.576-.576z"
        />
      </g>
    </svg>
  );
}

export default SvgSpreadsheet;
