import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './assets/styles/main.css'
import store from './components/Redux/store';
import { AuthProvider } from './Context/authContext';
import { BookProvider } from './Context/bookContext';
import { DarckModeProvider } from './Context/DarckModeContext';
import { LanguageProvider } from './Context/languageContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <LanguageProvider>
      <BrowserRouter>
        <AuthProvider>
          <BookProvider>
            <DarckModeProvider>
              <App />
            </DarckModeProvider>
          </BookProvider>
        </AuthProvider>
      </BrowserRouter>
    </LanguageProvider>
  </Provider>
  // </React.StrictMode>
);