import { useState } from 'react';

import styled from 'styled-components';

import { useTheme } from '../contexts/theme_context';
import { useWallet } from '../contexts/wallet_context';
import { getShortWalletAddress } from '../utils';
import Button from './common/button';
import WalletModal from './modals/wallet_modal';

const Container = styled.div`
  position: relative;

  button {
    white-space: nowrap;
    font-size: 1rem;
    height: 3rem;
  }
`;

const StyledButton = styled(Button)`
  padding: 0.5rem !important;
`;

const WalletButton = () => {
  const { account } = useWallet();
  const { theme } = useTheme();

  const [showModal, setShowModal] = useState(false);

  return (
    <Container>
      <StyledButton color={theme.colors.white} onClick={() => setShowModal(true)}>
        {account ? getShortWalletAddress(account) : 'Connect'}
      </StyledButton>

      <WalletModal onClose={() => setShowModal(false)} visible={showModal} />
    </Container>
  );
};

export default WalletButton;
