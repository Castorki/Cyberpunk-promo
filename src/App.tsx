import './App.css'
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from './store/store'
import { Header } from './components/Header';
import { Main } from './components/pages/Main';
import { Footer } from './components/Footer';
import { ScrollRestoration } from './components/ScrollRestoration';


function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <ScrollRestoration>
              <>
                <Header />
                <Main />
                <Footer />
              </>
            </ScrollRestoration>
          }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
