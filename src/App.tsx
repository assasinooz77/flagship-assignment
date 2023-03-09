import { ThemeProvider } from './contexts/theme_context';
import { WalletProvider } from './contexts/wallet_context';
import Home from './pages/home';

const App = () => (
  <ThemeProvider>
    <WalletProvider>
      <Home />
    </WalletProvider>
  </ThemeProvider>
);

export default App;
