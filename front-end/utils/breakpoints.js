const styles = window.getComputedStyle(document.documentElement);
const breakpointKeys = [
  'mobile',
  'phablet',
  'tablet',
  'tablet-landscape',
  'laptop',
  'desktop',
  'hd',
  '2k',
  '4k',
];

const breakpoints = breakpointKeys.reduce((acc, key) => {
  acc[key] = styles.getPropertyValue(`--breakpoint-${key}`).trim();
  return acc;
}, {});

export default breakpoints;
