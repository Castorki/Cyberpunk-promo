import './App.css'
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from './store/store'
import { Header } from './components/Header';
import { Main } from './components/pages/Main';
import { Footer } from './components/Footer';


function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <>
              <Header />
              <Main />
              <Footer />
            </>
          }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
