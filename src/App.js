import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './pages/Landing';
import './App.css';

function App() {
  return (
    <div className="w-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
