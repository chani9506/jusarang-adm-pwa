import styled from 'styled-components';
import { Color, FontFamily, FontSize, FontWeight, Spacing } from '../obj.constants';

export const H1 = styled.h1`
  margin: 0;
  color: ${Color.GrayLight};
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Bold};
  font-size: ${FontSize.XLarge};
`;

export const H2 = styled.h2`
  margin-bottom: ${Spacing.Medium};
  margin-top: ${Spacing.Large};
  color: ${Color.GrayLight};
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.SemiBold};
  font-size: ${FontSize.XLarge};
`;

export const H3 = styled.h3`
  margin: 0;
  margin-bottom: ${Spacing.Medium};
  color: ${Color.GrayLight};
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Normal};
  font-size: ${FontSize.Large};
`;

export const H4 = styled.h4`
  margin: 0;
  color: ${Color.GrayLight};
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Normal};
  font-size: ${FontSize.Medium};
`;

export const Body = styled.p`
  margin: 0;
  color: ${Color.GrayLight};
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Normal};
  font-size: ${FontSize.Small};

  & + & {
    margin-bottom: ${Spacing.XSmall};
  }
`;

export const Caption = styled.p`
  margin: 0;
  color: ${Color.GrayLight};
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Light};
  font-size: ${FontSize.XSmall};
`;
