import { generateMedia } from 'styled-media-query';
import breakpoints from '../styles/breakpoints';

const mq = generateMedia(breakpoints);

// eslint-disable-next-line import/prefer-default-export
export const mediaquery = {};

mediaquery.tablet = mq.greaterThan('tablet');

mediaquery.desktop = mq.greaterThan('desktop');

/* export const hexToRgb = (hex) => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const expandedHex = hex.replace(shorthandRegex, (input, red, green, blue) => red + red + green + green + blue + blue);
  const { groups } = /^#?(?<red>[a-f\d]{2})(?<green>[a-f\d]{2})(?<blue>[a-f\d]{2})$/i.exec(expandedHex) ?? {};

  return groups ? `${parseInt(groups.red, 16)}, ${parseInt(groups.green, 16)}, ${parseInt(groups.blue, 16)}` : '';
}; */
