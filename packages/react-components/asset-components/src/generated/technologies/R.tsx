import * as React from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgR({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg viewBox="0 0 39 39" role="img" aria-labelledby={titleId} {...props}>
      {title === undefined ? (
        <title id={titleId}>{'R'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <g fill="none" fillRule="evenodd">
        <circle cx={19.5} cy={19.5} r={19.5} fill="#05192D" />
        <g fill="#FFF" fillRule="nonzero">
          <path d="M19.47 25.661c-6.87 0-12.439-3.73-12.439-8.33C7.031 12.73 12.601 9 19.471 9c6.869 0 12.438 3.73 12.438 8.33 0 4.602-5.57 8.331-12.439 8.331zm1.904-13.404c-5.222 0-9.455 2.55-9.455 5.695 0 3.146 4.233 5.695 9.455 5.695s9.075-1.743 9.075-5.695c0-3.95-3.853-5.695-9.075-5.695z" />
          <path d="M25.975 21.903s.753.227 1.19.448c.152.077.415.23.604.432.186.197.276.396.276.396l2.967 5.003-4.796.002-2.242-4.211s-.46-.789-.742-1.018c-.235-.19-.336-.258-.569-.258h-1.14l.002 5.484-4.244.002v-14.01h8.522s3.88.07 3.88 3.763c0 3.692-3.708 3.967-3.708 3.967zm-1.846-4.691l-2.569-.002-.001 2.382h2.57s1.19-.004 1.19-1.212c0-1.233-1.19-1.168-1.19-1.168z" />
        </g>
      </g>
    </svg>
  );
}

export default SvgR;
