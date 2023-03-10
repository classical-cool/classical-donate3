import React from 'react';
import './index.css';

// import {
//   AvatarComponent,
//   DisclaimerComponent,
//   getDefaultWallets,
// } from '@rainbow-me/rainbowkit';
// import '@rainbow-me/rainbowkit/styles.css';
import { configureChains, createClient } from 'wagmi';
import { goerli, mainnet, polygon, polygonMumbai } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

import { useAccount, useConnect, useEnsName } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';

// const Disclaimer: DisclaimerComponent = ({ Text, Link }) => (
//   <Text>
//     这里是 Donate3 的免责声明，待补充{' '}
//     <Link href="https://termsofservice.xyz">Terms of Service</Link> and 这里是
//     Donate3 的免责声明，待补充{' '}
//     <Link href="https://disclaimer.xyz">Disclaimer</Link>
//   </Text>
// );

// const CustomAvatar: AvatarComponent = ({ address, ensImage, size }) => {
//   console.log(address, ensImage, size);

//   const base64Hash = useNouns('0x17Fc7FBDf8Ab26bAaBFe5f8d0B5179593907F8E4');
//   console.log('---------', base64Hash);

//   return ensImage ? (
//     <img
//       src={ensImage}
//       width={size}
//       height={size}
//       alt={'ENS img'}
//       style={{ borderRadius: 999 }}
//     />
//   ) : (
//     <img src={`data:image/svg+xml;base64,${base64Hash}`} />
//   );
// };

const { chains, provider, webSocketProvider } = configureChains(
  [
    mainnet,
    goerli,
    polygon,
    polygonMumbai,
    ...(process.env.REACT_APP_ENABLE_TESTNETS === 'true' ? [goerli] : []),
  ],
  [publicProvider()],
);

const wagmiClient = createClient({
  provider,
  webSocketProvider,
});

// const { connectors } = getDefaultWallets({
//   appName: 'RainbowKit demo',
//   chains,
// });

// const wagmiClient = createClient({
//   autoConnect: true,
//   connectors,
//   provider,
//   webSocketProvider,
// });

// const Wagmi: FC<{ title: string }> = (props) => {
//   console.log('----------- donate3883');
//   return (
//     <React.StrictMode>
//       <WagmiConfig client={wagmiClient}>
//         {/* <RainbowKitProvider
//           appInfo={{
//             appName: 'Donate3',
//             learnMoreUrl: 'https://donate3.xyz',
//             disclaimer: Disclaimer,
//           }}
//           avatar={CustomAvatar}
//           // theme={myCustomTheme}
//           // theme={midnightTheme({
//           //   // accentColor: "#7b3fe4",
//           //   // ...darkTheme.accentColors.green,
//           //   // accentColorForeground: "white",
//           //   // borderRadius: "small",
//           //   // fontStack: "system",
//           //   // overlayBlur: "small",
//           // })}
//           // theme={{
//           //   lightMode: lightTheme(),
//           //   darkMode: darkTheme(),
//           // }}
//           chains={chains}
//           showRecentTransactions={true}
//         >
//            <div>ufo000</div>
//           <App {...props.config} />
//         </RainbowKitProvider> */}
//         <div>ufo009990{props.title}dafeng</div>
//       </WagmiConfig>
//     </React.StrictMode>
//   );
// };

// const Wagmi: FC<{ title: string }> = (props) => (
//   <WagmiConfig client={wagmiClient}>
//     <h4>
//       {props.title}
//       {'ufo wagmi dafeng'}
//     </h4>
//   </WagmiConfig>
// );

function Wagmi() {
  const { address, isConnected } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  if (isConnected) return <div>Connected to {ensName ?? address}</div>;
  return (
    <button type="button" onClick={() => connect()}>
      Connect Wallet
    </button>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
export default Wagmi;
