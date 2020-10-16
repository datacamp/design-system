import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';

export const logoSrc = '/logo-waffles-inverted.svg';

export const theme = {
  background: tokens.color.neutral.beige100.value.hex,
  brandColor: tokens.color.primary.navy.value.hex,
  codeColor: tokens.color.primary.navyText.value.hex,
  fontFamily: tokens.asset.font.sansSerif.value,
  fontHeading: tokens.asset.font.sansSerif.value,
  fontMono: tokens.asset.font.mono.value,
  lightColor: tokens.color.neutral.beige100.value.hex,
  linkColor: tokens.color.primary.blueText.value.hex,
  navBarBackground: '#ffffff',
  navBarTextColor: '#3d4251',
  pageHeadingBackground: 'linear-gradient(268deg, #405f8f, #1c3050)',
  pageHeadingHeight: 140,
  pageHeadingTextColor: tokens.color.primary.white.value.hex,
  sidebarColor: tokens.color.primary.navyDark.value.hex,
  sidebarColorHeading: tokens.color.primary.green.value.hex,
  sidebarColorLine: tokens.color.primary.navy.value.hex,
  sidebarColorText: tokens.color.primary.white.value.hex,
  sidebarColorTextActive: tokens.color.primary.green.value.hex,
  textColor: tokens.color.primary.navyText.value.hex,
};

export const responsiveSizes = [
  { name: 'xs', width: 480 },
  { name: 'sm', width: 768 },
  { name: 'md', width: 992 },
  { name: 'lg', width: 1200 },
  { name: 'xl', width: 1366 },
  { name: 'ws', width: 1680 },
  { name: '4k', width: 1920 },
  { name: '5k', width: 2560 },
];
