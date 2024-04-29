import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // strictmode executes code twice to catch errors
  <StrictMode>
    <App />
  </StrictMode>
);
