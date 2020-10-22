import * as React from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgTheory({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg viewBox="0 0 39 39" role="img" aria-labelledby={titleId} {...props}>
      {title === undefined ? (
        <title id={titleId}>{'Theory'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <g fill="none" fillRule="evenodd">
        <circle cx={19.261} cy={19.261} r={19.261} fill="#05192D" />
        <path
          fill="#FFF"
          d="M23.791 7.945c1.279 0 2.402.663 3.047 1.663a4.112 4.112 0 00-1.402.703l-.203.166-.022.004a.65.65 0 00-.098.037c-.742.35-1.33.4-1.797.196a.645.645 0 00-.518 1.181c.404.178.835.25 1.29.224a4.18 4.18 0 00-.252 1.06.645.645 0 001.284.133 2.857 2.857 0 012.094-2.47l.175-.041.148.012a3.624 3.624 0 013.212 4.058c-1.796-.537-3.785.22-4.788 1.959a.566.566 0 00-.066.172c-.421-.054-.891-.01-1.401.132a.645.645 0 10.347 1.242c.946-.264 1.443-.064 1.737.638a.645.645 0 001.19-.498 2.75 2.75 0 00-.568-.88l-.142-.131.02-.03c.696-1.207 2.053-1.731 3.284-1.373l-.006.01a3.626 3.626 0 01.037 6.605 3.626 3.626 0 01-2.388 5.151l.039-.008c-1.248.282-2.078-.194-2.682-1.595a.758.758 0 00-.997-.393.757.757 0 00-.4.994c.612 1.416 1.538 2.273 2.715 2.513a3.624 3.624 0 01-6.506-1.995l-.005-.192v-4.585l1.71.001c.125.473.41.91.859 1.297a.645.645 0 10.842-.977c-.612-.528-.65-1.102-.074-1.97a.645.645 0 10-1.075-.714 4.15 4.15 0 00-.446.863l-.07.21H20.17V11.268l.012.007a3.624 3.624 0 013.61-3.33zm-9.061 0a3.624 3.624 0 013.61 3.33l.012-.007v3.419h-.036c-2.154.114-3.443-.631-4.028-2.29l-.064-.197a.645.645 0 00-1.234.38c.71 2.312 2.47 3.466 5.118 3.405l.244-.01v11.217a3.624 3.624 0 01-6.635 2.014 2.882 2.882 0 012.59-4.147.645.645 0 100-1.29c-.476 0-.933.08-1.358.226.217-.696.299-1.311.242-1.85a.645.645 0 00-1.283.135c.075.708-.248 1.777-.997 3.171a.622.622 0 00-.057.148 4.148 4.148 0 00-.71 2.083l-.004.088v-.014a3.626 3.626 0 01-2.012-5.039 3.622 3.622 0 01-2.06-3.889 2.967 2.967 0 015.332-1.114c-.323.3-.567.704-.72 1.213a.645.645 0 101.235.373c.233-.774.742-1.043 1.769-.87a.645.645 0 10.215-1.272 3.995 3.995 0 00-1.126-.042l-.202.03-.088-.135a4.254 4.254 0 00-4.627-1.695 3.63 3.63 0 013.318-4.518h.015l.046-.186a3.624 3.624 0 013.495-2.667z"
        />
      </g>
    </svg>
  );
}

export default SvgTheory;
