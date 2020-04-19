import React from 'react';
import styled from 'styled-components';

import externalLinkImage from '../images/external-link.svg';

const Root = styled.img`
  && {
    position: absolute;
    right: 30px;
    top: 30px;
    z-index: 2;
    opacity: 0;
    transform: scale(0.95);
    transition: all 0.3s ease-in-out;
  }
`;

const ExternalLink = () => (
  <Root src={externalLinkImage} />
);

export default ExternalLink