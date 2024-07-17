import React from 'react';
import Svg, {Rect, Polygon, Path} from 'react-native-svg';

const SvgComponent = ({width = '24', height = '24'}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 504 504"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink">
    <Rect x="26" y="2" fill="#F4EFEF" width="368" height="496" />
    <Rect x="26" y="2" fill="#33A5D2" width="368" height="68" />
    <Polygon fill="#7D8B95" points="483.6,438 462,497.2 440,438" />
    <Rect x="438" y="34" fill="#13A289" width="44" height="404" />
    <Path
      fill="#7D8B95"
      d="M482,34.8V10.4c0-6.4-4-8.8-10.8-8.8h-18.8c-6.8,0-14.4,2.4-14.4,8.8v24.4H482z"
    />
    <Path d="M392,504H24c-2.4,0-4-1.6-4-4V4c0-2.4,1.6-4,4-4h368c2.4,0,4,1.6,4,4v496C396,502.4,394.4,504,392,504z M28,496h360V8H28V496z" />
    <Path d="M392,76H24c-2.4,0-4-1.6-4-4V4c0-2.4,1.6-4,4-4h368c2.4,0,4,1.6,4,4v68C396,74.4,394.4,76,392,76z M28,68h360V8H28V68z" />
    <Path d="M350,148H70c-2.4,0-4-1.6-4-4s1.6-4,4-4h280c2.4,0,4,1.6,4,4S352.4,148,350,148z" />
    <Path d="M126,188H70c-2.4,0-4-1.6-4-4s1.6-4,4-4h56c2.4,0,4,1.6,4,4S128.4,188,126,188z" />
    <Path d="M350,188H162c-2.4,0-4-1.6-4-4s1.6-4,4-4h188c2.4,0,4,1.6,4,4S352.4,188,350,188z" />
    <Path d="M350,228h-32c-2.4,0-4-1.6-4-4s1.6-4,4-4h32c2.4,0,4,1.6,4,4S352.4,228,350,228z" />
    <Path d="M282,228H70c-2.4,0-4-1.6-4-4s1.6-4,4-4h212c2.4,0,4,1.6,4,4S284.4,228,282,228z" />
    <Path d="M350,268H70c-2.4,0-4-1.6-4-4s1.6-4,4-4h280c2.4,0,4,1.6,4,4S352.4,268,350,268z" />
    <Path d="M350,388H70c-2.4,0-4-1.6-4-4s1.6-4,4-4h280c2.4,0,4,1.6,4,4S352.4,388,350,388z" />
    <Path d="M126,308H70c-2.4,0-4-1.6-4-4s1.6-4,4-4h56c2.4,0,4,1.6,4,4S128.4,308,126,308z" />
    <Path d="M350,308H162c-2.4,0-4-1.6-4-4s1.6-4,4-4h188c2.4,0,4,1.6,4,4S352.4,308,350,308z" />
    <Path d="M350,348h-32c-2.4,0-4-1.6-4-4s1.6-4,4-4h32c2.4,0,4,1.6,4,4S352.4,348,350,348z" />
    <Path d="M282,348H70c-2.4,0-4-1.6-4-4s1.6-4,4-4h212c2.4,0,4,1.6,4,4S284.4,348,282,348z" />
    <Path d="M126,428H70c-2.4,0-4-1.6-4-4s1.6-4,4-4h56c2.4,0,4,1.6,4,4S128.4,428,126,428z" />
    <Path d="M350,428H162c-2.4,0-4-1.6-4-4s1.6-4,4-4h188c2.4,0,4,1.6,4,4S352.4,428,350,428z" />
    <Path
      d="M458,498.8c-1.6,0-3.2-1.2-3.6-2.8l-22-59.2c0-0.4-0.4-0.8-0.4-1.2V34c0-2.4,1.6-4,4-4s4,1.6,4,4v400.4l18,48.4l18-48.4V34
      c0-2.4,1.6-4,4-4c2.4,0,4,1.6,4,4v401.2c0,0.4,0,0.8-0.4,1.2l-22,59.2C461.2,497.6,459.6,498.8,458,498.8z"
    />
    <Path d="M478,444h-40c-2.4,0-4-1.6-4-4s1.6-4,4-4h40c2.4,0,4,1.6,4,4S480.4,444,478,444z" />
    <Path
      d="M480,42c-2.4,0-4-1.6-4-4V10.8c0-1.2,0-2,0-2.4C475.2,8,472.8,8,471.2,8h-23.6c-7.6,0-7.6,0.8-7.6,2.8V38c0,2.4-1.6,4-4,4
      s-4-1.6-4-4V10.8C432,0,442,0,447.6,0h23.6c6.4,0,12.8,0,12.8,10.8V38C484,40.4,482.4,42,480,42z"
    />
    <Path d="M478,40h-40c-2.4,0-4-1.6-4-4s1.6-4,4-4h40c2.4,0,4,1.6,4,4S480.4,40,478,40z" />
    <Path d="M466,428h-28c-2.4,0-4-1.6-4-4s1.6-4,4-4h28c2.4,0,4,1.6,4,4S468.4,428,466,428z" />
  </Svg>
);

export default SvgComponent;
