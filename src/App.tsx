// import 'assets/styles/App.scss';
// import 'assets/styles/Reset.css';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigProvider, Layout } from 'antd';
import store from './store/store';
import faIR from '../node_modules/antd/lib/locale/fa_IR'
import HomePage from 'pages/home_page/home_page';
import { QueryClient, QueryClientProvider } from 'react-query';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      enabled: false,
      // staleTime: 2000,
    },
  },
})


function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <ConfigProvider direction="rtl" locale={faIR}>

                  <Routes>
                    <Route path="/" element={<HomePage />} />
                  </Routes>

            </ConfigProvider>
          </BrowserRouter>
          </QueryClientProvider>
    </Provider>
  );
}

export default App;