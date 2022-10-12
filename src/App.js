// import logo from './logo.svg';
// import './App.css';
import BaseLayout from "./components/BaseLayout";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <BaseLayout />
      </BrowserRouter>
    </div>
  );
}

export default App;
