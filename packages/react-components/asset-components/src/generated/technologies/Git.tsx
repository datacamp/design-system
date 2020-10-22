import * as React from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgGit({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg viewBox="0 0 39 39" role="img" aria-labelledby={titleId} {...props}>
      {title === undefined ? (
        <title id={titleId}>{'Git'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <g fill="none" fillRule="evenodd">
        <circle cx={19.5} cy={19.5} r={19.5} fill="#05192D" />
        <path
          fill="#FFF"
          d="M22.11 8.538l8.643 8.643a3.279 3.279 0 010 4.638l-8.643 8.643a3.279 3.279 0 01-4.637 0l-8.644-8.643a3.279 3.279 0 010-4.638l6.086-6.086 2.997 3.097a2.002 2.002 0 001.109 2.537v6.157a2.002 2.002 0 101.54 0v-5.954l2.316 2.395a2.001 2.001 0 101.103-1.073l-2.4-2.474a2.001 2.001 0 00-2.633-2.713l-2.955-3.05 1.48-1.479a3.279 3.279 0 014.638 0z"
        />
      </g>
    </svg>
  );
}

export default SvgGit;
