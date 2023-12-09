import type { PaletteColorOptions, Shadows } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

import COLORS from './colors';

declare module '@mui/material/styles' {
  interface TypeText {
    tertiary?: String;
    warning?: String;
    danger?: String;
    border?: String;
    divider?: String;
    safe?: String;
  }
  interface PaletteOptions {
    surface?: Partial<TypeText>;
    safe?: PaletteColorOptions;
  }

  interface TypographyVariants {
    body2XS: React.CSSProperties;
    bodyXS: React.CSSProperties;
    bodyS: React.CSSProperties;
    bodyM: React.CSSProperties;
    bodyL: React.CSSProperties;
    headingXS: React.CSSProperties;
    headingS: React.CSSProperties;
    headingM: React.CSSProperties;
    headingL: React.CSSProperties;
    headingXL: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    body2XS: React.CSSProperties;
    bodyXS: React.CSSProperties;
    bodyS: React.CSSProperties;
    bodyM: React.CSSProperties;
    bodyL: React.CSSProperties;
    headingXS: React.CSSProperties;
    headingS: React.CSSProperties;
    headingM: React.CSSProperties;
    headingL: React.CSSProperties;
    headingXL: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body2XS: true;
    bodyXS: true;
    bodyS: true;
    bodyM: true;
    bodyL: true;
    headingXS: true;
    headingS: true;
    headingM: true;
    headingL: true;
    headingXL: true;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: COLORS['brand-primary'],
      light: COLORS['surface-brand-light'],
      contrastText: '#fff'
    },
    secondary: {
      main: '#63DEBF',
      light: '#ECFFFA',
      contrastText: '#fff'
    },
    warning: {
      main: COLORS['content-warning']
    },
    error: {
      main: COLORS['content-danger']
    },
    safe: {
      main: COLORS['content-safe']
    },
    text: {
      primary: COLORS['content-primary'],
      secondary: COLORS['content-secondary'],
      tertiary: COLORS['content-tertiary'],
      border: COLORS['content-border'],
      divider: COLORS['content-divider'],
      warning: COLORS['content-warning'],
      danger: COLORS['content-danger'],
      disabled: COLORS['content-tertiary'],
      safe: COLORS['content-safe']
    },
    surface: {
      primary: COLORS['surface-primary'],
      secondary: COLORS['surface-secondary'],
      tertiary: COLORS['surface-tertiary']
    }
  },
  typography: () => ({
    fontFamily: 'Inter, Roboto, Arial, sans-serif',
    fontSize: 14,
    fontWeightRegular: 300,
    fontWeightMedium: 500,
    fontWeightBold: 500,
    allVariants: {
      color: COLORS['content-primary']
    },
    body2XS: {
      fontWeight: 300,
      fontSize: 10
    },
    bodyXS: {
      fontWeight: 300,
      fontSize: 12
    },
    bodyS: {
      fontWeight: 300,
      fontSize: 14
    },
    bodyM: {
      fontWeight: 300,
      fontSize: 16
    },
    bodyL: {
      fontWeight: 300,
      fontSize: 18
    },
    headingXS: {
      fontWeight: 500,
      fontSize: 14
    },
    headingS: {
      fontWeight: 500,
      fontSize: 16
    },
    headingM: {
      fontWeight: 500,
      fontSize: 20
    },
    headingL: {
      fontWeight: 500,
      fontSize: 24
    },
    headingXL: {
      fontWeight: 500,
      fontSize: 32
    }
    // Add more typography styles as needed
  }),
  spacing: 4,
  shadows: [
    'none',
    'inset 0px -1px 2px rgba(0, 0,0, 0.1)',
    '0px -1px 5px rgba(0, 0,0, 0.1)',
    '0px 2px 8px rgba(23, 25, 35, 0.12)',
    '0px 35px 60px rgba(0, 0, 0, 0.1)',
    '20px 55px 60px rgba(0, 0, 0, 0.2)',
    '10px 15px 60px rgba(0, 0, 0, 0.25)',
    ...Array(20).fill('none')
  ] as Shadows,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '4px', // Customize the border radius here
          textTransform: 'none',
          fontWeight: 500,
          fontSize: 14,
          height: 32,
          letterSpacing: 0.3,
          boxShadow: 'none'
        },
        startIcon: {
          marginLeft: 0,
          marginRight: '6px',
          '& .MuiIcon-root': {
            color: 'inherit',
            fontSize: 16,
            fontWeight: 500
          }
        },
        contained: {
          ':hover': {
            backgroundColor: COLORS['surface-brand-dark'],
            color: 'white',
            boxShadow: 'none'
          },
          ':hover .MuiIcon-root, :hover .MuiTypography-root': {
            color: `white !important`
          },
          '&:disabled': {
            // backgroundColor: COLORS['surface-tertiary'],
            // color: COLORS['content-tertiary'],
            opacity: 0.5
          }
        },
        outlined: {
          ':hover': {
            backgroundColor: COLORS['surface-tertiary'],
            color: COLORS['brand-primary']
          }
        },
        containedError: {
          backgroundColor: COLORS['content-danger'],
          ':hover': {
            backgroundColor: COLORS.red[100],
            color: COLORS['content-danger'],
            boxShadow: 'none'
          }
        },
        sizeSmall: {
          fontSize: 12,
          height: 28
        },
        sizeLarge: {
          fontSize: 16,
          height: 40
        }
      },
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            color: COLORS['content-secondary'],
            fontWeight: 500,
            borderColor: COLORS['content-border'],
            ':hover': {
              // borderColor: COLORS['content-secondary']
            },
            '&:disabled': {
              backgroundColor: 'white',
              color: COLORS['content-tertiary']
            }
          }
        }
      ]
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '& .MuiTypography-root': {
            color: 'white'
          },
          '& .MuiIcon-root': {
            color: COLORS['content-secondary']
          },
          '&:hover': {
            background: 'white'
          }
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          height: 32,
          fontSize: 14,
          paddingRight: '0 !important',
          '&.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
              border: `1px solid ${COLORS['brand-primary']} !important`
            }
          },
          '& .MuiOutlinedInput-notchedOutline': {
            border: '1px solid #CBD5E0'
          },
          '& .MuiFormHelperText-root.Mui-error': {}
        },
        input: {
          color: COLORS['content-primary'],
          height: 32,
          borderRadius: 1,
          padding: '0px 8px !important',
          '&::placeholder': {
            textOverflow: 'ellipsis !important',
            color: COLORS['content-tertiary']
          }
        }
      }
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          fontSize: 16,
          margin: '0 8px 0 0',
          color: COLORS['content-primary']
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: 14,
          color: COLORS['content-secondary'],
          fontWeight: 500,
          top: '-4px'
        },
        shrink: {
          transform: 'translate(16px, -8px) scale(0.8) !important'
        },
        outlined: {
          transform: 'translate(16px, 12px) scale(1)'
        }
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: 0
        }
      }
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          padding: '6px 12px',
          borderRadius: 4,
          fontSize: 14
        }
      }
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          padding: 0,
          height: 32,
          borderRadius: 4,
          border: `1px solid ${COLORS['content-border']}`,
          '&.Mui-selected': {
            border: `1px solid ${COLORS['brand-primary']}`,
            backgroundColor: COLORS['surface-brand-light'],
            '& .MuiListItemText-primary, .MuiListItemText-secondary': {
              fontWeight: 500,
              color: COLORS['brand-primary']
            },
            '& svg,i': { color: `${COLORS['brand-primary']} !important` }
          },
          '&.Mui-disabled': {
            opacity: 0.7
          },
          '& .MuiListItemText-primary': {
            fontWeight: 500,
            fontSize: 14,
            color: COLORS['content-primary']
          },
          '& .MuiListItemText-secondary': {
            fontWeight: 500,
            fontSize: 14,
            color: COLORS['content-secondary']
          },
          '& .MuiBox-root': {
            width: 14,
            margin: '0px 16px',
            '& svg,i': {
              fontSize: '14px',
              position: 'relative',
              top: '-1px',
              color: COLORS['content-secondary'],
              display: 'flex',
              alignItems: 'center'
            }
          }
        }
      }
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: 'fit-content'
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          '&.MuiTab-root': {
            alignItems: 'flex-start',
            padding: '8px 0',
            minWidth: 'fit-content',
            minHeight: 'fit-content',
            marginRight: 24,
            textTransform: 'none',
            color: COLORS['content-tertiary']
          },
          '&.Mui-selected': {
            backgroundColor: 'none',
            color: COLORS['brand-primary']
          }
        }
      }
    },
    MuiTable: {
      styleOverrides: {
        root: {
          background: 'white'
        }
      }
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          height: 40
        }
      }
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          background: 'white',
          height: 76,
          '&:last-child td': { border: 0 }
        },
        head: {
          height: 40
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderColor: COLORS['content-divider'],
          padding: 8,
          color: COLORS['content-primary']
        },
        head: {
          background: COLORS['surface-secondary'],
          color: COLORS['content-secondary']
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          height: 20,
          borderRadius: 4,
          fontSize: 12,
          fontWeight: 500,
          color: COLORS['content-tertiary'],
          backgroundColor: COLORS['surface-secondary']
        },
        label: {
          lineHeight: '16px',
          padding: '0 8px'
        },
        deleteIcon: {
          fontSize: 'inherit',
          color: 'inherit'
        },
        filledPrimary: {
          color: COLORS['brand-primary'],
          background: COLORS['surface-brand-light']
        },
        icon: {
          marginRight: '-4px'
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none'
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: COLORS['content-border']
        }
      }
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          padding: 0,

          '& svg, i': {
            fontSize: 20
            // color: COLORS['brand-primary']
          }
        }
      }
    },
    MuiPopover: {
      styleOverrides: {
        paper: (props) => ({
          boxShadow: props.theme.shadows[4],
          padding: 8,
          minWidth: 250,
          transform: 'translate(0, 8px) !important'
        })
      }
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 34,
          height: 20,
          padding: 0,
          '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: 2,
            transitionDuration: '300ms',
            '&.Mui-checked': {
              transform: 'translateX(14px)',
              color: '#fff',
              '& + .MuiSwitch-track': {
                backgroundColor: COLORS['brand-primary'],
                opacity: 1,
                border: 0
              },
              '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5
              }
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
              color: COLORS['brand-primary'],
              border: '6px solid #fff'
            },
            '&.Mui-disabled .MuiSwitch-thumb': {
              color: COLORS['content-border']
            },
            '&.Mui-disabled + .MuiSwitch-track': {
              opacity: 0.7
            }
          },
          '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            width: 16,
            height: 16
          },
          '& .MuiSwitch-track': {
            borderRadius: 100,
            backgroundColor: COLORS['content-border'],
            opacity: 1
          }
        }
      }
    },
    MuiStepLabel: {
      styleOverrides: {
        root: {
          '& .MuiStepLabel-iconContainer': {
            svg: {
              color: COLORS['content-tertiary']
            }
          },
          '& .MuiStepLabel-label': {
            color: COLORS['content-tertiary']
          },

          '& .Mui-active': {
            svg: {
              color: COLORS['brand-primary']
            }
          }
        }
      }
    },
    MuiAlert: {
      styleOverrides: {
        message: {
          fontWeight: 500
        },
        standardError: {
          '& .MuiAlert-message': {
            color: COLORS['content-danger']
          },
          svg: {
            color: COLORS['content-danger']
          }
        },
        standardSuccess: {
          '& .MuiAlert-message': {
            color: COLORS['content-safe']
          },
          svg: {
            color: COLORS['content-safe']
          }
        }
      }
    },
    MuiIcon: {
      styleOverrides: {
        root: {
          color: 'inherit',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 20,
          height: 'unset',
          '::before': {}
        }
      }
    }
  }

  // Add more customizations to the theme as needed
});

export default theme;
