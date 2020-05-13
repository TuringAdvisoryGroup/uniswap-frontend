export const getTokenList = (constants, uniswapTokens) => {
  return {
    1: {
      ...friendsOfRoll(constants),
      ...socialMoney(constants),
      ...filterTokens(constants.SYMBOL, uniswapTokens[1])
    },
    4: {
      ...filterTokens(constants.SYMBOL, uniswapTokens[4])
    },
    allowedTokens
  }
}

export const allowedTokens = {
  ETH: true,
  DAI: true,
  WETH: true,
  USDC: true,
  aDAI: true
}

export const socialMoneyMediaMap = {
  '0x3867ef780a3afcf1201ef4f2acc6a46e3bd1eb88': 'https://roll-token.s3.amazonaws.com/COLR/colr_tokenImage.png',
  '0xfc1e690f61efd961294b3e1ce3313fbd8aa4f85d':
    'https://user-images.githubusercontent.com/24559073/73027994-92aeb000-3e02-11ea-9aa6-43b0eefda03c.png',
  '0x4057950247e4ec8dc7fe399ec19ea43e80b931c8':
    'https://roll-token.s3.amazonaws.com/DANK/+f1299e5e-e4b3-474c-a95c-b8ab1cce0f8e.jpg'
}

export const socialMoneyMap = {
  HUE: true,
  SKULL: true,
  FORCER: true,
  ALEX: true,
  JULIEN: true,
  CALVIN: true,
  SCOTT: true,
  PAUL: true,
  RDR: true,
  CAMI: true,
  TING: true,
  GCASH: true,
  ALXO: true,
  YUMI: true,
  WGM: true,
  PYGOZ: true

  // SCB: true
}

export const friendsOfRollMap = {
  MBC: true,
  COLR: true,
  SLP: true,
  RCLE: true,
  DANK: true
}

export const tokens = {
  ETH: true,
  DAI: true,
  WETH: true,
  USDC: true,
  aDAI: true
}

// filter allowed tokens
const filterTokens = (SYMBOL, tokens) => {
  return Object.keys(tokens).reduce((acc, curr) => {
    if (allowedTokens[tokens[curr][SYMBOL]]) {
      acc[curr] = tokens[curr]
    }
    return acc
  }, {})
}

// FRIENDS OF ROLL
export const friendsOfRoll = ({ NAME, SYMBOL, DECIMALS, EXCHANGE_ADDRESS }) => {
  return {
    '0x8888889213DD4dA823EbDD1e235b09590633C150': {
      [NAME]: 'Marblecoin',
      [SYMBOL]: 'MBC',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0xE1b7AeC3639068b474bFbcB916580fc28A20717B'
    },
    '0x3867ef780a3afcf1201ef4f2acc6a46e3bd1eb88': {
      [NAME]: 'Color',
      [SYMBOL]: 'COLR',
      [DECIMALS]: 0,
      [EXCHANGE_ADDRESS]: '0x3F0c63dA66457dedc2677BEF6bbdd457BA7A3C0b'
    },
    '0x37236cd05b34cc79d3715af2383e96dd7443dcf1': {
      [NAME]: 'Small Love Potion',
      [SYMBOL]: 'SLP',
      [DECIMALS]: 0,
      [EXCHANGE_ADDRESS]: '0xf4158e282F2317597E31c028978C7fb7275d6Fb4'
    },
    '0x5a844590c5b8f40ae56190771d06c60b9ab1da1c': {
      [NAME]: 'Ross Campbell Legal Engineering',
      [SYMBOL]: 'RCLE',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0xd994b83F2Fca809704D6819935D89f3d0f5DE555'
    },
    '0x4057950247e4ec8dc7fe399ec19ea43e80b931c8': {
      [NAME]: 'DanKoin',
      [SYMBOL]: 'DANK',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0xD529c8Ae85989d556550B8be2720d7059d3f07cA'
    }
  }
}

