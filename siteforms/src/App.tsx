import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRouter } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
