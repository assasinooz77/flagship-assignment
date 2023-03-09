import { SupportedChainId } from './chains';

interface BaseChainInfo {
  readonly explorer: string;
  readonly label: string;
  readonly nativeCurrency: {
    name: string; // e.g. 'Goerli ETH',
    symbol: string; // e.g. 'gorETH',
    decimals: number; // e.g. 18,
  };
}

export type ChainInfoMap = { readonly [chainId: number]: BaseChainInfo } & {
  readonly [chainId in SupportedChainId]: BaseChainInfo;
};

export const CHAIN_INFO: ChainInfoMap = {
  [SupportedChainId.AVAX_TESTNET]: {
    explorer: 'https://testnet.snowtrace.io/',
    label: 'Avalanche Testnet C-Chain',
    nativeCurrency: { name: 'Avalanche', symbol: 'AVAX', decimals: 18 },
  },
};
