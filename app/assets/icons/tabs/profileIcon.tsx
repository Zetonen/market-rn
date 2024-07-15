import React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="#000000">
    <Path d="M12,11A5,5,0,1,0,7,6,5.006,5.006,0,0,0,12,11Zm0-8A3,3,0,1,1,9,6,3,3,0,0,1,12,3ZM3,22V18a5.006,5.006,0,0,1,5-5h8a5.006,5.006,0,0,1,5,5v4a1,1,0,0,1-2,0V18a3,3,0,0,0-3-3H8a3,3,0,0,0-3,3v4a1,1,0,0,1-2,0Z" />
  </Svg>
);

export default SvgComponent;
