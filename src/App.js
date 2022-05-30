import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          ></Route>

          <Route
            path="/checkout"
            element={
              <>
                <Checkout />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
