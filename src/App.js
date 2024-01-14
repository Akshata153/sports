import React from "react";
import "./App.css";
import Header from './Mycomponents/Header'
import Options from "./Mycomponents/Options"
import Schedule from "./Mycomponents/Schedule"
import Registration from "./Mycomponents/Registration";
import Results from "./Mycomponents/Results"
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  const key=1;




  return (
    <div className="App">
      <Header title="KLE Tech"/><hr></hr>
      <Options title="Sports"/><hr/>

      <Routes>
          <Route path="/schedule" element={<Schedule keyprop={key} />} />
        </Routes>

        <Routes>
          <Route path="/result" element={<Results keyprop={key} />} />
        </Routes>

      

        <Routes>
          <Route path="/registration" element={<Registration />} />
        </Routes>
    </div>
  );
}


export default App;
