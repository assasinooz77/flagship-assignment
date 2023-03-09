import React, { useState } from 'react';

import styled from 'styled-components';

import Button from '../components/common/button';
import Input from '../components/common/input';
import { Typography, TypographyType } from '../components/common/typography';
import { useSwap } from '../contexts/swap_context';
import { useWallet } from '../contexts/wallet_context';

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
`;

const StyledButton = styled(Button)`
  margin: 0 1rem;
`;

const Swap = () => {
  const { account } = useWallet();
  const { fooBalance, barBalance, funded, fundFooToken, exchange } = useSwap();

  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');

  const handleFund = async () => {
    setLoading(true);
    await fundFooToken();
    setLoading(false);
  };

  const handleExchange = async (isFoo: boolean) => {
    setLoading(true);
    await exchange(Number(value), isFoo);
    setLoading(false);
  };

  return (
    <Container>
      <Flex>
        <Typography type={TypographyType.BOLD_SUBTITLE}>FOO: {fooBalance.toLocaleString()}</Typography>
        <StyledButton disabled={loading || !account || funded} onClick={handleFund}>
          {account && funded ? 'Funded' : 'Fund'}
        </StyledButton>
      </Flex>
      <Typography type={TypographyType.BOLD_SUBTITLE}>BAR: {barBalance.toLocaleString()}</Typography>

      <Flex>
        <Input onChange={(e) => setValue(e.target.value)} placeholder="Enter amount" value={value} />
      </Flex>

      <Flex>
        <StyledButton
          disabled={
            loading || !account || Number.isNaN(Number(value)) || Number(value) <= 0 || Number(value) > fooBalance
          }
          onClick={() => handleExchange(true)}
        >
          {`Swap FOO -> BAR`}
        </StyledButton>
        <StyledButton
          disabled={
            loading || !account || Number.isNaN(Number(value)) || Number(value) <= 0 || Number(value) > barBalance
          }
          onClick={() => handleExchange(false)}
        >
          {`Swap BAR -> FOO`}
        </StyledButton>
      </Flex>
    </Container>
  );
};

export default Swap;
