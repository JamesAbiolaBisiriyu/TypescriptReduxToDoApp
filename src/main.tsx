import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store'

/**
 * Entry point for the React application.
 * Wraps the App component with Redux Provider and React StrictMode.
 */
createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
)
