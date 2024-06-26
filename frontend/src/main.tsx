import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from "@arcana/auth";
import { ProvideAuth } from "@arcana/auth-react";
import { ThemeProvider } from "@mui/material/styles"; 
import theme from './theme';
import App from './App.tsx';
import './index.css';


const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  const provider = new AuthProvider(import.meta.env.VITE_ARCANA_APP_ID)
  root.render(
    <ThemeProvider theme={theme}>
        <ProvideAuth provider={provider}>
          <Router>
            <App />
          </Router>
        </ProvideAuth>
    </ThemeProvider>,
  );
}


