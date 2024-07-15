import React from 'react';
import Svg, {G, Rect, Path, Polygon} from 'react-native-svg';

const SvgComponent = ({width = '24', height = '24'}) => (
  <Svg
    height={height}
    width={width}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <G>
      <Rect fill="none" x="2" y="2" width="20" height="20" />
      <G>
        <Path
          fill="#4285f4"
          d="M6.45,18.24a3,3,0,1,1,3-3A3,3,0,0,1,6.45,18.24Zm3.63-.4A4.43,4.43,0,1,0,2,15.32a4.91,4.91,0,0,0,0,.67,3.43,3.43,0,0,0,.09.44l.06.21a4.59,4.59,0,0,0,.34.79,4.24,4.24,0,0,0,.76,1l.15.15.33.27a4.16,4.16,0,0,0,.73.44A4.44,4.44,0,0,0,9,19l2.93,2.93a.33.33,0,0,0,.47,0l.66-.65a.33.33,0,0,0,0-.47Z"
        />
        <Path
          fill="#aecbfa"
          d="M11.8,16.58A5.41,5.41,0,0,0,12,15.07,5.53,5.53,0,0,0,6.39,9.65,5.82,5.82,0,0,0,4.47,10V5.83a.62.62,0,0,1,.62-.62H21.28a.63.63,0,0,1,.63.62V16a.63.63,0,0,1-.63.63Z"
        />
        <Path
          fill="#669df6"
          fillRule="evenodd"
          d="M15.58,5.21V3.73H11.14V5.21H9.65V2.87a.63.63,0,0,1,.63-.62h6.16a.62.62,0,0,1,.62.62V5.21Z"
        />
        <Polygon
          fill="#4285f4"
          fillRule="evenodd"
          points="15.58 5.21 17.06 4.74 17.06 5.21 15.58 5.21"
        />
        <Polygon
          fill="#4285f4"
          fillRule="evenodd"
          points="9.64 5.21 11.13 4.67 11.13 5.21 9.64 5.21"
        />
      </G>
    </G>
  </Svg>
);

export default SvgComponent;
