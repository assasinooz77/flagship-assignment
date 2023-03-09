/* eslint-disable no-nested-ternary */
export enum SupportedChainId {
  AVAX_TESTNET = 43113,
}

export const CHAIN_IDS_TO_NAMES = {
  [SupportedChainId.AVAX_TESTNET]: 'avax-testnet',
};

export const ALL_SUPPORTED_CHAIN_IDS: SupportedChainId[] = Object.values(SupportedChainId).filter(
  (id) => typeof id === 'number'
) as SupportedChainId[];

export const DEFAULT_NETWORK = SupportedChainId.AVAX_TESTNET;
