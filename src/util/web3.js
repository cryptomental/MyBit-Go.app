import Web3 from 'web3';
import { debug } from '../constants';

const getWeb3Async = () => {
  if (window.web3) {
    // Injected Web3 detected. Use Mist/MetaMask's provider.
    window.web3js = new Web3(window.web3.currentProvider);
    debug('Metamask Loaded');
  }
  return window.web3js;
};

export default getWeb3Async;
