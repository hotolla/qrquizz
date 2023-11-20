const fontSize = 14;
const htmlFontSize = 16;
const coefficient = fontSize / 14;

export const pxToRem = (size: number) => `${(size / htmlFontSize) * coefficient}rem`;
export  const customTypography = {
  h1: {
    fontSize: pxToRem(20),
    fontWeight: 600
  },

  h2: {
    fontSize: pxToRem(16),
    fontWeight: 600,
    lineHeight: 1.2
  },

  h3: {
    fontSize: pxToRem(14),
    fontWeight: 500
  },

  h4: {
    fontSize: pxToRem(12),
    fontWeight: 500
  },

  h5: {
    fontSize: pxToRem(10),
    fontWeight: 500
  },

  body1: {
    fontSize: pxToRem(14),
    lineHeight: 1.5
  },

  body2: {
    fontSize: pxToRem(12)
  },

  subtitle1: {
    fontSize: pxToRem(10),
    lineHeight: 1.5,
    fontWeight: 500
  },

  subtitle2: {
    fontSize: pxToRem(8),
    fontWeight: 500
  }
};