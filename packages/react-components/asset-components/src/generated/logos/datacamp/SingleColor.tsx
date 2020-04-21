import * as React from 'react';
interface SVGRProps {
  svgRef?: React.Ref<SVGSVGElement>;
}

function SvgSingleColor({
  svgRef,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={162} height={36} ref={svgRef} {...props}>
      <defs>
        <path
          d="M23.758 15.263c.31-1.275.272-2.473-.428-4.148 0 0 1.127.434 1.01-.429-.118-.862-1.358-1.773-2.29-2.346-.412-.254-1.523-.796-3.012-1.126l.278-.624-.076-.038c-2.31-1.118-4.98-.104-5.008-.093l-.082.03.264.696c-.78.18-1.533.458-2.242.832-6.277 3.321-3.093 9.81-1.149 11.353 1.946 1.544 1.05 4.69 0 7.542h8.43c.119-.534.017.261.41-1.866.393-2.129 1.906-1.338 3.1-1.407 1.194-.07 1.005-.898.99-1.825.583-.261.583-.536.194-.87.505-.468.427-.468.155-.917-.27-.45-.077-.666-.077-.666s.815-.157.93-.586c.038-.925-1.71-2.239-1.398-3.51v-.002zM17.19.065l16.001 5.47c.513.18.831.69.767 1.227l-2.54 20.748a1.15 1.15 0 0 1-.578.862l-13.288 7.454a1.174 1.174 0 0 1-1.124.006L2.805 28.377a1.151 1.151 0 0 1-.59-.886L.008 6.746c-.058-.532.26-1.031.766-1.207L16.433.065c.246-.085.512-.085.758 0zm-.372 1.812L1.903 7.094l2.114 19.849 12.968 7.093 12.643-7.09 2.43-19.852-15.24-5.217zM156.35 13.22a4.362 4.362 0 0 1 1.979.45 4.4 4.4 0 0 1 1.546 1.301 6.18 6.18 0 0 1 1.006 2.101c.25.935.369 1.898.354 2.865a8.972 8.972 0 0 1-.4 2.73 6.655 6.655 0 0 1-1.14 2.179 5.268 5.268 0 0 1-1.792 1.442 5.228 5.228 0 0 1-2.351.52 4.755 4.755 0 0 1-1.895-.34 4.665 4.665 0 0 1-1.406-.94v5.385h-3.183v-17.45h1.948a.782.782 0 0 1 .811.577l.257 1.22a6.868 6.868 0 0 1 1.843-1.475c.687-.377 1.495-.565 2.423-.565zm-51.448-5.352c1.357 0 2.561.224 3.614.667 1 .41 1.913 1.003 2.692 1.749l-1.16 1.6a1.03 1.03 0 0 1-.265.27.744.744 0 0 1-.444.117.855.855 0 0 1-.4-.11 5.268 5.268 0 0 1-.45-.269 16.835 16.835 0 0 0-.569-.352 4.644 4.644 0 0 0-.747-.351 6.228 6.228 0 0 0-.985-.269 6.76 6.76 0 0 0-1.297-.11 5.769 5.769 0 0 0-2.285.445 4.958 4.958 0 0 0-1.786 1.28 5.889 5.889 0 0 0-1.16 2.052 8.528 8.528 0 0 0-.412 2.763 8.06 8.06 0 0 0 .444 2.78 6.07 6.07 0 0 0 1.204 2.05c.5.547 1.11.98 1.792 1.27.7.296 1.457.447 2.217.44.43.003.857-.024 1.283-.077a5.49 5.49 0 0 0 1.06-.244c.319-.11.627-.253.916-.428.305-.189.592-.406.856-.648.082-.074.172-.136.27-.185a.658.658 0 0 1 .293-.068l.003.004c.19 0 .373.08.503.218l1.366 1.474a7.493 7.493 0 0 1-2.79 2.141c-1.101.496-2.427.745-3.976.745-1.383 0-2.628-.236-3.733-.704a8.211 8.211 0 0 1-2.83-1.964 8.558 8.558 0 0 1-1.795-3 11.171 11.171 0 0 1-.626-3.807 10.5 10.5 0 0 1 .67-3.827 8.767 8.767 0 0 1 1.886-2.992 8.563 8.563 0 0 1 2.902-1.956 9.73 9.73 0 0 1 3.74-.704zM77.167 9.434v4.146h3.537v2.252h-3.537v7.126c0 .41.1.73.303.962.207.234.51.364.826.351.167.004.335-.02.495-.07.121-.04.239-.09.353-.149.099-.051.187-.1.265-.147a.437.437 0 0 1 .235-.07.363.363 0 0 1 .236.07c.074.061.139.132.194.21l.954 1.54a4.834 4.834 0 0 1-1.597.87 5.972 5.972 0 0 1-1.87.295h-.001c-1.152 0-2.034-.322-2.649-.967-.614-.645-.921-1.536-.922-2.672v-7.35h-1.357a.632.632 0 0 1-.438-.167.649.649 0 0 1-.18-.39v-1.36l2.122-.353.67-3.59a.71.71 0 0 1 .245-.397.727.727 0 0 1 .465-.14h1.65zm41.706 3.785a5.405 5.405 0 0 1 2.074.377 4.406 4.406 0 0 1 1.546 1.055 4.5 4.5 0 0 1 .96 1.61c.225.66.336 1.354.328 2.05v8.309h-1.442a1.444 1.444 0 0 1-.696-.135c-.163-.09-.293-.273-.387-.546l-.283-.95c-.31.281-.638.545-.98.79-.31.22-.642.413-.992.569a5.32 5.32 0 0 1-1.102.352 6.335 6.335 0 0 1-1.297.117 5.104 5.104 0 0 1-1.547-.224 3.4 3.4 0 0 1-1.224-.673 3.018 3.018 0 0 1-.8-1.115 3.949 3.949 0 0 1-.281-1.551 2.891 2.891 0 0 1 .716-1.93c.286-.329.617-.613.985-.847a6.488 6.488 0 0 1 1.489-.692c.67-.215 1.358-.376 2.057-.48a20.574 20.574 0 0 1 2.68-.223v-.77c0-.88-.187-1.531-.566-1.955-.378-.422-.925-.634-1.637-.634a3.913 3.913 0 0 0-1.283.18c-.31.106-.61.241-.896.403a74.02 74.02 0 0 1-.707.404c-.216.122-.46.184-.708.18a.924.924 0 0 1-.568-.174 1.43 1.43 0 0 1-.374-.403l-.558-1.015.001-.002c1.522-1.384 3.351-2.077 5.492-2.077zm-30.598 0a5.409 5.409 0 0 1 2.077.377 4.406 4.406 0 0 1 1.546 1.055 4.51 4.51 0 0 1 .96 1.61c.226.66.335 1.354.329 2.05v8.309h-1.444a1.444 1.444 0 0 1-.696-.135c-.163-.09-.293-.273-.387-.546l-.283-.95c-.31.281-.638.545-.978.79-.311.22-.644.413-.994.569a5.32 5.32 0 0 1-1.102.352 6.327 6.327 0 0 1-1.297.117 5.097 5.097 0 0 1-1.546-.224 3.397 3.397 0 0 1-1.225-.673 3.025 3.025 0 0 1-.798-1.115 3.935 3.935 0 0 1-.283-1.551c0-.338.057-.673.167-.993a2.92 2.92 0 0 1 .549-.938c.286-.328.617-.612.985-.846a6.472 6.472 0 0 1 1.49-.692c.67-.215 1.358-.376 2.056-.48.889-.133 1.786-.209 2.683-.226v-.769c0-.88-.188-1.532-.566-1.955-.378-.423-.924-.634-1.636-.634a3.913 3.913 0 0 0-1.283.18c-.311.106-.611.24-.897.403-.258.149-.493.284-.707.403-.216.121-.46.184-.708.18a.925.925 0 0 1-.567-.174 1.43 1.43 0 0 1-.373-.403l-.56-1.012-.002-.002c1.522-1.384 3.352-2.077 5.49-2.077zm-23.198 0a5.409 5.409 0 0 1 2.076.377A4.406 4.406 0 0 1 68.7 14.65c.43.465.757 1.013.96 1.61.225.66.336 1.354.33 2.05v8.309h-1.446a1.444 1.444 0 0 1-.695-.135c-.164-.09-.292-.273-.387-.546l-.283-.95c-.311.281-.639.545-.98.79-.31.22-.644.413-.993.569a5.32 5.32 0 0 1-1.102.352 6.34 6.34 0 0 1-1.298.117 5.097 5.097 0 0 1-1.546-.224 3.397 3.397 0 0 1-1.225-.673 3.028 3.028 0 0 1-.8-1.115 3.935 3.935 0 0 1-.282-1.551c0-.338.057-.673.167-.993.121-.344.307-.663.549-.938.286-.328.616-.612.985-.846a6.438 6.438 0 0 1 1.489-.692c.67-.215 1.358-.376 2.056-.48a20.574 20.574 0 0 1 2.681-.223v-.77c0-.88-.188-1.531-.567-1.955-.376-.422-.923-.634-1.636-.634a3.918 3.918 0 0 0-1.282.18c-.311.106-.612.241-.896.403-.259.15-.495.283-.708.404-.215.122-.46.184-.708.18a.925.925 0 0 1-.567-.174 1.441 1.441 0 0 1-.374-.403l-.556-1.015.002-.002c1.521-1.384 3.35-2.077 5.49-2.077zm76.062.04a5.315 5.315 0 0 1 1.947.333 3.749 3.749 0 0 1 1.43.974c.4.454.703.988.883 1.564.211.684.313 1.396.303 2.111v8.379h-3.183v-8.375c0-.837-.186-1.467-.556-1.89-.368-.423-.91-.634-1.623-.634-.31-.004-.62.053-.908.166a2.175 2.175 0 0 0-.736.48c-.22.225-.389.494-.496.789-.125.349-.186.718-.18 1.09v8.373h-3.196v-8.374c0-.88-.178-1.521-.535-1.922-.357-.403-.879-.604-1.566-.604a2.581 2.581 0 0 0-1.297.34 4.348 4.348 0 0 0-1.115.929v9.63h-3.183V13.463h1.947a.782.782 0 0 1 .811.578l.207.974c.226-.25.47-.486.728-.704a4.532 4.532 0 0 1 1.741-.916 4.14 4.14 0 0 1 1.088-.135c.835 0 1.52.225 2.056.673a4.052 4.052 0 0 1 1.205 1.789 4.01 4.01 0 0 1 .774-1.123 4.21 4.21 0 0 1 1.017-.76c.372-.2.77-.346 1.178-.439a5.81 5.81 0 0 1 1.259-.14zm-93.275-5.18a10.47 10.47 0 0 1 3.866.687 8.751 8.751 0 0 1 2.98 1.905 8.52 8.52 0 0 1 1.92 2.931 9.958 9.958 0 0 1 .682 3.745 9.98 9.98 0 0 1-.682 3.743 8.43 8.43 0 0 1-4.899 4.846 10.563 10.563 0 0 1-3.866.682h-7.102V8.078h7.1zm72.813 12.92c-.778.027-1.554.106-2.321.235a6.254 6.254 0 0 0-1.508.445 1.977 1.977 0 0 0-.813.63c-.16.23-.245.502-.243.782 0 .556.165.953.495 1.192.332.239.764.358 1.297.358a3.796 3.796 0 0 0 1.694-.352c.527-.272 1-.635 1.399-1.071v-2.22zm-53.796 0c-.777.027-1.552.106-2.32.235a6.174 6.174 0 0 0-1.508.442 1.987 1.987 0 0 0-.812.628c-.16.231-.246.504-.246.783 0 .557.166.954.497 1.193.33.24.762.359 1.296.359a3.774 3.774 0 0 0 1.694-.352c.526-.27 1-.633 1.399-1.068V21zM90.083 21c-.778.027-1.554.105-2.32.234a6.235 6.235 0 0 0-1.509.442 1.972 1.972 0 0 0-.812.63c-.161.229-.247.501-.246.781 0 .555.164.953.496 1.192.33.24.764.36 1.297.36a3.82 3.82 0 0 0 1.695-.352 5.086 5.086 0 0 0 1.4-1.07V21zm65.17-5.285a3.225 3.225 0 0 0-1.69.417c-.502.31-.948.708-1.314 1.172l.005 5.9h-.002c.313.399.717.715 1.18.923.439.183.91.274 1.385.27.448.006.89-.087 1.298-.27a2.56 2.56 0 0 0 .986-.82c.294-.421.507-.892.626-1.391.155-.65.229-1.314.219-1.98a8.77 8.77 0 0 0-.187-1.956 3.77 3.77 0 0 0-.535-1.3 2.108 2.108 0 0 0-.842-.73c-.356-.16-.74-.241-1.13-.235zM47.865 10.819h-3.622V23.87h3.622c.84.013 1.674-.139 2.455-.45a5.13 5.13 0 0 0 1.857-1.288c.53-.594.93-1.293 1.172-2.05a8.59 8.59 0 0 0 .405-2.735 8.576 8.576 0 0 0-.405-2.738 5.681 5.681 0 0 0-1.174-2.05 5.125 5.125 0 0 0-1.855-1.291 6.424 6.424 0 0 0-2.455-.45zM18.753 7.288c.04.012.082.03.118.054l.02.017-.235.616c.062.027.944.42 1.308.79l.294-.403a4.977 4.977 0 0 1 2.24 2.97l-.447.159.07.279a6.46 6.46 0 0 1-.105 3.226h-.001l-1.249-.423c-.065.17-.707 1.748-1.532 2.025l-.787-1.036c-.38.294-1.244.554-1.66.433v-.038h-.022l.025 2.857c-1.658.17-3.638-.828-4.585-2.2l-1.036.78c-1.178-1.415-1.358-3.12-1.37-4.103h1.388c0-1.087.427-2.502 1.028-3.284l1.088.766c.09-.11.91-1.088 2.01-1.44h.017l-.785-2.07c1.66-.475 2.88-.468 4.208.025zm-2.047 3.933a1.378 1.378 0 1 0-.982 2.357c.397.392.993.512 1.512.298a1.38 1.38 0 0 0 .857-1.276c0-.716-.55-1.305-1.253-1.372l-.134-.007z"
          id="single-color_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="single-color_svg__b" fill="#fff">
          <use xlinkHref="#single-color_svg__a" />
        </mask>
        <use fill="#FFF" xlinkHref="#single-color_svg__a" />
        <g mask="url(#single-color_svg__b)" fill="#FFF">
          <path d="M0 0h162v36H0z" />
        </g>
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
  <SvgSingleColor svgRef={ref} {...props} />
));
export default ForwardRef;
