import { SupportedChainId } from './chains';

/**
 * These are the network URLs used by the interface when there is not another available source of chain data
 */
// eslint-disable-next-line import/prefer-default-export
export const RPC_URLS: { [key in SupportedChainId]: string } = {
  [SupportedChainId.AVAX_TESTNET]: `https://api.avax-test.network/ext/bc/C/rpc`,
};
