/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import 'normalize.css';
import './base.css';

import {Header1} from './text';
import {Section} from './grid';

import media from '../helpers/media';

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 202.5px;
  padding: 0 20px;
  margin: 0 auto;
  box-sizing: border-box;
  
  @media ${media.medium} {
    padding: 0 30px;
    height: 270px;
  }
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Section>
      <Header>
        <Header1>Maciek Bodek</Header1>
      </Header>
      {children}
    </Section>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
