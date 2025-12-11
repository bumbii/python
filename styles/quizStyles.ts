// Material 3 Design System Variables
export const M3 = {
  // Material 3 Color System
  colors: {
    // Primary (Purple)
    primary: '#7c3aed',
    onPrimary: '#ffffff',
    primaryContainer: '#ede9fe',
    onPrimaryContainer: '#5b21b6',

    // Secondary (Pink)
    secondary: '#f5576c',
    onSecondary: '#ffffff',
    secondaryContainer: '#ffe4e6',
    onSecondaryContainer: '#be123c',

    // Tertiary (Blue)
    tertiary: '#0078d7',
    onTertiary: '#ffffff',
    tertiaryContainer: '#dbeafe',
    onTertiaryContainer: '#1e3a8a',

    // Error
    error: '#ef4444',
    onError: '#ffffff',
    errorContainer: '#fee2e2',
    onErrorContainer: '#991b1b',

    // Success
    success: '#10b981',
    onSuccess: '#ffffff',
    successContainer: '#d1fae5',
    onSuccessContainer: '#065f46',

    // Warning
    warning: '#f59e0b',
    onWarning: '#ffffff',
    warningContainer: '#fef3c7',
    onWarningContainer: '#92400e',

    // Surface
    surface: '#ffffff',
    onSurface: '#1c1b1f',
    surfaceVariant: '#f5f5f6',
    onSurfaceVariant: '#49454f',

    // Outline
    outline: '#79747e',
    outlineVariant: '#cac4d0',

    // Background
    background: '#fefbff',
    onBackground: '#1c1b1f',

    // Surface Container Levels
    surfaceContainerLowest: '#ffffff',
    surfaceContainerLow: '#f7f2fa',
    surfaceContainer: '#f3edf7',
    surfaceContainerHigh: '#ece6f0',
    surfaceContainerHighest: '#e6e0e9',

    // Inverse
    inverseSurface: '#313033',
    inverseOnSurface: '#f4eff4',
    inversePrimary: '#d0bcff',

    // Shadow
    shadow: '#000000',
    scrim: '#000000'
  },

  // Spacing Scale (increments of 4px)
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    base: '16px',
    lg: '20px',
    xl: '24px',
    '2xl': '32px',
    '3xl': '40px',
    '4xl': '48px',
    '5xl': '64px',
    '6xl': '80px'
  },

  // Border Radius
  radius: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '28px',
    full: '9999px'
  },

  // Typography (Material 3)
  typography: {
    displayLarge: {
      fontSize: '57px',
      lineHeight: '64px',
      fontWeight: '400',
      letterSpacing: '-0.25px'
    },
    displayMedium: {
      fontSize: '45px',
      lineHeight: '52px',
      fontWeight: '400'
    },
    displaySmall: {
      fontSize: '36px',
      lineHeight: '44px',
      fontWeight: '400'
    },
    headlineLarge: {
      fontSize: '32px',
      lineHeight: '40px',
      fontWeight: '400'
    },
    headlineMedium: {
      fontSize: '28px',
      lineHeight: '36px',
      fontWeight: '400'
    },
    headlineSmall: {
      fontSize: '24px',
      lineHeight: '32px',
      fontWeight: '400'
    },
    titleLarge: {
      fontSize: '22px',
      lineHeight: '28px',
      fontWeight: '500'
    },
    titleMedium: {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: '500',
      letterSpacing: '0.15px'
    },
    titleSmall: {
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: '500',
      letterSpacing: '0.1px'
    },
    bodyLarge: {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: '400',
      letterSpacing: '0.5px'
    },
    bodyMedium: {
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: '400',
      letterSpacing: '0.25px'
    },
    bodySmall: {
      fontSize: '12px',
      lineHeight: '16px',
      fontWeight: '400',
      letterSpacing: '0.4px'
    },
    labelLarge: {
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: '500',
      letterSpacing: '0.1px'
    },
    labelMedium: {
      fontSize: '12px',
      lineHeight: '16px',
      fontWeight: '500',
      letterSpacing: '0.5px'
    },
    labelSmall: {
      fontSize: '11px',
      lineHeight: '16px',
      fontWeight: '500',
      letterSpacing: '0.5px'
    }
  },

  // Elevation (box shadows)
  elevation: {
    level0: 'none',
    level1: '0 1px 2px 0 rgba(0, 0, 0, 0.3), 0 1px 3px 1px rgba(0, 0, 0, 0.15)',
    level2: '0 1px 2px 0 rgba(0, 0, 0, 0.3), 0 2px 6px 2px rgba(0, 0, 0, 0.15)',
    level3: '0 4px 8px 3px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.3)',
    level4: '0 6px 10px 4px rgba(0, 0, 0, 0.15), 0 2px 3px rgba(0, 0, 0, 0.3)',
    level5: '0 8px 12px 6px rgba(0, 0, 0, 0.15), 0 4px 4px rgba(0, 0, 0, 0.3)'
  },

  // Breakpoints
  breakpoints: {
    mobile: '640px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px'
  }
};

// Google Font Import URL
export const GOOGLE_FONTS_URL = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap';

// Logo Component Props
export interface LogoHeaderProps {
  onLogoClick?: () => void;
}
