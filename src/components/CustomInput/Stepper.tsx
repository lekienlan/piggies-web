import { Box, Typography } from '@mui/material';
import React from 'react';
import COLORS from 'theme/colors';
import type { ICustomInput } from 'types';

export default function Stepper(props: ICustomInput) {
  const { options, value, onChange } = props;
  const height = 32;
  return (
    <Box display="flex">
      {options?.map((option, index) => {
        const isSelected = option.code === value;
        const background = isSelected
          ? COLORS['brand-primary']
          : COLORS.blue[50];
        const color = isSelected ? 'white' : 'text.tertiary';

        return (
          <Box
            onClick={() => onChange && onChange(option.code || '')}
            key={index}
            width={`calc(${100 / options.length}% - ${
              options.length - 1 === index ? 4 : 0
            }%)`}
            height={height}
            position="relative"
            sx={{
              cursor: 'pointer',
              transition: '0.5s',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderTopLeftRadius: '4px',
              borderBottomLeftRadius: '4px',
              fontWeight: 'medium',
              background,
              '&:after': {
                content: "''",
                position: 'absolute',
                right: `-${height / 2}px`,
                top: 0,
                zIndex: 2,
                borderLeft: `${height / 2}px solid ${background}`,
                borderBottom: `${height / 2}px solid transparent`,
                borderTop: `${height / 2}px solid transparent`,
                transition: '0.5s'
              },
              '&:before': {
                content: "''",
                position: 'absolute',
                width: height / 1.2,
                height: '100%',
                left: 0,
                top: 0,
                background: index === 0 ? 'transparent' : 'white',
                clipPath: `polygon(0% 0%, ${height / 1.2}% 0%, 90% 50%, ${
                  height / 1.2
                }% 100%, 0% 100%)`,
                zIndex: 1
              }
            }}
          >
            <Typography
              color={color}
              variant="headingS"
              pl={index === 0 ? 0 : 4}
            >
              {option.name}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
}
