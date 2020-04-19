import styled from 'styled-components';
import media from '../helpers/media';

import {
  headerFont,
  paragraphFont,
  regular as fontRegular,
  bold as fontBold,
  black as fontBlack,
} from '../helpers/fonts';

export const Paragraph = styled.p`
  font-size: 16px;
  font-family: ${paragraphFont};
  font-weight: ${fontRegular};
  line-height: 175%;
  margin: 0;
  
  @media ${media.medium} {
    font-size: 18px;
    line-height: 150%;
  }
`;

export const Header1 = styled.h1`
  margin: 0;
  font-family: ${headerFont};
  font-weight: ${fontBlack};
  font-size: 48px;
  
  @media ${media.medium} {
    font-size: 64px;
  }
`;

export const Header2 = styled.h2`
  margin: 0;
  font-family: ${headerFont};
  font-weight: ${fontBlack};
  font-size: 36px;
  
  @media ${media.medium} {
    font-size: 48px;
  }
`;

export const Header3 = styled.h3`
  margin: 0;
  font-family: ${headerFont};
  font-weight: ${fontBold};
  font-size: 18px;
  
  @media ${media.medium} {
    font-size: 24px;
  }
`;

export const HeaderWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  text-align: center;
  padding: 0 20px;
  
  @media ${media.medium} {
    padding: 0 30px;
  }
  
  ${Paragraph} {
    margin-top: 15px;
  }
`;

export const AnchorLink = styled.a`
  text-decoration: none;
  color: black;
  font-family: ${headerFont};
  font-weight: ${fontBold};
`;