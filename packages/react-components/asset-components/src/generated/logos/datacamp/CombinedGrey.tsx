import * as React from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgCombinedGrey({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      width={173}
      height={36}
      role="img"
      aria-labelledby={titleId}
      {...props}
    >
      {title === undefined ? (
        <title id={titleId}>{'datacamp/regular'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <g fill="#05192D" fillRule="evenodd">
        <path d="M42.56 27.1a5.694 5.694 0 110-11.39 5.694 5.694 0 010 11.39m5.704-20.623v8.853a8.334 8.334 0 100 12.148v1.836h2.632V6.477h-2.632zm73.28 20.622a5.694 5.694 0 110-11.389 5.694 5.694 0 010 11.39m8.333-5.695v-8.247h-2.63v2.172a8.334 8.334 0 100 12.148v1.836h2.631v-7.91h-.001zm20.987-7.634a1.296 1.296 0 011.109-.622h.507c1.075 0 1.947.872 1.947 1.947v14.218h-2.686V17.269c-1.239 2-5.674 9.25-7.003 11.424a1.296 1.296 0 01-1.108.62h-.548a1.298 1.298 0 01-1.298-1.297V17.238a1909.582 1909.582 0 00-7.31 11.954l-.074.122h-2.574v-16.16h2.684v.033l-.062 11.147 6.438-10.56a1.3 1.3 0 011.11-.622h.51c1.073 0 1.944.869 1.947 1.942 0 2.972.014 8.383.014 9.17l6.397-10.493zm-37.92 12.541a8.331 8.331 0 11.21-9.502l-2.524 1.312a5.533 5.533 0 10-.379 6.88l2.693 1.31zm51.542.8a5.693 5.693 0 01-5.68-5.352v-.682a5.694 5.694 0 115.684 6.036m0-14.028a8.298 8.298 0 00-5.684 2.24v-2.168h-2.632V35.91h2.632v-8.4a8.333 8.333 0 105.684-14.425M75.277 15.68v9.938c0 .589.478 1.067 1.067 1.067h3.064v2.629h-3.062a3.7 3.7 0 01-3.696-3.696l-.01-9.938h-2.838v-2.56h2.838V8.702h2.635v4.428h4.672v2.55h-4.67zm12.757 11.418a5.694 5.694 0 110-11.39 5.694 5.694 0 010 11.39m5.702-13.941v2.173a8.334 8.334 0 100 12.148v1.836h2.632v-16.16l-2.632.003zM60.285 27.099a5.694 5.694 0 110-11.389 5.694 5.694 0 010 11.39m5.702-13.942v2.172a8.334 8.334 0 100 12.148v1.836h2.63v-16.16l-2.63.004zM11.7 8.514v8.332L2.857 21.89V3.44l8.841 5.074zm2.86 17.507v-7.51l11.84-6.757-2.88-1.65-8.96 5.112V7.68a1.44 1.44 0 00-.718-1.242L3.056.256A2.066 2.066 0 000 2.07v21.184a2.067 2.067 0 002.971 1.866l.082-.042 8.64-4.932v6.72c.002.513.276.987.721 1.243L23.502 34.4l2.88-1.651L14.56 26.02z" />
      </g>
    </svg>
  );
}

export default SvgCombinedGrey;
