import type { StrapiApp } from '@strapi/strapi/admin';

// Brand color: #1cd8d2 (teal)
// Light theme: low numbers = white/light, high numbers = dark teal
// Dark theme:  low numbers = dark teal,  high numbers = white/light (inverted for readability)

export default {
  config: {
    theme: {
      light: {
        colors: {
          primary50:  '#e8faf9',  // near-white teal tint  — hover bg, tag bg
          primary100: '#b3eeed',  // light teal             — selected nav bg
          primary200: '#66ddd9',  // medium-light teal      — borders, dividers
          primary500: '#1cd8d2',  // brand teal             — icons, badges
          primary600: '#0fb8b2',  // darker teal            — links, active text
          primary700: '#0a8c87',  // darkest teal           — pressed state
          buttonPrimary500: '#1cd8d2',
          buttonPrimary600: '#0fb8b2',
        },
      },
      dark: {
        colors: {
          primary50:  '#071e1d',  // near-black teal        — subtle bg tints
          primary100: '#0d3532',  // dark teal              — selected nav bg
          primary200: '#0f5450',  // medium-dark teal       — borders
          primary500: '#1cd8d2',  // brand teal             — icons, badges
          primary600: '#5ee6e2',  // light teal             — selected nav TEXT (must be light on dark bg)
          primary700: '#a8f0ee',  // near-white teal        — hovered text on dark
          buttonPrimary500: '#1cd8d2',
          buttonPrimary600: '#0fb8b2',
        },
      },
    },
    locales: [],
  },
  bootstrap(_app: StrapiApp) {},
};
