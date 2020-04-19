import React from 'react';
import styled from 'styled-components';

import { Tile } from '../components/grid';
import media from '../helpers/media';
import { Header2, Header3, Paragraph } from '../components/text';
import ExternalLink from '../components/external-link';

import productsConfig from '../configs/products';

const Root = styled(Tile)`
  margin-bottom: 50px;
`;

const ProductTileText = styled.div`
  margin: 50px 30px 0 30px;
`;

const ProductTileImageBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
`;

const ProductTileImage = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: black;
  padding: 100px 0;
  
  @media ${media.medium} {
    height: 300px;
    padding: 0;
    
    img {
      max-width: auto;
    }
  }
  
  @media ${media.large} {
    height: 400px;
  }
 
  img {
    position: relative;
    z-index: 1;
    max-width: 50%;
  }
  
  ${ProductTileImageBackground} {
    transition: all 0.35s ease-in-out;
  }
  
  &:hover {
    ${ProductTileImageBackground} {
      opacity: 0.75;
      transition: all 0.35s ease-in-out;
    }
    
    ${ExternalLink} {
      opacity: 1;
      transform: scale(1) translate(3px, -3px);
      transition: all 0.3s ease-in-out;
    }
  }
`;

const ProductTileHeader = styled.div`
  margin-bottom: 30px;
  
  ${Header2},
  ${Header3} {
    margin-bottom: 5px;
  }
`;

export default function ProductTile({ product }) {
  const hrefProps = {
    href: product.url,
    rel: 'noopener noreferrer',
    as: 'a',
    target: '_blank'
  };

  return (
    <Root>
      <ProductTileImage {...hrefProps}>
        <ProductTileImageBackground
          style={{ background: `linear-gradient(120.47deg, ${productsConfig[product.id].gradient[0]} 0%, ${productsConfig[product.id].gradient[1]} 100%)` }}
        />
        <ExternalLink />
        <img src={productsConfig[product.id].logo}/>
      </ProductTileImage>
      <ProductTileText>
        <ProductTileHeader>
          <Header2 {...hrefProps}>{product.title}</Header2>
          <Header3>{product.job_title}</Header3>
          <Paragraph>{product.timespan}</Paragraph>
        </ProductTileHeader>
        <Paragraph dangerouslySetInnerHTML={{ __html: product.excerpt }}/>
      </ProductTileText>
    </Root>
  );
}