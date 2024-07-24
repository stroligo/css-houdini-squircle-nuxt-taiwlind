/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./pages/**/*.vue'],

  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'base',
    }),

    /* Squircle CONFIG */
    plugin(function ({ addUtilities, theme }) {
      const spacing = theme('spacing');
      const directions = [
        'top-left',
        'top-right',
        'bottom-left',
        'bottom-right',
      ];
      const utilities = {};

      // Change REM to PX
      const remToPx = (rem) => {
        const remValue = parseFloat(rem);
        return `${remValue * 16}px`;
      };

      // Created Radius
      Object.keys(spacing).forEach((size) => {
        const value = spacing[size];
        const valueInPx = remToPx(value);
        utilities[`.squircle-${size}`] = {
          'mask-image': 'paint(squircle)',
          'border-radius': valueInPx,
          '--squircle-radius': valueInPx,
        };
      });

      // Create Positions
      directions.forEach((direction) => {
        Object.keys(spacing).forEach((size) => {
          const value = spacing[size];
          const valueInPx = remToPx(value);
          utilities[`.squircle-${direction}-${size}`] = {
            'mask-image': 'paint(squircle)',
            [`border-${direction}-radius`]: valueInPx,
            [`--squircle-radius-${direction}`]: valueInPx,
          };
        });
      });

      addUtilities(utilities, ['responsive', 'hover', 'focus', 'active']);
    }),
  ],

  safelist: [],
};
