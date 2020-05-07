import * as React from 'react';

function SvgOther(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={192} height={192} {...props}>
      <defs>
        <linearGradient id="other_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#D4E4F1" />
          <stop offset="100%" stopColor="#B5CFDD" />
        </linearGradient>
        <linearGradient
          id="other_svg__b"
          x1="50%"
          x2="50%"
          y1="4.721%"
          y2="97.676%"
        >
          <stop offset="0%" stopColor="#C7DBE8" />
          <stop offset="100%" stopColor="#96B5C7" />
        </linearGradient>
        <linearGradient id="other_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FBDE7B" />
          <stop offset="100%" stopColor="#F6AF67" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd" transform="translate(6 72)">
        <circle cx={24} cy={24} r={24} fill="url(#other_svg__a)" />
        <circle cx={90} cy={24} r={24} fill="url(#other_svg__b)" />
        <circle cx={157} cy={24} r={24} fill="url(#other_svg__c)" />
      </g>
    </svg>
  );
}

export default SvgOther;
