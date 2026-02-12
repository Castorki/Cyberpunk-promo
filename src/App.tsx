import './App.css'
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from './store/store'
import { Header } from './components/Header';
import { Main } from './components/pages/Main';


function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <>
              <Header />
              <Main />
            </>
          }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
