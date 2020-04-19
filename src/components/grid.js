import styled from 'styled-components';
import media from '../helpers/media';

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  flex: 1;
  min-height: 100vh;
  
  @media ${media.large} {
    max-width: 1440px;
  }
`;

export const Tiles = styled.div`
  display: flex;
  padding: 0 20px;
  margin-bottom: 100px;
  width: 100%;
  flex-wrap: wrap;
  box-sizing: border-box;
  
  @media ${media.medium} {
    padding: 0 30px;
    justify-content: space-between;
    flex-direction: row;
  }
`;

export const Tile = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  
  ${props =>
  props.centered &&
  `
    align-items: center;
    justify-content: center;
    text-align: center;
  `};
  
  @media ${media.medium} {
    width: 50%;
    
    &:nth-child(odd) { 
      padding-right: 15px;
    }
    
    &:nth-child(even) { 
      padding-left: 15px;
    }
  }
`;
