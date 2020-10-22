import * as React from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgLogomarkGreen({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={27} height={36} role="img" aria-labelledby={titleId} {...props}>
      {title === undefined ? (
        <title id={titleId}>{'logo'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path
        d="M12 9.312v8.333l-8.842 5.043V4.238l8.841 5.074zm2.86 17.508v-7.51l11.84-6.758-2.88-1.65-8.96 5.113V8.479a1.44 1.44 0 00-.718-1.242L3.356 1.055A2.066 2.066 0 00.3 2.869v21.184a2.067 2.067 0 002.971 1.866l.082-.042 8.64-4.933v6.72c.002.514.276.987.721 1.244l11.088 6.29 2.88-1.65L14.86 26.82z"
        fill="#03EF62"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgLogomarkGreen;
