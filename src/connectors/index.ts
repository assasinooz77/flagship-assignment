/* eslint-disable import/no-extraneous-dependencies */
import { Web3Provider } from '@ethersproject/providers';
import { InjectedConnector } from '@web3-react/injected-connector';

import { ALL_SUPPORTED_CHAIN_IDS, DEFAULT_NETWORK } from '../constants/chains';
import { RPC_URLS } from '../constants/rpc';
import getLibrary from '../utils/get_library';
import { NetworkConnector } from './network_connector';

export const network = new NetworkConnector({
  urls: RPC_URLS,
  defaultChainId: Number(DEFAULT_NETWORK),
});

let networkLibrary: Web3Provider | undefined;
export function getNetworkLibrary(): Web3Provider {
  // eslint-disable-next-line no-return-assign
  return (networkLibrary = networkLibrary ?? getLibrary(network.provider));
}

export const injected = new InjectedConnector({
  supportedChainIds: ALL_SUPPORTED_CHAIN_IDS,
});
