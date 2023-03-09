/* eslint-disable react/no-array-index-key */
import React from 'react';

import styled from 'styled-components';

import WalletButton from './wallet_button';

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem 2rem;
  height: 6.25rem;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.text1};

  ${({ theme }) => `${theme.media_width.upToLarge} {
    padding: 1rem;
  }`};
`;

const Header: React.FC = () => (
  <Container>
    <WalletButton />
  </Container>
);

export default Header;
