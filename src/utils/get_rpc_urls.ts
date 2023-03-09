import { SupportedChainId } from '../constants/chains';
import { RPC_URLS } from '../constants/rpc';

/* eslint-disable import/prefer-default-export */
export const getRpcUrls = (chainId: SupportedChainId): [string] => {
  switch (chainId) {
    case SupportedChainId.AVAX_TESTNET:
      return [RPC_URLS[chainId]];
    default:
  }
  // Our API-keyed URLs will fail security checks when used with external wallets.
  throw new Error('RPC URLs must use public endpoints');
};
