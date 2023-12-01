import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App.jsx';
import { MenuContextProvider } from './contexts/ContextProvider.jsx';
import {ThemeContextProvider} from './contexts/ThemeContext.jsx';
import { StateContext, StateContextProvider } from "./contexts/StateContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StateContextProvider>
    <ThemeContextProvider>
    <MenuContextProvider>
      <App />
    </MenuContextProvider>
    </ThemeContextProvider>
    </StateContextProvider>
  </React.StrictMode>
);
