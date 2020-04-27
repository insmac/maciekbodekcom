import styled from 'styled-components';

export default styled.img`
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