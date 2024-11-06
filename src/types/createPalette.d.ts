import * as createPalette from '@mui/material/styles/createPalette';

declare module '@mui/material/styles/createPalette' {
  interface IconPaletteColorOptions {
    activeIcon?: string;
    inactiveIcon?: string;
  }

  interface IconPaletteColor {
    activeIcon: string;
    inactiveIcon: string;
  }

  interface PaletteOptions {
    neutral?: PaletteColorOptions;
    icon?: IconPaletteColorOptions;
  }

  interface Palette {
    neutral: PaletteColor;
    icon: IconPaletteColor;
  }
}