import '../styles/global.css';
import Header from '../components/header';
import { AuthProvider } from '../services/AuthProvider';
import RootStore, { StoreContext } from '../store/RootStore';
import { ThemeProvider } from '@material-ui/core';
import { theme } from '../components/theme';

function App({ Component }) {
  return (
    <AuthProvider>
      <StoreContext.Provider value={RootStore}>
        <ThemeProvider theme={theme}>
          <Header />
          <Component />
        </ThemeProvider>
      </StoreContext.Provider>
    </AuthProvider>
  );
}

export default App;
