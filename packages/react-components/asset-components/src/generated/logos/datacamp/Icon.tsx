import * as React from 'react';

function SvgIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 34 36" {...props}>
      <defs>
        <path
          id="icon_svg__a"
          d="M16.985 35.973c-.193 0-.384-.05-.556-.142L2.805 28.378a1.151 1.151 0 0 1-.59-.886L.008 6.746a1.146 1.146 0 0 1 .766-1.207L16.433.065c.246-.085.512-.085.758 0l16.001 5.47c.513.18.831.69.767 1.227l-2.54 20.748a1.15 1.15 0 0 1-.578.862l-13.288 7.454a1.16 1.16 0 0 1-.567.147z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="icon_svg__b" fill="#fff">
          <use xlinkHref="#icon_svg__a" />
        </mask>
        <use fill="#3AC" xlinkHref="#icon_svg__a" />
        <g fill="#3AC" mask="url(#icon_svg__b)">
          <path d="M0 0h34v36H0z" />
        </g>
        <path
          fill="#FFF"
          d="M14.232 6.459c.027-.01 2.698-1.025 5.008.093l.076.038-.278.624c1.49.33 2.6.872 3.011 1.126.933.573 2.173 1.484 2.291 2.346.117.863-1.01.429-1.01.429.7 1.675.738 2.873.428 4.148-.312 1.273 1.435 2.587 1.398 3.512-.116.429-.931.586-.931.586s-.193.216.077.666c.272.449.35.449-.155.918.39.333.39.608-.193.87.014.926.203 1.754-.99 1.824-1.195.069-2.708-.722-3.101 1.407-.393 2.127-.291 1.332-.41 1.866h-8.43c1.05-2.852 1.946-5.998 0-7.542-1.944-1.543-5.128-8.032 1.15-11.353a9.286 9.286 0 0 1 2.24-.832l-.263-.695zm4.52.829c-1.327-.493-2.546-.5-4.207-.025l.785 2.07h-.016c-1.1.352-1.921 1.33-2.011 1.44l-1.088-.766c-.6.782-1.028 2.197-1.028 3.284H9.799c.012.982.192 2.688 1.37 4.104l1.036-.782c.947 1.373 2.927 2.37 4.585 2.201l-.025-2.857h.022v.038c.416.12 1.28-.139 1.66-.433l.787 1.036c.825-.277 1.467-1.854 1.532-2.025l1.249.423a6.448 6.448 0 0 0 .033-3.516l.003.01.447-.158A4.976 4.976 0 0 0 20.475 8.5l-.217-.138-.294.403c-.364-.37-1.246-.763-1.308-.79l.235-.616-.02-.017a.454.454 0 0 0-.118-.054zm-2.045 3.933l.133.007a1.383 1.383 0 0 1 1.253 1.372 1.38 1.38 0 0 1-.857 1.276 1.396 1.396 0 0 1-1.512-.298 1.378 1.378 0 0 1 .983-2.357z"
          mask="url(#icon_svg__b)"
        />
      </g>
    </svg>
  );
}

export default SvgIcon;
