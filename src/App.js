// import logo from './logo.svg';
// import './App.css';
import "./App.module.scss";
import BaseLayout from "./components/baselayout/BaseLayout";
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
