import React from 'react';

import styled from 'styled-components';

import { useTheme } from '../../contexts/theme_context';
import { FontStyle } from '../../themes/typography';

const StyledText = styled.p<{
  fontStyle: FontStyle;
  color?: string;
}>`
  font-weight: ${({ fontStyle }) => fontStyle.fontWeight};
  font-style: ${({ fontStyle }) => fontStyle.fontStyle};
  font-size: ${({ fontStyle }) => fontStyle.fontSize};
  line-height: ${({ fontStyle }) => fontStyle.lineHeight};
  ${({ fontStyle }) => fontStyle.uppercase && `text-transform: uppercase;`}
  padding: 0;
  margin: 0;
  ${({ color }) =>
    color &&
    `
    color: ${color};
  `}
`;

export enum TypographyType {
  REGULAR = 'regular',
  REGULAR_TITLE = 'regularTitle',
  REGULAR_BODY = 'regularBody',
  REGULAR_BODY2 = 'regularBody2',
  BOLD_HEADING = 'boldHeading',
  BOLD_TITLE = 'boldTitle',
  BOLD_SUBTITLE = 'boldSubTitle',
  BOLD_REGULAR = 'boldRegular',
}

interface ITypography extends React.HTMLAttributes<HTMLDivElement> {
  type: TypographyType;
  color?: string;
}

export const Typography: React.FC<ITypography> = ({ type, children, color, ...props }) => {
  const { theme } = useTheme();

  const getFontStyle = () => theme.typography[type];

  return (
    <StyledText color={color} fontStyle={getFontStyle()} {...props}>
      {children}
    </StyledText>
  );
};
