import { createRoot } from 'react-dom/client'
import './index.css'
import store from './Redux/Store.js'
import { Provider } from 'react-redux'
import { MainProvider } from './contexts/MainContext.jsx' // Changed MainContext to MainProvider
import AppRoutes from './routes/AppRoutes';


createRoot(document.getElementById('root')).render(
  <MainProvider>  
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  </MainProvider> 
)