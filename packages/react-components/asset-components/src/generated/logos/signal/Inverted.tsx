import * as React from 'react';
interface SVGRProps {
  svgRef?: React.Ref<SVGSVGElement>;
}

function SvgInverted({
  svgRef,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={238} height={28} ref={svgRef} {...props}>
      <defs>
        <linearGradient
          id="inverted_svg__a"
          x1="1.505%"
          x2="83.857%"
          y1="55.692%"
          y2="45.381%"
        >
          <stop offset="0%" stopColor="#37BBAB" />
          <stop offset="100%" stopColor="#75C97E" />
        </linearGradient>
      </defs>
      <g fill="none">
        <path
          d="M12.838 4.51c-.102.204-.22.348-.355.432a.894.894 0 0 1-.481.125c-.186 0-.395-.072-.628-.216-.27-.166-.544-.326-.822-.48a6.715 6.715 0 0 0-1.108-.481c-.423-.144-.922-.216-1.499-.216-.52 0-.973.062-1.359.188-.385.125-.71.3-.975.522-.265.224-.463.49-.593.802-.13.311-.195.653-.195 1.025 0 .473.132.868.397 1.184.265.316.616.586 1.053.809.436.223.934.423 1.491.6a73.01 73.01 0 0 1 1.708.564c.58.2 1.15.432 1.707.697.558.265 1.055.6 1.492 1.003.436.405.787.9 1.052 1.485.265.585.397 1.296.397 2.133a6.93 6.93 0 0 1-.467 2.557 5.901 5.901 0 0 1-1.366 2.077c-.599.59-1.33 1.055-2.195 1.394-.864.34-1.854.509-2.97.509a9.574 9.574 0 0 1-1.895-.188 9.98 9.98 0 0 1-1.791-.537 9.353 9.353 0 0 1-1.603-.836 7.888 7.888 0 0 1-1.331-1.087l1.087-1.799c.102-.13.225-.239.37-.327a.902.902 0 0 1 .48-.133c.233 0 .484.096.753.286.27.19.588.402.955.634.367.233.8.444 1.296.635.497.19 1.094.285 1.791.285 1.07 0 1.896-.253 2.482-.76.585-.506.878-1.233.878-2.18 0-.53-.133-.963-.397-1.297a3.207 3.207 0 0 0-1.053-.843 7.858 7.858 0 0 0-1.491-.579 49.455 49.455 0 0 1-1.701-.516c-.58-.187-1.148-.41-1.7-.669a5.51 5.51 0 0 1-1.492-1.017 4.63 4.63 0 0 1-1.052-1.568c-.265-.628-.398-1.401-.398-2.321 0-.734.147-1.45.44-2.147a5.5 5.5 0 0 1 1.282-1.854c.562-.539 1.252-.971 2.07-1.296C5.92.784 6.853.621 7.904.621c1.189 0 2.286.186 3.29.557 1.003.372 1.858.893 2.564 1.562l-.92 1.77zm8.409 2.188V21h-3.443V6.698h3.443zm.516-4.167c0 .297-.06.576-.182.836a2.278 2.278 0 0 1-1.184 1.15 2.16 2.16 0 0 1-.865.174 2.08 2.08 0 0 1-.843-.174 2.234 2.234 0 0 1-1.157-1.15 2.028 2.028 0 0 1-.174-.836A2.212 2.212 0 0 1 17.999.97c.195-.196.425-.351.69-.468a2.08 2.08 0 0 1 .843-.174c.307 0 .595.058.865.174.269.117.504.272.703.467.2.196.36.428.481.697.121.27.182.558.182.865zm9.105 3.916c.614 0 1.19.063 1.729.189a5.89 5.89 0 0 1 1.477.55h4.112V8.47c0 .213-.055.38-.167.501-.111.121-.302.205-.571.251l-1.283.237c.198.516.297 1.064.293 1.617 0 .707-.142 1.345-.425 1.917a4.296 4.296 0 0 1-1.171 1.457c-.497.4-1.087.708-1.77.927-.72.224-1.47.334-2.224.327a8.012 8.012 0 0 1-1.575-.153c-.446.27-.669.571-.669.906 0 .288.133.5.397.634.265.135.614.23 1.046.286.432.056.922.09 1.47.104.549.014 1.11.044 1.687.091.567.045 1.13.127 1.687.244.548.116 1.038.3 1.47.55.432.251.78.593 1.046 1.025.265.432.397.987.397 1.666 0 .632-.156 1.245-.467 1.84-.311.594-.762 1.124-1.352 1.589-.59.464-1.313.838-2.168 1.122-.855.283-1.83.425-2.927.425-1.087 0-2.03-.104-2.83-.314-.799-.209-1.46-.487-1.986-.836-.525-.348-.917-.75-1.178-1.206a2.826 2.826 0 0 1-.39-1.421c0-.67.204-1.232.613-1.687.41-.455.976-.818 1.7-1.087a2.372 2.372 0 0 1-.85-.781c-.213-.325-.32-.748-.32-1.268 0-.214.037-.435.112-.663.074-.227.188-.453.341-.676a3.33 3.33 0 0 1 .579-.634c.232-.2.506-.379.822-.536a4.512 4.512 0 0 1-1.708-1.562c-.413-.65-.62-1.412-.62-2.286 0-.706.142-1.345.425-1.916.282-.57.687-1.07 1.185-1.464a5.404 5.404 0 0 1 1.798-.927 7.647 7.647 0 0 1 2.265-.32v-.002zm3.778 15.194c0-.279-.084-.506-.251-.683a1.649 1.649 0 0 0-.683-.411 5.052 5.052 0 0 0-1.01-.216 18.638 18.638 0 0 0-1.227-.105l-1.338-.07a16.7 16.7 0 0 1-1.332-.118c-.39.214-.704.467-.94.76a1.56 1.56 0 0 0-.356 1.01c0 .251.063.486.188.704.126.219.325.407.6.565.274.158.63.281 1.066.37.437.088.971.132 1.603.132.641 0 1.194-.049 1.659-.147.464-.097.848-.232 1.15-.404.302-.172.522-.376.662-.613s.209-.495.209-.774zm-3.778-8.14c.428 0 .8-.058 1.115-.175a2.19 2.19 0 0 0 .788-.48c.21-.205.367-.451.474-.74.107-.287.16-.603.16-.947 0-.706-.211-1.266-.634-1.68-.423-.413-1.057-.62-1.903-.62-.845 0-1.48.207-1.902.62-.423.414-.635.974-.635 1.68 0 .334.054.646.16.934.108.288.266.537.475.746.209.209.474.371.794.487.32.117.69.175 1.108.175zM41.131 21V6.698h2.105c.446 0 .739.21.878.628l.237 1.129c.288-.298.592-.567.913-.809.32-.241.66-.45 1.018-.627.366-.18.752-.315 1.15-.404.408-.093.855-.14 1.338-.14.78 0 1.473.133 2.077.398.583.25 1.101.631 1.512 1.115a4.9 4.9 0 0 1 .92 1.714c.21.665.314 1.397.314 2.196V21H50.15v-9.102c0-.874-.202-1.55-.607-2.028-.404-.479-1.01-.718-1.819-.718-.594 0-1.152.134-1.672.404s-1.013.636-1.478 1.101V21h-3.443zm27.84 0h-1.547c-.325 0-.58-.049-.767-.146-.186-.098-.325-.295-.418-.593l-.307-1.017c-.362.325-.717.61-1.066.857-.34.24-.7.449-1.08.62a5.51 5.51 0 0 1-1.185.377c-.46.087-.926.13-1.394.125a5.491 5.491 0 0 1-1.673-.244 3.606 3.606 0 0 1-1.317-.732 3.323 3.323 0 0 1-.857-1.212c-.205-.484-.307-1.046-.307-1.687 0-.54.142-1.071.425-1.596.284-.525.755-1 1.415-1.422.66-.423 1.538-.774 2.635-1.052 1.096-.28 2.458-.437 4.084-.474v-.837c0-.957-.202-1.665-.607-2.125-.404-.46-.992-.69-1.763-.69-.557 0-1.022.065-1.394.195-.371.13-.694.276-.969.439-.274.163-.527.309-.76.439a1.54 1.54 0 0 1-.766.195.996.996 0 0 1-.6-.181 1.426 1.426 0 0 1-.404-.446l-.627-1.101c1.645-1.506 3.63-2.258 5.952-2.258.837 0 1.582.137 2.238.41.655.275 1.21.656 1.665 1.144.465.504.82 1.1 1.039 1.75.237.678.355 1.42.355 2.23V21zm-6.69-2.147c.352 0 .678-.032.975-.097.297-.065.579-.163.843-.293.265-.13.52-.29.767-.48a6.96 6.96 0 0 0 .746-.677v-2.411c-1.004.046-1.842.132-2.516.258-.674.125-1.215.285-1.624.48-.409.196-.7.423-.871.683-.172.26-.258.544-.258.85 0 .605.179 1.037.536 1.297.358.26.825.39 1.401.39h.001zM76.807.286V21h-3.443V.286h3.443z"
          fill="url(#inverted_svg__a)"
          transform="translate(145 1)"
        />
        <path
          fill="#FFF"
          d="M17.933 11.922c0 1.478-.246 2.834-.739 4.07a9.35 9.35 0 0 1-2.077 3.192c-.892.892-1.965 1.585-3.22 2.077-1.254.493-2.643.739-4.167.739H.035V1.844H7.73c1.524 0 2.913.248 4.167.746 1.255.497 2.328 1.19 3.22 2.077a9.264 9.264 0 0 1 2.077 3.185c.493 1.236.74 2.592.74 4.07h-.001zm-3.833 0c0-1.106-.149-2.098-.446-2.976-.298-.878-.72-1.622-1.269-2.23a5.469 5.469 0 0 0-2-1.401c-.785-.325-1.67-.488-2.655-.488H3.813v14.19H7.73c.985 0 1.87-.163 2.655-.488a5.469 5.469 0 0 0 2-1.4c.549-.61.971-1.353 1.269-2.231.297-.878.446-1.87.446-2.976zM32.67 22h-1.547c-.325 0-.58-.049-.767-.146-.185-.098-.325-.295-.418-.593l-.306-1.017c-.363.325-.718.61-1.067.857-.34.24-.7.449-1.08.62a5.51 5.51 0 0 1-1.185.377c-.46.087-.926.13-1.394.125a5.491 5.491 0 0 1-1.673-.244 3.606 3.606 0 0 1-1.317-.732 3.323 3.323 0 0 1-.857-1.212c-.205-.484-.307-1.046-.307-1.687 0-.54.142-1.071.425-1.596.284-.525.755-1 1.415-1.422.66-.423 1.538-.774 2.635-1.052 1.096-.28 2.458-.437 4.084-.474v-.837c0-.957-.202-1.665-.606-2.125-.405-.46-.992-.69-1.764-.69-.557 0-1.022.065-1.394.195a5.37 5.37 0 0 0-.968.439c-.275.163-.528.309-.76.439-.232.13-.488.195-.767.195a.996.996 0 0 1-.6-.181 1.426 1.426 0 0 1-.403-.446l-.628-1.101c1.645-1.506 3.63-2.258 5.952-2.258.837 0 1.582.137 2.238.41.655.275 1.21.656 1.665 1.144.465.504.82 1.1 1.039 1.75.237.678.355 1.42.355 2.23V22zm-6.69-2.147c.353 0 .678-.032.975-.097.298-.065.579-.163.844-.293.264-.13.52-.29.766-.48a6.96 6.96 0 0 0 .746-.677v-2.411c-1.004.046-1.842.132-2.516.258-.674.125-1.215.285-1.624.48-.409.196-.7.423-.871.683-.172.26-.258.544-.258.85 0 .605.179 1.037.537 1.297.357.26.824.39 1.4.39h.001zm15.56 2.37c-1.237 0-2.19-.35-2.858-1.052-.67-.702-1.004-1.67-1.004-2.907v-7.987h-1.45a.696.696 0 0 1-.48-.181c-.135-.12-.203-.302-.203-.544V8.186l2.3-.376.725-3.903a.69.69 0 0 1 .258-.432.818.818 0 0 1 .509-.154h1.784v4.503h3.763v2.453h-3.763v7.75c0 .446.111.795.334 1.046.223.25.52.376.893.376.213 0 .392-.025.536-.077.144-.05.27-.104.377-.16a4.88 4.88 0 0 0 .285-.16.478.478 0 0 1 .251-.077c.102 0 .186.026.251.077.065.051.135.128.21.23l1.03 1.673a5.212 5.212 0 0 1-1.728.947 6.421 6.421 0 0 1-2.02.321zM59.621 22h-1.548c-.325 0-.58-.049-.766-.146-.186-.098-.325-.295-.418-.593l-.307-1.017c-.362.325-.718.61-1.066.857-.34.24-.7.449-1.08.62a5.51 5.51 0 0 1-1.185.377c-.46.087-.926.13-1.394.125a5.491 5.491 0 0 1-1.673-.244 3.606 3.606 0 0 1-1.317-.732 3.323 3.323 0 0 1-.858-1.212c-.204-.484-.306-1.046-.306-1.687 0-.54.141-1.071.425-1.596.283-.525.755-1 1.415-1.422.66-.423 1.538-.774 2.634-1.052 1.097-.28 2.458-.437 4.084-.474v-.837c0-.957-.202-1.665-.606-2.125-.404-.46-.992-.69-1.763-.69-.558 0-1.022.065-1.394.195-.372.13-.695.276-.969.439-.274.163-.527.309-.76.439-.232.13-.488.195-.766.195a.996.996 0 0 1-.6-.181 1.426 1.426 0 0 1-.404-.446l-.627-1.101c1.645-1.506 3.629-2.258 5.952-2.258.836 0 1.582.137 2.237.41.655.275 1.21.656 1.666 1.144.465.504.818 1.1 1.038 1.75.237.678.356 1.42.356 2.23V22zm-6.691-2.147c.353 0 .678-.032.976-.097.297-.065.578-.163.843-.293.265-.13.52-.29.767-.48a6.96 6.96 0 0 0 .745-.677v-2.411c-1.003.046-1.842.132-2.516.258-.673.125-1.215.285-1.624.48-.408.196-.699.423-.87.683-.173.26-.259.544-.259.85 0 .605.18 1.037.537 1.297.358.26.825.39 1.4.39h.001zm24.913-2.606c.204 0 .38.079.53.237l1.477 1.603a8.115 8.115 0 0 1-3.018 2.328c-1.194.539-2.627.808-4.3.808-1.496 0-2.841-.256-4.035-.767a8.894 8.894 0 0 1-3.06-2.132c-.846-.911-1.494-1.998-1.945-3.262-.45-1.264-.676-2.644-.676-4.14 0-1.515.251-2.902.753-4.16a9.535 9.535 0 0 1 2.119-3.256c.91-.91 2-1.619 3.268-2.125 1.269-.507 2.67-.76 4.203-.76 1.496 0 2.804.24 3.924.718s2.08 1.113 2.878 1.902l-1.254 1.743c-.074.111-.17.209-.286.293-.116.083-.276.125-.48.125-.214 0-.433-.084-.656-.25a6.931 6.931 0 0 0-2.153-1.088c-.525-.167-1.192-.251-2-.251-.949 0-1.82.165-2.614.495-.778.318-1.477.8-2.05 1.415-.57.613-1.017 1.359-1.338 2.237-.32.878-.48 1.865-.48 2.962 0 1.134.16 2.142.48 3.025.321.883.755 1.626 1.304 2.23a5.565 5.565 0 0 0 1.937 1.387 5.99 5.99 0 0 0 2.398.48c.511 0 .973-.027 1.387-.083a5.89 5.89 0 0 0 1.143-.265c.348-.12.678-.276.99-.467.31-.19.62-.425.926-.703.093-.084.191-.151.293-.203a.737.737 0 0 1 .335-.076zM94.477 22h-1.548c-.325 0-.58-.049-.766-.146-.186-.098-.325-.295-.418-.593l-.307-1.017c-.362.325-.718.61-1.066.857-.34.24-.7.449-1.08.62a5.51 5.51 0 0 1-1.186.377c-.46.087-.926.13-1.393.125a5.491 5.491 0 0 1-1.673-.244 3.606 3.606 0 0 1-1.317-.732 3.323 3.323 0 0 1-.858-1.212c-.204-.484-.306-1.046-.306-1.687 0-.54.141-1.071.425-1.596.283-.525.755-1 1.415-1.422.66-.423 1.538-.774 2.634-1.052 1.097-.28 2.458-.437 4.084-.474v-.837c0-.957-.202-1.665-.606-2.125-.404-.46-.992-.69-1.763-.69-.558 0-1.023.065-1.394.195-.372.13-.695.276-.969.439-.274.163-.527.309-.76.439-.232.13-.488.195-.766.195a.996.996 0 0 1-.6-.181 1.426 1.426 0 0 1-.404-.446l-.627-1.101c1.645-1.506 3.629-2.258 5.952-2.258.836 0 1.582.137 2.237.41.655.275 1.21.656 1.666 1.144.465.504.818 1.1 1.038 1.75.237.678.356 1.42.356 2.23V22zm-6.691-2.147c.353 0 .678-.032.976-.097.297-.065.578-.163.843-.293.265-.13.52-.29.767-.48a6.96 6.96 0 0 0 .745-.677v-2.411c-1.003.046-1.842.132-2.516.258-.673.125-1.215.285-1.624.48-.408.196-.699.423-.87.683-.173.26-.259.544-.259.85 0 .605.18 1.037.537 1.297.358.26.825.39 1.4.39h.001zM98.648 22V7.698h2.105c.446 0 .739.21.878.628l.223 1.059c.25-.279.513-.534.788-.767.27-.23.565-.43.878-.599a4.468 4.468 0 0 1 2.181-.544c.902 0 1.643.244 2.224.732.58.488 1.015 1.136 1.303 1.945.223-.474.502-.88.836-1.22a4.58 4.58 0 0 1 1.101-.83 5.09 5.09 0 0 1 1.276-.473c.45-.103.904-.154 1.359-.154.79 0 1.491.121 2.105.363a4.028 4.028 0 0 1 1.547 1.06c.418.464.736 1.03.955 1.7.218.669.327 1.435.327 2.3V22h-3.443v-9.102c0-.911-.2-1.596-.599-2.056-.4-.46-.985-.69-1.756-.69-.353 0-.681.06-.983.18a2.363 2.363 0 0 0-.795.524c-.238.244-.42.536-.536.857-.13.344-.195.739-.195 1.185V22h-3.457v-9.102c0-.957-.193-1.654-.579-2.091-.385-.437-.955-.655-1.707-.655-.493 0-.955.123-1.387.37a4.672 4.672 0 0 0-1.206 1.01V22h-3.443zm24.258 4.67V7.698h2.105c.223 0 .413.051.571.154.158.102.26.26.307.474l.278 1.324a7.219 7.219 0 0 1 1.987-1.603c.748-.409 1.624-.613 2.627-.613.78 0 1.494.162 2.14.487.66.336 1.232.82 1.673 1.415.469.618.831 1.38 1.087 2.286.256.906.383 1.945.383 3.116 0 1.068-.144 2.058-.432 2.969-.288.91-.7 1.7-1.233 2.37a5.7 5.7 0 0 1-1.938 1.568c-.757.376-1.605.564-2.544.564-.808 0-1.494-.123-2.056-.37a5.033 5.033 0 0 1-1.512-1.024v5.855h-3.443zm6.69-16.518c-.715 0-1.326.15-1.833.453-.506.302-.978.727-1.414 1.275v6.412c.39.483.815.82 1.275 1.01.46.191.955.287 1.485.287.52 0 .992-.098 1.414-.293a2.752 2.752 0 0 0 1.074-.892c.293-.4.518-.904.676-1.513.158-.608.237-1.326.237-2.153 0-.837-.068-1.545-.202-2.126-.135-.58-.328-1.052-.579-1.415a2.285 2.285 0 0 0-.913-.794 2.847 2.847 0 0 0-1.22-.251zm102.833-8.517h-1.31v3.69h-.809v-3.69H229V.97h3.429v.665zm5.283-.665v4.356H237V2.512c0-.112.006-.234.018-.365l-1.313 2.474a.304.304 0 0 1-.286.177h-.114a.304.304 0 0 1-.286-.177l-1.328-2.483.015.196c.004.065.006.124.006.178v2.814H233V.97h.61c.036 0 .067 0 .093.003a.24.24 0 0 1 .07.015c.022.008.04.02.058.039a.32.32 0 0 1 .05.072l1.3 2.42c.035.063.066.13.095.198.03.068.058.139.086.21a4.81 4.81 0 0 1 .087-.215c.03-.069.062-.136.096-.2l1.283-2.413a.304.304 0 0 1 .052-.072.167.167 0 0 1 .058-.04.251.251 0 0 1 .07-.014c.027-.002.058-.003.094-.003h.61z"
        />
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
  <SvgInverted svgRef={ref} {...props} />
));
export default ForwardRef;