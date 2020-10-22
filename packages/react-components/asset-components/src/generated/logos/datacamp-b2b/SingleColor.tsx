import * as React from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgSingleColor({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      width={169}
      height={40}
      role="img"
      aria-labelledby={titleId}
      {...props}
    >
      {title === undefined ? (
        <title id={titleId}>{'DataCamp for Business'}</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <defs>
        <path
          id="single-color_svg__a"
          d="M18.726.071l17.43 6.082c.559.2.905.768.835 1.365l-2.767 23.07a1.28 1.28 0 01-.63.96l-14.473 8.288a1.244 1.244 0 01-.618.164c-.212 0-.42-.055-.607-.157l-14.84-8.289a1.282 1.282 0 01-.642-.985L.007 7.499a1.277 1.277 0 01.835-1.341L17.901.07a1.23 1.23 0 01.825 0zm-.406 2.014L2.073 7.886l2.303 22.072 14.126 7.888 13.772-7.885L34.92 7.887l-16.6-5.802zm2.421 5.098l.217.101.083.042-.303.694c1.622.367 2.832.97 3.28 1.252 1.016.638 2.367 1.65 2.496 2.61.127.958-1.1.476-1.1.476.717 1.753.796 3.037.52 4.363l-.055.25c-.34 1.415 1.564 2.877 1.523 3.905-.126.476-1.014.651-1.014.651s-.21.24.085.74.38.5-.17 1.022c.424.37.424.676-.21.967.015 1.03.22 1.951-1.079 2.029-1.3.076-2.95-.803-3.377 1.564-.414 2.29-.324 1.535-.434 2.022l-.012.053h-9.183c1.142-3.17 2.12-6.67 0-8.386-2.118-1.717-5.587-8.932 1.251-12.625a9.972 9.972 0 012.08-.832l.362-.093-.287-.773.09-.035c.028-.011 2.774-1.076 5.237.003zm142.847 1.17a4.362 4.362 0 011.978.45 4.4 4.4 0 011.547 1.3 6.18 6.18 0 011.006 2.101c.249.935.368 1.898.353 2.866a8.972 8.972 0 01-.399 2.729 6.655 6.655 0 01-1.14 2.179 5.268 5.268 0 01-1.792 1.442 5.228 5.228 0 01-2.352.52 4.755 4.755 0 01-1.895-.34 4.665 4.665 0 01-1.405-.939v5.384h-3.183V8.595h1.947a.782.782 0 01.812.577l.257 1.22a6.868 6.868 0 011.842-1.475c.688-.377 1.495-.565 2.424-.565zM112.14 3c1.356 0 2.56.223 3.614.666 1 .41 1.913 1.003 2.691 1.749l-1.16 1.601a1.03 1.03 0 01-.264.268.744.744 0 01-.444.118.855.855 0 01-.4-.11 5.269 5.269 0 01-.451-.269 16.833 16.833 0 00-.568-.351 4.644 4.644 0 00-.747-.352 6.228 6.228 0 00-.986-.269 6.76 6.76 0 00-1.297-.11 5.769 5.769 0 00-2.285.445 4.958 4.958 0 00-1.785 1.28 5.889 5.889 0 00-1.16 2.052 8.528 8.528 0 00-.413 2.763 8.06 8.06 0 00.445 2.78 6.07 6.07 0 001.204 2.051c.499.547 1.11.979 1.792 1.268a5.57 5.57 0 002.217.442c.429.002.857-.025 1.282-.078a5.49 5.49 0 001.06-.244c.32-.11.627-.253.917-.428.304-.188.591-.406.856-.648.081-.074.171-.136.27-.185a.658.658 0 01.293-.068l.003.004c.19 0 .372.08.502.218l1.367 1.474a7.493 7.493 0 01-2.79 2.141c-1.102.496-2.427.745-3.977.745-1.383 0-2.628-.236-3.732-.704a8.211 8.211 0 01-2.83-1.964 8.558 8.558 0 01-1.796-3 11.171 11.171 0 01-.625-3.807 10.5 10.5 0 01.67-3.826A8.767 8.767 0 01105.5 5.66a8.563 8.563 0 012.902-1.956 9.73 9.73 0 013.739-.703zM84.403 4.567v4.145h3.537v2.252h-3.537v7.126c0 .41.101.73.303.962.208.234.51.364.826.351.167.005.336-.02.495-.07.122-.04.24-.09.354-.149.098-.051.186-.1.264-.147a.437.437 0 01.236-.07.363.363 0 01.235.07c.074.061.14.132.194.211l.954 1.538a4.834 4.834 0 01-1.597.872 5.972 5.972 0 01-1.87.294c-1.153 0-2.035-.321-2.65-.967-.613-.645-.92-1.536-.921-2.672v-7.35h-1.357a.632.632 0 01-.439-.167.646.646 0 01-.18-.499V9.045l2.123-.352.67-3.59a.71.71 0 01.245-.397.727.727 0 01.464-.14h1.651zM126.11 8.35a5.405 5.405 0 012.074.377 4.406 4.406 0 011.547 1.055 4.5 4.5 0 01.96 1.61c.225.66.336 1.354.328 2.05v8.309h-1.443a1.444 1.444 0 01-.695-.135c-.164-.09-.293-.273-.387-.546l-.283-.95c-.311.281-.639.545-.98.79-.31.22-.643.413-.992.569a5.32 5.32 0 01-1.102.352 6.335 6.335 0 01-1.298.117 5.104 5.104 0 01-1.546-.224 3.4 3.4 0 01-1.224-.673 3.018 3.018 0 01-.8-1.115 3.949 3.949 0 01-.282-1.551c0-.337.057-.673.168-.993a2.86 2.86 0 01.548-.938 4.52 4.52 0 01.985-.845 6.488 6.488 0 011.49-.693c.67-.215 1.357-.376 2.056-.48a20.574 20.574 0 012.681-.223v-.77c0-.88-.188-1.531-.567-1.955-.378-.422-.924-.634-1.636-.634a3.914 3.914 0 00-1.283.18c-.31.106-.611.241-.897.403-.257.15-.493.284-.707.404-.216.123-.46.184-.707.18a.924.924 0 01-.568-.174 1.43 1.43 0 01-.374-.403l-.559-1.015.002-.002c1.522-1.384 3.351-2.077 5.491-2.077zm-30.597 0a5.409 5.409 0 012.076.377 4.406 4.406 0 011.547 1.055 4.51 4.51 0 01.96 1.61c.225.66.335 1.354.328 2.05v8.309H98.98a1.444 1.444 0 01-.695-.135c-.164-.09-.293-.273-.387-.546l-.283-.95c-.311.281-.638.545-.979.79-.31.22-.644.413-.993.569a5.32 5.32 0 01-1.102.352 6.327 6.327 0 01-1.297.117 5.097 5.097 0 01-1.546-.224 3.397 3.397 0 01-1.225-.673 3.025 3.025 0 01-.799-1.115 3.935 3.935 0 01-.283-1.551 2.92 2.92 0 01.716-1.93 4.48 4.48 0 01.986-.846 6.472 6.472 0 011.49-.693 12.99 12.99 0 012.055-.48c.89-.133 1.786-.209 2.684-.226v-.769c0-.88-.188-1.531-.566-1.955-.378-.422-.925-.634-1.637-.634a3.913 3.913 0 00-1.283.18c-.31.106-.61.241-.896.403-.258.149-.494.284-.707.403-.216.121-.46.184-.708.18a.925.925 0 01-.567-.174 1.43 1.43 0 01-.374-.403l-.559-1.012-.002-.002c1.522-1.384 3.351-2.077 5.49-2.077zm-23.199 0a5.409 5.409 0 012.077.377 4.406 4.406 0 011.546 1.055 4.51 4.51 0 01.96 1.61 6.19 6.19 0 01.329 2.05v8.309H75.78a1.444 1.444 0 01-.696-.135c-.163-.09-.292-.273-.387-.546l-.283-.95c-.31.281-.638.545-.98.79-.31.22-.643.413-.992.569a5.32 5.32 0 01-1.103.352 6.34 6.34 0 01-1.297.117 5.097 5.097 0 01-1.547-.224 3.397 3.397 0 01-1.224-.673 3.028 3.028 0 01-.8-1.115 3.935 3.935 0 01-.283-1.551c0-.337.057-.673.168-.993.121-.343.307-.663.548-.938.286-.328.617-.612.985-.845a6.438 6.438 0 011.49-.693 12.99 12.99 0 012.055-.48 20.574 20.574 0 012.682-.223v-.77c0-.88-.189-1.531-.567-1.955-.377-.422-.923-.634-1.637-.634a3.918 3.918 0 00-1.282.18c-.31.106-.611.241-.896.403-.258.15-.494.284-.708.404a1.38 1.38 0 01-.707.18.925.925 0 01-.567-.174 1.441 1.441 0 01-.374-.403l-.557-1.015.002-.002c1.522-1.384 3.351-2.077 5.49-2.077zm76.062.04a5.315 5.315 0 011.948.334 3.749 3.749 0 011.429.973c.4.454.704.988.884 1.565.21.684.313 1.395.302 2.11v8.379h-3.182v-8.374c0-.838-.186-1.468-.557-1.89-.368-.424-.91-.635-1.622-.635a2.404 2.404 0 00-.908.166 2.175 2.175 0 00-.737.48 2.23 2.23 0 00-.496.789 3.11 3.11 0 00-.18 1.09v8.373h-3.195v-8.373c0-.88-.179-1.522-.535-1.923-.357-.403-.88-.604-1.566-.604a2.581 2.581 0 00-1.297.34 4.348 4.348 0 00-1.115.929v9.63h-3.183l-.001-13.156h1.947a.782.782 0 01.812.578l.206.974c.227-.25.47-.485.728-.704a4.532 4.532 0 011.741-.916 4.14 4.14 0 011.089-.135c.834 0 1.519.225 2.056.673a4.052 4.052 0 011.205 1.789 4.01 4.01 0 01.774-1.123 4.21 4.21 0 011.017-.76c.371-.2.769-.346 1.178-.439a5.81 5.81 0 011.258-.14zM55.1 3.21a10.47 10.47 0 013.867.687 8.751 8.751 0 012.98 1.905 8.52 8.52 0 011.92 2.931 9.958 9.958 0 01.682 3.745 9.98 9.98 0 01-.683 3.743 8.43 8.43 0 01-4.898 4.846 10.563 10.563 0 01-3.866.682H48V3.21h7.1zM16.177 7.98l-.333.094.855 2.301h-.018c-1.132.37-1.992 1.361-2.167 1.573l-.023.029-1.186-.852c-.61.811-1.056 2.236-1.113 3.405l-.006.246h-1.512c.012 1.04.19 2.811 1.316 4.337l.176.227 1.129-.869c.99 1.466 3.018 2.546 4.776 2.464l.218-.017-.027-3.177h.025v.043c.415.123 1.24-.11 1.693-.401l.114-.081.857 1.153c.85-.292 1.52-1.873 1.652-2.207l.018-.045 1.36.47a7.314 7.314 0 00.178-3.264l-.063-.324-.077-.31.488-.177A5.53 5.53 0 0022.29 9.44l-.222-.144-.32.449c-.37-.384-1.232-.79-1.4-.868l-.025-.01.256-.686-.022-.018a.49.49 0 00-.129-.061c-1.356-.514-2.608-.552-4.25-.12zm111.736 8.15a17.86 17.86 0 00-2.32.235 6.254 6.254 0 00-1.509.445 1.977 1.977 0 00-.812.63c-.16.23-.246.502-.244.782 0 .556.165.953.496 1.192.331.239.763.358 1.297.358a3.796 3.796 0 001.693-.352 4.999 4.999 0 001.4-1.071v-2.22zm-30.593.002c-.779.027-1.555.105-2.321.234a6.235 6.235 0 00-1.508.442 1.972 1.972 0 00-.813.63c-.16.23-.247.502-.245.781 0 .555.164.953.496 1.192.33.24.763.36 1.297.36a3.82 3.82 0 001.695-.352 5.086 5.086 0 001.399-1.07v-2.217zm-23.202-.002c-.777.028-1.553.106-2.32.235a6.174 6.174 0 00-1.508.442 1.987 1.987 0 00-.813.629c-.16.23-.245.504-.245.783 0 .556.165.954.496 1.192.33.24.763.359 1.296.359a3.774 3.774 0 001.694-.352c.527-.27 1-.632 1.4-1.068v-2.219zm88.371-5.283a3.225 3.225 0 00-1.689.417c-.503.31-.949.708-1.315 1.172l.005 5.9h-.001a3.11 3.11 0 001.18.923c.438.183.91.274 1.385.27a3.05 3.05 0 001.297-.27 2.56 2.56 0 00.986-.82c.295-.42.508-.892.626-1.391.156-.65.23-1.314.22-1.98a8.77 8.77 0 00-.187-1.956 3.769 3.769 0 00-.535-1.3 2.108 2.108 0 00-.843-.73 2.648 2.648 0 00-1.129-.235zM55.103 5.95H51.48v13.052h3.622a6.359 6.359 0 002.454-.45 5.13 5.13 0 001.857-1.288c.53-.594.93-1.293 1.173-2.05a8.59 8.59 0 00.405-2.735 8.576 8.576 0 00-.406-2.738 5.681 5.681 0 00-1.173-2.05A5.125 5.125 0 0057.557 6.4a6.424 6.424 0 00-2.454-.45zm-36.906 6.525l.139.007c.769.07 1.373.727 1.373 1.526 0 .623-.369 1.183-.934 1.42a1.498 1.498 0 01-1.647-.332 1.556 1.556 0 01-.328-1.675 1.515 1.515 0 011.397-.946zm35.568 16.621V30.4h-4.052v2.606h3.42v1.309h-3.42v3.587H48v-8.806h5.765zM67.03 33.5a4.71 4.71 0 01-.335 1.793 4.232 4.232 0 01-.941 1.428 4.278 4.278 0 01-1.46.941 5.09 5.09 0 01-1.89.338 5.116 5.116 0 01-1.894-.338 4.306 4.306 0 01-1.466-.94 4.209 4.209 0 01-.945-1.429 4.722 4.722 0 01-.335-1.793c0-.645.112-1.243.335-1.793a4.2 4.2 0 01.945-1.428 4.306 4.306 0 011.466-.941A5.116 5.116 0 0162.405 29a5.05 5.05 0 011.89.341 4.34 4.34 0 011.46.94c.404.4.718.876.941 1.426a4.71 4.71 0 01.335 1.793zm-1.744 0a3.93 3.93 0 00-.2-1.3 2.725 2.725 0 00-.571-.977 2.465 2.465 0 00-.907-.615 3.226 3.226 0 00-1.204-.214c-.447 0-.85.071-1.208.214a2.489 2.489 0 00-.913.615c-.25.268-.444.593-.578.977a3.905 3.905 0 00-.203 1.3c0 .483.068.916.203 1.3.134.384.327.708.578.974.25.266.555.47.913.612.358.142.76.213 1.208.213.446 0 .848-.07 1.204-.213.356-.142.658-.346.907-.612.248-.266.439-.59.572-.974.133-.384.199-.817.199-1.3zm8.008.962v3.44h-1.7v-8.805h2.787c.624 0 1.158.062 1.602.186.445.124.81.298 1.094.52.284.224.493.491.626.802.132.31.199.652.199 1.026 0 .296-.046.576-.136.84-.09.264-.222.503-.392.718-.17.216-.382.404-.632.567a3.37 3.37 0 01-.857.39c.215.117.4.286.556.505l2.289 3.252H77.2a.77.77 0 01-.376-.086.757.757 0 01-.262-.243l-1.922-2.82a.663.663 0 00-.237-.225.858.858 0 00-.382-.067h-.727zm0-1.175h1.062c.32 0 .599-.039.837-.116.238-.077.434-.184.588-.32.154-.136.269-.297.344-.484a1.62 1.62 0 00.114-.615c0-.446-.153-.79-.458-1.029-.306-.24-.772-.359-1.4-.359h-1.087v2.923zm15.295 4.616v-8.806h3.154c.598 0 1.11.055 1.533.165.423.11.77.266 1.043.469.271.203.47.448.597.737.126.288.19.613.19.974 0 .207-.032.405-.095.594a1.698 1.698 0 01-.294.53 2.173 2.173 0 01-.506.447 3.107 3.107 0 01-.73.34c1.256.273 1.884.926 1.884 1.962 0 .373-.074.718-.222 1.035-.147.316-.362.59-.644.819-.283.23-.63.409-1.043.539-.413.13-.885.195-1.416.195h-3.45zm1.7-3.861v2.582h1.726c.316 0 .58-.037.793-.11.213-.073.383-.17.512-.292.128-.122.221-.264.278-.426.057-.163.085-.335.085-.518 0-.19-.031-.362-.094-.514a.968.968 0 00-.298-.39 1.41 1.41 0 00-.518-.247 2.972 2.972 0 00-.765-.085H90.29zm0-1.133h1.359c.577 0 1.016-.101 1.315-.304.299-.203.449-.526.449-.968 0-.46-.135-.786-.405-.98-.27-.196-.691-.293-1.264-.293H90.29v2.545zm13.38 3.672c.33 0 .623-.053.882-.158.26-.106.479-.254.658-.445.179-.19.316-.422.41-.694.095-.272.143-.576.143-.913v-5.274h1.7v5.274c0 .523-.087 1.008-.262 1.452a3.269 3.269 0 01-.756 1.151 3.46 3.46 0 01-1.194.755c-.468.18-.995.271-1.58.271-.586 0-1.113-.09-1.58-.271a3.426 3.426 0 01-1.192-.755 3.29 3.29 0 01-.752-1.15 3.932 3.932 0 01-.263-1.453v-5.274h1.7v5.268c0 .337.048.641.143.913.095.272.23.504.408.697.177.193.395.342.654.448.259.105.553.158.882.158zm13.59-5.882a.456.456 0 01-.161.189.417.417 0 01-.219.054.569.569 0 01-.284-.094 9.748 9.748 0 00-.373-.21 3.106 3.106 0 00-.502-.21 2.186 2.186 0 00-.68-.094 2.06 2.06 0 00-.616.082c-.175.055-.323.13-.443.228a.916.916 0 00-.268.35 1.113 1.113 0 00-.089.448c0 .207.06.38.18.517.12.138.28.256.478.354.198.097.423.184.676.261.253.078.51.16.774.247s.522.189.775.305c.252.115.478.261.676.438.198.177.357.393.477.648.12.256.18.567.18.932 0 .398-.07.77-.212 1.118-.14.347-.347.649-.619.907s-.604.46-.995.609a3.79 3.79 0 01-1.347.222 4.655 4.655 0 01-1.672-.317 4.3 4.3 0 01-.727-.365 3.553 3.553 0 01-.603-.475l.493-.785a.622.622 0 01.167-.144.42.42 0 01.218-.057c.106 0 .22.041.342.124.122.084.266.176.433.277.166.102.362.194.587.278.226.083.497.124.813.124.484 0 .86-.11 1.125-.332.265-.22.398-.538.398-.952 0-.232-.06-.42-.18-.567a1.446 1.446 0 00-.477-.368 3.646 3.646 0 00-.677-.253c-.252-.069-.51-.144-.77-.225a6.803 6.803 0 01-.772-.292 2.504 2.504 0 01-.676-.445 2.02 2.02 0 01-.478-.685c-.12-.274-.18-.612-.18-1.014a2.4 2.4 0 01.78-1.748 2.91 2.91 0 01.94-.566 3.53 3.53 0 011.27-.213c.54 0 1.037.081 1.492.244.455.162.843.39 1.163.682l-.417.773zm6.965 7.204h-1.707v-8.806h1.707v8.806zm6.111-8.806c.076 0 .14.003.19.01.05.006.096.018.136.036.04.018.079.045.117.08.037.034.08.08.126.136l4.798 5.889a5.846 5.846 0 01-.035-.417 8.23 8.23 0 01-.01-.381v-5.353h1.498v8.806h-.878a.805.805 0 01-.335-.061.739.739 0 01-.26-.22l-4.778-5.864a8.142 8.142 0 01.038.737v5.408h-1.498v-8.806h.891zm17.597 0v1.304h-4.052v2.441h3.192v1.26h-3.192v2.491h4.052v1.31h-5.765v-8.806h5.765zm9.537 1.602a.456.456 0 01-.161.189.417.417 0 01-.218.054.569.569 0 01-.285-.094 9.749 9.749 0 00-.372-.21 3.106 3.106 0 00-.503-.21 2.186 2.186 0 00-.68-.094c-.235 0-.44.027-.616.082a1.31 1.31 0 00-.442.228.916.916 0 00-.269.35 1.113 1.113 0 00-.088.448c0 .207.06.38.18.517.12.138.279.256.477.354.198.097.424.184.676.261.253.078.511.16.775.247.263.087.521.189.774.305.253.115.478.261.676.438.198.177.357.393.478.648.12.256.18.567.18.932 0 .398-.07.77-.212 1.118a2.57 2.57 0 01-.62.907c-.271.258-.603.46-.995.609a3.79 3.79 0 01-1.346.222 4.655 4.655 0 01-1.672-.317 4.3 4.3 0 01-.727-.365 3.553 3.553 0 01-.604-.475l.493-.785a.622.622 0 01.168-.144.42.42 0 01.218-.057c.105 0 .219.041.341.124.122.084.267.176.433.277.167.102.362.194.588.278.225.083.496.124.812.124.485 0 .86-.11 1.125-.332.266-.22.398-.538.398-.952 0-.232-.06-.42-.18-.567a1.446 1.446 0 00-.477-.368 3.646 3.646 0 00-.676-.253c-.253-.069-.51-.144-.771-.225a6.803 6.803 0 01-.772-.292 2.504 2.504 0 01-.676-.445 2.02 2.02 0 01-.477-.685c-.12-.274-.18-.612-.18-1.014 0-.32.066-.633.199-.938a2.4 2.4 0 01.581-.81c.255-.235.568-.424.94-.566.37-.142.793-.213 1.27-.213.539 0 1.036.081 1.491.244.455.162.843.39 1.163.682l-.417.773zm9.948 0a.456.456 0 01-.16.189.417.417 0 01-.219.054.569.569 0 01-.284-.094 9.749 9.749 0 00-.373-.21 3.106 3.106 0 00-.503-.21 2.186 2.186 0 00-.68-.094c-.235 0-.44.027-.615.082-.175.055-.323.13-.443.228a.916.916 0 00-.269.35 1.113 1.113 0 00-.088.448c0 .207.06.38.18.517.12.138.28.256.477.354.198.097.424.184.677.261.253.078.51.16.774.247.263.087.521.189.774.305.253.115.479.261.677.438.198.177.357.393.477.648.12.256.18.567.18.932 0 .398-.07.77-.212 1.118-.14.347-.347.649-.62.907-.271.258-.603.46-.995.609a3.79 3.79 0 01-1.346.222 4.655 4.655 0 01-1.672-.317 4.3 4.3 0 01-.727-.365 3.553 3.553 0 01-.604-.475l.494-.785a.622.622 0 01.167-.144.42.42 0 01.218-.057c.105 0 .22.041.341.124.123.084.267.176.433.277.167.102.363.194.588.278.226.083.496.124.812.124.485 0 .86-.11 1.126-.332.265-.22.398-.538.398-.952 0-.232-.06-.42-.18-.567a1.446 1.446 0 00-.478-.368 3.646 3.646 0 00-.676-.253c-.253-.069-.51-.144-.771-.225a6.803 6.803 0 01-.771-.292 2.504 2.504 0 01-.677-.445 2.02 2.02 0 01-.477-.685c-.12-.274-.18-.612-.18-1.014a2.4 2.4 0 01.78-1.748 2.91 2.91 0 01.94-.566 3.53 3.53 0 011.27-.213c.54 0 1.037.081 1.492.244.455.162.842.39 1.163.682l-.418.773z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="single-color_svg__b" fill="#fff">
          <use xlinkHref="#single-color_svg__a" />
        </mask>
        <use fill="#FFF" xlinkHref="#single-color_svg__a" />
        <g fill="#FFF" mask="url(#single-color_svg__b)">
          <path d="M0 0h173v41H0z" />
        </g>
      </g>
    </svg>
  );
}

export default SvgSingleColor;
