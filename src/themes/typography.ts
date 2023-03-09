export interface FontStyle {
  fontWeight: number;
  fontStyle: string;
  fontSize: string;
  lineHeight: string;
  uppercase?: boolean;
}

export interface Typography {
  regular: FontStyle;
  regularTitle: FontStyle;
  regularBody: FontStyle;
  regularBody2: FontStyle;
  boldHeading: FontStyle;
  boldTitle: FontStyle;
  boldSubTitle: FontStyle;
  boldRegular: FontStyle;
}

export const MainTypography: Typography = {
  regular: {
    fontWeight: 700,
    fontStyle: 'normal',
    fontSize: '1.25rem',
    lineHeight: '2.25rem',
  },
  regularTitle: {
    fontWeight: 700,
    fontStyle: 'normal',
    fontSize: '1.875rem',
    lineHeight: '2.75rem',
    uppercase: true,
  },
  regularBody: {
    fontWeight: 700,
    fontStyle: 'normal',
    fontSize: '1.5rem',
    lineHeight: '2.25rem',
  },
  regularBody2: {
    fontWeight: 700,
    fontStyle: 'normal',
    fontSize: '0.9375rem',
    lineHeight: '2.25rem',
  },
  boldHeading: {
    fontWeight: 600,
    fontStyle: 'normal',
    fontSize: '5rem',
    lineHeight: '4.5rem',
    uppercase: true,
  },
  boldTitle: {
    fontWeight: 600,
    fontStyle: 'normal',
    fontSize: '3rem',
    lineHeight: '4.5rem',
    uppercase: true,
  },
  boldSubTitle: {
    fontWeight: 600,
    fontStyle: 'normal',
    fontSize: '2.5rem',
    lineHeight: '4.5rem',
    uppercase: true,
  },
  boldRegular: {
    fontWeight: 600,
    fontStyle: 'normal',
    fontSize: '2rem',
    lineHeight: '2.5rem',
    uppercase: true,
  },
};
