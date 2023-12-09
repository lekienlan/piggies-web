import React from 'react';
import type { LinkProps } from 'react-router-dom';
import { Link as LinkRouter } from 'react-router-dom';

export default function Link(props: LinkProps & { disabled?: boolean }) {
  return (
    <LinkRouter
      style={{
        pointerEvents: props.disabled ? 'none' : undefined,
        opacity: props.disabled ? 0.5 : 1
      }}
      {...props}
    />
  );
}
