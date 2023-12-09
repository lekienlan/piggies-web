import type { Moment } from 'moment';
import moment from 'moment';

export function isNumeric(str: any) {
  if (typeof str !== 'string') return false;

  if (str.match(/^-?\d+$/)) {
    // valid integer (positive or negative)
    return true;
  }
  if (str.match(/^\d+\.\d+$/)) {
    // valid float
    return true;
  }
  // not valid number
  return false;
}

/** ******************
 *
 *  Example:
 *  @param {object} obj {
 *   foo: {
 *     bar: "aaa"
 *   }
 *  }
 *  @param {object} code "foo.bar"
 *  @returns "aaa"
 *
 ******************* */
export function getValueFromObject(
  obj: Record<string, any> | undefined,
  code: string
) {
  const segments = code.split('.');
  let result = obj;

  segments.forEach((segment) => {
    if (result?.[segment]) {
      result = result[segment];
    } else if (segment === 'first') {
      result = result?.[0];
    } else {
      result = undefined;
    }
  });

  return result as string | string[];
}

export function isDateValid(dateString: string) {
  if (dateString === '0001-01-01T00:00:00Z') return false;
  return moment(dateString).isValid();
}

export function sourceLogo(source: string) {
  if (source === 'onelife')
    return 'https://onelife.vn/assets/images/Logo_Horz.png';
  if (source === 'kingfoodmart')
    return 'https://onelife.vn/assets/images/icons/icon-kfm.svg';

  return '';
}

export function activeMenus(pathname: string): string[] {
  if (['/campaigns', '/promotions', '/coupons'].includes(pathname))
    return ['promotion'];
  if (
    ['/variant-points', '/variant-hotdeals', '/variant-tickers'].includes(
      pathname
    )
  )
    return ['variants'];
  if (['/tickers'].includes(pathname)) return ['ticker'];

  return ['promotion'];
}

export function truncateWithEllipsis(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  }
  return `${text.slice(0, maxLength - 3)}...`;
}

export function roundUpToNearest5Minutes(): Moment {
  const currentTime = moment();
  const currentMinute = currentTime.minute();
  const remainder = currentMinute % 5;
  const minutesToAdd = 5 - remainder;
  const roundedTime = currentTime.add(minutesToAdd, 'minutes');
  return roundedTime;
}

function calculateBrightness(hexColor: string): number {
  const hexWithoutHash = hexColor.slice(1);
  const bigint = parseInt(hexWithoutHash, 16);
  const r = (bigint / 0x10000) % 256;
  const g = (bigint / 0x100) % 256;
  const b = bigint % 256;

  return (r * 299 + g * 587 + b * 114) / 1000;
}

export function invertBlackShade(hexColor: string): string | null {
  // Check if the input is a valid hex color
  const validHexColorRegex = /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
  if (!validHexColorRegex.test(hexColor)) {
    // Handle invalid input
    return null;
  }

  const brightness = calculateBrightness(hexColor);

  // Adjust the shade of black based on brightness
  const adjustedShade = brightness > 128 ? 0.3 : 0.7;

  // Generate the adjusted shade of black
  const adjustedBlack = `#${Math.floor(adjustedShade * 255)
    .toString(16)
    .padStart(2, '0')
    .repeat(3)}`;

  return adjustedBlack;
}
