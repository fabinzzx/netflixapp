
import './App.css';
import Header from './Component/Header';
import HomePage from './Component/HomePage';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import SignUp from './Component/SignUp';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
