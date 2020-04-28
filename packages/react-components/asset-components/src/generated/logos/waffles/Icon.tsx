import * as React from 'react';
interface SVGRProps {
  svgRef?: React.Ref<SVGSVGElement>;
}

function SvgIcon({
  svgRef,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={34} height={34} ref={svgRef} {...props}>
      <g transform="translate(-8 -8)" fill="none">
        <circle cx={25} cy={25} r={17} fill="#FFF" />
        <path
          fill="#3AC"
          d="M32.75 27.579l6.336 6.335a1.7 1.7 0 0 0 .26.214 17.028 17.028 0 0 1-2.325 2.893 17.06 17.06 0 0 1-2.894 2.325 1.644 1.644 0 0 0-.213-.26l-6.336-6.336 5.171-5.171zm-8 8l5.571 5.57a17.071 17.071 0 0 1-11.014-.126l5.443-5.445zm16.273-16.272a17.071 17.071 0 0 1 .127 11.014l-5.572-5.57zM10.477 33.844l.084-.076 6.188-6.19 5.172 5.172-6.189 6.19a1.75 1.75 0 0 0-.173.2 17.025 17.025 0 0 1-2.58-2.12 17.043 17.043 0 0 1-2.502-3.176zM24.75 19.58l5.172 5.171-5.171 5.171-5.172-5.171 5.171-5.171zm9.1-9.1a17.076 17.076 0 0 1 3.172 2.5c.8.8 1.502 1.658 2.109 2.563l-6.38 6.38-5.173-5.172zm-25 9.2l5.071 5.07-5.19 5.192a17.075 17.075 0 0 1 .12-10.262zm4.13-6.7a17.06 17.06 0 0 1 2.893-2.325c.06.092.132.18.213.26l5.835 5.836-5.172 5.171-5.835-5.835a1.745 1.745 0 0 0-.26-.214 17.028 17.028 0 0 1 2.325-2.893zm6.699-4.129a17.075 17.075 0 0 1 10.262-.12l-5.192 5.192z"
        />
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
  <SvgIcon svgRef={ref} {...props} />
));
export default ForwardRef;