import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Header2, HeaderWrapper, Paragraph } from '../components/text';
import { Tile, Tiles } from '../components/grid';
import media from '../helpers/media';
import { black as fontBlack, bold as fontBold} from '../helpers/fonts';

import Cvfile from '../../static/Maciek_Bodek_CV_2020.pdf';

import ProductTile from '../components/product-tile';
import ExternalLink from '../components/external-link';
import externalLinkImage from '../images/external-link.svg';

import 'normalize.css';
import '../components/base.css';

const greetingText = () => {
  const now = moment();
  const currentHour = now.hour();
  if (currentHour >= 12 && currentHour <=17) return {
    welcomeText: "Good afternoon",
    footerText: "Have a good evening."
  };
  else if (currentHour > 18 || (currentHour < 6 && now.format('A') === 'AM')) return {
    welcomeText: "Good evening",
    footerText: "Have a good night and rest well."
  };
  else return {
    welcomeText: "Good morning",
    footerText: "Enjoy the rest of your day!"
  };
};

const getBoundingPosition = event => {
  const rect = event.target.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
};

const WelcomeTile = styled(Tile)`
  padding: 0;
  
  ${Header2} {
    margin-bottom: 30px;
  }
  
  @media ${media.medium} {
    min-height: 400px;
    padding: 0;
  }
`;

const WelcomeTileWrapper = styled.div`
  padding: 30px;
  color: white;
  background: linear-gradient(120.47deg, #000000 0%, #27335E 100%);
  
  @media ${media.medium} {
    padding: 60px;
  }
`;

const ContactTextTile = styled(Tile)`
  margin-top: 50px;
  
  @media ${media.medium} {
    margin-top: 0;
  }
`;

const ContactText = styled(Paragraph)`
  margin-bottom: 30px;
  font-weight: ${fontBold};
  
  a {
    font-size: 24px;
    line-height: 150%;
  }
  
  strong {
    font-weight: ${fontBlack};
  }
`;

const AddressText = styled(Paragraph)`
  margin-bottom: 30px;
  font-weight: ${fontBold};
`;

const CvLink = styled.a`
  font-size: 24px;
  text-transform: uppercase;
`;

const ProductTiles = styled(Tiles)`
  margin-top: 50px;
  margin-bottom: 50px;
`;

const Photos = styled.a`
  position: relative;
  margin: 25px 20px 50px;
  padding: 0 20px;
  box-sizing: border-box;
  width: 100%;
  cursor: pointer;
  
  ${ExternalLink} {
    right: 60px;
  }
  
  @media ${media.medium} {
    margin: 50px 0 100px;
    padding: 0 30px;
  }
  
  > img {
    max-width: 100%;
  }
  
  &:hover {
    ${ExternalLink} {
      opacity: 1;
      transform: scale(1) translate(3px, -3px);
      transition: all 0.3s ease-in-out;
    }
  }
`;

const Footer = styled(HeaderWrapper)`
  margin-bottom: 100px;
  
  ${Paragraph} {
    font-size: 14px;
  }
`;

const IndexPage = ({data}) => {
  const {welcomeText} = greetingText();
  const {allProductsJson, mallorcaImage} = data;

  return (
    <Layout>
      <SEO title="Home"/>
      <Tiles>
        <WelcomeTile>
          <WelcomeTileWrapper>
            <Header2>{welcomeText},</Header2>
            <Paragraph>
              I am a frontend engineer with more than thirteen years of experience working with digital agencies,
              software houses and Silicon Valley startups.<br/><br/>
              It also happens that I have more than a decade of remote work under my belt anywhere from
              Pacific Standard Time to Australian Eastern.<br/><br/>
              Below is a selection of my mostly product-oriented work of which I have been a part of.{' '}
              Full details available upon request.
            </Paragraph>
          </WelcomeTileWrapper>
        </WelcomeTile>
        <ContactTextTile centered>
          <ContactText>
            <strong><a href="mailto:maciej.bodek@gmail.com">maciej.bodek@gmail.com</a><br/></strong>
            <a href="https://linkedin.com/in/maciekbodek" target="_blank"
               rel="noopener noreferrer">linkedin.com/in/maciekbodek</a>
          </ContactText>
          <AddressText>
            Warsaw, Poland (GMT+1)
          </AddressText>
          <CvLink href={Cvfile} as="a">CV / PDF</CvLink>
        </ContactTextTile>
      </Tiles>
      <HeaderWrapper>
        <Header2>Product development</Header2>
        <Paragraph>Startups and applications I've been a part of for long periods of time</Paragraph>
      </HeaderWrapper>
      <ProductTiles>
        {allProductsJson.edges.map(({ node }, key) => (
          <ProductTile product={node} {...{key}} />
        ))}
      </ProductTiles>
      <HeaderWrapper>
        <Header2>Photography</Header2>
        <Paragraph>It's not just about programming. Explore the portfolio of pictures I've been taking my entire adult life.</Paragraph>
      </HeaderWrapper>
      <Photos href="https://maciek-bodek.squarespace.com">
        <ExternalLink src={externalLinkImage} alt="" />
        <Img fluid={mallorcaImage.childImageSharp.fluid} />
      </Photos>
      <Footer>
        <Paragraph>&copy; 2020 Maciek Bodek</Paragraph>
      </Footer>
    </Layout>
  );
};

export const pagequery = graphql`
  query ProductsListQuery {
    allProductsJson {
      edges { 
        node {
          id
          title 
          url
          job_title
          timespan
          excerpt
        }
      }
    }
    mallorcaImage: file(relativePath: { eq: "Mallorca_12_2018_img0035.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440, maxHeight: 939) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;


export default IndexPage;
