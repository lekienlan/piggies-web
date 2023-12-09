import MuiImage from 'mui-image';
import React from 'react';

export interface MuiImageProps {
  alt?: string | undefined;
  bgColor?: React.CSSProperties['backgroundColor'] | undefined;
  className?: string | undefined;
  distance?: string | number | undefined;
  duration?: number | undefined;
  easing?: React.CSSProperties['transitionTimingFunction'] | undefined;
  errorIcon?: boolean | React.ReactNode | undefined;
  fit?: React.CSSProperties['objectFit'] | undefined;
  height?: React.CSSProperties['height'] | number | undefined;
  iconWrapperClassName?: string | undefined;
  iconWrapperStyle?: React.CSSProperties | undefined;
  onError?: (...args: any[]) => void | undefined;
  onLoad?: (...args: any[]) => void | undefined;
  position?: React.CSSProperties['position'] | undefined;
  shift?: 'left' | 'right' | 'top' | 'bottom' | false | null | undefined;
  shiftDuration?: number | undefined;
  showLoading?: boolean | React.ReactNode | undefined;
  src: string;
  style?: React.CSSProperties | undefined;
  width?: React.CSSProperties['width'] | number | undefined;
  wrapperClassName?: string | undefined;
  wrapperStyle?: React.CSSProperties | undefined;
  title?: string;
}

export default function Image(props: MuiImageProps) {
  return (
    <MuiImage
      {...props}
      duration={1000}
      style={{
        borderRadius: 4,
        ...props.style
      }}
      src={
        props.src ||
        'https://archive.org/download/placeholder-image/placeholder-image.jpg'
      }
    />
  );
}
