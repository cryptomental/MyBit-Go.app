module.exports = {
  ADDRESS: '0x011d426358F1982e327648506d3FdAE01d054297',
  OLD_ADDRESS: '0xb00bb34e0b0e60e5a7b59908aa4a368f50686635',
  ABI: [
    {
      constant: false,
      inputs: [
        {
          name: '_myBitFoundationPercentage',
          type: 'uint256',
        },
        {
          name: '_installerPercentage',
          type: 'uint256',
        },
        {
          name: '_functionSigner',
          type: 'address',
        },
      ],
      name: 'changeFundingPercentages',
      outputs: [
        {
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          name: '_amountToBeRaised',
          type: 'uint256',
        },
        {
          name: '_managerPercentage',
          type: 'uint256',
        },
        {
          name: '_amountToEscrow',
          type: 'uint256',
        },
        {
          name: '_installerID',
          type: 'bytes32',
        },
        {
          name: '_assetType',
          type: 'bytes32',
        },
        {
          name: '_blockAtCreation',
          type: 'uint256',
        },
        {
          name: '_ipfsHash',
          type: 'bytes32',
        },
      ],
      name: 'newAsset',
      outputs: [
        {
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          name: '_functionInitiator',
          type: 'address',
        },
        {
          name: '_holdingAddress',
          type: 'address',
        },
      ],
      name: 'destroy',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'database',
      outputs: [
        {
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          name: '_newTimeGivenForFunding',
          type: 'uint256',
        },
      ],
      name: 'changeFundingTime',
      outputs: [
        {
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'fundingTime',
      outputs: [
        {
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          name: '_assetID',
          type: 'bytes32',
        },
        {
          name: '_functionSigner',
          type: 'address',
        },
      ],
      name: 'removeAsset',
      outputs: [
        {
          name: '',
          type: 'bool',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          name: '_database',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: '_assetID',
          type: 'bytes32',
        },
        {
          indexed: true,
          name: '_installerID',
          type: 'bytes32',
        },
        {
          indexed: true,
          name: '_assetType',
          type: 'bytes32',
        },
        {
          indexed: false,
          name: '_ipfsHash',
          type: 'bytes32',
        },
      ],
      name: 'LogAssetFundingStarted',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          name: '_from',
          type: 'address',
        },
        {
          indexed: false,
          name: '_assetID',
          type: 'bytes32',
        },
        {
          indexed: false,
          name: '_amountOf',
          type: 'uint256',
        },
      ],
      name: 'LogLockAssetEscrow',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: '_assetID',
          type: 'bytes32',
        },
        {
          indexed: false,
          name: '_remover',
          type: 'address',
        },
      ],
      name: 'LogAssetRemoved',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          name: '_sender',
          type: 'address',
        },
        {
          indexed: false,
          name: '_newTimeForFunding',
          type: 'uint256',
        },
      ],
      name: 'LogFundingTimeChanged',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          name: '_myBitFoundationPercentage',
          type: 'uint256',
        },
        {
          indexed: false,
          name: '_installerPercentage',
          type: 'uint256',
        },
      ],
      name: 'LogFundingPercentageChanged',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: '_locationSent',
          type: 'address',
        },
        {
          indexed: true,
          name: '_amountSent',
          type: 'uint256',
        },
        {
          indexed: true,
          name: '_caller',
          type: 'address',
        },
      ],
      name: 'LogDestruction',
      type: 'event',
    },
  ],
};