// ROLL SOCIAL MONEY
export const socialMoney = ({ NAME, SYMBOL, DECIMALS, EXCHANGE_ADDRESS }) => {
  return {
    '0xDcfE18bc46f5A0Cd0d3Af0c2155d2bCB5AdE2fc5': {
      [NAME]: 'Hue',
      [SYMBOL]: 'HUE',
      [DECIMALS]: 4,
      [EXCHANGE_ADDRESS]: '0x3fCb35Aada553A888433eFC45dF1B70937A5942D'
    },
    '0xbcc66ed2ab491e9ae7bf8386541fb17421fa9d35': {
      [NAME]: 'Skull',
      [SYMBOL]: 'SKULL',
      [DECIMALS]: 4,
      [EXCHANGE_ADDRESS]: '0xae33701b6b48267dB4BB51e472e4E7aB5aAD2e3E'
    },
    '0xc1fb6c015fc535abd331d3029de76a62e412fb23': {
      [NAME]: 'Forcer',
      [SYMBOL]: 'FORCER',
      [DECIMALS]: 4,
      [EXCHANGE_ADDRESS]: '0x8dC13E59ad8BBE4424BA8c65fF1361543c195395'
    },
    '0x8BA6DcC667d3FF64C1A2123cE72FF5F0199E5315': {
      [NAME]: 'AlexMasmej',
      [SYMBOL]: 'ALEX',
      [DECIMALS]: 4,
      [EXCHANGE_ADDRESS]: '0xB49c53f2E459cE96b04318610aBD77F4E83113dB'
    },
    '0xe6710e0CdA178f3D921f456902707B0d4C4A332B': {
      [NAME]: 'Julien',
      [SYMBOL]: 'JULIEN',
      [DECIMALS]: 4,
      [EXCHANGE_ADDRESS]: '0x4cE8d670c0CCEa741829551B347e2eBabdba638F'
    },
    '0xdc8092AaF83e00Ebf9B01A2e90b7B7eF867ba503': {
      [NAME]: 'Calvin',
      [SYMBOL]: 'CALVIN',
      [DECIMALS]: 4,
      [EXCHANGE_ADDRESS]: '0x657de502Ee9feD80d5496A1dA0007Fe72B2bd18B'
    },
    '0x4057950247e4ec8dc7fe399ec19ea43e80b931c8': {
      [NAME]: 'DanKoin',
      [SYMBOL]: 'DANK',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0xD529c8Ae85989d556550B8be2720d7059d3f07cA'
    },
    '0xbB98Fc1fD1080D2B8bdaD75c51D30B50c6F59b62': {
      [NAME]: 'PYGOZ',
      [SYMBOL]: 'PYGOZ',
      [DECIMALS]: 4,
      [EXCHANGE_ADDRESS]: '0xA8566d5ad1Ba44Cd763d8Ba8846310a7b12E5647'
    },
    '0x219803d17f3067eb53d521ba8948d2734f402f7d': {
      [NAME]: 'WGM',
      [SYMBOL]: 'WGM',
      [DECIMALS]: 4,
      [EXCHANGE_ADDRESS]: '0x4ee32485431b366bb7e8a3a200954265c5f7cd57'
    },
    '0x25859743ED0861665611B81E47682e889b48313B': {
      [NAME]: 'Yumi',
      [SYMBOL]: 'YUMI',
      [DECIMALS]: 4,
      [EXCHANGE_ADDRESS]: '0xd608bA0e93805B2b860794eCAeB1Ed9b905E4f95'
    },
    '0x4317Ea4820F8D9ea6A103553A89Cb261B6Ea7F2a': {
      [NAME]: 'Alxocity',
      [SYMBOL]: 'ALXO',
      [DECIMALS]: 4,
      [EXCHANGE_ADDRESS]: '0xcf66ECD1b425B5C3E34BDfB2c0CdE3434cb64771'
    },
    '0xc53f6C2Ac35D30cc47Ddf3C320874b21dFA38791': {
      [NAME]: 'Gcash',
      [SYMBOL]: 'GCASH',
      [DECIMALS]: 4,
      [EXCHANGE_ADDRESS]: '0x3e3fd9230518ba8644df5b48423e2be5e6016540'
    },
    '0xd1b183f425f7e6a0c83ab1cd84cfde2d84ba049d': {
      [NAME]: 'Tingles',
      [SYMBOL]: 'TING',
      [DECIMALS]: 4,
      [EXCHANGE_ADDRESS]: '0x2682867c58a18342cef4f57493a93c6e9799a4e9'
    },
    '0xA809CeDeE9B61956c768EAa10272dd5E0FD1A985': {
      [NAME]: 'CAMI',
      [SYMBOL]: 'CAMI',
      [DECIMALS]: 4,
      [EXCHANGE_ADDRESS]: '0x36BFbEDc15f822A78940965EbB772A55b6A38A81'
    },
    '0x3C9Ca73d5309d38c6F2C21b78b9aE1f4b2441188': {
      [NAME]: 'RADAR',
      [SYMBOL]: 'RDR',
      [DECIMALS]: 4,
      [EXCHANGE_ADDRESS]: '0x0385619bbeAED92aC451806a7ab79905973cE806'
    },
    '0x8db6Da2120b346FAa7f206841f2FB005BBE0DFD8': {
      [NAME]: 'Paul',
      [SYMBOL]: 'PAUL',
      [DECIMALS]: 4,
      [EXCHANGE_ADDRESS]: '0xf5498595586b0A83223eA3a369b88E11B9cc1F13'
    },
    '0x27fD686Db10E0aE047fe8FE1DE9830C0e0dC3CFA': {
      [NAME]: 'Scott',
      [SYMBOL]: 'SCOTT',
      [DECIMALS]: 4,
      [EXCHANGE_ADDRESS]: '0x76F455C38AB1FeF84cF27F51065eE1374Fa400e5'
    }
  }
}
