/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { ethers } from 'ethers';

import { CONTRACT_ADDRESSES } from '../constants/contracts';
import { useBarTokenContract, useExchangeContract, useFooTokenContract } from '../hooks/useContract';
import { useWallet } from './wallet_context';

export interface ISwapContext {
  fooBalance: number;
  barBalance: number;
  funded: boolean;
  updateAssets: () => void;
  fundFooToken: () => void;
  exchange: (amount: number, isFoo: boolean) => void;
}

const SwapContext = React.createContext<Maybe<ISwapContext>>(null);

export const SwapProvider = ({ children = null as any }) => {
  const { account } = useWallet();

  const fooTokenContract = useFooTokenContract();
  const barTokenContract = useBarTokenContract();
  const exchangeContract = useExchangeContract();

  const [fooBalance, setFooBalance] = useState(0);
  const [barBalance, setBarBalance] = useState(0);
  const [funded, setFunded] = useState(true);

  const updateAssets = useCallback(async () => {
    if (account) {
      try {
        if (fooTokenContract) {
          const fooAmount = await fooTokenContract.balanceOf(account);
          setFooBalance(Number(ethers.utils.formatEther(fooAmount)));
        } else {
          setFooBalance(0);
        }
      } catch (e) {
        console.error('foo balance error:', e);
        setFooBalance(0);
      }

      try {
        if (barTokenContract) {
          const barAmount = await barTokenContract.balanceOf(account);
          setBarBalance(Number(ethers.utils.formatEther(barAmount)));
        } else {
          setBarBalance(0);
        }
      } catch (e) {
        console.error('bar balance error:', e);
        setBarBalance(0);
      }

      try {
        if (fooTokenContract) {
          const _funded = await fooTokenContract.funded(account);
          setFunded(_funded);
        } else {
          setFunded(true);
        }
      } catch (e) {
        console.error('foo funded error:', e);
        setFunded(true);
      }
    }
  }, [account, fooTokenContract, barTokenContract]);

  useEffect(() => {
    updateAssets();
  }, [account, fooTokenContract, barTokenContract]);

  const fundFooToken = async () => {
    if (account && fooTokenContract) {
      try {
        await fooTokenContract.estimateGas.fund();
        const tx = await fooTokenContract.fund();
        await tx.wait();
        updateAssets();
      } catch (e: any) {
        console.error('fund error:', e);
        toast.error(`Failed to fund: ${e.message}`);
      }
    }
  };

  const getAllowance = async (isFoo: boolean) => {
    if (account) {
      const tokenContract = isFoo ? fooTokenContract : barTokenContract;
      try {
        if (tokenContract) {
          const amount = await tokenContract.allowance(account, CONTRACT_ADDRESSES.Exchange);
          return Number(ethers.utils.formatEther(amount));
        }
      } catch (e) {
        console.error('get allowance error:', e);
      }
    }
    return 0;
  };

  const approveToken = async (isFoo: boolean) => {
    const tokenContract = isFoo ? fooTokenContract : barTokenContract;
    if (account && tokenContract) {
      try {
        await tokenContract.estimateGas.approve(
          CONTRACT_ADDRESSES.Exchange,
          '1000000000000000000000000000000000000000000000000000000'
        );
        const tx = await tokenContract.approve(
          CONTRACT_ADDRESSES.Exchange,
          '1000000000000000000000000000000000000000000000000000000'
        );
        await tx.wait();
      } catch (e: any) {
        console.error('approve error:', e);
        toast.error(`Approve error: ${e.message}`);
      }
    }
  };

  const exchange = async (amount: number, isFoo: boolean) => {
    const allowance = await getAllowance(isFoo);
    if (allowance < amount) {
      await approveToken(isFoo);
    }

    if (exchangeContract) {
      const from = isFoo ? CONTRACT_ADDRESSES.FooToken : CONTRACT_ADDRESSES.BarToken;
      const to = isFoo ? CONTRACT_ADDRESSES.BarToken : CONTRACT_ADDRESSES.FooToken;

      try {
        await exchangeContract.estimateGas.swap(from, to, ethers.utils.parseEther(String(amount)).toString());
        const tx = await exchangeContract.swap(from, to, ethers.utils.parseEther(String(amount)).toString());
        await tx.wait();
        updateAssets();
      } catch (e: any) {
        console.error('Swap error:', e);
        toast.error(`Swap error: ${e.message}`);
      }
    }
  };

  return (
    <SwapContext.Provider value={{ fooBalance, barBalance, funded, updateAssets, fundFooToken, exchange }}>
      {children}
    </SwapContext.Provider>
  );
};

export const useSwap = () => {
  const context = useContext(SwapContext);

  if (!context) {
    throw new Error('Component rendered outside the provider tree');
  }

  return context;
};
