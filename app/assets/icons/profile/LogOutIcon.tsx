import React from 'react';
import Svg, {G, Path} from 'react-native-svg';

const SvgComponent = ({width = '24', height = '24'}) => (
  <Svg
    width={width}
    height={height}
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 503.808 503.808"
    xmlSpace="preserve">
    <G transform="translate(1 1)">
      <Path
        fill="#ECF4F7"
        d="M327.704,251.075v51.2v128c0,18.773-15.36,34.133-34.133,34.133h-153.6V37.741h153.6
          c18.773,0,34.133,15.36,34.133,34.133V251.075z"
      />
      <Path
        fill="#80D6FA"
        d="M139.971,37.741v426.667v8.533c0,18.773-13.653,29.867-29.867,23.893l-81.067-32.427
          c-19.627-6.827-25.6-15.36-25.6-34.133v-358.4c0-18.773,6.827-27.307,25.6-34.133l81.067-32.427
          c16.213-5.973,29.867,5.12,29.867,23.893V37.741z"
      />
    </G>
    <Path
      fill="#51565F"
      d="M119.637,503.808c-3.413,0-6.827-0.853-10.24-1.707L28.33,469.675
        c-20.48-7.68-28.16-17.92-28.16-38.4v-358.4c0-20.48,7.68-30.72,28.16-38.4l81.067-32.427c8.533-3.413,17.067-2.56,23.893,2.56
        c7.68,5.12,11.947,14.507,11.947,25.6v443.733c0,11.093-4.267,20.48-11.947,25.6C129.877,502.101,124.757,503.808,119.637,503.808z
        M119.637,8.875c-2.56,0-5.12,0.853-7.68,1.707L30.891,43.008c-17.92,6.827-23.04,13.653-23.04,29.867v358.4
        c0,17.067,5.12,23.893,23.04,29.867l81.067,32.427c5.973,2.56,11.947,1.707,16.213-0.853c5.12-3.413,7.68-10.24,7.68-18.773V30.208
        c0-8.533-2.56-15.36-7.68-18.773C126.464,9.728,123.051,8.875,119.637,8.875z M294.571,469.675H175.104
        c-2.56,0-4.267-1.707-4.267-4.267c0-2.56,1.707-4.267,4.267-4.267h119.467c16.213,0,29.867-13.653,29.867-29.867v-128
        c0-2.56,1.707-4.267,4.267-4.267s4.267,1.707,4.267,4.267v128C332.971,452.608,315.904,469.675,294.571,469.675z M414.037,341.675
        c-0.853,0-2.56,0-3.413-0.853c-1.707-1.707-1.707-4.267,0-5.973l77.653-77.653H192.171c-2.56,0-4.267-1.707-4.267-4.267
        c0-2.56,1.707-4.267,4.267-4.267h296.96l-77.653-77.653c-1.707-1.707-1.707-4.267,0-5.973c1.707-1.707,4.267-1.707,5.973,0
        l85.333,85.333c0,0,0.853,0.853,0.853,1.707l0,0l0,0c0,0.853,0,0.853,0,1.707l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0
        c0,0.853,0,0.853,0,1.707l0,0l0,0c0,0.853-0.853,0.853-0.853,0.853l0,0l0,0l0,0l0,0l0,0l-85.333,85.333
        C416.597,340.821,414.891,341.675,414.037,341.675z M106.837,281.941c-2.56,0-4.267-1.707-4.267-4.267v-51.2
        c0-2.56,1.707-4.267,4.267-4.267s4.267,1.707,4.267,4.267v51.2C111.104,280.234,109.397,281.941,106.837,281.941z M328.704,205.141
        c-2.56,0-4.267-1.707-4.267-4.267v-128c0-16.213-13.653-29.867-29.867-29.867h-120.32c-2.56,0-4.267-1.707-4.267-4.267
        c0-2.56,1.707-4.267,4.267-4.267h120.32c21.333,0,38.4,17.067,38.4,38.4v128C332.971,203.434,331.264,205.141,328.704,205.141z"
    />
  </Svg>
);

export default SvgComponent;
