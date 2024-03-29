import { DeploymentNetwork } from '../utils/Constants';

const mainnet = (address: string) => ({
    [DeploymentNetwork.Mainnet]: address,
    [DeploymentNetwork.Tenderly]: address
});

const sepolia = (address: string) => ({
    [DeploymentNetwork.Sepolia]: address
});

const TestNamedAccounts = {
    ethWhale: {
        ...mainnet('0xDA9dfA130Df4dE4673b89022EE50ff26f6EA73Cf')
    },
    daiWhale: {
        ...mainnet('0xb527a981e1d415AF696936B3174f2d7aC8D11369')
    },
    linkWhale: {
        ...mainnet('0xc6bed363b30DF7F35b601a5547fE56cd31Ec63DA')
    },
    bntWhale: {
        ...mainnet('0x221A0e3C9AcEa6B3f1CC9DfC7063509c89bE7BC3')
    },
    usdcWhale: {
        ...mainnet('0x55FE002aefF02F77364de339a1292923A15844B8')
    },
    wbtcWhale: {
        ...mainnet('0x6daB3bCbFb336b29d06B9C793AEF7eaA57888922')
    }
};

const TokenNamedAccounts = {
    dai: {
        ...mainnet('0x6B175474E89094C44Da98b954EedeAC495271d0F')
    },
    link: {
        ...mainnet('0x514910771AF9Ca656af840dff83E8264EcF986CA')
    },
    weth: {
        ...mainnet('0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2')
    },
    usdc: {
        ...mainnet('0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48')
    },
    wbtc: {
        ...mainnet('0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599')
    },
    bnt: {
        ...mainnet('0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C')
    }
};

const UniswapNamedAccounts = {
    uniswapV3Router: { ...mainnet('0xE592427A0AEce92De3Edee1F18E0157C05861564') },
    uniswapV2Router02: { ...mainnet('0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D') },
    uniswapV2Factory: { ...mainnet('0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f') }
};

const SushiSwapNamedAccounts = {
    sushiSwapRouter: { ...mainnet('0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F') },
    sushiSwapFactory: { ...mainnet('0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac') }
};

const BalancerNamedAccounts = {
    balancerVault: { ...mainnet('0xBA12222222228d8Ba445958a75a0704d566BF2C8') }
};

const BancorNamedAccounts = {
    bancorNetworkV2: { ...mainnet('0x2F9EC37d6CcFFf1caB21733BdaDEdE11c823cCB0') },
    bancorNetworkV3: { ...mainnet('0xeEF417e1D5CC832e619ae18D2F140De2999dD4fB') },
    carbonController: { ...mainnet('0xC537e898CD774e2dCBa3B14Ea6f34C93d5eA45e1') },
    carbonPOL: { ...mainnet('0xD06146D292F9651C1D7cf54A3162791DFc2bEf46') }
};

export const NamedAccounts = {
    deployer: {
        ...mainnet('ledger://0x5bEBA4D3533a963Dedb270a95ae5f7752fA0Fe22'),
        ...sepolia('ledger://0x0f28D58c00F9373C00811E9576eE803B4eF98abe')
    },
    deployerV2: { ...mainnet('0xdfeE8DC240c6CadC2c7f7f9c257c259914dEa84E') },
    foundationMultisig: { ...mainnet('0xeBeD45Ca22fcF70AdCcAb7618C51A3Dbb06C8d83') },
    foundationMultisig2: { ...mainnet('0x0c333d48Af19c2b42577f3C8f4779F0347F8C819') },
    daoMultisig: { ...mainnet('0x7e3692a6d8c34a762079fa9057aed87be7e67cb8') },
    daoPauserMultisig: { ...mainnet('0xc140c1CD2e587fC04DAa780d49b616F768476660') },
    protocolWallet: { ...mainnet('0xba7d1581Db6248DC9177466a328BF457703c8f84') },

    ...TokenNamedAccounts,
    ...TestNamedAccounts,
    ...UniswapNamedAccounts,
    ...SushiSwapNamedAccounts,
    ...BalancerNamedAccounts,
    ...BancorNamedAccounts
};
