import { SwapProvider } from './contexts/swap_context';
import { ThemeProvider } from './contexts/theme_context';
import { WalletProvider } from './contexts/wallet_context';
import Home from './pages/home';

const App = () => (
  <ThemeProvider>
    <WalletProvider>
      <SwapProvider>
        <Home />
      </SwapProvider>
    </WalletProvider>
  </ThemeProvider>
);

export default App;
